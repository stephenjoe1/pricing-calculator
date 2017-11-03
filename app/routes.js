var express = require('express')
var router = express.Router()
var currencyFormatter = require('currency-formatter')

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

router.get('/pricing-calculator-accordion', function (req, res) {
  var totalPrice = 3650
  var environmentCost = 0
  totalPrice = currencyFormatter.format(totalPrice, { code: 'GBP' })
  environmentCost = currencyFormatter.format(environmentCost, {code: 'GBP'})
  var environments = [1]
  console.log(environments)
  var environmentName = "Environment 1"
  res.render(
    'pricing-calculator-accordion',
    {
      totalPrice: totalPrice,
      environmentCost: environmentCost,
      environmentName: environmentName,
      environments: environments
    }
  )
})

router.get('/add-enviroment', function (req, res) {
  var totalPrice = 3650
  var environmentCost = 0
  totalPrice = currencyFormatter.format(totalPrice, { code: 'GBP' })
  environmentCost = currencyFormatter.format(environmentCost, {code: 'GBP'})
  var environmentName = "Environment 2"
  var environments = [1, 1]
  res.render(
    'pricing-calculator-accordion',
    {
      totalPrice: totalPrice,
      environmentCost: environmentCost,
      environmentName: environmentName,
      environments: environments
    }
  )
})

// add your routes here

module.exports = router
