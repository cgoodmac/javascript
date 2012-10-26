$(function(){

	$("#add").click(search_flickr);

});

function search_flickr()
{
	var search = $('#search').val();

	$.getJSON('http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=700a3d4a354c8638da4a5dd3182a64cc&tags=' + search + '&format=json&jsoncallback=?', flickrResults);
}

function flickrResults(data)
{
	$.each(data.photos.photo, getPhoto); //EACH = super-simple FOR loop
}

function getPhoto(index, item) //index starts at 0, item is each photo
{

var src = "http://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_m.jpg";
var div = $('<div>');
div.addClass('photo');
var img = $('<img>');
img.attr('src', src);
div.append(img);
$('#photos').prepend(div);

}