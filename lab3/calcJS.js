let is_result_on_screen = false;
let current_res = 0;
let operation = "";
let ariphmeticOperand = { 
		'+': function (x, y) { return x + y }, 
		'-': function (x, y) { return x - y }, 
		'*': function (x, y) { return x * y },
		'/': function (x, y) { return (y==0)?("Error"):(Math.floor(x / y))}};
		
function addNumOnScreen(num){
	let screen = document.getElementById("screen");
	let text = document.createTextNode(num);
	if(screen.textContent == "0" || is_result_on_screen || screen.textContent == "too long"){
		screen.textContent="";
		is_result_on_screen = false;
		}
	if(screen.textContent.length < 13)
		screen.appendChild(text);
	else
		screen.textContent="too long";
}
			
function allClear(){
	let screen = document.getElementById("screen");
	let is_result_on_screen = false;
	let current_res = 0;
	let operation = "";
	screen.textContent = 0;
}
	
function selectOperation(operand){
	let screen = document.getElementById("screen");
	operation = operand;
	current_res = +screen.textContent;
	screen.textContent = "";
}

function result(){
	if(is_result_on_screen==false){
		let screen = document.getElementById("screen");
		is_result_on_screen = true;
		res = ariphmeticOperand[operation](current_res, +screen.textContent); 
		screen.textContent = (res.toString().length <= 13)?(res):("too long");
	}
}

<!--listeners -->
const numKeys = ["1","2","3","4","5","6","7","8","9","0"];
const operandKeys = ["+","-","/","*"];
const clearKey = "Backspace";
const resultKey = "=";

function keyCheck(e){
	if(numKeys.includes(e.key))
		addNumOnScreen(e.key);
	else if(operandKeys.includes(e.key))
		selectOperation(e.key);
	else if(e.key == resultKey)
		result();
	else if(e.key == clearKey)
		allClear();
}

document.addEventListener('keyup', keyCheck);


