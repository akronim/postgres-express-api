import { pool } from './pool';

class Model {
  constructor(table) {
    this.pool = pool;
    this.table = table;
    this.pool.on(
      'error',
      (err, client) => `Error, ${err}, on idle client${client}`
    );
  }

  async select(columns, clause, filterArgs) {
    let query = `SELECT ${columns} FROM ${this.table} `;

    if (clause && filterArgs) {
      query += clause;

      return this.pool.query(query, filterArgs);
    }

    if (clause && !filterArgs) {
      query += clause;
    }

    return this.pool.query(query);
  }

  async insertWithReturn(columns, placeholders, values) {
    const query = `
          INSERT INTO ${this.table} (${columns})
          VALUES (${placeholders})
          RETURNING *
      `;
    return this.pool.query(query, values);
  }

  async updateById(placeholders, where, values) {
    const query = `UPDATE ${this.table} SET ${placeholders} WHERE ${where} returning *`;
    return this.pool.query(query, values);
  }

  async deleteById(where, values, idColumn) {
    const query = `DELETE FROM ${this.table} WHERE ${where} returning ${idColumn}`;
    return this.pool.query(query, values);
  }

  /**
   * DB Query
   * @param {object} query
   * @param {array} params
   * @returns {object} object
   */
  query(query, params) {
    return new Promise((resolve, reject) => {
      this.pool.query(query, params)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

export default Model;
