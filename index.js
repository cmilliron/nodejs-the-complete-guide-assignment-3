const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootDir = require("./util/rootpath.js");


// App setup
const PORT = 3000;
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(rootDir, "public"))); 

app.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "home.html"))
}); 

app.get('/users', (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "users.html"))
})

app.listen(PORT, () => console.log(`Node Server listening on ${PORT}`))