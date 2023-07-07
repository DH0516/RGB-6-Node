const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Server is On. Port 3000');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send('Hello World');
});

