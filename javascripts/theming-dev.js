function chosenTheme(){
	if(localStorage.getItem('theme') === null){
		localStorage.setItem('theme', 'dark');
	}
	if(localStorage.getItem('theme') == 'dark' || localStorage.getItem('theme') == 'light'){
		var currentTheme = localStorage.getItem('theme');
		document.getElementById('page-style').setAttribute('href', "stylesheets/" + currentTheme + ".css");
	}
}

function toggleTheme(){
	if(localStorage.getItem('theme') == 'dark'){
		localStorage.setItem('theme', 'light');
		document.getElementById('page-style').setAttribute('href', "stylesheets/light.css");
	}
	else{
		localStorage.setItem('theme', 'dark');
		document.getElementById('page-style').setAttribute('href', "stylesheets/dark.css");
	}
}