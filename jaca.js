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



