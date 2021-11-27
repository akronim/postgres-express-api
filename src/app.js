import logger from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import cors from 'cors';
import createError from 'http-errors';
import { homeRouter, userRouter } from './routes';
import { corsOptions } from './utils/corsOptions';

const app = express();

if (process.env.NODE_ENV !== 'test') {
  app.use(logger('dev'));
}

app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/api/v1', [ homeRouter, userRouter ]);

// catch 404 and forward to error handler
// eslint-disable-next-line no-unused-vars
app.use((req, res, next) => {
  next(createError(404, '404'));
});

// error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(400).json({ error: err.message });
});

export default app;
