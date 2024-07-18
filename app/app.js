const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config()

const app = express();
const port = 3000;

// Replace 'my-mongodb.default.svc.cluster.local' with your MongoDB service name
const mongoURI = `mongodb://${process.env.USER_NAME}:${process.env.USER_PWD}@${process.env.DB_URL}:27017/test?authSource=admin`;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});
