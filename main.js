"use strict";

const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");
const dropdown = document.getElementById("dropdown");
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const footer = document.getElementById("footer");
const nav = document.getElementsByClassName("navbar")[0];

function opener() {
  hamburger.style.display = "none";
  close.style.display = "block";
  dropdown.style.display = "block";
  first.style.display = "none";
  second.style.display = "none";
  third.style.display = "none";
  footer.style.display = "none";
}

function closer() {
  hamburger.style.display = "block";
  close.style.display = "none";
  dropdown.style.display = "none";
  first.style.display = "flex";
  second.style.display = "flex";
  third.style.display = "flex";
  third.style.flexDirection = "column";
  footer.style.display = "flex";
  footer.style.flexDirection = "column";
}

hamburger.addEventListener("click", opener);
close.addEventListener("click", closer);

let mq = window.matchMedia("(max-width: 767px)");
window.addEventListener("resize", () => {
  if (mq.matches && dropdown.style.display == "block") {
    hamburger.style.display = "none";
    first.style.display = "none";
    second.style.display = "none";
    third.style.display = "none";
    footer.style.display = "none";
  } else if (mq.matches == false) {
    hamburger.style.display = "none";
    close.style.display = "none";
    dropdown.style.display = "none";
    nav.style.display = "block";
    first.style.display = "flex";
    second.style.display = "flex";
    third.style.display = "flex";
    third.style.flexDirection = "column";
    footer.style.display = "flex";
    footer.style.flexDirection = "column";
  } else if (mq.matches) {
    hamburger.style.display = "block";
    nav.style.display = "none";
    close.style.display = "none";
    dropdown.style.display = "none";
    first.style.display = "flex";
    second.style.display = "flex";
    third.style.display = "flex";
    third.style.flexDirection = "column";
    footer.style.display = "flex";
    footer.style.flexDirection = "column";
  }
});
