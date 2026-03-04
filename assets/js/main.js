// MOBILE MENU

document.addEventListener("DOMContentLoaded", function(){

const menuBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

if(menuBtn){

menuBtn.addEventListener("click", function(){

if(nav.style.display === "flex"){
nav.style.display = "none";
}else{
nav.style.display = "flex";
nav.style.flexDirection = "column";
nav.style.position = "absolute";
nav.style.top = "70px";
nav.style.right = "20px";
nav.style.background = "#fff";
nav.style.padding = "20px";
nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
}

});

}

});

document.addEventListener("DOMContentLoaded", function(){

const menuBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

if(menuBtn){

menuBtn.addEventListener("click", function(){

if(nav.style.display === "flex"){
nav.style.display = "none";
}else{
nav.style.display = "flex";
nav.style.flexDirection = "column";
nav.style.position = "absolute";
nav.style.top = "70px";
nav.style.right = "20px";
nav.style.background = "#fff";
nav.style.padding = "20px";
nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
}

});

}

});
