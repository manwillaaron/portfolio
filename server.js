const express = require('express')
const server = express()
const path = require('path');

server.use( express.static( `${__dirname}/./build`));

server.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, './build/index.html'));
});

server.listen(3333, ()=> console.log('server is listening on 3000'))