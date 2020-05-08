function copyHotlink(){
	var evil = document.querySelector('input[name="evil"]:checked').value;
	var difficulty = document.querySelector('input[name="difficulty"]:checked').value;
	var content = document.querySelector('input[name="content"]:checked').value;
	var progress = document.querySelector('input[name="progress"]:checked').value;
	var results = 'https://marotheit.github.io/Terraria-Assistant/evil=' + evil + '&difficulty=' + difficulty + '&content=' + content + '&progress=' + progress;
	
	var dummy = $('<input>').val(results).appendTo('#hotlink-container').select();
	document.execCommand('copy');
	$('#copy-button').html("<div id=\"copy-button-visited\" onclick=\"copyHotlink()\"><span id=\"tooltip-information\">Click me again to recopy the build link to your clipboard!</span></div>");
}