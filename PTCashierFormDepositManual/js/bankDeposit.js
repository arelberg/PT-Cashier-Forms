
$(document).ready(function () {
    var bankname;
    var bankurl;

    $('#datetimepicker').datetimepicker({
        format: 'yyyy-MM-dd hh:mm:ss'
    });

    $("#inputAmount, #inputAmount02, #inputAmount03, #inputAmount04").decimalinput();

    $("#firstFormSubmit").click(function () {
        if ($.trim($('#inputAmount').val()) == "" || $("#firstFormSelect").val() == "-1") {
            alert("请您选择转账方式以及存款金额");
            return false;
        }

        if (parseFloat($.trim($("#inputAmount").val())) > 500000 || parseFloat($.trim($("#inputAmount").val())) < 1) {
            alert("存款金额不能小于1或大于500000");
            return false;
        }
        if ($("#firstFormSelect").val() == "1") {
            $("#firstFormContentOK").val("进入网银支付");
        } else {
            $("#firstFormContentOK").val("进入第二步");
        }
        $("#secondForm01").show();
        $("#firstForm01").hide();
    });


    $("#secondFormSubmit").click(function () {
        var rnd = Math.random() * 0.95 == 0 ? 0.1 : Math.random() * 0.95;
        var type = $("#firstFormSelect").val()
        var inputamount = $("#inputAmount").val();
        var amount;
        var statusid = $("#depositstatusid").val();
        if ($.trim(statusid) != "")
            return false;
        if ((bankname == "icbc" && type == "1") || type == "2")
            amount = inputamount;
        else
            amount = (parseFloat(inputamount) + rnd).toFixed(1);
        $("#amount").html(amount);
        $("#txtDepositAmount").val(amount);


        /* B: I just added this code */

        $("#inputAmount").attr("disabled", "disabled");
        $("#firstFormSubmit").attr("disabled", "disabled");
        $("#firstFormSelect").attr("disabled", "disabled");
        $("#firstForm01").show();
        $("#secondForm01").hide();
        $("#firstFormContentCont01").show();

        /* E: I just added this code */
        
//        $.ajax({
//            type: "POST",
//            url: "socket.aspx?action=getbankinfo",
//            data: { bank: bankname, type: type, inputamount: inputamount, genamount: amount },
//            beforeSend: function () {
//                $("#loadingicon").show();
//                $("#secondFormSubmit").attr("disabled", "disabled");
//                $("#secondFormCancel").attr("disabled", "disabled");
//            },
//            success: function (data) {
//                $("#loadingicon").hide();
//                $("#secondFormSubmit").removeAttr("disabled");
//                $("#secondFormCancel").removeAttr("disabled");
//                var result = data.split("|");

//                if (result[0] == "0") {
//                    $("#amount").html(amount);
//                    $("#depositstatusid").val(result[1]);
//                    $("#accountname").html(result[3]);
//                    $("#accountno").html(result[4]);
//                    
//                    //第二步表单数据填充
//                    $("#txtPayeeName").val(result[3]);
//                    $("#txtDepositName").val(result[2]);
//                    $("#txtDepositAmount").val(amount);

//                    $("#inputAmount").attr("disabled", "disabled");
//                    $("#firstFormSubmit").attr("disabled", "disabled");
//                    $("#firstFormSelect").attr("disabled", "disabled");
//                    $("#firstForm01").show();
//                    $("#secondForm01").hide();
//                    $("#firstFormContentCont01").show();
//                } else if (result[0] == "-1") {
//                    alert(result[1]);
//                    if (self != top) {
//                        top.parent.window.location.href = "default.aspx";
//                    }
//                    else {
//                        window.location.href = "default.aspx";
//                    }
//                } else {
//                    $("#secondFormCancel").click();
//                    alert(result[1]);
//                }
//            }
//        });
    });

    $("#goBack").click(function () {
        $(".secondTabContent01").show();
        $(".secondTabDeposit01").hide();
        $("#inputAmount").val("");
        $("#textFieldSerial").val("");
        $("#inputAmount").removeAttr("disabled");
        $("#firstFormSelect").removeAttr("disabled");
        $("#firstFormContentCont01").hide();
        $("#firstFormSelect").val("-1");
        $("#firstFormSubmit").removeAttr("disabled");
        $("#firstFormContentOK").removeAttr("disabled");
        $("#amount").html("");
        $("#depositstatusid").val("");
        $("#accountname").html("");
        $("#accountno").html("");
        $("#depositstatusid").val("");
        //第二步表单数据填充
        $("#txtPayeeName").val("");
        $("#txtDepositName").val("");
        $("#txtDepositAmount").val("");
    });

    $("#thirdFormCancel").click(function () {
        $(".secondTabContent01").hide();
        $(".secondTabDeposit01").show();
        $("#thirdForm01").hide();
        $("#inputAmount").val("");
        $("#textFieldSerial").val("");
        $("#inputAmount").removeAttr("disabled");
        $("#firstFormSelect").removeAttr("disabled");
        $("#firstFormContentCont01").hide();
        $("#firstFormSelect").val("-1");
        $("#firstFormSubmit").removeAttr("disabled");
        $("#firstFormContentOK").removeAttr("disabled");
        $("#amount").html("");
        $("#depositstatusid").val("");
        $("#accountname").html("");
        $("#accountno").html("");
        $("#depositstatusid").val("");
        //第二步表单数据填充
        $("#txtPayeeName").val("");
        $("#txtDepositName").val("");
        $("#txtDepositAmount").val("");
    });

    $("#firstFormContentOK").click(function () {
        $("#thirdForm01").show();
        if ($("#firstFormSelect").val() == "2" || $("#firstFormSelect").val() == "4") {
            $("#datetimepicker").show();
            $("#textFieldSerial").hide();
            $("#txtLink").hide();
        }
        else {
            if (bankname != "icbc") {
                $("#datetimepicker").show();
                $("#textFieldSerial").hide();
                $("#txtLink").hide();
            }
            else {
                $("#datetimepicker").hide();
                $("#textFieldSerial").show();
                $("#txtLink").show();
            }
            window.open(bankurl);
        }
        $("#firstFormContentOK").attr("disabled", "disabled");
    });

    $("#secondFormCancel").click(function () {
        $(".secondTabContent01").show();
        $(".secondTabDeposit01").hide();
        $("#inputAmount").val("");
        $("#textFieldSerial").val("");
        $("#depositstatusid").val("");
        $("#inputAmount").removeAttr("disabled");
        $("#firstFormSelect").removeAttr("disabled");
        $("#firstFormContentCont01").hide();
        $("#firstFormSelect").val("-1");
        $("#firstFormSubmit").removeAttr("disabled");
        $("#firstFormContentOK").removeAttr("disabled");
    });

    /* Once Clicked the Deposit Bank */
    $("#depositBank01,#depositBank02,#depositBank03,#depositBank04").click(function () {
        switch(this.id)
        {
            case "depositBank01":
                $("#banklogo").attr("src","images/HD_01-yellow.png");
                bankname = "icbc";
                bankurl = "https://mybank1.icbc.com.cn/icbc/perbank/index.jsp";
                break;
            case "depositBank02":
                $("#banklogo").attr("src","images/HD_02-yellow.png");
                bankname = "ccb";
                bankurl = "https://ibsbjstar.ccb.com.cn/app/V5/CN/STY1/login.jsp"
                break;
            case "depositBank03":
                $("#banklogo").attr("src","images/HD_03-yellow.png");
                bankname = "aboc";
                bankurl = "http://www.abchina.com/cn/EBanking/Ebanklogin/PCustomerLogin/default.htm";
                break;
            case "depositBank04":
                $("#banklogo").attr("src","images/HD_04-yellow.png");
                bankname = "cmb";
                bankurl = "http://www.cmbchina.com/personal/netbank/";
                break;
        }
        $(".secondTabContent01").hide();
        $(".secondTabDeposit01").show();

        $("#icbc").show();

        $("#firstForm01").show();
        $("#secondForm01").hide();
        $("#thirdForm01").hide();
    });

    $("#thirdFormSubmit").click(function () {
        var payee = $("#txtPayeeName").val();
        var payor = $("#txtDepositName").val();
        var amount = $("#txtDepositAmount").val();
        var depositstatusid = $("#depositstatusid").val();
        var sn = $("#textFieldSerial").is(":hidden") ? $("#txtDateFrom").val() : $("#textFieldSerial").val();
        var payeedb = $("#accountname").text();

        if ($.trim(payee) == "") {
            alert("收款人姓名不能为空，请重新填写！");
            $("#txtPayeeName").focus();
            return false;
        }

        if ($.trim(payor) == "") {
            alert("存款人姓名不能为空，请重新填写！");
            $("#txtDepositName").focus();
            return false;
        }

        if ($.trim(amount) == "") {
            alert("存款金额不能为空，请重新填写！");
            $("#txtDepositAmount").focus();
            return false;;
        }

        if (parseFloat(amount) > 500000 || parseFloat(amount) < 1) {
            alert("存款金额不能小于1元或者大于50万元，请您重新输入！")
        }

        if ($.trim($("#txtDateFrom").val()) == "" && !$("#datetimepicker").is(":hidden")) {
            alert("请选择您存款的具体时间!");
            $(".icon-calendar").click();
            return false;
        }

        if (!$("#txtDateFrom").is(":hidden")) {
            var dtnow = new Date();
            var deposittime = $.trim(sn);
            deposittime = deposittime.replace("-", "/");
            if (Date.parse(deposittime) > Date.parse(dtnow)) {
                alert("您的存款时间晚于现在，请重新填写！");
                $(".icon-calendar").click();
                return false;
            }
        }

        if ($.trim($("#textFieldSerial").val()) == "" && !$("#textFieldSerial").is(":hidden")) {
            alert("请输入您的存款流水号！");
            $("#textFieldSerial").focus();
            return false;
        }

        var rule = /^HQH\d{21}$/;
        if (!$("#textFieldSerial").is(":hidden") && !rule.test($("#textFieldSerial").val())) {
            alert("输入的流水号不正确，正确的流水号是已HQH加上21位数字组成，请重新填写！");
            $("#textFieldSerial").focus();
            return false;
        }

        if ($.trim(depositstatusid) == "") {
            alert("您的操作有误，请刷新页面后重新操作！");
            return false;
        }

        if ($.trim(payee) != $.trim($("#accountname").text())) {
            if (!confirm("您输入的收款人姓名和我们提供的收款人姓名不一致，您确定要提交吗？"))
                return false;
        }

//        $.ajax({
//            type: "POST",
//            url: "socket.aspx?action=bankdeposit",
//            data: { statusid: depositstatusid, amount: amount, payor: payor, sn: sn, payee: payee, payeedb: payeedb },
//            beforeSend: function () {
//                $("#loadingicon1").show();
//                $("#thirdFormSubmit").attr("disabled", "disabled");
//                $("#thirdFormCancel").attr("disabled", "disabled");
//            },
//            success: function (data) {
//                $("#loadingicon1").hide();
//                $("#thirdFormSubmit").removeAttr("disabled");
//                $("#thirdFormCancel").removeAttr("disabled");
//                var result = data.split("|");

//                if (result[0] == "0") {
//                    alert(result[1]);
//                    window.location.reload();
//                } else if (result[0] == "-1") {
//                    alert(result[1]);
//                    if (self != top) {
//                        top.parent.window.location.href = "default.aspx";
//                    }
//                    else {
//                        window.location.href = "default.aspx";
//                    }
//                } else {
//                    alert(result[1]);
//                }
//            }
//        });
    });

    $("#icbccopy1,#icbccopy2,#icbccopy3").mouseenter(function () {
        init();
        if (window.clip1)
            window.clip1.reposition();
        if (window.clip2)
            window.clip2.reposition();
        if (window.clip3)
            window.clip3.reposition();
    });
});

function date2str(x, y) {
    var z = { M: x.getMonth() + 1, d: x.getDate(), h: x.getHours(), m: x.getMinutes(), s: x.getSeconds() };
    y = y.replace(/(M+|d+|h+|m+|s+)/g, function (v) { return ((v.length > 1 ? "0" : "") + eval('z.' + v.slice(-1))).slice(-2) });
    return y.replace(/(y+)/g, function (v) { return x.getFullYear().toString().slice(-v.length) });
}


window.clip1 = null;
window.clip2 = null;
window.clip3 = null;

function init() {
    window.clip1 = new ZeroClipboard.Client();
    window.clip2 = new ZeroClipboard.Client();
    window.clip3 = new ZeroClipboard.Client();
    window.clip1.setHandCursor(true);
    window.clip2.setHandCursor(true);
    window.clip3.setHandCursor(true);

    window.clip1.addEventListener('mouseDown', function (client) {
        window.clip1.setText(document.getElementById("amount").innerText);
    });
    window.clip1.addEventListener('complete', function (client, text) {
        alert("金额已经复制成功！");
    });

    window.clip2.addEventListener('mouseDown', function (client) {
        window.clip2.setText(document.getElementById("accountname").innerText);
    });
    window.clip2.addEventListener('complete', function (client, text) {
        alert("收款人姓名复制成功！");
    });

    window.clip3.addEventListener('mouseDown', function (client) {
        window.clip3.setText(document.getElementById("accountno").innerText);
    });
    window.clip3.addEventListener('complete', function (client, text) {
        alert("收款账号复制成功！");
    });

    window.clip1.glue("icbccopy1");
    window.clip2.glue("icbccopy2");
    window.clip3.glue("icbccopy3");
}

