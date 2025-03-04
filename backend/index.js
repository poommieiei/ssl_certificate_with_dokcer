const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/data', (req, res) => {
    res.send('Hi, this is data from the Back End Server!');
});

app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`);
});