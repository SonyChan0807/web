const express = require('express');
const router = express.Router();
// const testController = require('../controllers/testControllor');
// const chartController = require('../controllers/chartController');
const pageController = require('../controllers/pageController');
// const apiController = require('../controllers/apiController');
const { catchErrors } = require('../handlers/errorHandlers');


// Do work here

// home page
router.get('/', pageController.homePage);

// // 熱門排行榜
// router.get('/ranking', catchErrors(pageController.rankingPage));

// 
router.get('/brands', pageController.brandPage);

//
router.get('/groups', pageController.carGroupPage);

//
router.get('/price', pageController.pricePage);

// test data
router.get('/test', (req, res) => {
    res.send("Hello World!")
});




module.exports = router;