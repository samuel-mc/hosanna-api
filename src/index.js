const express = require('express');
const app = express();
require('./db/db.connection');
const cors = require('cors');

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen (process.env.PORT || 3030, () => {
    console.log('Server is running');
})

app.use('/api/v1', require('./routes/index.routes'));