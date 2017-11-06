$(document).ready(function () {
    $(".memory-usage input").keyup(function (e) {
        var total_gb_used = 0.0
        $(".app-row").each(function () {
            var gb_per_instance = parseFloat($("input.gb-per-instance", this).val())
            var instance_count = parseInt($("input.instance-count", this).val())
            total_gb_used += gb_per_instance * instance_count
        })
        console.log("total_gb_used: " + total_gb_used)

        var cost_of_instances = total_gb_used * 18.23773352
        console.log("cost_of_instances: £" + cost_of_instances)

        var number_of_zero_downtime_deploys = parseFloat($("input.zero-downtime-deploy-count").val())
        var cost_of_zero_downtime_instances = Math.min(number_of_zero_downtime_deploys * total_gb_used * 0.03747068852, cost_of_instances)
        console.log("cost_of_zero_downtime_instances: £" + cost_of_zero_downtime_instances)
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
})
