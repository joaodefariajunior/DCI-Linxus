const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

//Use Middleware
app.use(express.json());
app.use(cors());
dotenv.config();

//Import Routes
const authRoute = require('./routes/auth');
const referenceRoute = require('./routes/references');
const usersRoute = require('./routes/users');

//Connect to DB
const envconfig = require('./config/config');
mongoose.connect(process.env.mongoURI,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    () => console.log('Connected to DB !')
);

//Set Routes
app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/references', referenceRoute);

//App port
const port = envconfig.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port}`));