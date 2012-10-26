$(function(){

$('#makecolors').click(makecolors);
$('#colorholder').on('hover','.color', hoverchange);

});

function makecolors()
{
	var colors = $('#colorinput').val();
	colors = colors.split(', ');

	for(var i=0; i <colors.length; i++)
	{
		var color = $('<div>');
		color.addClass('color');
		color.css('background-color',colors[i]);
		$('#colorholder').prepend(color);

	}

}

function hoverchange()
{
	var color = $(this).css('background-color');
	$('#bigbox').css('background-color', color);
}