const express = require('express');
const app = express();
const port = process.env.port || 8000;

app.get('/', (req, res) => {
    res.send('rosen chat');
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});