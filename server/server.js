const path = require('path');
const pathRenamed = require('path');
const express = require('express');
const app = express();
const publicPath = pathRenamed.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(pathRenamed.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log('server is up');
});