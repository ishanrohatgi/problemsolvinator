let image = document.getElementsByClassName("image");
let container = document.getElementsByClassName("mainContainer");
console.log(image,container);
function myFunc(){
if(container[0].style.height==="45vh"){
   image[0].style.display="grid";
   container[0].style.height ="65vh";
}
else{
    image[0].style.display="none";
    container[0].style.height ="45vh";
}
}