"use strict";

let saber = document.querySelector(".saber");
let toms = document.querySelector(".toms");
let modis = document.querySelector(".modis");
let calipso = document.querySelector(".calipso");

document.querySelector(".s1").addEventListener("click", () => {
  saber.classList.add("unhide");
  toms.classList.remove("unhide");
  modis.classList.remove("unhide");
  calipso.classList.remove("unhide");
});

document.querySelector(".s2").addEventListener("click", () => {
  saber.classList.remove("unhide");
  toms.classList.remove("unhide");
  modis.classList.add("unhide");
  calipso.classList.remove("unhide");
});

document.querySelector(".s3").addEventListener("click", () => {
  saber.classList.remove("unhide");
  toms.classList.add("unhide");
  modis.classList.remove("unhide");
  calipso.classList.remove("unhide");
});

document.querySelector(".s4").addEventListener("click", () => {
  saber.classList.remove("unhide");
  toms.classList.remove("unhide");
  modis.classList.remove("unhide");
  calipso.classList.add("unhide");
});
