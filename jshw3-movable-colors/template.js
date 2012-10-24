var selected = null;


$(function(){

$('#addcolors').click(add_colors);
$('#boxes').on('mouseenter', '.box', input_color);
$('#boxes').on('mouseleave', '.box', make_it_white);
$('#boxes').on('click', '.box', select_box);
$('#boxes').on('click', '.selected', unselect_box);

$('#boxes').on('dblclick', '.box', remove);
$('#left').click(backward);
$('#right').click(forward);

});

function add_colors()
{
	var colors = $('#input').val();
	var colors_array = colors.split(", ");

	var loop = colors_array.length;

	for(i=0; i < loop; i++)
	{
		var box = $('<div>');
		box.addClass('box');
		var color = colors_array[i];
		box.css('background-color',color);
		$('#boxes').prepend(box);
	}

}

function input_color()
{
	var input = $(this).css('background-color');
	$('#input').css('background-color',input);
}

function make_it_white()
{
	$('#input').css('background-color','white');
}

function select_box()
{
	if(selected != null)
	{
		selected.removeClass('selected');
		selected = $(this).addClass('selected');
	}	
	else
	{
		selected = $(this).addClass('selected');
	}

}

function unselect_box()
{
	selected.removeClass('selected');
	selected = null;
	
}


function remove()
{
	$(this).remove();

}

function forward()
{
	var next = selected.next();
	next.after(selected);

}

function backward()
{
	var prev = selected.prev();
	prev.before(selected);

	
}