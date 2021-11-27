import express from 'express';
import { indexPage } from '../controllers';

const homeRouter = express.Router();

homeRouter.get('/', indexPage);

export {
  homeRouter
};
