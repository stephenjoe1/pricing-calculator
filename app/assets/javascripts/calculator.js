(function ($) {
  $(document).ready(function () {
    var costPerGbHour = 0.009704918033
    var dollarToPound = 0.78
    var hoursPerMonth = 730.08
    var awsPremiumSupportRatio = 1.1
    var awsOverProvisioningFactor = 2
    var teamContributionFactor = 1.5
    var composeOverProvisioningFactor = 1.25
    var $allInputs = $(this).find('input')
    var $inputs = []
    var $memoryUsageMemoryAndInstances = $("input[name='memory'], input[name='instances']")
    var $memoryUsageMemory = $("input[name='memory']")
    var $memoryUsageInstances = $("input[name='instances']")

    $memoryUsageMemoryAndInstances.change(function () {
      calculatorMemoryUsage()
    })

    function calculatorMemoryUsage () {
      var $envCost = $('.environment-cost')
      var cost = convertToNumber($envCost)
      var memoryUsageTotal = calculateMemoryUsage($memoryUsageMemory.val(),
        $memoryUsageInstances.val(),
        costPerGbHour,
        dollarToPound,
        hoursPerMonth)
      var newCost = cost + memoryUsageTotal
      var costFormatted = convertToCurrency(newCost)
      $envCost.html(costFormatted)
    }

    function addCostToCalculator (currentCost, costAdded) {
      var totalCost = currentCost + costAdded
      return totalCost
    }

    function calculateMemoryUsage ($memoryUsageMemory,
      $memoryUsageInstances,
      costPerGbHour,
      dollarToPound,
      hoursPerMonth) {
      var $memoryUsage = $memoryUsageMemory * $memoryUsageInstances
      var $memoryUsageCost = $memoryUsage * costPerGbHour * dollarToPound * hoursPerMonth
      return $memoryUsageCost
    }

    function convertToNumber ($costInCurrency) {
      var $cost = $costInCurrency.html()
      $cost = Number($cost.replace(/[^0-9.-]+/g, ''))
      $cost = $cost * 100
      return $cost
    }

    function convertToCurrency ($costAsNumber) {
      $costAsNumber = parseFloat($costAsNumber / 100).toFixed(2)
      $costAsNumber = '£' + $costAsNumber
      return $costAsNumber
    }

  })
})(jQuery)