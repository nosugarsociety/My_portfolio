$(function(){

	// Aside Toggle

	$('#open').click(function(){
   		$('aside').toggle({direction:'right'},'slide');
   		$(this).find('i').toggleClass('great-white');
    });

});