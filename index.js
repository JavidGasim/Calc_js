var mode = document.getElementById("switch");

let bg = document.querySelector(".first-section");
let calczone = document.querySelector(".calc-zone");
let calchis = document.querySelector(".calc-history");
let btn = document.querySelectorAll(".btn");
let count = 0;

let area1 = document.getElementById("calc-part");
let area2 = document.getElementById("calc-hist");

function changeMod() {
  if (count == 0 || count % 2 == 0) {
    bg.classList.add("color");
    calczone.classList.add("calc-zone2");
    calchis.classList.add("calc-history2");
    btn.forEach((element) => {
      element.classList.add("btn2");
    });
    count++;
  } else {
    if (count % 2 == 1) {
      bg.classList.remove("color");
      calczone.classList.remove("calc-zone2");
      calchis.classList.remove("calc-history2");
      btn.forEach((element) => {
        element.classList.remove("btn2");
      });
    }
    count++;
  }
}

function enterNum(id) {
  if (area2.innerHTML === "0 ") {
    area2.innerHTML = "";
  }
  area2.innerHTML += document.getElementById(id).innerHTML;
}

function operators(id) {
  let size = area2.innerHTML.length - 1;
  if (
    area2.innerHTML[size] != "-" &&
    area2.innerHTML[size] != "+" &&
    area2.innerHTML[size] != "/" &&
    area2.innerHTML[size] != "*" &&
    area2.innerHTML[size] != "%" &&
    area2.innerHTML != "0 " &&
    area2.innerHTML[size] != "." &&
    area2.innerHTML != ""
  ) {
    area2.innerHTML += document.getElementById(id).innerHTML;
  }
}

function clearHis(id) {
  area2.innerHTML = "0 ";
  area1.innerHTML.clear;
}

function deleteNum() {
  let size = area2.innerHTML.length - 1;
  if (area2.innerHTML[size] == ".") {
  }
  area2.innerHTML = area2.innerHTML.slice(0, size);
}

function two00(id) {
  let size = area2.innerHTML.length - 1;
  if (
    area2.innerHTML[size] != "-" &&
    area2.innerHTML[size] != "+" &&
    area2.innerHTML[size] != "/" &&
    area2.innerHTML[size] != "*" &&
    area2.innerHTML[size] != "%" &&
    area2.innerHTML != "0 " &&
    area2.innerHTML != ""
  ) {
    area2.innerHTML += document.getElementById(id).innerHTML;
  }
}

function enterNoqte(id) {
  let size = area2.innerHTML.length - 1;
  if (
    area2.innerHTML[size] != "-" &&
    area2.innerHTML[size] != "+" &&
    area2.innerHTML[size] != "/" &&
    area2.innerHTML[size] != "*" &&
    area2.innerHTML[size] != "%" &&
    area2.innerHTML != "0 " &&
    area2.innerHTML != ""
  ) {
    area2.innerHTML += document.getElementById(id).innerHTML;
  }
}

function calculateSol() {
  if (area2.innerHTML != "0 ") {
    var result = eval(area2.innerHTML);
    area1.innerHTML = result.toFixed(2);
    area2.innerHTML = result;
  }
}
