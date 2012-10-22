$(function(){

	// this is a single-line comment
	/* 
	* this is a multi-line comment
	*/

	var first = prompt('What is your first name?');
	var last = prompt('What is your last name?');
	var full = first + ' ' + last;

	var age = prompt('What is your age?');
	age = parseInt(age);

	console.log('Your full name is ' + full);
	console.log('Your real age is ' + (age + 10));

	if(age < 18)
	{
		console.log('You are a minor.');
	}
	else
	{
		console.log('You are an adult.');
	}

	if((first =='Chris') && (last != 'Smith'))
		console.log('You are the winner!');

	for(var i = 0; i <10; i++)
	{
		console.log('you are on number : ' + i);
	}

	var response = prompt('Enter a color or (q)uit');

	var colors = [];

	while(response != 'q')
	{
		colors.push(response);
		console.log('You just typed in: ' + response);
		response = prompt('Enter a color or (q)uit');
	}

	console.log(colors);


});
