$(function(){

	// Aside Toggle
    $('#open').find('i').click(function(){
   		$('aside').toggle({direction:'right'},'slide');
   		$('i').toggle();
        $('#mask').toggleClass('hide');
// All elements main section move left 400px
        

    });

	//resizing silhouette
	var $silhouette = $('#silhouette'),
		$intro = $('#intro');
        

    function matchHeight() {
    	$silhouette.height($(window).height());
        

    	// var silHeight = $silhouette.height(),
    	// 	introHeight = $intro.height(),
    	// 	marginTop = (silHeight - introHeight)/2;

    	// //initially push intro below silhouette
    	// $intro.css({'top': silHeight}); 

    	//set margin above intro to center it.
    	//$intro.css({'margin-top':marginTop});
    	// var dataNum = /data-\d+/
    	// $intro.removeAttr(dataNum);

    	// $intro.attr('data-'+);

    }
    matchHeight();

    $(window).resize(matchHeight);


    //skrollr
    skrollr.init({
    	render: function(data){
    		console.log(data.curTop);
    	}
    });

    //Copying Code-background
    $("#code-background").find("p").clone().clone().insertAfter('#code-background p');




});

