const Location = require('../models/Location');

const getLocations = async (req, res) => {
  try {
    // get all loctions
    const loctions = await Location.find();
    res.status(200).send(loctions);
  } catch (e) {
    res.status(500).send(e);
  }
};

const postLocation = async (req, res) => {
  try {
    // post single Location
    const body = {
      username: req.body.username,
      title: req.body.title,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      description: req.body.description,
      // rating: req.body.rating,
    };

    const response = await Location.create(body);

    res.status(201).send(response);
  } catch (e) {
    console.log('fucking error', e);

    res.status(500).send(e);
  }
};

const editLocation = async (req, res) => {
  try {
    // edit single Location using _id
    const filter = { _id: req.params.id };
    const update = {
      title: req.body.title,
      description: req.body.description,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
    };
    const result = await Location.findOneAndUpdate(filter, update, {
      runValidators: true,
      new: true,
    });
    res.status(200).send(result);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

const deleteLocation = async (req, res) => {
  try {
    // delete single Location using _id
    const result = await Location.deleteOne({ _id: req.params.id });
    res.status(200).send(result);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

const deleteAllLocations = async (req, res) => {
  try {
    // delete all loctions
    const result = await Location.deleteMany({});
    res.status(200).send(result);
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports = {
  getLocations, postLocation, editLocation, deleteLocation, deleteAllLocations,
};
