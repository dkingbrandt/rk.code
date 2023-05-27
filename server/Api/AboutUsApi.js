const express = require("express");
const router = express.Router();
const aboutUsController = require("../controller/aboutUsController")

  
 

router.get("/aboutus/history", aboutUsController.getAllAboutHistory, (request, response) => {

  response.json({
    status: "success",
    method: request.method,

  })
});


router.post("/aboutus/history", aboutUsController.createAboutHistory, (request, response) => {


  response.json({
    status: "success",
    method: request.method,

  });
})

router.put("/aboutus/history/:title", aboutUsController.updateAboutHistory, (request, response) => {


  response.json({
    status: "success",
    method: request.method,

  });
})

router.delete("/aboutus/history/:title", aboutUsController.deleteAboutHistory, (request, response) => {


  response.json({
    status: "success",
    method: request.method,

  });
})

router.put("/aboutus/team/:title", aboutUsController.updateAboutTeam, (request, response) => {
  

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


router.post("/aboutus/team", aboutUsController.createAboutTeam, (request, response) => {


  response.json({
    status: "success",
    method: request.method,

  });
})
router.delete("/aboutus/team/:title", aboutUsController.deleteAboutTeam, (request, response) => {


  response.json({
    status: "success",
    method: request.method,

  });
})





 



module.exports = router;