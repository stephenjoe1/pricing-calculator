(function ($) {
  $(document).ready(function () {
    var $allInputs = $(this).find('input')
    console.log('allInputs', $allInputs)
    var $inputs = []
    var $memoryUsageMemory = $("input[name='memory']")
    var $memoryUsageInstances = $("input[name='instances']")
    console.log('memoryUsage', $memoryUsageMemory)

    $memoryUsageMemory.blur(function () {
      var $envCost = $('.environment-cost')
      var cost = convertToNumber($envCost)
      var memoryUsageTotal = calculateMemoryUsage($memoryUsageMemory.val(), $memoryUsageInstances.val())
      var newCost = cost + memoryUsageTotal
      var costFormatted = convertToCurrency(newCost)
      $envCost.html(costFormatted)
    })

    function addCostToCalculator (currentCost, costAdded) {
      var totalCost = currentCost + costAdded
      return totalCost
    }

    function calculateMemoryUsage ($memoryUsageMemory, $memoryUsageInstances) {
      var $memoryUsage = $memoryUsageMemory * $memoryUsageInstances
      var costPerGbHour = 0.009704918033
      var dollarToPound = 0.78
      var hoursPerMonth = 730.08
      var $memoryUsageCost = $memoryUsage * costPerGbHour * dollarToPound * hoursPerMonth
      return $memoryUsageCost
    }

    function convertToNumber ($costInCurrency) {
      var $cost = $costInCurrency.html()
      $cost = Number($cost.replace(/[^0-9\.-]+/g,""))
      $cost = $cost * 100
      return $cost
    }

    function convertToCurrency ($costAsNumber) {
      $costAsNumber = parseFloat($costAsNumber/100).toFixed(2);
      $costAsNumber = '£' + $costAsNumber
      return $costAsNumber
    }

    $memoryUsageInstances.blur(function () {
      console.log('Handler!!!')
    })
  })
})(jQuery)