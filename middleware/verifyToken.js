import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, data) => {
      if (err) {
        res.status(403).render('message', {
          title: 'Ops',
          message: 'Please login',
          message2: 'Try again',
          action: '/form-log-in'
        });
      }
      req.body.user = data;
      next();
    });
  } else {
    res.status(302).redirect('/form-log-in');
  }
};

export default verifyToken;
