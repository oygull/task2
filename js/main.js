let firstBtn = document.getElementById('firstBtn');
let secondBtn = document.getElementById('secondBtn');
let thirdBtn = document.getElementById('thirdBtn');

let innerOne = document.getElementById('innerOne');
let innerTwo = document.getElementById('innerTwo');
let innerThree = document.getElementById('innerThree');
let innerFour = document.getElementById('innerFour');

firstBtn.addEventListener('click', (e)=>{
  innerOne.style.display='block';
  innerTwo.style.display='none';
  innerThree.style.display='none';
  innerFour.style.display='none';
})

secondBtn.addEventListener('click', ()=>{
  innerOne.style.display='none';
  innerTwo.style.display='block';
  innerThree.style.display='none';
  innerFour.style.display='none';
})

thirdBtn.addEventListener('click', ()=>{
  innerOne.style.display='none';
  innerTwo.style.display='none';
  innerThree.style.display='block';
  innerFour.style.display='none';
})

let firstRow = document.getElementById('firstRow');
let secondRowPrev = document.getElementById('secondRowPrev');
let secondRowNext = document.getElementById('secondRowNext');
let thirdRowPrev = document.getElementById('thirdRowPrev');
let thirdRowNext = document.getElementById('thirdRowNext');

firstRow.addEventListener('click', ()=>{
  innerOne.style.display='none';
  innerTwo.style.display='block';
  innerThree.style.display='none';
  innerFour.style.display='none';
})

secondRowPrev.addEventListener('click', (e)=>{
  innerOne.style.display='block';
  innerTwo.style.display='none';
  innerThree.style.display='none';
  innerFour.style.display='none';
})

secondRowNext.addEventListener('click', ()=>{
  innerOne.style.display='none';
  innerTwo.style.display='none';
  innerThree.style.display='block';
  innerFour.style.display='none';
})

thirdRowPrev.addEventListener('click', ()=>{
  innerOne.style.display='none';
  innerTwo.style.display='block';
  innerThree.style.display='none';
  innerFour.style.display='none';
})

thirdRowNext.addEventListener('click', ()=>{
  innerOne.style.display='none';
  innerTwo.style.display='none';
  innerThree.style.display='none';
  innerFour.style.display='block';
})