/* 
Student Name: Lawson Lee, 
File name: script.js, 
Date: 3/28/2024  document.getElementById
*/

function hamburger(){
	var menu = document.getElementById("dropper");
	var header = document.getElementById("header");
	var animatedUp = menu.classList.contains('dropDownMenu-AnimatedUp');

	if(animatedUp && menu.style.display ==="none"){
		menu.style.display = "block";
		header.style.display = "none";
		menu.classList.add('dropDownMenu-Animated');
		menu.classList.remove('dropDownMenu-AnimatedUp');
	} else {
		menu.style.display = "none";
		menu.classList.remove('dropDownMenu-Animated');
		menu.classList.add('dropDownMenu-AnimatedUp');
		header.style.display = "block";
	}
}

