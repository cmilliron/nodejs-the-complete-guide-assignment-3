const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootDir = require("./util/rootpath.js");
const Router = require("./routes/routes.js")

// App setup
const PORT = 3000;
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(rootDir, "public"))); 

app.use(Router);

app.listen(PORT, () => console.log(`Node Server listening on ${PORT}`))