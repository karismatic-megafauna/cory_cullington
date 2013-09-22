//on doc ready do your stuff
$( document ).ready(function() { 
	var i = 0;
	var marginLeft = 0;
	//get the number of slides and width
	var sliderSettings = slider_setup();
	//find center slide
	var center = Math.floor(sliderSettings.slideWidth.length/2);
	//add up all the widths until the center
	for(i=0;i<=center;i++){
		marginLeft += sliderSettings.slideWidth[i];
	}
	console.log(marginLeft);
});


////////////////////////////////////////
// @slider_setup
// params: ()
// returns: object 
////////////////////////////////////////
//get number of slides, calculate width for slider, step size and 
function slider_setup () {
	
	//set some variables
	var totalWidth = 0; 
	var slideWidth = [];
	
	//loop through all of the images, get their width
	$('.slide img').each(function(index){
		slideWidth[index] = $(this).width();
		totalWidth += slideWidth[index];
	});

	//return an object with values I want
	return {
		totalWidth : totalWidth,
		slideWidth : slideWidth,
	};

};