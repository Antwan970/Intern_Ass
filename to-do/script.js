"use strict";
const toggleBtn = document.getElementById("toggleBtn");
const bio = document.querySelector(".bio");
if (toggleBtn && bio) {
    toggleBtn.addEventListener("click", () => {
        if (bio.style.display === "none") {
            bio.style.display = "block";
            toggleBtn.textContent = "Show Less";
        }
        else {
            bio.style.display = "none";
            toggleBtn.textContent = "Show More";
        }
    });
}
