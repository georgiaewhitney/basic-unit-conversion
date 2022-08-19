/*
1 metre = 3.281 feet
1 litre = 0.264 gallon
1 kilogram = 2.204 pound
*/


const convertBtn = document.getElementById("convert-btn");
let inputEl = document.getElementById("input-el");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");


convertBtn.addEventListener('click', function() {
  convertLength();
  convertVolume();
  convertMass();
  inputEl.value = '';

})

function convertLength() {
  let metres = (inputEl.value / 3.281).toFixed(3);
  let feet = (inputEl.value * 3.281).toFixed(3);
  lengthEl.textContent = `${inputEl.value} metres = ${feet} feet | | ${inputEl.value} feet = ${metres} metres`
}

function convertVolume() {
  let litres = (inputEl.value / 0.264).toFixed(3);
  let gallons = (inputEl.value * 0.264).toFixed(3);
  volumeEl.textContent = `${inputEl.value} litres = ${gallons} gallon | | ${inputEl.value} gallon = ${litres} litres`
}

function convertMass() {
  let kilos = (inputEl.value / 2.204).toFixed(3);
  let pounds = (inputEl.value * 2.204).toFixed(3);
  massEl.textContent = `${inputEl.value} kilograms = ${pounds} pounds |  | ${inputEl.value} pounds = ${kilos} kilograms`
}