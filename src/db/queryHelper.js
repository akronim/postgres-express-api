export const buildCondition = ({
  column,
  columnDataType,
  operation,
  filterValue,
}) => {
  let value = filterValue;

  let op = null;

  let condition = null;

  const booleanOperations = {
    equals: ` = '${value}' `,
  };

  const numbersOperations = {
    equals: ` = '${value}' `,
    greater: ` > '${value}' `,
    less: ` < '${value}' `,
    greaterOrEqual: ` >= '${value}' `,
    lessOrEqual: ` <= '${value}' `,
  };

  const datesOperations = {
    equals: ` = '${value}'::date `,
    greater: ` > '${value}'::date `,
    less: ` < '${value}'::date `,
    greaterOrEqual: ` >= '${value}'::date `,
    lessOrEqual: ` <= '${value}'::date `,
  };

  const textOperations = {
    contains: ` LIKE '%${value}%' `,
    startsWith: ` LIKE '${value}%' `,
    endsWith: ` LIKE '%${value}' `,
    equals: ` = '${value}' `,
  };

  if (columnDataType === 'text') {
    value = filterValue.trim().toLowerCase();
    op = textOperations[operation];

    if (op) {
      condition = ` LOWER(${column}) ${op} `;
    }
  }

  if (columnDataType === 'date') {
    op = datesOperations[operation];

    if (op) {
      condition = ` (${column}) ${op} `;
    }
  }

  if (columnDataType === 'number') {
    op = numbersOperations[operation];

    if (op) {
      condition = ` (${column}) ${op} `;
    }
  }

  if (columnDataType === 'boolean') {
    op = booleanOperations[operation];

    if (op) {
      condition = ` (${column}) ${op} `;
    }
  }

  return condition;
};

export const buildFilterQuery = (options) => {
  let filterQuery = null;

  if (options.where) {
    const conditions = [];

    options.where.forEach((filter) => {
      const condition = buildCondition(filter);
      if (condition) {
        conditions.push(condition);
      }
    });

    if (conditions.length > 0) {
      filterQuery = ` WHERE ${conditions.join(' AND ')}`;
    }
  }

  return filterQuery;
};

export const buildSortQuery = (options) => {
  let sortQuery = null;

  if (options.sort) {
    const { column, direction } = options.sort;

    sortQuery = ` ORDER BY ${column} ${direction} `;
  }

  return sortQuery;
};

const getOffset = (currentPage = 1, listPerPage) => (currentPage - 1) * [ listPerPage ];

export const buildPaginationQuery = (options) => {
  let paginationQuery = null;

  if (options.pagination) {
    const { page, perPage } = options.pagination;

    const offset = getOffset(page, perPage);

    paginationQuery = ` OFFSET ${offset} LIMIT ${perPage} `;
  }

  return paginationQuery;
};

export const buildFindQuery = (options) => {
  let query = null;

  if (options) {
    const filterQuery = buildFilterQuery(options);
    const sortQuery = buildSortQuery(options);
    const paginationQuery = buildPaginationQuery(options);

    if (filterQuery) {
      query = filterQuery;
    }

    if (sortQuery) {
      query = query ? ` ${query} ${sortQuery} ` : sortQuery;
    }

    if (paginationQuery) {
      query = query ? ` ${query} ${paginationQuery} ` : paginationQuery;
    }
  }
  return query;
};
