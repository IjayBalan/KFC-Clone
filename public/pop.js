var overlay=document.getElementById("overlay")
var box=document.getElementById("box")
var overlay2=document.getElementById("overlay2")
var main=document.getElementById("main")

function show(){
    box.style.display="block"
    overlay.style.display="block"
    main.style.display="none"
}
function cancel(){
    box.style.display="none"
    overlay.style.display="none"
    main.style.display="block"   
}

function snow(){
    overlay2.style.display="block"
    main.style.display="none"
}
function cancet(){
    overlay2.style.display="none"
    main.style.display="block" 
}


