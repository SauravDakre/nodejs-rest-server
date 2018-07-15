const osprey = require('osprey');
const express = require('express');
const join = require('path').join;
const app = express();

const path = join(__dirname, 'assets', 'api.raml');

osprey.loadFile(path)
    .then((middleware) => {
        app.use(middleware);
        
        app.get('/songs', (req, res) => {
            res.send('Songs resource');
        });
        
        app.listen(3000, () => {
            console.log('server started at port 3000...');
        });
    })
    .catch((error) => {
        console.error("Error :", error);
    })
