// Imports
const express = require('express');

// Constants
const app = express();
const port = process.env.port || 8000;

// Config
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});

 