$(document).ready(function($) {
 	$('.header__burger').click(function(event) {
 		$('.header__burger,.menu').toggleClass('active');
 	})
 });

// $(document).ready(function(){
//     $("button.hide").click(function(){
//         $("div.sidebar").hide("1000");
//     });
//     $("button.show").click(function(){
//     	$("div.sidebar").show("1000");
//     });
// });