const Data = require("../models/data");

exports.controller = {
  // Find single product by Id
  async findById(req, res, next) {
    let id = req.params.id;

    await Data.findById(id, (err, data) => {
      res.send({ data: data });
    });
  },
  // Find all products
  async findAll(req, res) {
    const data = await Data.find().sort({ createdAt: "desc" });
    return res.status(200).send({ data: data });
  },
  // Clear all
  async removeAll(req, res, next) {
    Data.deleteMany(err => {
      if (err) next();
      else return res.status(200).send("Deleted all records");
    });
  },
  // Add new product
  async create(req, res) {
    const newData = await new Data({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price
    }).save();

    return res.status(201).send({ data: newData });
  }
};
