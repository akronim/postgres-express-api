import Model from './models/model';
import UserRepository from './repositories/user.repository';
import UserService from './services/user.service';

const userModel = new Model('users');
export const userRepository = new UserRepository(userModel);
export const userService = new UserService(userRepository);

export const getUserRepository = () => new UserRepository(new Model('users'));
export const getUserService = () => new UserService(new UserRepository(new Model('users')));
