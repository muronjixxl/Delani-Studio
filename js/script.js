$(document).ready(function () {
    $("#development-image").click(function () {
        $("#development-image").slideDown('1500').hide('1000');
        $("#development").show('1500');
    });
    $("#development").click(function () {
        $("#development").slideUp('1500');
        $("#development-image").slideDown('1500');
    });
});

$(document).ready(function () {
    $("#design-image").click(function () {
        $("#design-image").slideDown('1500').hide('1000');
        $("#design").show('1500');
    });
    $("#design").click(function () {
        $("#design").slideUp('1500');
        $("#design-image").slideDown('1500');
    });
});

$(document).ready(function () {
    $("#product-image").click(function () {
        $("#product-image").slideDown('1500').hide('1000');
        $("#product").show('1500');
    });
    $("#product").click(function () {
        $("#product").slideUp('1500');
        $("#product-image").slideDown('1500');
    });
});

    $("#work1").mouseover(function () {
        $("#text1").show();
    }).mouseout(function () {
        $("#text1").hide();
    });


    $("#work2").mouseover(function () {
        $("#text2").show();
    }).mouseout(function () {
        $("#text2").hide();
    });

    $("#work3").mouseover(function () {
        $("#text3").show();
    }).mouseout(function () {
        $("#text3").hide();
    });

    $("#work4").mouseover(function () {
        $("#text4").show();
    }).mouseout(function () {
        $("#text4").hide();
    });

    $("#work5").mouseover(function () {
        $("#text5").show();
    }).mouseout(function () {
        $("#text5").hide();
    });

    $("#work6").mouseover(function () {
        $("#text6").show();
    }).mouseout(function () {
        $("#text6").hide();
    });
    $("#work7").mouseover(function () {
        $("#text7").show();
    }).mouseout(function () {
        $("#text7").hide();
    });

    $("#work8").mouseover(function () {
        $("#text8").show();
    }).mouseout(function () {
        $("#text8").hide();
    });
    $(document).ready(function(){
        $("form#inputForm").submit(function(){
        if ($("#Name").val() == "") {
            alert("Please fill in your name");
        } else if ($("#Email").val() == "") {
            alert("Please provide your E-mail")
        }
         else if ($("#comment").val() == "") {
            alert("Please type in your comment")
        }
         else {
        userName = $("Name").val();
        alert(userName + "we have recieved your message. Thank you for reaching out to us")
        }
    }
    
      


