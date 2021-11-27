import {
  dropTables, dropExtensions, installExtensions, createTables, insertIntoTables
} from './queryFunctions';

(async () => {
  await dropTables();
  await dropExtensions();
  await installExtensions();
  await createTables();
  await insertIntoTables();
})();
