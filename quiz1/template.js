
$(function(){

$('#add').click(addition);

});

function addition()
{

var number1 = $('#number1').val();
number1 = parseInt(number1);
var number2 = $('#number2').val();
number2 = parseInt(number2);

total = number1 + number2;

$('#output').val(total);

}