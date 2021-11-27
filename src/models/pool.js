import { Pool } from 'pg';
import dotenv from 'dotenv';
import { DBCS, TEST_DBCS } from '../settings';

dotenv.config();

const connectionString = process.env.NODE_ENV === 'test' ? TEST_DBCS : DBCS;

export const pool = new Pool({ connectionString });
