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



$(document).on('click', '.friend-box', function(event){
	event.stopPropagation();
	$(this).addClass('box-a').removeClass('location-box')
	$(this).find('h1').addClass('reset-friend-name').removeClass('friend-name')
	$(this).find('img').addClass('img-resizer').removeClass('img-sizer')
	$(this).append('<div class="share-buttons"><button type="button" class="btn btn-default active top-margin"><i class="fa fa-phone-square">    Phone</i></button><button type="button" class="btn btn-default active top-margin"><i class="fa fa-envelope">    E-mail</i></button><button type="button" class="btn btn-default active top-margin"><i class="fa fa-twitter-square">   Twitter</i></button><button type="button" class="btn btn-default active top-margin"><i class="fa fa-instagram">   Instagram</i></button><button type="button" class="btn btn-default active top-margin" ><i class="fa fa-facebook-square">   Facebook</i></button><button type="button" id="loading-example-btn" data-loading-text="Loading..." class="btn btn-default active top-margin"><i class="fa fa-linkedin-square">   Linkedin</i></button><textarea class="form-control top-margin" rows="3" placeholder="Leave this person a message"></textarea><div class="share-items top-margin"><button type="button" class="btn btn-info btn-lg btn-block">Share these items</button></div></div>')
})




});

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
