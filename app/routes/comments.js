'use strict';

var comments = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 5, author: "Zhigang Zheng", text: "Run this code."}
];

module.exports = {
  comment_response: function(request, response){
    response.set('Access-Control-Allow-Origin', '*');
    response.send(JSON.stringify(comments, null, 3));
    // console.log(JSON.stringify(comments, null, ' '));
  },
  save_comments: function(req, res){
      // prepare output in JSON format
      var id = Date.now();
      var response = {
        id: id,
        author: req.body.author,
        text: req.body.text
      };
      comments.push(response);
      console.log(JSON.stringify(comments, null, ' '));
      res.set('Access-Control-Allow-Origin', '*');
      res.send(JSON.stringify(comments));
  }
};
