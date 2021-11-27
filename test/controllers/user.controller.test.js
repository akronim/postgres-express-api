import {
  expect, server, BASE_URL, hashPassword, getUserService
} from '../setup';

describe('UserController', () => {
  it('GET: count', async () => {
    const userService = getUserService();

    await userService.create(
      {
        first_name: 'Ed',
        last_name: 'Kelly',
        email: 'ed@kelly.com',
        password: 'eddy123'
      }
    );

    const { token } = await userService.signInUser({
      email: 'ed@kelly.com',
      password: 'eddy123'
    });

    const res = await server.get(`${BASE_URL}/users/count`)
      .set('authorization', `Bearer ${token}`);

    expect(res.status).to.equal(200);
    expect(res.body.total_records).to.satisfy(x => typeof x === 'number');
    expect(res.body.total_records).to.be.greaterThan(50);
  });

  it('GET: find', (done) => {
    server
      .get(`${BASE_URL}/users`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.users).to.be.instanceOf(Array);
        res.body.users.forEach((m) => {
          expect(m).to.have.property('email');
          expect(m).to.have.property('first_name');
        });
        done();
      });
  });

  it('GET: find + filtering', (done) => {
    const data = {
      dataRequestOptions: {
        where: [
          {
            column: 'is_admin',
            columnDataType: 'boolean',
            operation: 'equals',
            filterValue: true
          },
          {
            column: 'email',
            columnDataType: 'text',
            operation: 'endsWith',
            filterValue: 'm'
          },
          {
            column: 'created_at',
            columnDataType: 'date',
            operation: 'greater',
            filterValue: '2010-01-01'
          }
        ],
      }
    };
    server
      .get(`${BASE_URL}/users`)
      .send(data)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.users).to.be.instanceOf(Array);
        res.body.users.forEach((m) => {
          expect(m).to.have.property('user_id');
          expect(m).to.have.property('email');
          expect(m).to.have.property('password');
        });
        done();
      });
  });

  it('GET: find + filtering + sorting', (done) => {
    const data = {
      dataRequestOptions: {
        where: [
          {
            column: 'created_at',
            columnDataType: 'date',
            operation: 'greater',
            filterValue: '2010-01-01'
          }
        ],
        sort: {
          column: 'email',
          direction: 'desc'
        }
      }
    };
    server
      .get(`${BASE_URL}/users`)
      .send(data)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.users).to.be.instanceOf(Array);
        res.body.users.forEach((m) => {
          expect(m).to.have.property('user_id');
          expect(m).to.have.property('email');
          expect(m).to.have.property('password');
        });
        done();
      });
  });

  it('GET: find + filtering + sorting + pagination', (done) => {
    const data = {
      dataRequestOptions: {
        where: [
          {
            column: 'created_at',
            columnDataType: 'date',
            operation: 'greater',
            filterValue: '2010-01-01'
          }
        ],
        sort: {
          column: 'email',
          direction: 'desc'
        },
        pagination: {
          page: 2,
          perPage: 10
        }
      }
    };
    server
      .get(`${BASE_URL}/users`)
      .send(data)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.users).to.be.instanceOf(Array);
        expect(res.body.users).to.have.length(10);
        res.body.users.forEach((m) => {
          expect(m).to.have.property('user_id');
          expect(m).to.have.property('email');
          expect(m).to.have.property('password');
        });
        done();
      });
  });

  it('GET: find + pagination', (done) => {
    const data = {
      dataRequestOptions: {
        pagination: {
          page: 3,
          perPage: 10
        }
      }
    };
    server
      .get(`${BASE_URL}/users`)
      .send(data)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.users).to.be.instanceOf(Array);
        expect(res.body.users).to.have.length(10);
        res.body.users.forEach((m) => {
          expect(m).to.have.property('user_id').that.is.within(21, 31);
          expect(m).to.have.property('email');
          expect(m).to.have.property('password');
        });
        done();
      });
  });

  it('GET: findById', (done) => {
    server
      .get(`${BASE_URL}/users/43`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.user).to.be.instanceOf(Object);
        expect(res.body.user).to.have.property('user_id');
        done();
      });
  });

  it('POST: create', (done) => {
    const data = {
      email: 'john@email.com',
      first_name: 'John',
      last_name: 'Doe',
      password: 'johndoe123',
      is_admin: false,
    };
    server
      .post(`${BASE_URL}/users`)
      .send(data)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);

        const { user } = res.body;

        expect(user).to.be.instanceOf(Object);
        expect(user).to.have.property('user_id');
        expect(user).to.have.property('email', data.email);
        expect(user).to.have.property('password', hashPassword(data.password));
        done();
      });
  });

  it('PATCH: updateById', (done) => {
    const data = {
      email: 'updated@user.com',
      first_name: 'Updated First Name',
      last_name: 'Updated Last Name',
      password: 'updatedpa$$',
      is_admin: false,
    };
    server
      .patch(`${BASE_URL}/users/1`)
      .send(data)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.user).to.be.instanceOf(Object);
        expect(res.body.user).to.have.property('user_id');
        expect(res.body.user).to.have.property('email', data.email);
        done();
      });
  });

  it('DELETE: deleteById', (done) => {
    const userId = 1;
    server
      .delete(`${BASE_URL}/users/${userId}`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.deletedId).to.satisfy(x => typeof x === 'number');
        expect(res.body.deletedId).to.be.eq(userId);
        done();
      });
  });

  it('POST: login', (done) => {
    const user = {
      first_name: 'Alex',
      last_name: 'Whiteside',
      email: 'alex@whiteside.com',
      password: 'alex123'
    };

    getUserService().create(
      {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        password: user.password
      }
    ).then(() => {
      const data = {
        email: 'alex@whiteside.com',
        password: 'alex123'
      };
      server
        .post(`${BASE_URL}/users/login`)
        .send(data)
        .expect(200)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.have.property('token');
          expect(res.body.token).length.greaterThan(100);
          done();
        });
    });
  });
});
