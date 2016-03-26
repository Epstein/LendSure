$('document').ready(function(){
	
	$('#dropNavButton').click(function(){
		console.log("Nav Button Clicked");
		//if($('.mainList').css("display").val ===
		console.log($('.mainList').css("display"));

		if($('.mainList').css("display") === "none")
		{
			$('.mainList').slideDown("slow");
		}
		else
		{
			$('.mainList').slideUp("slow",function(){
				$('.mainList').removeAttr("style");
			});
		}
	});


});





	// var myItem;
	// var myLi;
	// input.focus();
	// input.select();

	// $('#submit').click(function(){
	// 	myItem = $('input').val();
	// 	console.log($('#input'));
	// 	console.log(myItem);

	// 	myLi = ('<li>' + myItem + '</li>');
	// 	$('ul').append(myLi);

	// 	$('li').click(function(){
	// 		console.log("Li click is working")
	// 		$(event.target).remove();
	// 	});
	// 	$('#input').val("");

	// 	if(myItem.toLowerCase()==='clear')
	// 	{
	// 		$('li').remove();
	// 	}



	// 	return false;

	