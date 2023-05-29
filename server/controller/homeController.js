






const { HomeInfo, HomeProjects } = require("../Model/homeModel");



const getAllHomeInfo = async (req, res) => {
  try {
    const homeInfo = await HomeInfo.find({}).exec();
    if (!homeInfo.length) {
      return res.status(404).json({ success: false, error: "didnt find what you're looking for" });
    }
    return res.status(200).json({ success: true, data: homeInfo });
  } catch (err) {
    return res.status(404).json({ success: false, error: "not working" });
  }
};





const getHomeInfo = async (req, res) => {
  const body = req.body

  if (!body) {
    return res.send({ reason: ' error' });
  }

  await HomeInfo.find({ title: req.params.title }, { $set: { title: body.title, } }, (err, homeInfo) => {
    if (err) {
      return res.status(404).json({ success: false, error: err })
    } if (!homeInfo.length) {
      return res.status(404).json({ success: false, error: "didnt find what your looking for" })
    }
    return res.status(200).json({ success: true, data: homeInfo })
  }).clone().catch(err => console.log(err))
}



const updateHomeInfo = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'Cannot find the data to update',
    });
  }

  try {
    const homeInfo = await HomeInfo.updateMany(
      { title: req.params.title },
      {
        $set: {
          title: req.body.title,
          heading: req.body.heading,
          description: req.body.description,
          img: req.body.img,
          category: req.body.category,
        },
      }
    ).exec();

    if (homeInfo.nModified === 0) {
      return res.status(404).json({
        success: false,
        message: ' not found!',
      });
    }
    if (!homeInfo) {
      return res.status(404).json({
        success: false,
        message: ' not found!',
      });
    }
   
    if (homeInfo) {
      return res.status(200).json({
        success: true,
        message: 'Updated!',
      });
     
   }
   
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      error: 'An error occurred while updating the data',
    });
  }
};



const createHomeInfo = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "Error not found",
    });
  }

  const homeInfo = new HomeInfo(body);

  try {
    await homeInfo.save();
    return res.status(200).json({
      success: true,
      message: "New home-info  was created",
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      error: "Failed to save home-info",
    });
  }
};




const deleteHomeInfo = async (req, res) => {
  try {
    const homeInfo = await HomeInfo.findOneAndDelete({ title: req.params.title }).exec();

    if (!homeInfo) {
      return res.status(404).json({ success: false, error: 'home-info not found!' });
    }

    if (homeInfo) return res.status(200).json({ success: true, data: homeInfo });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};












const getAllHomeProjects = async (req, res) => {
  try {
    const homeProjects = await HomeProjects.find({}).exec();
    if (!homeProjects) {
      return res.status(404).json({ success: false, error: "didnt find what you're looking for" });
    }
    return res.status(200).json({ success: true, data: homeProjects });
  } catch (err) {
    return res.status(404).json({ success: false, error: err });
  }
};





const getHomeProjects = async (req, res) => {
  const body = req.body

  if (!body) {
    return res.send({ reason: ' error' });
  }

  await HomeProjects.find({ title: req.params.title }, { $set: { title: body.title, } }, (err, homeProjects) => {
    if (err) {
      return res.status(404).json({ success: false, error: err })
    } if (!homeProjects.length) {
      return res.status(404).json({ success: false, error: "didnt find what your looking for" })
    }
    return res.status(200).json({ success: true, data: homeProjects })
  }).clone().catch(err => console.log(err))
}



const updateHomeProjects = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'Cannot find the data to update',
    });
  }

  try {
    const homeProjects = await HomeProjects.updateMany(
      { title: req.params.title },
      {
        $set: {
          title: req.body.title,
          heading: req.body.heading,
          description: req.body.description,
          img: req.body.img,
          category: req.body.category,
        },
      }
    ).exec();

    if (homeProjects.nModified === 0) {
      return res.status(404).json({
        success: false,
        message: ' not found!',
      });
    }
    if (!homeProjects) {
      return res.status(404).json({
        success: false,
        message: ' not found!',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Updated!',
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      error: 'An error occurred while updating the data',
    });
  }
};



const createHomeProjects = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "Error not found",
    });
  }

  const homeProjects = new HomeProjects(body);

  try {
    await homeProjects.save();
    return res.status(200).json({
      success: true,
      message: "New home-project was created",
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      error: "Failed to save home-project",
    });
  }
};




const deleteHomeProjects = async (req, res) => {
  try {
    const homeProjects = await HomeProjects.findOneAndDelete({ title: req.params.title }).exec();

    if (!homeProjects) {
      return res.status(404).json({ success: false, error: 'home-project not found!' });
    }

    if (homeProjects) return res.status(200).json({ success: true, data: homeProjects });
  } catch (err) {
    return res.status(400).json({ success: false, error: "home-project error" });

  }
};


module.exports = {
  getAllHomeInfo,
  createHomeInfo,
  deleteHomeInfo,
  getHomeInfo,
  updateHomeInfo,
  getAllHomeProjects,
  createHomeProjects,
  deleteHomeProjects,
  getHomeProjects,
  updateHomeProjects
};