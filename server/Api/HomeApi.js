const express = require("express");
const router = express.Router();
const homeController = require("../controller/homeController")


  
  
  



router.get("/home/info", homeController.getAllHomeInfo, (request, response) => {

  response.json({
    status: "success",
    method: request.method,

  })
});


router.post("/home/info", homeController.createHomeInfo, (request, response) => {


  response.json({
    status: "success",
    method: request.method,

  });
})
router.delete("/home/info/:title", homeController.deleteHomeInfo, (request, response) => {


  response.json({
    status: "success",
    method: request.method,

  });
})

router.put("/home/info/:title", homeController.updateHomeInfo, (request, response) => {


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


router.post("/home/projects", homeController.createHomeProjects, (request, response) => {


  response.json({
    status: "success",
    method: request.method,

  });
})


  

router.delete("/home/projects/:title", homeController.deleteHomeProjects, (request, response) => {


  response.json({
    status: "success",
    method: request.method,

  });
})

router.put("/home/projects/:title", homeController.updateHomeProjects, (request, response) => {


  response.json({
    status: "success",
    method: request.method,

  });
})







module.exports = router;