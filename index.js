const express = require('express');
const template = require('./template');
const app = express();
const port = 3000;

app.get('/',template);

app.use('/assets',express.static('assets'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
