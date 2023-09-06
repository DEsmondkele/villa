const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const {connect} = require('mongoose');
const { graphqlHTTP } = require('express-graphql'); // Import express-graphql

const app = express();

// Connect to your MongoDB database here
connect('mongodb://localhost:27017/villas', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ... other middleware setup

// GraphQL setup
const schema = require('./graphql/schema'); // Import your GraphQL schema
app.use(
    '/api/v1/villa',
    graphqlHTTP({
      schema,
      graphiql: true, // Enable the GraphQL interface for testing
    })
);

// ... other routes and error handling

// view engine setup
app.set('view engine', 'pug');

app.set('views', path.join(__dirname, '../views'));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
