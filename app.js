function animatedForm() {
    const arrows = document.querySelectorAll(".fa-arrow-circle-down");

    arrows.forEach(arrow => {
        arrow.addEventListener('click',() => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;
            if (input.type==="text" && validatedUser(input)){
                nextSlide(parent,nextForm)
            }else if(input.type==="email"){
                nextSlide(parent,nextForm)
            }else if (input.type ==="password" && validatedUser(input)){
                nextSlide(parent,nextForm)
            }else{
                parent.style.animation = "shake 0.4s ease"
            }  
            parent.addEventListener("animationend", ()=>{
                parent.style.animation = ""
            })
        });
    });
};


function validatedUser(user){
    if (user.value.length < 6){
        error("rgb(189,87,87)");
    }else{
        error("rgb(87, 189, 130)");
        return true;
    }
}


function nextSlide(parent,nextForm){
    parent.classList.add("inactive");
    parent.classList.remove("active");
    nextForm.classList.add("active");
}

function error(color){
    document.body.style.backgroundColor = color;
}
animatedForm();