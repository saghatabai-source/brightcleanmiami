document.addEventListener("DOMContentLoaded", function(){

const menuBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

if(menuBtn){
menuBtn.addEventListener("click", function(){

if(nav.style.display === "flex"){
nav.style.display = "none";
}
else{
nav.style.display = "flex";
}

});
}

});
