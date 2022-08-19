const display = document.getElementById('displayBar')
let element = document.createElement('div')
const operators = document.querySelectorAll(".operator")
const numbers = document.querySelectorAll(".number")


let int1 = "";
let int2 = "";
let operator = "";

numbers.forEach(number => {
    number.addEventListener("click", e =>{
        if (operator === ""){
            int1 += e.target.innerText; 
           
          
        } 
        else {
            int2 += e.target.innerText;
        } 
    });
});

operators.forEach(op =>{
    op.addEventListener("click", e =>{
        if (e.target.innerText == "Clear"){
            int1 = "";
            int2 = "";
            operator ="";
        }
        else if (e.target.innerText !== "="){
            operator = e.target.innerText;
            
            display.append(int1 + " ")
            display.append(operator + " ")
            
        } else {
            display.append(int2);
            if (int2 == 0 && operator == "/"){
                alert('Don\'t try that');
                
            }
            switch (operator){
                case "!":
                    display.append(" = " + fac(int1))
                    break;
                case "SQRT":
                    display.append(" = " + sqrt(int1))
                    break;
                case "+":
                   display.append(" = " + addition(int1, int2))
                   break;
                case "-":
                    display.append(" = " + subtract(int1,int2))
                    break;
                case "x":
                    display.append(" = " + multiply(int1,int2))
                    break;
                case "/":
                    display.append(" = " + divide(int1,int2))
                    break;
                default:
                    break;
                
            }
        }
    });
});

function addition(int1, int2){
    if((int1 === int1 && int1 % 1 !== 0)|| (int2 === int2 && int2 % 1 !== 0)){
        value = (parseFloat(int1) + parseFloat(int2))
        roundedValue = value.toFixed(2)
        realValue = roundedValue
    }
    else if (int1 === int1 && int1 % 1 ===0){
        value = (parseInt(int1) + parseInt(int2))
        realValue = value
    }
   
    
    return realValue
}
function subtract(int1,int2){
    if(int1 === int1 && int1 % 1 !== 0 || (int2 === int2 && int2 % 1 !== 0)){
        value = (parseFloat(int1) - parseFloat(int2))
        roundedValue = value.toFixed(2)
        realValue = roundedValue
    }
    else if (int1 === int1 && int1 % 1 ===0){
        value = (parseInt(int1) - parseInt(int2))
        realValue = value
    }
    return realValue
}
function multiply(int1, int2 ){
    if(int1 === int1 && int1 % 1 !== 0 || (int2 === int2 && int2 % 1 !== 0)){
        value = (parseFloat(int1) * parseFloat(int2))
        roundedValue = value.toFixed(2)
        realValue = roundedValue
    }
    else if (int1 === int1 && int1 % 1 ===0){
        value = (parseInt(int1) * parseInt(int2))
        realValue = value
    }
    return realValue
    
}
function divide(int1, int2){
    if(int1 === int1 && int1 % 1 !== 0 || (int2 === int2 && int2 % 1 !== 0)){
        value = (parseFloat(int1) / parseFloat(int2))
        roundedValue = value.toFixed(2)
        realValue = roundedValue
    }
    else if (int1 === int1 && int1 % 1 ===0){
        value = (parseInt(int1) / parseInt(int2))
        realValue = value
    }
    return realValue
}

function sqrt (int1){
    value = Math.sqrt(int1)
    if (value === value && value % 1 !== 0){
        roundedValue = value.toFixed(2)
        realValue = roundedValue
    }
    realValue = value
    return realValue
}
function fac (int1){
    if (int1 === 0 || int1 === 1){
        return 1
    }
    else {
        return int1 * fac(int1 - 1)
        
    }
}

/* function printDisplay(displayValue){

const display = document.getElementById('displayBar')
const element = document.createElement('div')
element.style.display = 'inline'
element.innerHTML = displayValue;
display.append(element);


}
*/
 function clearDisplay(elementID){
   document.getElementById(elementID).innerText="";
   document.getElementById(elementID).innerHTML="";
  
 }