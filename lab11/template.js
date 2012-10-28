var Dog;

$(function(){

Parse.initialize("jaO1TjNVlQwi2gPiMAlvrfzyjXliNMLmPpM0sJj0", "RubefgcIVPmzEeFpqxjHG77zeKEj2xAR6vDDCR0l");

//next line creates a master object
Dog = Parse.Object.extend("Dog");
$('#b1').click(save_data);
$('#b2').click(get_data);

});

function save_data()
{

	//d1 is a child of the master object, Dog
	var d1 = new Dog();
	var name = $('#t1').val();
	var age = $('#t2').val();
	d1.save({dog_name: name, dog_age: age}, { success: show_success });

}

function show_success()
{
	console.log('you saved');
}

function get_data()
{
	var query = new Parse.Query(Dog);
	query.ascending("dog_name");
	query.find({
		success: function(results) 
		{
			for(var i = 0; i < results.length; i++)
			{
				var p = $('<p>');
				var name = results[i].get('dog_name');
				p.text(name);
				$('#data').prepend(p);
			}
		},
		error: function(error) 
		{

		}
	});
}