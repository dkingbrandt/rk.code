const express = require("express");
const router = express.Router();
const aboutUsController = require("../controller/aboutUsController")
const authController = require("../controller/authController")

  
 

router.get("/aboutus/history", aboutUsController.getAllAboutHistory, (request, response) => {

  response.json({
    status: "success",
    method: request.method,

  })
});


router.post("/aboutus/history",authController.protect, aboutUsController.createAboutHistory, (request, response) => {


  response.json({
    status: "success",
    method: request.method,

  });
})

router.put("/aboutus/history/:title",authController.protect, aboutUsController.updateAboutHistory, (request, response) => {


  response.json({
    status: "success",
    method: request.method,

  });
})

router.delete("/aboutus/history/:title",authController.protect, aboutUsController.deleteAboutHistory, (request, response) => {


  response.json({
    status: "success",
    method: request.method,

  });
})

router.put("/aboutus/team/:title",authController.protect, aboutUsController.updateAboutTeam, (request, response) => {
  

  response.json({
    status: "success",
    method: request.method,
    
  });
})
router.get("/aboutus/team", aboutUsController.getAllAboutTeam, (request, response) => {

  response.json({
    status: "success",
    method: request.method,

  })
});


router.post("/aboutus/team",authController.protect, aboutUsController.createAboutTeam, (request, response) => {


  response.json({
    status: "success",
    method: request.method,

  });
})
router.delete("/aboutus/team/:title",authController.protect, aboutUsController.deleteAboutTeam, (request, response) => {


  response.json({
    status: "success",
    method: request.method,

  });
})





 



module.exports = router;