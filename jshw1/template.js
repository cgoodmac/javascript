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
				console.log('These are the animals: ' + animals);
				var delanimal = prompt('Which animal do you want to delete?');
				animals.splice(delanimal);

				console.log('These are the animals now: ' + animals);

			}	

			else if (delwhat=='c')
			{

				console.log('These are the colors: ' + colors);
				var delcolor = prompt('Which color do you want to delete?');
				colors.splice(delcolor);

				console.log('These are the colors now: ' + colors);

			}

			else if (delwhat=='p')
			{
				console.log('These are the people: ' + people);
				var delperson = prompt('Which person do you want to delete?');
				people.splice(delperson);

				console.log('These are the colors now: ' + people);

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
