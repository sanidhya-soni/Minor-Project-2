require("dotenv").config();
const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api', userRoutes);

PORT=process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});