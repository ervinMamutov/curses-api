/* ---------------------------------------- */

// import dependency

import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import express, { json } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';

/* ---------------------------------------- */

// import modules
import userRoutes from './routers/user.js';
import courseRoutes from './routers/course.js';

/* ---------------------------------------- */

// env configuration
dotenv.config();
const PORT = process.env.PORT;

/* ---------------------------------------- */

// construct path
const __filename = fileURLToPath(import.meta.url);
const PATH = dirname(__filename);

/* ---------------------------------------- */

// express initialization
const app = express();

/* ---------------------------------------- */

// body parser
app.use(json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/* ---------------------------------------- */

// set up template engine
app.set('view engine', 'ejs');
app.set('views', path.join(PATH, 'views'));

/* ---------------------------------------- */

// select static folder
app.use(express.static(path.join(PATH, 'public')));

/* ---------------------------------------- */

// use router
app.use(userRoutes);
app.use(courseRoutes);

/* ---------------------------------------- */

// handle 404
app.use('*', (req, res) => {
  res.status(404).render('404', {
    title: 'Page not Found',
    message: `This page don't found`
  });
});

/* ---------------------------------------- */

// port listener
app.listen(PORT, () => {
  console.log(`Server is already running ${PORT}`);
});
