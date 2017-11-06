$(document).ready(function () {
    $("input[type=radio][name=relational]").change(function (e) {
        console.log("relational: £" + parseFloat($("input[type=radio][name=relational]:checked").val()))
    })

    $("input[type=radio][name=mongo]").change(function (e) {
        console.log("mongo: £" + parseFloat($("input[type=radio][name=mongo]:checked").val()))
    })
})
