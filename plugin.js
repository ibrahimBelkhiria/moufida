$(function () {
	
	$('.rest').click(function(){
			$('#rest_menu').toggle();
			$('#hotel_menu').hide();
			$('.panel-body').show();

	});

		$('.hotel').click(function(){
			$('#hotel_menu').toggle();
			$('#rest_menu').hide();
			$('.panel-body').show();
		});

		
		$('#envoyer').click(function(e){
				e.preventDefault();

				$('.user').show();


		});



		$('.french').click(function(){
			
			$('.user2').append('<img style="padding-left:10px" src="french.jpg" height="80px" width="80px" class="french" />');
			$('.user1').show();
			$('.moufida1').show();


		});

		$('.like').click(function(){
				$('.user4').append('<img style="padding-left:10px" src="like.png" height="80px" width="80px" />');
				$('.user3').show();
		});





		

});