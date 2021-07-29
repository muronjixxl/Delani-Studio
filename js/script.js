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

$(`.portfolio1`).hover(() => {
  $(`.overlay1`).show(800);
},
  () => {
    $(`.overlay1`).hide(800);
  }
)

$(`.portfolio2`).hover(() => {
  $(`.overlay2`).show(800);
},
  () => {
    $(`.overlay2`).hide(800);
  }
)

$(`.portfolio3`).hover(() => {
  $(`.overlay3`).show(800);
},
  () => {
    $(`.overlay3`).hide(800);
  }
)

$(`.portfolio4`).hover(() => {
  $(`.overlay4`).show(800);
},
  () => {
    $(`.overlay4`).hide(800);
  }
)

$(`.portfolio5`).hover(() => {
  $(`.overlay5`).show(800);
},
  () => {
    $(`.overlay5`).hide(800);
  }
)

$(`.portfolio6`).hover(() => {
  $(`.overlay6`).show(800);
},
  () => {
    $(`.overlay6`).hide(800);
  }
)

$(`.portfolio7`).hover(() => {
  $(`.overlay7`).show(800);
},
  () => {
    $(`.overlay7`).hide(800);
  }
)

$(`.portfolio8`).hover(() => {
  $(`.overlay8`).show(800);
},
  () => {
    $(`.overlay8`).hide(800);
  }
)

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