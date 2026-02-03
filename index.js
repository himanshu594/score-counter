let saveEl = document.getElementById("point");
let hist = document.querySelector(".hist");
let count = 0;
function increment() {
  count = count + 1;
  point.textContent = count;
}
function decrement() {

  if (count>0){
    count = count - 1;
    point.textContent = count;
  }
  else{
    count=0;
  }
} 

function save() {
  let track;
  track = `${count} ,`;
  hist.textContent = hist.textContent + track;
  console.log(track);
  count = 0;
  point.textContent = count;
}
