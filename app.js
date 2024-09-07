const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('In the mid3dle2ware!');
   res.send('<h1>Hello fr2om E2xpress!</h1>');
});

app.listen(3000);