$(document).ready(function(){
	// for footer list-toggle
	$('.button').click(function(){
		$('#show_this').toggle();
	});
	$('#plannerfilter li').click(function(){
		$('#show_this').toggle();
		var city = $(this).text();
		$('.button p').html(city);
	});
	$(document).click(function(event) {
		if ($(event.target).closest(".button").length) return;
		$("#show_this").hide();
	});
})