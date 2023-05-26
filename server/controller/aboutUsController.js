



const { AboutUsHistory, AboutUsTeam } = require("../Model/aboutUsModel");



const getAllAboutHistory = async (req, res) => {
  try {
    const aboutInfo = await AboutUsHistory.find({}).exec();
    if (!aboutInfo.length) {
      return res.status(404).json({ success: false, error: "didnt find what you're looking for" });
    }
    return res.status(200).json({ success: true, data: aboutInfo });
  } catch (err) {
    return res.status(404).json({ success: false, error: err });
  }
};





const getAboutHistory = async (req, res) => {
  const body = req.body

  if (!body) {
    return res.send({ reason: ' error' });
  }

  await AboutUsHistory.find({ title: req.params.title }, { $set: { title: body.title, } }, (err, aboutInfo) => {
    if (err) {
      return res.status(404).json({ success: false, error: err })
    } if (!aboutInfo.length) {
      return res.status(404).json({ success: false, error: "didnt find what your looking for" })
    }
    return res.status(200).json({ success: true, data: aboutInfo })
  }).clone().catch(err => console.log(err))
}



const updateAboutHistory = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'Cannot find the data to update',
    });
  }

  try {
    const aboutInfo = await AboutUsHistory.updateMany(
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

    if (aboutInfo.nModified === 0) {
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



const createAboutHistory = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "Error not found",
    });
  }

  const aboutUs = new AboutUsHistory(body);

  try {
    await aboutUs.save();
    return res.status(200).json({
      success: true,
      message: "New about us was created",
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      error: "Failed to save about us",
    });
  }
};




const deleteAboutHistory = async (req, res) => {
  try {
    const aboutInfo = await AboutUsHistory.findOneAndDelete({ title:req.params.title }).exec();

    if (!aboutInfo) {
      return res.status(404).json({ success: false, error: 'Education not found!' });
    }

    if(aboutInfo) return res.status(200).json({ success: true, data: aboutInfo });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};









const getAllAboutTeam = async (req, res) => {
  try {
    const aboutInfo = await AboutUsTeam.find({}).exec();
    if (!aboutInfo.length) {
      return res.status(404).json({ success: false, error: "didnt find what you're looking for" });
    }
    return res.status(200).json({ success: true, data: aboutInfo });
  } catch (err) {
    return res.status(404).json({ success: false, error: err });
  }
};





const getAboutTeam = async (req, res) => {
  const body = req.body

  if (!body) {
    return res.send({ reason: ' error' });
  }

  await AboutUsTeam.find({ title: req.params.title }, { $set: { title: body.title, } }, (err, aboutInfo) => {
    if (err) {
      return res.status(404).json({ success: false, error: err })
    } if (!aboutInfo.length) {
      return res.status(404).json({ success: false, error: "didnt find what your looking for" })
    }
    return res.status(200).json({ success: true, data: aboutInfo })
  }).clone().catch(err => console.log(err))
}



const updateAboutTeam = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'Cannot find the data to update',
    });
  }

  try {
    const aboutInfo = await AboutUsTeam.updateMany(
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

    if (aboutInfo.nModified === 0) {
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



const createAboutTeam = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "Error not found",
    });
  }

  const aboutUs = new AboutUsTeam(body);

  try {
    await aboutUs.save();
    return res.status(200).json({
      success: true,
      message: "New about us was created",
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      error: "Failed to save about us",
    });
  }
};




const deleteAboutTeam = async (req, res) => {
  try {
    const aboutInfo = await AboutUsTeam.findOneAndDelete({ title:req.params.title }).exec();

    if (!aboutInfo) {
      return res.status(404).json({ success: false, error: 'Education not found!' });
    }

    if(aboutInfo) return res.status(200).json({ success: true, data: aboutInfo });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};





module.exports = {
  getAllAboutHistory,
  createAboutHistory,
  deleteAboutHistory,
  getAboutHistory,
  updateAboutHistory,
  getAllAboutTeam,
  createAboutTeam,
  deleteAboutTeam,
  getAboutTeam,
  updateAboutTeam,
};