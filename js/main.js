$(document).ready(function() {

	$('#start-button').click(function(){
		console.log("animating!!!!!!!!!!!!")
	   $('body').toggleClass('animating');
	   return false;
	});

	$("body").bind('transitionEnd, webkitTransitionEnd', function() {
		//console.log("body transition ended ===============")
	});

	$("#bike").bind('webkitTransitionEnd', function() {
		console.log("transition ended ===============")
		$('body').addClass('dropit');
	});

	function changeSlide() {

	// $("#logo img.old").stop	()()(400, function() {
	// 	// remove the old image
	// 	$(this).remove();
	// });
}

	setTimeout(function () { $( '#zoom' ).addClass('scene1'); } );
	setTimeout(function () { $( '#zoom' ).addClass('scene2'); }, 50);

	setTimeout(function () { $( '#truck' ).addClass('scene1'); } );
	setTimeout(function () { $( '#truck' ).addClass('scene2'); }, 50);
	setTimeout(function () { $( '#truck' ).addClass('scene3'); }, 625);

	setTimeout(function () { $( '#grass' ).addClass('scene1'); } );
	setTimeout(function () { $( '#grass' ).addClass('scene2'); }, 100);
});
