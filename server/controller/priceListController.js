




const { PriceListInfo, PriceListPackage } = require("../Model/priceListModel");



const getAllPriceListInfo = async (req, res) => {
  try {
    const priceListInfo = await PriceListInfo.find({}).exec();
    if (!priceListInfo.length) {
      return res.status(404).json({ success: false, error: "didnt find what you're looking for" });
    }
    return res.status(200).json({ success: true, data: priceListInfo });
  } catch (err) {
    return res.status(404).json({ success: false, error: "not working" });
  }
};





const getPriceListInfo = async (req, res) => {
  const body = req.body

  if (!body) {
    return res.send({ reason: ' error' });
  }

  await PriceListInfo.find({ title: req.params.title }, { $set: { title: body.title, } }, (err, priceListInfo) => {
    if (err) {
      return res.status(404).json({ success: false, error: err })
    } if (!priceListInfo.length) {
      return res.status(404).json({ success: false, error: "didnt find what your looking for" })
    }
    return res.status(200).json({ success: true, data: priceListInfo })
  }).clone().catch(err => console.log(err))
}



const updatePriceListInfo = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'Cannot find the data to update',
    });
  }

  try {
    const priceListInfo = await PriceListInfo.updateMany(
      { title: req.params.title },
      {
        $set: {
          title: req.body.title,
          heading: req.body.heading,
          description: req.body.description,
          img: req.body.img,
          imgLight:req.body.imgLight,
          category: req.body.category,
        },
      }
    ).exec();

    if (priceListInfo.nModified === 0) {
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



const createPriceListInfo = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "Error not found",
    });
  }

  const priceListInfo = new PriceListInfo(body);

  try {
    await priceListInfo.save();
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




const deletePriceListInfo = async (req, res) => {
  try {
    const priceListInfo = await PriceListInfo.findOneAndDelete({ title: req.params.title }).exec();

    if (!priceListInfo) {
      return res.status(404).json({ success: false, error: 'PriceListInfo not found!' });
    }

    if (priceListInfo) return res.status(200).json({ success: true, data: priceListInfo });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};












const getAllPriceListPackage = async (req, res) => {
  try {
    const priceListPackage = await PriceListPackage.find({}).exec();
    if (!priceListPackage) {
      return res.status(404).json({ success: false, error: "didnt find what you're looking for" });
    }
    return res.status(200).json({ success: true, data: priceListPackage });
  } catch (err) {
    return res.status(404).json({ success: false, error: err });
  }
};





const getPriceListPackage = async (req, res) => {
  const body = req.body

  if (!body) {
    return res.send({ reason: ' error' });
  }

  await PriceListPackage.find({ title: req.params.title }, { $set: { title: body.title, } }, (err, priceListPackage) => {
    if (err) {
      return res.status(404).json({ success: false, error: err })
    } if (!aboutInfo.length) {
      return res.status(404).json({ success: false, error: "didnt find what your looking for" })
    }
    return res.status(200).json({ success: true, data: priceListPackage })
  }).clone().catch(err => console.log(err))
}



const updatePriceListPackage = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'Cannot find the data to update',
    });
  }

  try {
    const priceListPackage = await PriceListPackage.updateMany(
      { title: req.params.title },
      {
        $set: {
          title: req.body.title,
          heading: req.body.heading,
          description: req.body.description,
          img: req.body.img,
          imgLight:req.body.imgLight,
          category: req.body.category,
        },
      }
    ).exec();

    if (priceListPackage.nModified === 0) {
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



const createPriceListPackage = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "Error not found",
    });
  }

  const priceListPackage = new PriceListPackage(body);

  try {
    await priceListPackage.save();
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




const deletePriceListPackage = async (req, res) => {
  try {
    const priceListPackage = await PriceListPackage.findOneAndDelete({ title: req.params.title }).exec();

    if (!priceListPackage) {
      return res.status(404).json({ success: false, error: 'Education not found!' });
    }

    if (priceListPackage) return res.status(200).json({ success: true, data: priceListPackage });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });

  }
};

module.exports = {
  getAllPriceListInfo,
  createPriceListInfo,
  deletePriceListInfo,
  getPriceListInfo,
  updatePriceListInfo,
  getAllPriceListPackage,
  createPriceListPackage,
  deletePriceListPackage,
  getPriceListPackage,
  updatePriceListPackage
};