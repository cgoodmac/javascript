var boxes
var letters = ["a","a","b","b","c","c","d","d","e","e"];
var selected_box = null;
var letter = null;

$(function(){

	$('.sml').click(generate);
	$('#main').on('click','.box', pick1);

});


//Randomize the Cards
function randomizeArray(){
  var i = letters.length;
  if (i == 0) return false;
  while (--i){
     var j = Math.floor(Math.random() * (i + 1));
     var tempi = letters[i];
     var tempj = letters[j];
     letters[i] = tempj;
     letters[j] = tempi;
  }
  return letters;
}

function generate()
{
	randomizeArray();

	var choice=$(this).text();

	if(choice=='Small')
	{
		boxes=10;
	}
	else if (choice == 'Medium')
	{
		boxes=20;
	}
	else if (choice == 'Large')
	{
		boxes=40;
	}

	for(var i=0; i<boxes; i++)
	{
		var box = $('<div>');
		box.addClass('box');
		box.attr('id',i);
		$('#main').prepend(box);
	}

}

function pick1()
{
	if(selected_box != this)
	{
		$(selected_box).removeClass('selected');
		$(selected_box).text('');

		selected_box = this;
		$(selected_box).addClass('selected');
		var number = $(selected_box).attr('id');
		$(selected_box).text(letters[number]);

		var letter = letters[number];
	}
	else
	{
		$(selected_box).removeClass('selected');
		$(selected_box).text('');	
		selected_box = null;
	}

	pick2();
}

function pick2()
{




}


//Get THIS and compare currently selected box = results

//		box.attr('id',letters[i]);
//letters are now randomized
//Based on ID, pull the letter in the array when clicked