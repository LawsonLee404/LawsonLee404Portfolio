/* 
Student Name: Lawson Lee, 
File name: script.js, 
Date: 3/24/2024  document.getElementById
*/

function hamburger(){
	var menu = document.getElementById("menu-links");
	var header = document.getElementById("header");
	if(menu.style.display === "block" && header.style.display ==="none"){
		menu.style.display = "none";
		header.style.display = "block";
	} else {
		menu.style.display = "block";
		header.style.display = "none";
	}
}

