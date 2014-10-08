function gtoa(og, sg) {
  if (!og || !sg) {
    throw new Error('Givem me values plz');
  }
  return (og - sg) * 131;
}

var express = require('express');
var app = express();

app.get('/gtoa/:og/:sg', function(req, res) {
  res.status(200).end(gtoa(req.params.og, req.params.sg).toString());
});
app.listen(9008);

module.exports = app;

