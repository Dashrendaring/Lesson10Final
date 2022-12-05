let myName = document.getElementById("nameSean");

function sizeUp(item) {
    item.style.fontSize = "2.6rem";
    item.style.color = "yellow";
}

function sizeDown(item) {
    item.style.fontSize = "2.5rem";
    item.style.color = "white";
}

myName.setAttribute("onmouseenter", "sizeUp(this)");
myName.setAttribute("onmouseleave", "sizeDown(this)");


function visitPage() {
    window.location = 'https://github.com/Dashrendaring/Lesson10Final';
}

let myTitle = document.getElementById("title");

function tUp(item) {
    item.style.fontSize = "1.6rem";
    item.style.color = "yellow";
}

function tDown(item) {
    item.style.fontSize = "1.5rem";
    item.style.color = "white";
}

myTitle.setAttribute("onmouseenter", "tUp(this)");
myTitle.setAttribute("onmouseleave", "tDown(this)");

$.ajax({
    url: "https://api.adviceslip.com/advice",
    type: "get",
    dataType: "json",
    success: function (result) {
        console.log(result);

        const postAdvice = document.getElementById("postAdvice");
        postAdvice.innerHTML = ("", result.slip.advice);

    },
})
