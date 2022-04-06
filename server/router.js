const { Router } = require('express');

const router = Router();
const locationControllers = require('./controllers/locations');
const userControllers = require('./controllers/users');

router.post('/users/register', userControllers.register);
router.post('/users/login', userControllers.login);
router.get('/users/', userControllers.getUsers);
router.get('/users/:id', userControllers.getUser);
// router.post("/users/logout", controllers.logout);

router.get('/locations', locationControllers.getLocations);
router.post('/locations', locationControllers.postLocation);

router.patch('/locations/:id', locationControllers.editLocation);

router.delete('/locations/:id', locationControllers.deleteLocation);
router.delete('/locations', locationControllers.deleteAllLocations);

module.exports = { router };
