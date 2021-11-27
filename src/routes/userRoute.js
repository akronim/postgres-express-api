import express from 'express';
import { userController } from '../controllers';
import { authenticateJWT } from '../middlewares';

const router = express.Router();

router.get('/users/count', authenticateJWT, userController.countUsers);
router.get('/users', userController.findUsers);
router.get('/users/:userId', userController.findUserById);
router.get('/users/:userId/orders-items', userController.findUsersOrdesDetails);
router.post('/users', userController.createUser);
router.patch('/users/:userId', userController.updateUserById);
router.delete('/users/:userId', userController.deleteUserById);

router.post('/users/login', userController.signInUser);

export {
  router as userRouter
};
