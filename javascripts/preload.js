$(document).ready(function(){
	var url = new URL(window.location);
	var params = new URLSearchParams(url.search);
	var preloadEvil = params.get("evil");
	var preloadDifficulty = params.get("difficulty");
	var preloadContent = params.get("content");
	var preloadProgress = params.get("progress");
	
	$("input[name='evil']").each(function(index, elem){
		var $radio = $(elem);
		if ($radio.val() === preloadEvil){
			$radio.prop("checked", true);
		}
		if(this.value == 'corruption'){
			$("input[type=radio][value=crimson-knight]").attr("disabled",true);
		}
	});
	
	if($("input[name='evil']:checked")){
		$("input[name='difficulty']").each(function(index, elem){
			var $radio = $(elem);
			if ($radio.val() === preloadDifficulty){
				$radio.prop("checked", true);
				$('#content-selection .selection-field').css("display", "block");
			}
		});
	}
	
	if($("input[name='difficulty']:checked")){
		$("input[name='content']").each(function(index, elem){
			var $radio = $(elem);
			if ($radio.val() === preloadContent){
				$radio.prop("checked", true);
				$('#progress-selection .selection-field').css("display", "block");
			}
		});
	}
	
	if($("input[name='content']:checked")){
		$("input[name='progress']").each(function(index, elem){
			var $radio = $(elem);
			if ($radio.val() === preloadProgress){
				$radio.prop("checked", true);
				var results = 'https://cdn.jsdelivr.net/Marotheit/Terraria-Assistant/master/builds/' + preloadEvil + '-' + preloadDifficulty + '-' + preloadContent + '-' + preloadProgress + '.txt';
				$('#relevant-information').load(results);
			}
		});
	}
});
