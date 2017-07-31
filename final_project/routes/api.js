const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');
const apiController = require('../controllers/apiController');
const { catchErrors } = require('../handlers/errorHandlers');


router.get('/queryPrice', catchErrors(apiController.dropdownQuery));

router.get('/getEstPrice', catchErrors(apiController.priceQueryButton));

// router.get('/ranking/:order', catchErrors(apiController.priceRanking));

// 文字雲
router.get('/chartData', catchErrors(apiController.chartData));

// 玫瑰圖
router.get('/roseData', catchErrors(apiController.roseData));
// 分群特性
router.get('/groupFeature', catchErrors(apiController.groupFeature));
module.exports = router;