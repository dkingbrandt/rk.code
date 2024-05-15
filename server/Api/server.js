const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const aboutUsRouter = require("./AboutUsApi");
const pricelistRouter = require("./PriceListApi");
const homeRouter = require("./HomeApi");
const routerSignUp = require("./SignUpAPI"); 
const cookieParser = require("cookie-parser");
const path = require('path')

const mongoose = require("mongoose")


dotenv.config({ path: './config.env' });
const app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});



mongoose.connect('mongodb+srv://dkingbrandt:ZV0i64gAB5NrEIba@cluster0.uhysadz.mongodb.net/rkcode', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use(cookieParser());

// app.use(express.static(path.join(__dirname, './build')))
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, './build'))
// })
const handleStaticFiles = express.static(
  path.join(__dirname, "..", "client", "build")
);

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use(handleStaticFiles);
app.use(aboutUsRouter);
app.use(pricelistRouter);
app.use(homeRouter);
app.use(routerSignUp);



const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`server is listening to port ${port}`)
});
