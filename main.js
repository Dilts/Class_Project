$(document).on('ready', function() {
 
  var colors = ['#2ecc71','#8e44ad','#e74c3c','#f1c40f','#1abc9c','#c0392b'];
  var colorChange = colors.slice(); 


  var rand = function() {
   return Math.floor(Math.random()*colors.length);     
	  }     

  $('.box1').css("background-color", colors[rand()]);
  $('.box2').css("background-color", colors[rand()]);
  $('.box3').css("background-color", colors[rand()]);
  $('.box4').css("background-color", colors[rand()]);
  $('.box5').css("background-color", colors[rand()]);

// $('.btn').button('toggle');
// $("a").hover(function(){
//   $("a").css("background-color","yellow");
// });



$(document).on('click', '.friend-box', function(event){
	event.stopPropagation();
	$(this).addClass('box-a').removeClass('friend-box')
	$(this).find('h1').addClass('reset-friend-name').removeClass('friend-name')
	$(this).find('img').addClass('img-resizer').removeClass('img-sizer')
	$(this).append('<div class="share-buttons"><button type="button" data-share-type="phone" class="btn btn-default active top-margin" data-toggle="button"><i class="fa fa-phone-square">    Phone</i></button><button type="button" data-share-type="email" class="btn btn-default active top-margin"><i class="fa fa-envelope">    E-mail</i></button><button type="button" data-share-type="Twitter" class="btn btn-default active top-margin"><i class="fa fa-twitter-square">   Twitter</i></button><button type="button" data-share-type="Instagram" class="btn btn-default active top-margin"><i class="fa fa-instagram">   Instagram</i></button><button type="button" data-share-type="Facebook" class="btn btn-default active top-margin" ><i class="fa fa-facebook-square">   Facebook</i></button><button type="button" data-share-type="Linkedin" class="btn btn-default active top-margin"><i class="fa fa-linkedin-square">   Linkedin</i></button></div><textarea class="form-control top-margin" rows="3" placeholder="Leave this person a message"></textarea><div class="share-items top-margin"><button type="button" class="btn btn-info btn-lg btn-block">Share these items</button></div>')
})


$(document).on('click', '.share-buttons button', function () {
    $(this).css({'background-color': '#88BCE2'});



    console.log($(this).data('share-type'));


});



});

// var sharethis = [];

// sharethis.push($(this).data('share-type'));

// attempt 1



// var Truck = function(color) {

// 	// initializer
// 	this.color = color;
// 	this.iconType = 'truck';

// 	this.create = function() {
// 		var el = $('<i>')
// 			.addClass('icon-' + this.iconType)
// 			.css('color', this.color);
// 		return el;
// 	}

// };
