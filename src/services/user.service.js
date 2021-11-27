/* eslint-disable class-methods-use-this */
import {
  isEmpty, isValidEmail, validatePassword
} from '../utils/validations';

import {
  hashPassword, comparePassword, generateAccessToken
} from '../utils/auth';

class UserService {
  constructor(userRepository) {
    if (!userRepository) {
      throw (new Error('No userRepository provided to UserService!'));
    }
    this.userRepository = userRepository;
  }

  async count(options) {
    return this.userRepository.count(options);
  }

  async find(options) {
    return this.userRepository.find(options);
  }

  async findUsersOrdesDetails(idValue) {
    const query = `
    SELECT orders.order_id, orders.total_price, orders_items.item_id, orders_items.quantity, items.name, items.unit_price  
    FROM orders 
    JOIN users USING (user_id) 
    JOIN orders_items USING (order_id) 
    JOIN items USING (item_id)  
    WHERE user_id=$1;`;

    const data = await this.userRepository.executeRawQuery(query, [ idValue ]);

    const ordersItems = [];

    for (let i = 0; i < data.rows.length; i += 1) {
      const order = data.rows[i];

      const o = ordersItems.find(x => x.order_id === order.order_id);

      if (!o) {
        ordersItems.push({
          order_id: order.order_id,
          total_price: order.total_price,
          items: [
            {
              item_id: order.item_id,
              quantity: order.quantity,
              name: order.name,
              unit_price: order.unit_price
            }
          ]
        });
      } else {
        o.items.push({
          item_id: order.item_id,
          quantity: order.quantity,
          name: order.name,
          unit_price: order.unit_price
        });
      }
    }

    return { user_orders_items: ordersItems };
  }

  async findById(idValue, idColumn) {
    return this.userRepository.findById(idValue, idColumn);
  }

  validateCreate(user) {
    const {
      email, password,
    } = user;

    const messages = [];

    if (!user) {
      messages.push('No object is provided');
      this.throwValidationError(messages);
    }

    if (Object.keys(user).length === 0) {
      messages.push('Empty object');
      this.throwValidationError(messages);
    }

    const required1 = [ 'email', 'password', 'first_name', 'last_name' ];
    const required2 = Object.keys(user).filter((key) => required1.includes(key));

    if (required1.length !== required2.length) {
      messages.push('Required values not supplied');
      this.throwValidationError(messages);
    }

    Object.entries(user).forEach(([ key, value ]) => {
      if (isEmpty(value)) {
        messages.push(`No value for: ${key}`);
      }
    });

    this.throwValidationError(messages);

    if (!isValidEmail(email)) {
      messages.push('Invalid email');
    }

    if (!validatePassword(password)) {
      messages.push('Invalid password');
    }

    this.throwValidationError(messages);
  }

  throwValidationError(messages) {
    if (messages.length) {
      const error = new Error(messages.join(', '));
      error.statusCode = 400;

      throw error;
    }
  }

  async create(user) {
    this.validateCreate(user);

    user.password = hashPassword(user.password);

    const createdUser = (await this.userRepository.create(user))[0];

    return { user: createdUser };
  }

  async updateById(idValue, idColumn, entity) {
    return this.userRepository.updateById(idValue, idColumn, entity);
  }

  async deleteById(idValue, idColumn) {
    return this.userRepository.deleteById(idValue, idColumn);
  }

  async executeRawQuery(query, values) {
    return this.userRepository.executeRawQuery(query, values);
  }

  async signInUser(options) {
    let token = null;

    const { email, password } = options;

    if (isEmpty(email) || isEmpty(password)) {
      this.throwValidationError([ 'Invalid email and/or password' ]);
    }

    const query = 'SELECT * FROM users WHERE email=$1';

    const response = await this.userRepository.executeRawQuery(query, [ email ]);

    const user = response.rows[0];

    if (!user) {
      this.throwValidationError([ 'Invalid email and/or password' ]);
    }

    if (user) {
      if (!comparePassword(user.password, password)) {
        this.throwValidationError([ 'Invalid email and/or password' ]);
      }

      token = generateAccessToken(user);
    }

    return { token };
  }
}

export default UserService;
