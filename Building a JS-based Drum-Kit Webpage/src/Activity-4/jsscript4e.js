
// Detecting mouseclick event
for(var i=1;i<=7;i++){
	document.getElementsByClassName("drum")[i-1].addEventListener("click",Clicker);	
}

// Detecting keyboard press
document.addEventListener("keypress",Keyboarder);

// Clicker() function
function Clicker(){
	executer(this.innerHTML);
	btnAnim(this.innerHTML);
}

// Keyboarder() function
function Keyboarder(x){
	executer(x.key);	
	btnAnim(x.key);
}

// executer() function
function executer(val){

	switch(val){
		case 'w':
			var a1=new Audio('sounds/tom-1.mp3');
			a1.play();
			break;
		case 'a':
			var a1=new Audio('sounds/tom-2.mp3');
			a1.play();
			break;
		case 's':
			var a1=new Audio('sounds/tom-3.mp3');
			a1.play();
			break;
		case 'd':
			var a1=new Audio('sounds/tom-4.mp3');
			a1.play();
			break;
		case 'j':
			var a1=new Audio('sounds/kick-bass.mp3');
			a1.play();
			break;
		case 'k':
			var a1=new Audio('sounds/snare.mp3');
			a1.play();
			break;
		case 'l':
			var a1=new Audio('sounds/crash.mp3');
			a1.play();
			break;
		default:
			console.log("Wrong input. OOPS!!!");
	}

}

// btnAnim() function
function btnAnim(keyval){

	var activbtn=document.querySelector("."+keyval);
	activbtn.classList.add('pressed');
	setTimeout(function() {
		activbtn.classList.remove('pressed');
	},100);

}
