
  function toggleMenu() {
    const navLinks = document.querySelector("nav > ul");
    const menuIcon = document.querySelector(".menu-icon");
    navLinks.classList.toggle("active");
    menuIcon.classList.toggle("active");
  }


document.getElementById("downloadBtn").addEventListener("click", function() {
   
    window.open("./Sheneka_K_Resume.pdf", "_blank");
});


document.getElementById("contactMeBtn").addEventListener("click", function() {
   
    const contactSection = document.getElementById("contact");
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
        // Fallback or alert if the contact section is missing
        console.warn("Contact section with id='contact' not found. Opening email.");
        window.location.href = "mailto:sheneka@example.com";
    }

});
