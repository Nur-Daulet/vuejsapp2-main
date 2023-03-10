const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
const app = express();  //app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 'https://secure-dawn-84415.herokuapp.com';
app.listen(port);
