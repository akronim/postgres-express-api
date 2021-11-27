import GenericRepository from './generic.repository';

class UserRepository extends GenericRepository {
  // eslint-disable-next-line no-useless-constructor
  constructor(model) {
    if (!model) {
      throw (new Error('No model provided to UserRepository!'));
    }
    super(model);
  }
}

export default UserRepository;
