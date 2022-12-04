let myName = document.getElementById ("nameSean");


function sizeUp(item){  
item.style.fontsize = "2.7rem";
}

function sizeDown(item){
    item.style.fontsize = "2.5rem";
}


 myName.setAttribute ("onmouseenter", sizeUp(this));   
 myName.setAttribute ("onmouseleave", sizeDown(this));  
 
//  myName.addEventListener("onmouseenter", sizeUp(this));
//  myName.addEventListener("onmouseleave", sizeDown(this));