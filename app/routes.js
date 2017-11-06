var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here
router.get('/request-trial-redirect', function (req, res) {
  // get the answer from the query string (eg. ?over18=false)
  var radiogroup = req.query.radiogroup

  if (radiogroup === 'request-trial-your-details') {
    // redirect to the relevant page
    res.redirect('/request-trial-your-details')
  } else {
    // if over18 is any other value (or is missing) render the page requested
    res.redirect('/request-trial-2')
  }
})


module.exports = router

