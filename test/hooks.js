import {
  dropTables,
  dropExtensions,
  createTables,
  insertIntoTables,
  installExtensions
} from '../src/db/queryFunctions';

before(async () => {
  if (process.env.NODE_ENV === 'test') {
    await dropTables();
    await dropExtensions();
    await installExtensions();
    await createTables();
    await insertIntoTables();
  }
});

// after(async () => {
//   if (process.env.NODE_ENV === 'test') {
//     await dropTables();
//   }
// });
