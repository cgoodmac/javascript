var input = $('#input-box').val();
var output = $('#output-box').val();

$(function(){

$('#button-clear').click(clear);
$('#button-normal').dblclick(normal);
$('#button-big').hover(big);
$('#button-small').hover(small);
$('#button-reverse').hover(flip);
$('#button-black').click(black);
$('#button-yellow').click(yellow);

});

function clear()
{
	input = "";
	$('#input-box').val(input);
}

function normal()
{
	output = $('#input-box').val();
	$('#output-box').text(output);
}

function big()
{
	$('#output-box').toggleClass('big');
}

function small()
{
	$('#output-box').toggleClass('small');
}

function flip()
{	
	var straight = $('#output-box').text();
	var around = straight.split("").reverse().join("");
	$('#output-box').text(around);
}

function black()
{
	$('#body').css('background-color','black');
}

function yellow()
{
	$('#body').css('background-color','yellow');
}