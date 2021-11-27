import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../settings';

/**
   * Hash Password Method
   * @param {string} password
   * @returns {string} returns hashed password
   */
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const hashPassword = password => bcrypt.hashSync(password, salt);

/**
   * comparePassword
   * @param {string} hashPassword
   * @param {string} password
   * @returns {Boolean} return True or False
   */
const comparePassword = (hashedPassword, password) => bcrypt.compareSync(password, hashedPassword);

/**
   * Generate Token
   * @param {string} id
   * @returns {string} token
   */
const generateAccessToken = (user) => {
  const token = jwt.sign({
    email: user.email,
    user_id: user.user_id,
    is_admin: user.is_admin,
    first_name: user.first_name,
    last_name: user.last_name,
  },
  TOKEN_SECRET, { expiresIn: '3d' });
  return token;
};

export {
  hashPassword,
  comparePassword,
  generateAccessToken,
};
