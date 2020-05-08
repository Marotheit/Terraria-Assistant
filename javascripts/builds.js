$(document).ready(function(){
	$('input:radio[name=progress]').change(function(){
		$('#relevant-information').css("display", "none");
		
		var evil = document.querySelector('input[name="evil"]:checked').value;
		var difficulty = document.querySelector('input[name="difficulty"]:checked').value;
		var content = document.querySelector('input[name="content"]:checked').value;
		var progress = document.querySelector('input[name="progress"]:checked').value;
		var results = 'https://raw.githubusercontent.com/Marotheit/Terraria-Assistant/master/builds/' + evil + '-' + difficulty + '-' + content + '-' + progress + '.txt';
		
		jQuery.get(results, function(data){
			$('#relevant-information').html(data);
			$('#relevant-information').css("display", "block");
		})
		.fail(function (err){
			$('#relevant-information').html("<div id=\"sorry\">Sorry!</div><div id=\"not-found\">It seems like this guide hasn't been implemented quite yet!<br/><br/><br/><br/>I've halted writing class build guides until Journey's End is released, see <a href=\"https://github.com/Marotheit/Terraria-Assistant\#the-current-state-of-terraria-assistant-please-read\">here</a> for more information.<br/><br/>You can view a sample build <a href=\"https://marotheit.github.io/Terraria-at-a-Glance/?evil=crimson&difficulty=normal&content=crimson-knight&progress=endgame\">here</a>, or by selecting Crimson / Normal / Crimson Knight / Endgame.<br/><br/>Content is being uploaded daily as we progress towards Journey's End. <a href=\"https://github.com/Marotheit/Terraria-Assistant/commits/master\">Stay tuned!</a></div>");
			$('#relevant-information').css("display", "block");
		});
	});
});