$(document).on('ready', function() {


// Create an array of obj with search terms
var info = [];


$('.submit7').on('click', function( event ){
	event.preventDefault();
	var obj = {
		name: $('#name').val(),
		location: $('#location').val(),
	}
	info.push(obj);
	console.log(info)
})
	
$('.sub').on('click', function( event ){
	event.preventDefault();
	var obj = {			
		friendEmail: $('#friend').val()
	}
	info.push(obj);
	console.log(info)
	})
		

// buttons list in console. beginning of share array
var sharethis = [];

sharethis.push($(this).data('share-type'));



// Signup new user

var newUser = [];

$('.signup').on('click', function( event ){
	event.preventDefault();
	var arr = [];


	// loop

	var input = {type: 
				 available: 
				 value:  }
// set values for input
				 arr.push(input)
				 // end loop
	var newSignup = {
		firstName: $('#first-name').val(),
		lastName: $('#last-name').val(),
		email: $('#enter-email').val(),
		password: $('#password').val(),
		inputs: arr

	newUser.push(newSignup);
	console.log(newUser)
})
// 


// $( "input[type='checkbox'], input[type='radio']" ).on( "click", showValues );



});
 





// var Friend = function () {	
	
// }

// Friend.prototype.create = function() {
// 	this.element = $('<div></div>')
// 		.addClass('signup-box');
// 		return this.element;
// };

// var newFriend = new Friend();
// $('body').append(newFriend.create());


// var Form = function () {

// }
// Form.prototype.create = function() {
// 	this.el = $()
// 	return this.el
// };
// var newForm = new Form();
// $('body').append(newForm.create());



