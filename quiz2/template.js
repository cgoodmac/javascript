$(function(){

$('#makeboxes').click(makeboxes);

});

function makeboxes()
{
	var number = $('#numberofboxes').val();
	number = parseInt(number);

	for(var i = 0; i <number; i++)
	{
		var box = $('<div>');
		box.addClass('box');
		$(box).text(i+1);
		$('#boxholder').prepend(box);
	}


}