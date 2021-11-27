import { pool } from '../models/pool';
import {
  createUsersTableQuery,
  dropUsersTableQuery,
  seedUsersTableQuery,
} from './queries/userQueries';
import {
  createItemsTableQuery,
  seedItemsTableQuery,
  dropItemsTableQuery
} from './queries/itemQueries';
import
{
  createOrdersTableQuery,
  seedOrdersTableQuery,
  dropOrdersTableQuery
} from './queries/orderQueries';
import {
  createOrdersItemsTableQuery,
  seedOrdersItemsTableQuery,
  dropOrdersItemsTableQuery
} from './queries/orderItemQueries';
import { enableUuidOsspQuery, dropUuidOsspQuery } from './queries/extensionQueries';

export const executeQueryArray = async (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    try {
      // eslint-disable-next-line no-await-in-loop
      await pool.query(arr[i]);
    } catch (err) {
      console.log(`>>>>>>>>>> ${JSON.stringify(err.message)}`);
      console.log(`>>>>>>>>>> ${JSON.stringify(err.detail)}`);
      console.log(`>>>>>>>>>> ${JSON.stringify(err.line)}`);
      console.log(`>>>>>>>>>> ${JSON.stringify(err.stack)}`);
    }
  }
};

export const dropTables = async () => {
  await executeQueryArray(
    [ dropOrdersItemsTableQuery, dropOrdersTableQuery, dropUsersTableQuery, dropItemsTableQuery ]
  );
};

export const dropExtensions = async () => {
  await executeQueryArray([ dropUuidOsspQuery ]);
};

export const installExtensions = async () => {
  await executeQueryArray([ enableUuidOsspQuery ]);
};

export const createTables = async () => {
  await executeQueryArray(
    [ createUsersTableQuery, createItemsTableQuery,
      createOrdersTableQuery, createOrdersItemsTableQuery ]
  );
};

export const insertIntoTables = async () => {
  await executeQueryArray(
    [ seedUsersTableQuery, seedItemsTableQuery, seedOrdersTableQuery, seedOrdersItemsTableQuery ]
  );
};
