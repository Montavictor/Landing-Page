let navbar = document.getElementById("navbar");
function navbarScroll() {
    console.log("Scroll"); 
    if (scrollY > 450) {
        navbar.style.backgroundColor = "rgb(3, 0, 66)";
    } else {
        navbar.style.backgroundColor = "transparent";
    }
}

window.addEventListener("scroll", navbarScroll);


// ========================

    let submit = document.getElementById("submit-btn");
    let newDiv = document.createElement("div");
    let button = document.createElement("button");
    

    button.classList.add("btn-primary");
    button.textContent = "Send";
    

    newDiv.appendChild(button);
    submit.appendChild(newDiv);
    
    function sayMessage() {
        alert("Your message has been sent.");
    }
    
    button.addEventListener("click", sayMessage);