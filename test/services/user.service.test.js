import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import {
  expect, fakerStatic, getUserService, hashPassword
} from '../setup';

chai.use(chaiAsPromised);

describe('UserService', () => {
  let userService;
  before(() => {
    userService = getUserService();
  });

  describe('create', () => {
    it('should create a new user', async () => {
      const user = {
        first_name: 'Tom',
        last_name: 'Larry',
        email: 'tom@larry.com',
        password: 'tom-larry'
      };

      const response = await userService.create(
        {
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          password: user.password
        }
      );

      expect(response.user).to.haveOwnProperty('user_id');
      expect(response.user.first_name).to.equal(user.first_name);
      expect(response.user.last_name).to.equal(user.last_name);
      expect(response.user.email).to.equal(user.email);
      expect(response.user.password).to.equal(hashPassword(user.password));
      expect(response.user.is_admin).to.equal(false);
    });

    it('should NOT create a new user - empty object', async () => {
      await expect(userService.create({})).to.be.rejectedWith('Empty object');
    });

    it('should NOT create a new user - no required values', async () => {
      await expect(userService.create({ first_name: fakerStatic.name.firstName() }))
        .to.be.rejectedWith('Required values not supplied');
    });

    it('should NOT create a new user - no value', async () => {
      await expect(userService.create(
        {
          first_name: '',
          last_name: '',
          email: null,
          password: undefined,
          is_admin: null
        }
      )).to.be.rejectedWith('No value for: first_name, No value for: last_name, No value for: password');
    });

    it('should NOT create a new user - invalid email', async () => {
      await expect(userService.create(
        {
          first_name: fakerStatic.name.firstName(),
          last_name: fakerStatic.name.lastName(),
          email: 'fakeemail.com',
          password: fakerStatic.internet.password(),
        }
      )).to.be.rejectedWith('Invalid email');
    });

    it('should NOT create a new user - user already exists', async () => {
      const user = {
        first_name: 'Bill',
        last_name: 'Rice',
        email: 'bill@rice.com',
        password: 'billy123'
      };

      await userService.create(
        {
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          password: user.password
        }
      );

      await expect(userService.create(
        {
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          password: user.password
        }
      )).to.be.rejectedWith('duplicate key value violates unique constraint "users_email_key"');
    });
  });

  describe('raw query', () => {
    it('should execute a raw query - with params', async () => {
      const query = 'SELECT * FROM users WHERE (first_name LIKE \'%\' || $1)';
      const values = [ 'a' ];

      const res = await userService.executeRawQuery(query, values);

      expect(res.rows).to.not.eq(null);
      expect(res.rows).to.be.an('array');

      res.rows.forEach(x => {
        expect(x.first_name.slice(-1)).to.eq('a');
      });
    });

    it('should execute a raw query - with params 2', async () => {
      const query = `
        SELECT orders.order_id, orders.user_id, orders.total_price, orders_items.item_id, orders_items.quantity, items.name, items.unit_price  
        FROM orders 
        JOIN users USING (user_id) 
        JOIN orders_items USING (order_id) 
        JOIN items USING (item_id)  
        WHERE user_id=$1;`;

      const res = await userService.executeRawQuery(query, [ 12 ]);

      expect(res.rows).to.not.eq(null);
      expect(res.rows).to.be.an('array');
    });

    it('should execute a raw query - without params', async () => {
      const query = 'SELECT * FROM users WHERE first_name LIKE \'%a\'';

      const res = await userService.executeRawQuery(query);

      expect(res.rows).to.not.eq(null);
      expect(res.rows).to.be.an('array');
    });
  });

  describe('sign in a user', () => {
    it('should generate a token', async () => {
      const user = {
        first_name: 'Mark',
        last_name: 'Clyne',
        email: 'mark@clyne.com',
        password: 'clyne123'
      };

      await userService.create(
        {
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          password: user.password
        }
      );

      const res = await userService.signInUser({ email: user.email, password: user.password });

      expect(res).to.not.eq(null);
      expect(res).to.haveOwnProperty('token');
    });
  });

//   describe('getUser', () => {
//     it('should return a user that matches the provided id', async () => {});
//   });
});
