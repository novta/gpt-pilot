const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const { User } = require('../models');

const router = express.Router();
const saltRounds = 10;

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const hash = bcrypt.hashSync(password, saltRounds);
  try {
    const user = await User.create({ email, password: hash });
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(400).json({
        message: info ? info.message : 'Login failed',
        user
      });
    }
    req.login(user, { session: false }, (err) => {
      if (err) {
        res.send(err);
      }
      const body = { id: user.id, email: user.email };
      const token = jwt.sign({ user: body }, process.env.JWT_SECRET);
      return res.json({ token });
    });
  })(req, res, next);
});

router.get('/profile', (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    req.user = user;
    next();
  })(req, res, next);
}, (req, res) => {
  res.json({ message: 'Protected route', user: req.user });
});

module.exports = router;
