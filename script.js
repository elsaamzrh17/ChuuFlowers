document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        });
    });
    
    document.querySelectorAll(".auth-buttons button, .signup-btn").forEach(button => {
        button.addEventListener("mouseenter", function () {
            this.style.opacity = "0.8";
        });
        button.addEventListener("mouseleave", function () {
            this.style.opacity = "1";
        });
    });


    document.querySelector(".signup-btn").addEventListener("click", function () {
        alert("Sign Up Page is Not Available Yet!");
    });
});

document.querySelectorAll(".product-card img").forEach(img => {
    img.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.1)";
        this.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
    });

    img.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
        this.style.boxShadow = "none";
    });
});
