const express = require("express");
const router = express.Router();
const priceListController = require("../controller/priceListController")


 


router.get("/pricelist/info", priceListController.getAllPriceListInfo, (request, response) => {

  response.json({
    status: "success",
    method: request.method,

  })
});


router.post("/pricelist/info", priceListController.createPriceListInfo, (request, response) => {


  response.json({
    status: "success",
    method: request.method,

  });
})
router.delete("/pricelist/info/:title", priceListController.deletePriceListInfo, (request, response) => {


  response.json({
    status: "success",
    method: request.method,

  });
})

router.put("/pricelist/info/:title", priceListController.updatePriceListInfo, (request, response) => {


  response.json({
    status: "success",
    method: request.method,

  });
})
router.get("/pricelist/package", priceListController.getAllPriceListPackage, (request, response) => {

  response.json({
    status: "success",
    method: request.method,

  })
});


router.post("/pricelist/package", priceListController.createPriceListPackage, (request, response) => {


  response.json({
    status: "success",
    method: request.method,

  });
})
router.delete("/pricelist/package/:title", priceListController.deletePriceListPackage, (request, response) => {


  response.json({
    status: "success",
    method: request.method,

  });
})

router.put("/pricelist/package/:title", priceListController.updatePriceListPackage, (request, response) => {


  response.json({
    status: "success",
    method: request.method,

  });
})







module.exports = router;