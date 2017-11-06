unit_costs_by_daily_log_volume = [
  [0.5, 1.992059504],
  [1, 1.984158416],
  [2, 1.968473679],
  [5, 1.9223451],
  [7.5, 1.884942644],
  [10, 1.848459128],
  [15, 1.77815916],
  [20, 1.711271153],
  [25, 1.647629509],
  [30, 1.587076668],
  [50, 1.37286212],
  [75, 1.15860718],
  [100, 0.9915379397],
  [150, 0.7596780336],
  [200, 0.6186982088],
  [250, 0.5329770019],
  [350, 0.4491630886],
  [400, 0.4298930666],
  [500, 0.4110518019],
  [750, 0.4009185222],
  [1000, 0.400076339],
  [1500, 0.4000005273]
]

retention_multipliers = [
  [4, 3.5],
  [7, 2.5],
  [10, 2],
  [14, 1.7],
  [21, 1.28],
  [30, 1],
  [45, 0.8],
  [60, 0.7],
  [75, 0.65],
  [90, 0.6],
  [120, 0.55],
  [150, 0.5],
  [180, 0.49],
  [365, 0.33]
]

plan_multipliers = {
    "basic": 1,
    "pro": 1.15,
    "enterprise": 1.5
}

function find_plan_lte(plans, value) {
    var plan
    for (var i = plans.length - 1; i >= 0; i--) {
        plan = plans[i]
        if (plan[0] <= value) {
            return plan[1]
        }
    }
    // Give the value of the smallest plan if none were smaller
    return plan[1]
}

function add_fields() {
    var objTo = document.getElementById('room_fileds')
    var divtest = document.createElement("div");
    divtest.innerHTML = '<div><table><thead><tr><th class="wide-th small-tr" scope="col"></th><th class="small-tr"scope="col"></th><th class="small-tr"scope="col"></th></tr></thead><tbody><tr class="app-row"><th scope="row"><input name="form-control" type="text" class="form-control" id="form-control" style="width: 360px;" value=""></th><td ><input name="form-control-1-2" type="text" class="form-control form-control-1-2 gb-per-instance" id="form-control-1-2" value=""></td><td ><input name="form-control-1-2" type="text" class="form-control form-control-1-2 instance-count" id="form-control-1-2" value=""></td> </tr></tbody></table></div>';

    objTo.appendChild(divtest)
}

$(document).ready(function () {
    $(".memory-usage").on("keyup", "input", function (e) {
        var total_gb_used = 0.0
        $(".app-row").each(function () {
            var gb_per_instance = parseFloat($("input.gb-per-instance").val()) || 0
            var instance_count = parseInt($("input.instance-count").val()) || 0
            total_gb_used += gb_per_instance * instance_count
        })
        console.log("total_gb_used: " + total_gb_used)

        var cost_of_instances = total_gb_used * 18.23773352
        console.log("cost_of_instances: £" + cost_of_instances)

        var number_of_zero_downtime_deploys = parseFloat($("input.zero-downtime-deploy-count").val()) || 0
        var cost_of_zero_downtime_instances = Math.min(number_of_zero_downtime_deploys * total_gb_used * 0.03747068852, cost_of_instances)
        console.log("cost_of_zero_downtime_instances: £" + cost_of_zero_downtime_instances)

        var app_cost = cost_of_instances + cost_of_zero_downtime_instances
        console.log("app_cost: £" + app_cost)
    })

    $("input[type=radio][name=relational]").change(function (e) {
        console.log("relational: £" + parseFloat($("input[type=radio][name=relational]:checked").val()))
    })

    $("input[type=radio][name=mongo]").change(function (e) {
        console.log("mongo: £" + parseFloat($("input[type=radio][name=mongo]:checked").val()))
    })

    $("input[type=radio][name=elasticsearch]").change(function (e) {
        console.log("elasticsearch: £" + parseFloat($("input[type=radio][name=elasticsearch]:checked").val()))
    })

    $("input[type=radio][name=redis]").change(function (e) {
        console.log("redis: £" + parseFloat($("input[type=radio][name=redis]:checked").val()))
    })

    $("input[type=radio][name=rabbitmq]").change(function (e) {
        console.log("rabbitmq: £" + parseFloat($("input[type=radio][name=rabbitmq]:checked").val()))
    })

    $(".logit").on("change keyup", "input", function (e) {
        var daily_log_volume = parseFloat($("input.daily-log-volume").val()) || 0
        console.log("daily_log_volume: " + daily_log_volume)
        var unit_cost_by_daily_log_volume = find_plan_lte(unit_costs_by_daily_log_volume, daily_log_volume)
        console.log("unit_cost_by_daily_log_volume: " + unit_cost_by_daily_log_volume)

        var retention = parseInt($("input.retention").val()) || 0
        console.log("retention: " + retention)
        var retention_multiplier = find_plan_lte(retention_multipliers, retention)
        console.log("retention_multiplier: " + retention_multiplier)

        var plan = $("input[type=radio][name=logit-plan]:checked").val()
        console.log("plan: " + plan)
        var plan_multiplier = plan_multipliers[plan]
        console.log("plan_multiplier: " + plan_multiplier)

        var logit_cost = daily_log_volume * unit_cost_by_daily_log_volume
        logit_cost *= retention * retention_multiplier
        logit_cost *= plan_multiplier
        logit_cost *= 1.17 // hardcoded `dollarsToThePound*teamContributionFactor`
        logit_cost = logit_cost || 0
        console.log("logit_cost: £" + logit_cost)
    })

    $("input[type=radio][name=rabbitmq]").change(function (e) {
        console.log("rabbitmq: £" + parseFloat($("input[type=radio][name=rabbitmq]:checked").val()))
    })
})
