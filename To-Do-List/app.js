var num = 0;
function definition(){
    const adding = document.querySelector("button")
    adding.addEventListener('click',()=>{
        const writing = adding.previousElementSibling;
        if (writing.value.length>0){
            var ma = document.createElement('div');
            ma.className = "main"

            var node = document.createElement('div');
            node.classList.add("design")
            node.id = (`i${num}`)
            num++

            var spannode = document.createElement('span');
            var spannodetext = document.createTextNode(writing.value);
            spannode.append(spannodetext);

            var symbol = document.createElement('a');
            var sym = document.createTextNode("✔️");
            symbol.append(sym);
            symbol.id = `right`            
            var symbol2 = document.createElement('a');
            var sym2 = document.createTextNode("❌");
            symbol2.append(sym2);
            symbol2.id = `wrong`

            var ma1=document.createElement("div");
            ma1.className = "main1"
            ma1.append(spannode)

            var ma2=document.createElement("div");
            ma2.className = "main2"
            ma2.append(symbol)
            ma2.append(symbol2)
            node.append(ma1)
            node.append(ma2)

            ma.append(node)

            var todolist = document.getElementsByClassName("dolist")
            parent = todolist.parentElement
            todolist[0].appendChild(ma);
            writing.value = ""

        }
        
        window.onclick = e => {
            console.log(e.target);
            console.log(e.target.id);
            console.log(e.target.parentElement.previousElementSibling);
            if (e.target.id === 'wrong'){
            var sorry = e.target.parentElement.parentElement;
            sorry.parentNode.removeChild(sorry)
            }else if (e.target.id === 'right'){
                var under = e.target.parentElement.previousElementSibling;
                console.log(under)
                under.style.textDecoration = "line-through"
            }
        } 
    })
}



definition()