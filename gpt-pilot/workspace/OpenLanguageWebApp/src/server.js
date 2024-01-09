const express = require('express');
const passport = require('passport');
require('./middleware/passport')(passport);
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');
const router = require('./routes/authRoutes');

const app = express();

app.use(cors())
const port = process.env.PORT || 3000;

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Passport middleware
app.use(passport.initialize());
app.use(router);

// Routes
app.use('/api/auth', authRoutes); // Use the auth routes

app.get('/ping', (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
