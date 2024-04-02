const express = require("express");
const router = express.Router();
const priceListController = require("../controller/priceListController")
const authController = require("../controller/authController")


 


router.get("/pricelist/info", priceListController.getAllPriceListInfo, (request, response) => {

  response.json({
    status: "success",
    method: request.method,

  })
});


router.post("/pricelist/info", authController.protect, priceListController.createPriceListInfo, (request, response) => {


  response.json({
    status: "success",
    method: request.method,

  });
})
router.delete("/pricelist/info/:title", authController.protect, priceListController.deletePriceListInfo, (request, response) => {


  response.json({
    status: "success",
    method: request.method,

  });
})

router.put("/pricelist/info/:title",authController.protect, priceListController.updatePriceListInfo, (request, response) => {


  response.json({
    status: "success",
    method: request.method,

  });
})
router.get("/pricelist/package",  priceListController.getAllPriceListPackage, (request, response) => {

  response.json({
    status: "success",
    method: request.method,

  })
});


router.post("/pricelist/package", authController.protect, priceListController.createPriceListPackage, (request, response) => {


  response.json({
    status: "success",
    method: request.method,

  });
})
router.delete("/pricelist/package/:title",authController.protect, priceListController.deletePriceListPackage, (request, response) => {


  response.json({
    status: "success",
    method: request.method,

  });
})

router.put("/pricelist/package/:title", authController.protect, priceListController.updatePriceListPackage, (request, response) => {


  response.json({
    status: "success",
    method: request.method,

  });
})







module.exports = router;