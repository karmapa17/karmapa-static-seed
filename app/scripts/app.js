if ('production' !== process.env.NODE_ENV) {
  require('./../markup/bootstrap-example.html');
}

const $ = require('jquery');

console.log('Getting ready...');

$(function() {
  console.log('Ready!');
});