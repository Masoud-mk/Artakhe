const express = require('express');
const router = express.Router();

// Controllers
const homeController = require('app/http/controllers/homeController');
// Home Routes
router.get('/' , homeController.showPage);

module.exports = router;