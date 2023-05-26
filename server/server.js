const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const aboutUsRouter = require("./Api/AboutUsApi")
const pricelistRouter = require("./Api/PriceListApi")
const homeRouter = require("./Api/HomeApi")
const cookieParser = require("cookie-parser");
const path = require('path')

const mongoose = require("mongoose")


dotenv.config({ path: '../config.env' });
const app = express();




mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/rkcode', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use(cookieParser());

// app.use(express.static(path.join(__dirname, './build')))
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, './build'))
// })


app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use(aboutUsRouter);
app.use(pricelistRouter);
app.use(homeRouter);


const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`server is listening to port ${port}`)
});
