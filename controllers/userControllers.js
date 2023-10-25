// import dependency
import bcrypt from 'bcryptjs';
import jwc from 'jsonwebtoken';

/* ---------------------------------------- */

// import modules

import User from '../models/user.js';
import validateEmail from '../utils/validateEmail.js';
import validatePassword from '../utils/validatePassword.js';
import matchPasswords from '../utils/matchPasswords.js';
import hashingPassword from '../utils/hashedPassword.js';

/* ---------------------------------------- */

const userController = {
  signUpForm: (req, res) => {
    res.status(200).render('form', {
      title: 'Sign up form',
      action: '/sign-up',
      button: 'Sign up'
    });
  },
  signUp: (req, res) => {
    const userInfo = req.body;
    const emailExist = User.getUserByEmail(userInfo);

    // validate
    if (!emailExist) {
      const isValidEmail = validateEmail(userInfo.email);
      const isValidPassword = validatePassword(userInfo.password);
      const isMatchPasswords = matchPasswords(userInfo);
      if (isValidEmail && isValidPassword && isMatchPasswords) {
        const passwordHashed = hashingPassword(userInfo.password);
        userInfo.password = passwordHashed;
        const newUser = new User(userInfo);
        newUser.addUser();
        res.status(309).redirect('/');
      } else {
        res.status(400).render('message', {
          title: 'Incorrect data',
          message: 'You input incorrect data.',
          message2: 'Try again',
          action: '/form-sign-up'
        });
      }
    } else {
      res.status(400).render('message', {
        title: 'The Email exist',
        message: 'The email already exists'
      });
    }
  },
  logInForm: (req, res) => {
    res.status(200).render('form', {
      title: 'Log in form',
      action: '/log-in',
      button: 'Log in'
    });
  },
  logIn: (req, res) => {
    const userInfo = req.body;
    const emailExist = User.getUserByEmail(userInfo);

    if (emailExist) {
      bcrypt.compare(userInfo.password, emailExist.password, (err, isValid) => {
        if (isValid) {
          const token = jwc.sign(
            { user: emailExist.id },
            process.env.TOKEN_SECRET_KEY
          );
          res.cookie('token', token, { httpOnly: true });
          res.status(302).redirect('/');
        } else {
          res.status(401).render('message', {
            title: 'The user not found',
            message: 'This user is not registered',
            message2: 'Try again',
            action: '/form-log-in'
          });
        }
      });
    } else {
      res.status(401).render('message', {
        title: 'The user not found',
        message: 'This user is not registered',
        message2: 'Try again',
        action: '/form-log-in'
      });
    }
  },
  logOut: (req, res) => {
    res.clearCookie('token');
    res.status(201).redirect('/');
  }
};

export default userController;
