var	loginModal = document.getElementById("login_popup");
var loginBtn = document.getElementById("modal_btn");
var loginClose = document.getElementsByClassName("popup_close")[0];

loginBtn.onclick = function(){
	loginModal.style.display = "block";
}
loginClose.onclick = function(){
	loginModal.style.display = "none";
}
window.onclick = function(event){
	if (event.target == loginModal){
		loginModal.style.display = "none";
	}
}
 
var mapModal = document.getElementById("map_modal");
var mapBtn = document.getElementById("map_btn");
var mapClose = document.getElementsByClassName("map_close")[0];

mapBtn.onclick = function(){
	mapModal.style.display = "block";
}
mapClose.onclick = function(){
	mapModal.style.display = "none";
}
window.onclick = function(event){
	if (event.target == mapModal){
		mapModal.style.display = "none";
	}
}