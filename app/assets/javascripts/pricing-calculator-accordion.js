$(document).ready(function () {
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
})
