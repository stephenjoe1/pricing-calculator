(function ($) {
  $(document).ready(function () {
    var $allInputs = $(this).find('input')
    console.log('allInputs', $allInputs)
    var $inputs = []
    //var $memoryUsageInputs = $('.table-memory-usage').find('input')
    //console.log($memoryUsageInputs)
    var $memoryUsageMemory = $("input[name='memory']")
    var $memoryUsageInstances = $("input[name='instances']")
    console.log('memoryUsage', $memoryUsageMemory)

    $memoryUsageMemory.blur(function () {
      var $envCost = $('.environment-cost')
      var $cost = getCurrency($envCost)
      /*var $cost = $envCost.html()
      $cost = Number($cost.replace(/[^0-9\.-]+/g,""))
      $cost = $cost * 100*/
      console.log('cost', $cost)
      console.log($envCost)
      $envCost.html('test')
    })

    function getCurrency ($costInCurrency) {
      var $cost = $costInCurrency.html()
      $cost = Number($cost.replace(/[^0-9\.-]+/g,""))
      $cost = $cost * 100
      return $cost
    }

    $memoryUsageInstances.blur(function () {
      console.log('Handler!!!')
    })
  })
})(jQuery)