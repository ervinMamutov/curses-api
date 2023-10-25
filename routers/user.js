import express from 'express';
import userController from '../controllers/userControllers.js';

const router = express.Router();

router.get('/form-sign-up', userController.signUpForm);
router.get('/form-log-in', userController.logInForm);
router.post('/sign-up', userController.signUp);
router.post('/log-in', userController.logIn);
router.get('/log-out', userController.logOut);

export default router;
