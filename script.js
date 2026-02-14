document.addEventListener("DOMContentLoaded", () => {

    /* Typing Effect */
    const text = "Web Development Internship";
    const typing = document.querySelector(".typing");
    let i = 0;

    function typeEffect(){
        if(i < text.length){
            typing.textContent += text.charAt(i);
            i++;
            setTimeout(typeEffect, 100);
        }
    }

    typing.textContent = "";
    typeEffect();


    /* Scroll Animation */
    const scrollElements = document.querySelectorAll(".scroll");

    window.addEventListener("scroll", () => {
        scrollElements.forEach(el => {
            if(el.getBoundingClientRect().top < window.innerHeight - 100){
                el.classList.add("show");
            }
        });
    });


    /* Form Submit */
    const form = document.getElementById("internForm");
    const thankYou = document.getElementById("thankYou");

    if(form){
        form.addEventListener("submit", e => {
            e.preventDefault();
            form.style.display = "none";
            thankYou.style.display = "block";
        });
    }
});
