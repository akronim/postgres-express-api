import { buildFilterQuery, buildFindQuery } from '../db/queryHelper';

class GenericRepository {
  constructor(model) {
    if (!model) {
      throw (new Error('No model provided to GenericRepository!'));
    }
    this.model = model;
  }

  async count(options) {
    let totalCount = null;

    let query = null;

    if (options) {
      query = buildFilterQuery(options);
    }

    if (query) {
      totalCount = await this.model.select(' COUNT(*) as total_records ', query);
    } else {
      totalCount = await this.model.select('COUNT(*) as total_records ');
    }

    totalCount.rows[0].total_records = Number(totalCount.rows[0].total_records);

    return totalCount.rows.shift();
  }

  async find(options) {
    let data = null;

    let query = null;

    if (options) {
      query = buildFindQuery(options);
    }

    if (query) {
      data = await this.model.select('*', query);
    } else {
      data = await this.model.select('*');
    }

    const totalRecords = await this.count(options);

    const records = data.rows;

    data = { totalRecords, records };

    return data;
  }

  async findById(idValue, idColumn) {
    const data = await this.model.select(
      '*',
      ` WHERE ${idColumn} = $1 `,
      [ parseInt(idValue, 10) ]
    );

    return data.rows[0];
  }

  async create(entity) {
    let columns = [];

    let placeholders = [];

    const values = [];

    Object.entries(entity).forEach(([ key, value ], index) => {
      columns.push(key);
      placeholders.push(` $${index + 1} `);
      values.push(value);
    });

    columns = columns.join();
    placeholders = placeholders.join();

    const data = await this.model.insertWithReturn(columns, placeholders, values);

    return data.rows;
  }

  async updateById(idValue, idColumn, entity) {
    const recordToUpdate = this.findById(idValue, idColumn);

    if (!recordToUpdate) {
      return null;
    }

    let placeholders = [];

    const values = [];

    Object.entries(entity).forEach(([ key, value ], index) => {
      placeholders.push(` ${key}=$${index + 1} `);
      values.push(value);
    });

    placeholders = placeholders.join();
    values.push(parseInt(idValue, 10));

    const idIndex = values.length;

    const data = await this.model.updateById(
      placeholders,
      ` ${idColumn}=$${idIndex} `,
      values
    );

    return data.rows[0];
  }

  async deleteById(idValue, idColumn) {
    const recordToDelete = this.findById(idValue, idColumn);

    if (!recordToDelete) {
      return null;
    }

    const data = await this.model.deleteById(
      ` ${idColumn}=$1 `,
      [ parseInt(idValue, 10) ],
      idColumn
    );

    return { deletedId: data.rows[0][idColumn] };
  }

  async executeRawQuery(query, values) {
    return this.model.query(query, values);
  }
}

export default GenericRepository;
