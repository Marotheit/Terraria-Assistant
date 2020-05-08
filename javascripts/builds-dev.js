$(document).ready(function(){
	$('input:radio[name=progress]').change(function(){
		var evil = document.querySelector('input[name="evil"]:checked').value;
		var difficulty = document.querySelector('input[name="difficulty"]:checked').value;
		var content = document.querySelector('input[name="content"]:checked').value;
		var progress = document.querySelector('input[name="progress"]:checked').value;
		var results = 'builds/' + evil + '-' + difficulty + '-' + content + '-' + progress + '.txt';
		
		$('#relevant-information').load(results);
	});
});