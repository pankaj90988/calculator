let buttons = document.querySelectorAll(".inputbtn")
let displayText = document.querySelector("#outputDisplay")
let togglebtn = document.querySelector(".toggle")
let body = document.querySelector("body")
let outputdisplay = document.querySelector("#outputDisplay")

let currenMode = "white";
displayText.value = ""

function addInput(e) {
    let inputText = e.target.innerText;

    if (inputText == "AC") {
        displayText.value = "";
    } else if (inputText == "Del") {
        for (let i = 0; i < displayText.value.length; i++) {
            displayText.value = displayText.value.slice(0, displayText.value.length - 1);

            console.log(displayText.value.length)
        }

    } else if (inputText == "=") {
        if(displayText.value.length > 0){
            displayText.value = eval(displayText.value)
        }else{
            displayText.value = "";
        }
        
        
    } else {
        displayText.value += inputText.replaceAll("x", "*");
    }
}

buttons.forEach(button =>
    button.addEventListener('click', (e) => addInput(e))
)


function changeMode() {
    if (currenMode == "white") {
        body.style.backgroundColor = "black";
        outputdisplay.style.backgroundColor = "black";
        outputdisplay.style.color = "white"
        currenMode = "black";
        togglebtn.style.backgroundColor = "orangered"
        togglebtn.style.color = "white"
    } else {
        body.style.backgroundColor = "white";
        outputdisplay.style.backgroundColor = "white";
        outputdisplay.style.color = "black"
        togglebtn.style.backgroundColor = "white"
        togglebtn.style.color = "black"
        currenMode = "white"
    }
}



togglebtn.addEventListener('click', changeMode)
