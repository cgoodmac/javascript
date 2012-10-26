var counter = 0;
var photo = [];
var page = 1;
var i;


$(function(){

	$('#add').click(search_flickr);
	$('#next').click(next);

});

function search_flickr() 
{
	var search = $('#search').val();

	$.getJSON('http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=71318b6fbd0a75b86300d5c205704f73&text='+search+'&per_page=10&page='+page+'&format=json&jsoncallback=?', flickrResults);
}

function flickrResults(data)
{
	$.each(data.photos.photo, getPhoto);

	i = setInterval(display_more, 500);


}

function getPhoto(index, item)
{
	photo[index]=item;

}

function display_more() {
	
	$('#counter').text(counter + 1);

	console.log(photo[counter]);

	var item = photo[counter];
	var src = "http://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_m.jpg";
	var div = $('<div>');
	div.addClass('photo');
	var img = $('<img>');
	img.attr('src',src);
	div.append(img);

	$('#photos').prepend(div);

	counter++;

	if (counter == 10)
	{
		clearInterval(i);
		// counter=0;
		// page++;
		// search_flickr();
	}
}

function next() {
	counter = 0;
	page++;
	search_flickr();
}
