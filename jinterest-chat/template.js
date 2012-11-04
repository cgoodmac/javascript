var Picture;
var name;

$(function (){

	Parse.initialize("zQwapcbd0FIS2UQs2tMUbL6B9qZnUrnwA5QQ9i9o", "avLOqWhxAxCsD9nS2EX2FMGffjhYp53JYtZPYxX8");

	$(document).ready(show_success);
	$('#button').click(search_flickr);
	$('#output').on('click', '.box', enter_tag);
	Picture = Parse.Object.extend("Picture");
	$('#output').on('click', '.submit', save_picture);
	$('#history').on('dblclick','.box img', delete_picture);

	//Chat functions

  	subscribe();
  	$('#talksubmit').click(talksubmit);

});

function search_flickr() 
{
	var search = $('#search').val();

	$.getJSON('http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=700a3d4a354c8638da4a5dd3182a64cc&text='+search+'&per_page=20&format=json&jsoncallback=?', flickrResults);
}

function flickrResults(data)
{
	$.each(data.photos.photo, getPhoto);
}

function getPhoto(index, item)
{
	var src = "http://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_m.jpg";
	var div = $('<div>');
	div.addClass('box');
	var img = $('<img>');
	img.attr('src', src);
	div.append(img);
	$('#output').prepend(div);
}

function enter_tag()
{
	$('.tagbox').remove();
	var div = $('<div>');
	div.addClass('tagbox');
	var p = $('<p>');
	p.text('Tag it!');
	div.append(p);
	var input = $('<input>').attr('type','text').attr('id','taginput');
	var submit = $('<input>').attr('type', 'button').attr('value', 'Save').addClass('submit');
	p.append(input);
	div.append(submit);
	$('#output').append(div);
	$(this).after(div);
	div.children('p').children('input').focus();
}

function save_picture()
{
	var p1 = new Picture();
	// var tag = $('').val(); //$(this).parent().children('p').children('input').val();
	var ptag = $(this).parent().children('p').children('input').val();
	var plink = $(this).parent().prev().children('img').attr('src');
	p1.save({ntag: ptag, nlink: plink}, { success: show_success });
	$(this).parent().remove();
}

function show_success()
{
	$('#history').empty();
	var query = new Parse.Query(Picture);
	query.ascending('createdAt');
	query.find({
		success: function(results)
		{
			for (var i = 0; i < results.length; i++)
			{
				var src = results[i].get('nlink');
				var tag = results[i].get('ntag');
				var id = results[i].id;
				var div = $('<div>');
				div.addClass('box');
				var img = $('<img>');
				img.attr('src', src);
				img.attr('title', tag);
				img.attr('id', id);
				div.append(img);
				$('#history').prepend(div);
				console.log(id);
			}

		},
		error: function(error)
		{

		}
	});	
}

function delete_picture()
{
	var id = $(this).attr('id');
	var query = new Parse.Query(Picture);
	query.get(id, {
		success: function(id) {

				id.destroy({
				  	success: function(id) {
				 			show_success();
				  	},
				  	error: function(id, error) {
				  }
				});

		},
		error: function(object, error) {

		}

	});


}

// Chat functions

function subscribe()
{
    PUBNUB.subscribe({
    	channel    : "jinterest",      // CONNECT TO THIS CHANNEL.
    	restore    : false,              // STAY CONNECTED, EVEN WHEN BROWSER IS CLOSED
                                       // OR WHEN PAGE CHANGES.
    	callback   : publish_message, // RECEIVED A MESSAGE.

    	disconnect : function() {        // LOST CONNECTION.
    	console.log('you are disconnecting');
    	},

    	reconnect  : function() {        // CONNECTION RESTORED.
        console.log('And we are back!');
      	},

      	connect    : function() {        // CONNECTION ESTABLISHED.
        console.log('connected');
      	}
  	});
}

function talksubmit()
{
	name = $('#name').val();
	var talk = $('#talk').val();

	PUBNUB.publish({
	channel : "jinterest",
	message : name + ': ' + talk
	});

}

function publish_message(message)
{
	var message = message;
	var p = $('<p>');
	p.text(message);
	$('#chat').prepend(p);
}








