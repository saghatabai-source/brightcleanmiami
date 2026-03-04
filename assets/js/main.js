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
const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

});

document.querySelectorAll("section").forEach(section => {
observer.observe(section);
});
function calculateQuote(){

let size = document.getElementById("homeSize").value;

let type = document.getElementById("cleanType").value;

let price = size * type;

document.getElementById("quoteResult").innerHTML =
"Estimated Price: $" + price;

}
