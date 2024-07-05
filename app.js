let buttons = document.querySelectorAll(".inputbtn")
let displayText = document.querySelector("#outputDisplay")
let togglebtn = document.querySelector(".toggle")
let body = document.querySelector("body")
let outputdisplay = document.querySelector("#outputDisplay")
let movertext = document.querySelector(".movetext")
displayText.focus();

let currenMode = "white";
let string = "";

function addInput(e) {
    let inputText = e.target.innerText;

    if (inputText == "AC") {
        displayText.value = "";
    } else if (inputText == "Del") {
        displayText.value = displayText.value.substring(0, displayText.value.length - 1);
        console.log(displayText.value.length)

    } else if (inputText == "=") {
        if (displayText.value.length > 0) {
            displayText.value = eval(displayText.value);
            displayText.value = string;
        } else {
            displayText.value = " ";
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
        movertext.style.color = "white"
    } else {
        body.style.backgroundColor = "white";
        outputdisplay.style.backgroundColor = "white";
        outputdisplay.style.color = "black"
        togglebtn.style.backgroundColor = "white"
        togglebtn.style.color = "black"
        currenMode = "white"
        movertext.style.color = "black"

    }
}



togglebtn.addEventListener('click', changeMode)
