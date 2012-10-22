$(function(){

	var balance = 1000;
	balance = parseInt(balance);

	var question = prompt('(d)eposit or (w)ithdraw or (q)uit');

	while(question != 'q')
	{
		if(question=='d') 
		{
			var deposit = prompt('Deposit how much?');
			deposit = parseInt(deposit);

			console.log('You just deposited ' + deposit);
			console.log('Your balance is ' + (balance + deposit));

			balance = balance + deposit;
		}	
		else if(question=='w')
		{
			var withdraw = prompt('Withdraw how much?');
			withdraw = parseInt(withdraw);

			console.log('You just withdrew ' + withdraw);
			console.log('Your balance is ' + (balance - withdraw));

			balance = balance - withdraw;
		}

		//The prompt needs to be inside the loop
		question = prompt('(d)eposit or (w)ithdraw or (q)uit');	
	}

	console.log('Thank you for ATMing with us, your balance is: $' + balance + '.00');
});
