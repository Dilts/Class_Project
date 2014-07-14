$(document).on('ready', function() {
  
$(document).on('click', '.location-box', function(){
	$(this).addClass('box-a').removeClass('location-box')
	$(this).find('img').addClass('img-resizer').removeClass('img-sizer')
	$(this).append('<div class="share-info"><div class="input-group"><span class="input-group-addon"><input type="checkbox"></span><input type="text" class="form-control" placeholder="Facebook"></div><!-- /input-group --></div>')
	// $('location-box img:first-child').addClass('img-resizer')
	// $('location-box img:first-child').removeClass('img-sizer')
})




});


