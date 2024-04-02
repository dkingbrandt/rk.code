const express = require("express");
const router = express.Router();
const homeController = require("../controller/homeController")
const authController = require("../controller/authController")


  
  
  



router.get("/home/info", homeController.getAllHomeInfo, (request, response) => {

  response.json({
    status: "success",
    method: request.method,

  })
});


router.post("/home/info",authController.protect, homeController.createHomeInfo, (request, response) => {


  response.json({
    status: "success",
    method: request.method,

  });
})
router.delete("/home/info/:title",authController.protect, homeController.deleteHomeInfo, (request, response) => {


  response.json({
    status: "success",
    method: request.method,

  });
})

router.put("/home/info/:title",authController.protect, homeController.updateHomeInfo, (request, response) => {


  response.json({
    status: "success",
    method: request.method,

  });
})
router.get("/home/projects", homeController.getAllHomeProjects, (request, response) => {

  response.json({
    status: "success",
    method: request.method,

  })
});


router.post("/home/projects",authController.protect, homeController.createHomeProjects, (request, response) => {


  response.json({
    status: "success",
    method: request.method,

  });
})


  

router.delete("/home/projects/:title",authController.protect, homeController.deleteHomeProjects, (request, response) => {


  response.json({
    status: "success",
    method: request.method,

  });
})

router.put("/home/projects/:title",authController.protect, homeController.updateHomeProjects, (request, response) => {


  response.json({
    status: "success",
    method: request.method,

  });
})







module.exports = router;