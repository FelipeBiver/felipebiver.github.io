function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    if(display == "none")
    document.getElementById(el).style.display = 'block';
    else
    document.getElementById(el).style.display = 'none';
}
var interval=0;
var maxSlider = document.querySelectorAll('.box-image').length -1;




acao();
function acao(){

let img =document.querySelectorAll('.box-image img')
setInterval(function(){

img[interval].style.display = 'none';
interval++
if(interval > maxSlider){
    interval=0
}
img[interval].style.display = 'block'
},8000)


}
let percent = 0
  let time

  function animate(id1, id2, start, end, duration) {
    if (start === end) return;
    const range = end - start;
    let current = start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    const obj1 = document.getElementById(id1);
    const obj2 = document.getElementById(id2);
    const timer = setInterval(function () {
      current += increment;
      obj1.innerHTML = current;
      obj2.style.strokeDashoffset = `${440 - (440 * current) / 100}`
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  }

  animate("percent1", "circle1", 0, 90, 5000)
  animate("percent2", "circle2", 0, 70, 5000)
  animate("percent3", "circle3", 0, 50, 5000)
  animate("percent4", "circle4", 0, 90, 5000)
  animate("percent5", "circle5", 0, 65, 5000)
  animate("percent6", "circle6", 0, 50, 5000)
  



