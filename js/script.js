$(document).ready(function () {
  $("#development-image").click(function () {
    $("#development-image").slideDown().hide();
    $("#development").show(1000);
  });
  $("#development").click(function () {
    $("#development").slideUp();
    $("#development-image").slideDown();
  });
});
$(document).ready(function () {
  $("#design-image").click(function () {
    $("#design-image").slideDown().hide();
    $("#design").show(1000);
  });
  $("#design").click(function () {
    $("#design").slideUp();
    $("#design-image").slideDown();
  });
});
$(document).ready(function () {
  $("#product-image").click(function () {
    $("#product-image").slideDown().hide();
    $("#product").show(1000);
  });
  $("#product").click(function () {
    $("#product").slideUp();
    $("#product-image").slideDown();
  });
});
$(".image-overlay").hover(function () {
  $(".image-title").css("border", "1px solid", "white");

  $(".image-title").css("border-radius", "2px");
  $(".image-title").css("padding", "5px");
});
$(document).ready(function () {
  $(".text").hover(
    function () {
      $(this).animate({ opacity: "1" });
    },
    function () {
      $(this).animate({ opacity: "0" });
    }
  );
});
});



let validateInput = () => {
  if ($("#name").val() == "") {
    alert("Please fill in your name");
  } else if ($("#email").val() == "") {
    alert("Please provide your E-mail")
  }
  else if ($("#comment").val() == "") {
    alert("Please fill in your comment.")
  }
  else {
    userName = $("#name").val();
    alert(userName + " we have recieved your message. Thank you for reaching out to us")
  }
}