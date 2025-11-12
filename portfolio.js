
document.getElementById("downloadBtn").addEventListener("click", function() {
   
    window.open("./Sheneka_K_Resume.pdf", "_blank");
});




function toggleMenu(){
   document.querySelector("nav ul").classList.toggle("show");
}


function toggleMenu() {
    const navLinks = document.querySelector("nav > ul");
    const menuIcon = document.querySelector(".menu-icon");
    navLinks.classList.toggle("active");
    menuIcon.classList.toggle("active");
  }


