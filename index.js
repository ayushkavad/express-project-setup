require('dotenv').config();

if (process.env.NODE_ENV === 'production') {
  console.log(process.env.NODE_ENV);
  require('./dist');
} else {
  require('nodemon')({ script: 'dev.js' });
}
