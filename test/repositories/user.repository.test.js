import { expect, fakerStatic, sinon } from '../setup';
import { userRepository } from '../../src/dependency';

describe('UserRepository', () => {
  const stubValue = {
    user_id: fakerStatic.datatype.number(),
    first_name: fakerStatic.name.firstName(),
    last_name: fakerStatic.name.lastName(),
    email: fakerStatic.internet.email(),
    password: fakerStatic.internet.password(),
    is_admin: fakerStatic.datatype.boolean(),
    createdAt: fakerStatic.date.past(),
  };

  describe('create', () => {
    it('should add a new user to the db', async () => {
      const stub = sinon.stub(userRepository, 'create').returns([ stubValue ]);
      const users = await userRepository.create(
        {
          first_name: stubValue.first_name,
          last_name: stubValue.last_name,
          email: stubValue.email,
          password: stubValue.password,
          is_admin: stubValue.is_admin
        }
      );
      expect(stub.calledOnce).to.eq(true);
      expect(users[0].user_id).to.equal(stubValue.user_id);
      expect(users[0].first_name).to.equal(stubValue.first_name);
      expect(users[0].email).to.equal(stubValue.email);
      expect(users[0].createdAt).to.equal(stubValue.createdAt);
    });
  });
});
