/* 
	JS Name: general.js
	Date Created: 7/1/2014
	Website: PT Cashier Form
	Author: Are Lorenz Bergonia
*/

$(document).ready(function () {

    $("#cmdSubmit").click(function () {

        var trans_stat = $(".transmitter");
        var resetButton = $("#cmdReset");

        if (trans_stat.is(':disabled')) {
            return false;
        } else {
            var myvalue = $.trim($("#email").val());
            submitEntries(myvalue);
        }

        if (resetButton.is(":disabled")) {
            return false;
        }
    });

    $("#withdrawalButton").click(function () {
        if ($(".transmitter").is(":disabled")) {
            return false;
        } else {
            withdrawalLink();
        }
    });

    $("#fundTransfer").click(function () {
        if ($(".transmitter").is(":disabled")) {
            return false;
        } else {
            fundTransferLink();
        }
    });

    $("#depositIndex").click(function () {
        if ($(".transmitter").is(":disabled")) {
            return false;
        } else {
            depositIndex();
        }
    });

    $("#cmdSubmit_ATM").click(function () {
        var testData = $("#account_atm").val();
        submitEntries_ATM(testData);
    });

    $("#cmdSubmit_withdrawal").click(function () {
        var testData = $("#password").val();
        submitEntries_withdrawal(testData);
    });

    $("#cmdSubmit_fundTransfer").click(function () {
        var testData = $("#transfer_amount").val();
        submitEntries_fundTransfer(testData);
    });

});

function disability() {
    $("#email").attr("disabled", "disabled");
    $("#email").css("background-color", "#d9d9d9");

    $("#username").attr("disabled", "disabled");
    $("#username").css("background-color", "#d9d9d9");

    $("#netbank_transfer_amount").attr("disabled", "disabled");
    $("#netbank_transfer_amount").css("background-color", "#d9d9d9");

    $("#account_name").attr("disabled", "disabled");
    $("#account_name").css("background-color", "#d9d9d9");

    $("#bank").attr("disabled", "disabled");
    $("#bank").css("background-color", "#d9d9d9");

    $("#sender_name").attr("disabled", "disabled");
    $("#sender_name").css("background-color", "#d9d9d9");

    $("#serial_number").attr("disabled", "disabled");
    $("#serial_number").css("background-color", "#d9d9d9");

    $(".transmitter").attr("disabled", "disabled");
    $(".transmitter").removeClass("btnStyle");
    $(".transmitter").removeClass("submit");
    $(".transmitter").addClass("disableButton");
    $(".transmitter").addClass("buttonLeft");

    $("#cmdReset").attr("disabled", "disabled");
    $("#cmdReset").removeClass("btnStyle");
    $("#cmdReset").removeClass("reset");
    $("#cmdReset").addClass("disableButton");

    $(".PTNav li a").attr("disabled", "disabled");
    $(".PTNav li a").addClass("disabledLink");
}

function disability_ATM() {

    $("#account_atm").attr("disabled", "disabled");
    $("#account_atm").css("background-color", "#d9d9d9");

    $("#username_atm").attr("disabled", "disabled");
    $("#username_atm").css("background-color", "#d9d9d9");

    $("#amount_atm").attr("disabled", "disabled");
    $("#amount_atm").css("background-color", "#d9d9d9");

    $("#beneficiary_atm").attr("disabled", "disabled");
    $("#beneficiary_atm").css("background-color", "#d9d9d9");

    $("#bank_atm").attr("disabled", "disabled");
    $("#bank_atm").css("background-color", "#d9d9d9");

    $("#sendername_atm").attr("disabled", "disabled");
    $("#sendername_atm").css("background-color", "#d9d9d9");

    $("#transfertime_atm").attr("disabled", "disabled");
    $("#transfertime_atm").css("background-color", "#d9d9d9");

    $("#cmdReset").attr("disabled", "disabled");
    $("#cmdReset").removeClass("btnStyle");
    $("#cmdReset").removeClass("reset");
    $("#cmdReset").addClass("disableButton");

    $(".transmitter").attr("disabled", "disabled");
    $(".transmitter").removeClass("btnStyle");
    $(".transmitter").removeClass("submit");
    $(".transmitter").addClass("disableButton");
    $(".transmitter").addClass("buttonLeft");

    $(".PTNav li a").attr("disabled", "disabled");
    $(".PTNav li a").addClass("disabledLink");

}

function activeDisability_ATM() {

    $("#account_atm").removeAttr("disabled", "disabled");
    $("#account_atm").css("background-color", "white");

    $("#username_atm").removeAttr("disabled", "disabled");
    $("#username_atm").css("background-color", "white");

    $("#amount_atm").removeAttr("disabled", "disabled");
    $("#amount_atm").css("background-color", "white");

    $("#beneficiary_atm").removeAttr("disabled", "disabled");
    $("#beneficiary_atm").css("background-color", "white");

    $("#bank_atm").removeAttr("disabled", "disabled");
    $("#bank_atm").css("background-color", "white");

    $("#sendername_atm").removeAttr("disabled", "disabled");
    $("#sendername_atm").css("background-color", "white");

    $("#transfertime_atm").removeAttr("disabled", "disabled");
    $("#transfertime_atm").css("background-color", "white");

    $("#cmdReset").removeAttr("disabled", "disabled");
    $("#cmdReset").addClass("btnStyle");
    $("#cmdReset").addClass("reset");
    $("#cmdReset").removeClass("disableButton");

    $(".transmitter").removeAttr("disabled", "disabled");
    $(".transmitter").addClass("btnStyle");
    $(".transmitter").addClass("submit");
    $(".transmitter").removeClass("disableButton");
    $(".transmitter").removeClass("buttonLeft");

    $(".PTNav li a").removeAttr("disabled", "disabled");
    $(".PTNav li a").removeClass("disabledLink");

}

function activeDisability() {
    $("#email").removeAttr("disabled", "disabled");
    $("#email").css("background-color", "white");

    $("#username").removeAttr("disabled", "disabled");
    $("#username").css("background-color", "white");

    $("#netbank_transfer_amount").removeAttr("disabled", "disabled");
    $("#netbank_transfer_amount").css("background-color", "white");

    $("#account_name").removeAttr("disabled", "disabled");
    $("#account_name").css("background-color", "white");

    $("#bank").removeAttr("disabled", "disabled");
    $("#bank").css("background-color", "white");

    $("#sender_name").removeAttr("disabled", "disabled");
    $("#sender_name").css("background-color", "white");

    $("#serial_number").removeAttr("disabled", "disabled");
    $("#serial_number").css("background-color", "white");

    $(".transmitter").removeAttr("disabled", "disabled");
    $(".transmitter").addClass("btnStyle");
    $(".transmitter").addClass("submit");
    $(".transmitter").removeClass("disableButton");
    $(".transmitter").removeClass("buttonLeft");

    $("#cmdReset").removeAttr("disabled", "disabled");
    $("#cmdReset").addClass("btnStyle");
    $("#cmdReset").addClass("reset");
    $("#cmdReset").removeClass("disableButton");

    $(".PTNav li a").removeAttr("disabled", "disabled");
    $(".PTNav li a").removeClass("disabledLink");
}

function jumper(theLink) {
    window.location = theLink;
}

function withdrawalLink() {
    jumper("withdrawal.html");
}

function fundTransferLink() {
    jumper("fundTransfer.html");
}

function depositIndex() {
    jumper("depositIndex.html");
}

function submitEntries(myval) {
    $.ajax({
        type: "POST",
        url: "tester.aspx",
        data: { data: myval },
        beforeSend: function () {
            $("#loader").html("<img src='images/loading.gif' height='' width='' alt='' />");
            disability();
        },
        success: function (e) {
            $("#loader").html("");
            alert(e);
            activeDisability();
        }
    });
}

function submitEntries_ATM(myval) {
    $.ajax({
        type: "POST",
        url: "tester.aspx",
        data: { data: myval },
        beforeSend: function () {
            $("#loader").html("<img src='images/loading.gif' height='' width='' alt='' />");
            disability_ATM();
        },
        success: function (e) {
            $("#loader").html("");
            alert(e);
            activeDisability_ATM();
        }
    });
}

/* Fund Transfer */

function submitEntries_fundTransfer(myval) {
    $.ajax({
        type: "POST",
        url: "tester.aspx",
        data: { data: myval },
        beforeSend: function () {
            $("#loader").html("<img src='images/loading.gif' height='' width='' alt='' />");
            disability_fundTransfer();
        },
        success: function (e) {
            $("#loader").html("");
            alert(e);
            activeDisability_fundTransfer();
        }
    });
}

function disability_fundTransfer() {
    $("#from").attr("disabled", "disabled");
    $("#from").css("background-color", "#d9d9d9");

    $("#to").attr("disabled", "disabled");
    $("#to").css("background-color", "#d9d9d9");

    $("#transfer_amount").attr("disabled", "disabled");
    $("#transfer_amount").css("background-color", "#d9d9d9");

    $(".transmitter").attr("disabled", "disabled");
    $(".transmitter").removeClass("btnStyle");
    $(".transmitter").removeClass("submit");
    $(".transmitter").addClass("disableButton");
    $(".transmitter").addClass("buttonLeft");

    $("#cmdReset").attr("disabled", "disabled");
    $("#cmdReset").removeClass("btnStyle");
    $("#cmdReset").removeClass("reset");
    $("#cmdReset").addClass("disableButton");

    $(".PTNav li a").attr("disabled", "disabled");
    $(".PTNav li a").addClass("disabledLink");
}

function activeDisability_fundTransfer() {
    $("#from").removeAttr("disabled", "disabled");
    $("#from").css("background-color", "white");

    $("#to").removeAttr("disabled", "disabled");
    $("#to").css("background-color", "white");

    $("#transfer_amount").removeAttr("disabled", "disabled");
    $("#transfer_amount").css("background-color", "white");

    $(".transmitter").removeAttr("disabled", "disabled");
    $(".transmitter").addClass("btnStyle");
    $(".transmitter").addClass("submit");
    $(".transmitter").removeClass("disableButton");
    $(".transmitter").removeClass("buttonLeft");

    $("#cmdReset").removeAttr("disabled", "disabled");
    $("#cmdReset").addClass("btnStyle");
    $("#cmdReset").addClass("reset");
    $("#cmdReset").removeClass("disableButton");

    $(".PTNav li a").removeAttr("disabled", "disabled");
    $(".PTNav li a").removeClass("disabledLink");
}

/* Withdrawal*/

function submitEntries_withdrawal(myval) {
    $.ajax({
        type: "POST",
        url: "tester.aspx",
        data: { data: myval },
        beforeSend: function () {
            $("#loader").html("<img src='images/loading.gif' height='' width='' alt='' />");
            disability_withdrawal();
        },
        success: function (e) {
            $("#loader").html("");
            alert(e);
            activeDisability_withdrawal();
        }
    });
}

function disability_withdrawal() {
    $("#password").attr("disabled", "disabled");
    $("#password").css("background-color", "#d9d9d9");

    $("#bank_type").attr("disabled", "disabled");
    $("#bank_type").css("background-color", "#d9d9d9");

    $("#bank_numbers").attr("disabled", "disabled");
    $("#bank_numbers").css("background-color", "#d9d9d9");

    $("#opening_outlets").attr("disabled", "disabled");
    $("#opening_outlets").css("background-color", "#d9d9d9");

    $("#withdrawal_amount").attr("disabled", "disabled");
    $("#withdrawal_amount").css("background-color", "#d9d9d9");

    $(".transmitter").attr("disabled", "disabled");
    $(".transmitter").removeClass("btnStyle");
    $(".transmitter").removeClass("submit");
    $(".transmitter").addClass("disableButton");
    $(".transmitter").addClass("buttonLeft");

    $("#cmdReset").attr("disabled", "disabled");
    $("#cmdReset").removeClass("btnStyle");
    $("#cmdReset").removeClass("reset");
    $("#cmdReset").addClass("disableButton");

    $(".PTNav li a").attr("disabled", "disabled");
    $(".PTNav li a").addClass("disabledLink");
}

function activeDisability_withdrawal() {
    $("#password").removeAttr("disabled", "disabled");
    $("#password").css("background-color", "white");

    $("#bank_type").removeAttr("disabled", "disabled");
    $("#bank_type").css("background-color", "white");

    $("#bank_numbers").removeAttr("disabled", "disabled");
    $("#bank_numbers").css("background-color", "white");

    $("#opening_outlets").removeAttr("disabled", "disabled");
    $("#opening_outlets").css("background-color", "white");

    $("#withdrawal_amount").removeAttr("disabled", "disabled");
    $("#withdrawal_amount").css("background-color", "white");

    $(".transmitter").removeAttr("disabled", "disabled");
    $(".transmitter").addClass("btnStyle");
    $(".transmitter").addClass("submit");
    $(".transmitter").removeClass("disableButton");
    $(".transmitter").removeClass("buttonLeft");

    $("#cmdReset").removeAttr("disabled", "disabled");
    $("#cmdReset").addClass("btnStyle");
    $("#cmdReset").addClass("reset");
    $("#cmdReset").removeClass("disableButton");

    $(".PTNav li a").removeAttr("disabled", "disabled");
    $(".PTNav li a").removeClass("disabledLink");
}