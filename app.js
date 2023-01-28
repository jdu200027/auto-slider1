let i = 0;
const images = ['./images/1.jpg','./images/2.jpg','./images/3.jpg','./images/4.jpg'];

function slider(){
    document.slider.src = images[i]
    if(i < images.length -1){
        i++
    } else{
        i = 0
    }
    setTimeout('slider()', 2000)
}
window.onload = slider
