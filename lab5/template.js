var amount = 0;

$(function(){

$('.color').click(color);
$('.number').click(math);

});

function math()
{
	var add=$(this).text();
	add = parseInt(add);	
	amount = amount + add;
	$('#amount').text(amount);
}

function color()
{
	var color=$(this).text();
	$('#amount').css('background-color',color);
}
