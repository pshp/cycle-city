const { Router } = require('express');

const router = Router();
const locationControllers = require('./controllers/locations');
const userControllers = require('./controllers/users');

router.post('/users/register', userControllers.register);
router.post('/users/login', userControllers.login);
// router.post("/users/logout", controllers.logout);

router.get('/locations', locationControllers.getLocations);
router.post('/locations', locationControllers.postLocations);

router.patch('/locations/:id', locationControllers.editLocations);

router.delete('/locations/:id', locationControllers.deleteLocations);
router.delete('/locations', locationControllers.deleteAllLocations);

module.exports = { router };
