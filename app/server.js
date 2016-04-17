'use strict';
var fs = require('fs');
var express = require('express');
var comments = require('./routes/comments');
var save_comments = require('./routes/save_comments')
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var app = express();

app.get('/comments.json', comments.comment_response);
app.post('/save_comments',  urlencodedParser, comments.save_comments);

app.listen(8084);
console.log('Server is running at localhost:8084');
