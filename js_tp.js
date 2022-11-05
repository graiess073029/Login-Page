var console_text = document.getElementById("console_text");
console_text.textContent = ""

function choose_3amaliya(level,operator_){
    console_text.style.color = "black"

    if (level == 1){min = 1; max = 10}
    else if (level == 2){min = 10; max = 50}
    else if (level == 3){min = 50; max = 100}
    else if  (level == 4){min = 100; max = 1000}
    if (operator_ == 5){operator = "+"}
    else if (operator_ == 6){operator = "-"}
    else if (operator_ == 7){operator = "*"}
    else if (operator_ == 8){operator = "/"}
    else if (operator_ == 9){var operators = ['+','-','*','/'];
    operator = operators[Math.floor(Math.random() * operators.length)];}
    var number1 = Math.floor(Math.random() * (max - min)) + min; 
    var number2 = Math.floor(Math.random() * (max - min)) + min;
    if (number1 >= number2 && operator == "-"){text = number1 + " " + operator  + " " + number2}
    else{text = number2 + " " + operator  + " " + number1}
    window.result =parseFloat(eval(text))
    var result_string = window.result.toString().split(".")
    console.log(result_string)
    console.log(result_string[0])
    console.log(result_string[1])
    if (result_string[1] != undefined){window.result = result_string[0] +"."+    result_string[1].slice(0,2)}
    console_text.textContent = text + " " + "=" + " "
    console.log(window.result)
    window.operator_ = operator_
    window.level = level};


function verify_question(){
    console.log(window.result)
    input_result = parseFloat(console_text.textContent.split("=")[1])
    console.log(input_result)
    if (input_result ==  window.result){
        console_text.textContent = "Right Answer"
        console_text.style.color = "green"
        setTimeout(console.log("Delay"),2000)
        setTimeout(function() {choose_3amaliya(window.level,window.operator_);},2000)}
   
    else{
        console_text.textContent = "False Answer: " + window.result
        console_text.style.color = "red"
        setTimeout(function() {choose_3amaliya(window.level,window.operator_);},2000)}}

function delete_last(){
   len = console_text.textContent.length
   if (len == 8){}
   else{console_text.textContent    = console_text.textContent.slice(0, -1)  }}

function Zero(){console_text.textContent += "0";verify_console()}
function One(){console_text.textContent += "1";verify_console()}
function Two(){console_text.textContent += "2";verify_console()}
function Three(){console_text.textContent += "3";verify_console()}
function Four(){console_text.textContent += "4";verify_console()}
function Five(){console_text.textContent += "5";verify_console()}
function Six(){console_text.textContent += "6";verify_console()}
function Seven(){console_text.textContent += "7";verify_console()}
function Eight(){console_text.textContent += "8";verify_console()}
function Nine(){console_text.textContent += "9";verify_console()}
function Floater(){verify_float();verify_console()}

function write_float(){console_text.textContent += "."
    if(console_text.textContent[8] == "."){console_text.textContent = text + " " + "=" + " " + "0" + ".";}
    else{}}


function verify_console(){
    if(console_text.textContent.length == 21){delete_last()}
    else{}}


function verify_float(){
    if(console_text.textContent.includes(".")==true){}
    else{write_float()}}


function myFunction(event) {
    var key_b = event.key;
    if (key_b == "1"){One()}
    else if (key_b == "2"){Two()}
    else if (key_b == "3"){Three()}
    else if (key_b == "4"){Four()}
    else if (key_b == "5"){Five()}
    else if (key_b == "6"){Six()}
    else if (key_b == "7"){Seven()}
    else if (key_b == "8"){Eight()}
    else if (key_b == "9"){Nine()}
    else if (key_b == "0"){Zero()}
    else if (key_b == "+"){choose_3amaliya(window.level,5)}
    else if (key_b == "-"){choose_3amaliya(window.level,6)}
    else if (key_b == "*"){choose_3amaliya(window.level,7)}
    else if (key_b == "/"){choose_3amaliya(window.level,8)}
    else if (key_b == "r"){choose_3amaliya(window.level,9)}
    else if (key_b == "a"){choose_3amaliya(1,window.operator)}
    else if (key_b == "q"){choose_3amaliya(2,window.operator)}
    else if (key_b == "w"){choose_3amaliya(3,window.operator)}
    else if (key_b == "z"){choose_3amaliya(4,window.operator)}
    else if (key_b == "."){Floater()}
    else if (key_b == "Enter"){verify_question()}}
    
document.body.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key === "Backspace") {delete_last();}});