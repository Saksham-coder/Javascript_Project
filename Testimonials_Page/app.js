var num = 0
function swipe(){
    const back = document.querySelectorAll(".coming");
    back[num].addEventListener('click',() => {
        if (num === 0){
        const parent = back[num].parentElement.parentElement
        parent.classList.add("inactive");
        parent.classList.remove("active");
        parent.nextElementSibling.classList.add("active");
        parent.nextElementSibling.classList.remove("inactive");
        num+=1
        console.log(num)
        }
        back[num].addEventListener('click',() => {
        if (num === 1){
        const parent = back[num].parentElement.parentElement
        parent.classList.add("inactive");
        parent.classList.remove("active");
        parent.nextElementSibling.classList.add("active");
        parent.nextElementSibling.classList.remove("inactive");
        num+=1
        console.log(num)
        }
    })
})


const forward = document.querySelectorAll(".going");
    forward[2].addEventListener('click',() => {
    if (num === 2){
    const parent = forward[num].parentElement.parentElement
    parent.classList.add("inactive");
    parent.classList.remove("active");
    parent.previousElementSibling.classList.add("active");
    parent.previousElementSibling.classList.remove("inactive");
    num-=1
    console.log(num)
    }
    forward[1].addEventListener('click',() => {
    if (num === 1){
    const parent = forward[num].parentElement.parentElement
    parent.classList.add("inactive");
    parent.classList.remove("active");
    parent.previousElementSibling.classList.add("active");
    parent.previousElementSibling.classList.remove("inactive");
    num-=1
    console.log(num)
    }
})
})







}
swipe()



