const bcrypt = require('bcrypt');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const { Strategy: LocalStrategy } = require('passport-local');
const { User } = require('../models');
const dotenv = require('dotenv');

dotenv.config();

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET // INPUT_REQUIRED {Add your JWT secret here}
};

const jwtStrategy = new JwtStrategy(options, async (jwt_payload, done) => {
  try {
    const user = await User.findByPk(jwt_payload.id);
    if (user) {
      return done(null, user);
    }
    return done(null, false);
  } catch (error) {
    console.log(error);
    return done(error, false);
  }
});

const localStrategy = new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  async (email, password, done) => {
    try {
      const user = await User.findOne({ where: { email } });
      if (!user || !bcrypt.compareSync(password, user.password)) {
        return done(null, false, { message: 'Invalid credentials' });
      }
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
);

module.exports = (passport) => {
  passport.use(jwtStrategy);
  passport.use(localStrategy);
};
