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
            var gb_per_instance = parseFloat($("input.gb-per-instance", this).val()) || 0
            var instance_count = parseInt($("input.instance-count", this).val()) || 0
            total_gb_used += gb_per_instance * instance_count
        })
        console.log("total_gb_used: " + total_gb_used)

        var cost_of_instances = total_gb_used * 18.23773352
        console.log("cost_of_instances: £" + cost_of_instances)

        var number_of_zero_downtime_deploys = parseFloat($("input.zero-downtime-deploy-count").val()) || 0
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
