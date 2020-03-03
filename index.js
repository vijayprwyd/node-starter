 /* 
 ~ : accepts only patch releases , ^ accepts inor releases => package.json, *: Accepts major releases
 scripts: {start: nodemon index.js} => npm start
 */

TODO:

var server = require('./server/server');

//slug - part of a URL which identifies a particular page on a website in a form readable by users
var slugify = require('slugify');

console.log(slugify('Fresh Avocadoes', {lower: true}));
//console.log(server);
server();


//Slug : Meaningful string instead of a number