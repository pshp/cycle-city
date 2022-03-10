const { Router } = require('express');

const router = Router();
//const locationControllers = require('./controllers/locations');
const userControllers = require('./controllers/users');

router.post('/users/register', userControllers.register);
router.post('/users/login', userControllers.login);
// router.post("/users/logout", controllers.logout);

module.exports = { router };
