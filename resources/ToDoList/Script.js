const tarea = document.getElementById("task");
const Lista = document.querySelector(".Lists");


function clicked(){
    if(tarea.value===""){
        alert("la tarea no debe estar vacia")
    } else{
        let li = document.createElement("li");
        li.innerHTML = tarea.value;
        Lista.appendChild(li);
        tarea.value = "";
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    guardar();
}

Lista.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    } else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
    }
    guardar();
})

function guardar(){
    localStorage.setItem("data",Lista.innerHTML);
}

function getData(){
    Lista.innerHTML = LocalStorage.getItem("data");
}

getData();