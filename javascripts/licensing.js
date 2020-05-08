function showLicense(){
	var modal = document.getElementById('modal');
	modal.style.display = "block";
}

function hideLicense(){
	var modal = document.getElementById('modal');
	modal.style.display = "none";
}

window.onclick = function(event){
	var span = document.getElementById('modal-close-button')[0];
	if(event.target == modal){
		modal.style.display = "none";
	}
}