// getting display element in html
const display = document.getElementById("display");

// creating a function 
function appendToDisplay(input){
    display.value += input; 
}

function clearDisplay(){
    display.value = "";
}
  
function calculate(){
try{
 display.value = eval(display.value); 

}
catch(error){
   display.value = "error";
}
} 