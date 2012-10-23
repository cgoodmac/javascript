$(function(){

	var animals = [];
	var colors = [];
	var people = [];

	var response = prompt('Do you want to create an (a)nimal, (c)olor, (p)erson, or (q)uit?');

	while(response !='q')
	{
		var amount = prompt('How many?');
		amount = parseInt(amount);

		if(response=='a')
		{
			for(var i = 0; i < amount; i++)
			{
				var animal = prompt('Name your animal');
				animals.push(animal);

				console.log('You have added a(n) ' + animal);
			}

			console.log('These are the animals: ' + animals);

		}

		else if (response=='c')
		{
			for(var i = 0; i < amount; i++)
			{
				var color = prompt('Name your color');
				colors.push(color);

				console.log('You have added the color ' + color);
			}

			console.log('These are the colors: ' + colors);
			
		}

		else if (response=='p')
		{
			for(var i = 0; i < amount; i++)
			{
				var person = prompt('Name your person');
				people.push(person);

				console.log('You have added ' + person);
			}

			console.log('These are the people: ' + people);
			
		}

		response = prompt('Do you want to create an (a)nimal, (c)olor, (p)erson, or (q)uit?');
	}
	
	var del = prompt('Do you want to delete something? (y/n)');

	if(del =='y')
	{
		var delwhat = prompt('Do you want to delete an (a)nimal, (c)olor, (p)erson, or (q)uit?');

		while(delwhat !='q')
		{
			if(delwhat=='a')
			{
				console.log('Animals: ' + animals);
				var del = prompt('Which one do you want to delete?');
				var index = animals.indexOf(del);
				animals.splice(index,1);	
			}	

			else if (delwhat=='c')
			{

				console.log('Colors: ' + colors);
				var del = prompt('Which one do you want to delete?');
				var index = colors.indexOf(del);
				colors.splice(index,1);		
			}

			else if (delwhat=='p')
			{
				console.log('People: ' + people);
				var del = prompt('Which one do you want to delete?');
				var index = people.indexOf(del);
				people.splice(index,1);	

			}

			delwhat = prompt('Do you want to delete an (a)nimal, (c)olor, (p)erson, or (q)uit?');
		}
	}	

	console.log('Here is the final tally:');
	console.log('These are the animals: ' + animals);
	console.log('These are the colors: ' + colors);
	console.log('These are the people: ' + people);
	console.log('Thank you! Have a good day!');

});
