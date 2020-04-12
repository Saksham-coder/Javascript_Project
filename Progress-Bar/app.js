function width() {
  var width = 0;
  var check = document.querySelectorAll("#check");
  console.log(check[0].checked);
  for (var i = 0; i < check.length; i++) {
    if (check[i].checked) {
      width += 121.6;
    }
  }
  document.querySelector(".filling").setAttribute("style", `width:${width}px`);
  console.log(width);
}

document.querySelector(".firsta").oninput = function () {
  if (document.querySelector(".firsta").value.length > 0) {
    var check = document.querySelector(".first");
    // console.log(check)
    check.checked = true;
  } else {
    var check = document.querySelector(".first");
    // console.log(check)
    check.checked = false;
  }
  width();
};

document.querySelector(".seconda").oninput = function () {
  if (document.querySelector(".seconda").value.length > 0) {
    var check = document.querySelector(".second");
    check.checked = true;
  } else {
    var check = document.querySelector(".second");
    check.checked = false;
  }
  width();
};
document.querySelector(".thirda").oninput = function () {
  if (document.querySelector(".thirda").value.length > 0) {
    var check = document.querySelector(".third");
    // console.log(check)
    check.checked = true;
  } else {
    var check = document.querySelector(".third");
    // console.log(check)
    check.checked = false;
  }
  width();
};
document.querySelector(".fourtha").oninput = function () {
  if (document.querySelector(".fourtha").value.length > 0) {
    var check = document.querySelector(".fourth");
    // console.log(check)
    check.checked = true;
  } else {
    var check = document.querySelector(".fourth");
    // console.log(check)
    check.checked = false;
  }
  width();
};
document.querySelector(".fiftha").oninput = function () {
  if (document.querySelector(".fiftha").value.length > 0) {
    var check = document.querySelector(".fifth");
    // console.log(check)
    check.checked = true;
  } else {
    var check = document.querySelector(".fifth");
    // console.log(check)
    check.checked = false;
  }
  width();
};
