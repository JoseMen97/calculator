const display = document.querySelector('.div-display')
const concatValue = document.querySelector('.concat-value')
const buttons = document.querySelectorAll('button')
const operations = ['+','-','*','/']

let result = 0
let equal = false
buttons.forEach( btn =>{
    btn.addEventListener('click',()=>{
        let valueBtn = btn.textContent
        if (display.textContent == 0){
            if (valueBtn == '+' || valueBtn == '-' || valueBtn == '*' || valueBtn == '/' || valueBtn == '=' || valueBtn == 'AC' || valueBtn == '←') {
                displayCero()
            }else {
                printFirstDisplay(valueBtn)
            }
        }else{
            if (valueBtn == 'AC') displayCero()
            else if (valueBtn == '=') total()
            else if (valueBtn == '←') eraseDisplay()
            else {
                if (!equal){
                    printDisplay(valueBtn)
                }else{
                    if (operations.some( operation => operation == valueBtn)){
                        printDisplay(valueBtn)
                    }else{
                        printFirstDisplay(valueBtn)
                    }
                    equal = false
                }
            }
        }
    })
}) 

function displayCero(){
    display.textContent = 0
    equal =  false
    result = 0
}
function printFirstDisplay(valueBtn){
    display.textContent = valueBtn
    result = valueBtn
}
function printDisplay(valueBtn){
    result += valueBtn
    display.textContent = result
}
function eraseDisplay() {
    if (equal) displayCero()
    else{
        result = result.slice(0,-1)
        display.textContent = result
        if (!result) displayCero()
    }
    console.log(result);
}
function total (){
    display.textContent = eval(result)
    result = display.textContent
    equal = true
}