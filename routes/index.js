const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('https://www.facebook.com/connect/', (req, res, next) => {
  res.redirect('/profile')
})

module.exports = router;
