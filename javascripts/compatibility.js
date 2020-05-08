$(document).ready(function(){
	$('input:radio[name=evil]').change(function(){
		if(this.value == 'corruption'){
			$("input[type=radio][value=crimson-knight]").attr("disabled",true);
			$('input:radio[name=content]:checked').prop('checked', false);
			$('input:radio[name=progress]:checked').prop('checked', false);
			if($('input:radio[name=difficulty]:checked').is(':checked')){
				$('#content-selection .selection-field').css("display", "block");
			}
		}
		else{
			$("input[type=radio][value=crimson-knight]").attr("disabled",false);
			$('input:radio[name=content]:checked').prop('checked', false);
			$('input:radio[name=progress]:checked').prop('checked', false);
			if($('input:radio[name=difficulty]:checked').is(':checked')){
				$('#content-selection .selection-field').css("display", "block");
			}
		}
	});
	
	$('input:radio[name=difficulty]').change(function(){
		if(this.value == 'normal'){
			$('input:radio[name=content]:checked').prop('checked', false);
			$('input:radio[name=progress]:checked').prop('checked', false);
			if($('input:radio[name=evil]:checked').is(':checked')){
				$('#content-selection .selection-field').css("display", "block");
			}
		}
		else{
			$('input:radio[name=content]:checked').prop('checked', false);
			$('input:radio[name=progress]:checked').prop('checked', false);
			if($('input:radio[name=evil]:checked').is(':checked')){
				$('#content-selection .selection-field').css("display", "block");
			}
		}
	});
	
	$('input:radio[name=content]').change(function(){
		if(this.value == 'crimson-knight'){
			$("input[type=radio][value=pre-bosses]").attr("disabled",true);
			$("input[type=radio][value=pre-skeletron]").attr("disabled",true);
			$("input[type=radio][value=pre-hardmode]").attr("disabled",true);
			$("input[type=radio][value=pre-mechanical]").attr("disabled",true);
			$("input[type=radio][value=pre-plantera]").attr("disabled",true);
			$("input[type=radio][value=pre-lunar]").attr("disabled",false);
			$("input[type=radio][value=pre-moon-lord]").attr("disabled",false);
			$("input[type=radio][value=endgame]").attr("disabled",false);
			$('input:radio[name=progress]:checked').prop('checked', false);
		}
		else if(this.value == 'healer'){
			$("input[type=radio][value=pre-bosses]").attr("disabled",true);
			$("input[type=radio][value=pre-skeletron]").attr("disabled",true);
			$("input[type=radio][value=pre-hardmode]").attr("disabled",true);
			$("input[type=radio][value=pre-mechanical]").attr("disabled",true);
			$("input[type=radio][value=pre-plantera]").attr("disabled",true);
			$("input[type=radio][value=pre-lunar]").attr("disabled",false);
			$("input[type=radio][value=pre-moon-lord]").attr("disabled",false);
			$("input[type=radio][value=endgame]").attr("disabled",false);
			$('input:radio[name=progress]:checked').prop('checked', false);
		}
		else if(this.value == 'throwing'){
			$("input[type=radio][value=pre-bosses]").attr("disabled",false);
			$("input[type=radio][value=pre-skeletron]").attr("disabled",false);
			$("input[type=radio][value=pre-hardmode]").attr("disabled",false);
			$("input[type=radio][value=pre-mechanical]").attr("disabled",true);
			$("input[type=radio][value=pre-plantera]").attr("disabled",true);
			$("input[type=radio][value=pre-lunar]").attr("disabled",true);
			$("input[type=radio][value=pre-moon-lord]").attr("disabled",true);
			$("input[type=radio][value=endgame]").attr("disabled",true);
			$('input:radio[name=progress]:checked').prop('checked', false);
		}
		else{
			$("input[type=radio][value=pre-bosses]").attr("disabled",false);
			$("input[type=radio][value=pre-skeletron]").attr("disabled",false);
			$("input[type=radio][value=pre-hardmode]").attr("disabled",false);
			$("input[type=radio][value=pre-mechanical]").attr("disabled",false);
			$("input[type=radio][value=pre-plantera]").attr("disabled",false);
			$("input[type=radio][value=pre-lunar]").attr("disabled",false);
			$("input[type=radio][value=pre-moon-lord]").attr("disabled",false);
			$("input[type=radio][value=endgame]").attr("disabled",false);
			$('input:radio[name=progress]:checked').prop('checked', false);
		}
	});
	
	$('input:radio[name=content]').change(function(){
		$('#progress-selection .selection-field').css("display", "block");
	});
});