const productmodel = require("../model/Product");

module.exports.getallproducts = async (req, res) => {
  try {
    const product = await productmodel.find({});

    res.send({ product });
  } catch (error) {
    res.send({ msg: error.message });
  }
};


