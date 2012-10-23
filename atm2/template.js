$(function(){

	var total

	var balance = $('#cash').text();
	balance = parseInt(balance);

	$('#deposit').click(dep);
	$('#withdraw').click(wd);

	function dep()
	{

	var amount = $('#amount').val();
	amount = parseInt(amount);	

	balance = balance+amount;
	balance = parseInt(balance);

	$('#cash').text(balance);

	if(balance < 0)
		$('#cashwrapper').css('background-color','red');
	else
		$('#cashwrapper').css('background-color','white');

	}

	function wd()
	{
	amount = $('#amount').val();
	amount = parseInt(amount);	

	balance = balance-amount;
	balance = parseInt(balance);

	$('#cash').text(balance);

	if(balance < 0)
		$('#cashwrapper').css('background-color','red');
	else
		$('#cashwrapper').css('background-color','white');

	}

});

