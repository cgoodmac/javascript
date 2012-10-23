$(function(){

	var total

	var balance_checking = $('#cash-checking').text();
	balance_checking = parseInt(balance_checking);

	var balance_savings = $('#cash-savings').text();
	balance_savings = parseInt(balance_savings);


	$('#deposit-checking').click(dep);
	$('#withdraw-checking').click(wd);

	function dep()
	{

	var amount = $('#amount-checking').val();
	amount = parseInt(amount);	

	balance_checking = balance_checking+amount;
	balance_checking = parseInt(balance_checking);

	$('#cash-checking').text(balance_checking);

	if(balance_checking < 0)
		$('#cashwrapper-checking').css('background-color','red');
	else
		$('#cashwrapper-checking').css('background-color','white');

	if(balance_checking < 0 && (balance_savings + balance_checking >= 0))
	{
		balance_savings = balance_checking + balance_savings;
		balance_savings = parseInt(balance_savings);
		$('#cash-savings').text(balance_savings);
	}
	}

	

	function wd()
	{
	amount = $('#amount-checking').val();
	amount = parseInt(amount);	

	balance_checking = balance_checking-amount;
	balance_checking = parseInt(balance_checking);

	$('#cash-checking').text(balance_checking);

	if(balance_checking < 0)
		$('#cashwrapper-checking').css('background-color','red');
	else
		$('#cashwrapper-checking').css('background-color','white');

	if(balance_checking < 0 && (balance_savings + balance_checking >= 0))
	{
		balance_savings = balance_checking + balance_savings;
		balance_savings = parseInt(balance_savings);
		$('#cash-savings').text(balance_savings);
	}
	}	

	


	$('#deposit-savings').click(depsavings);
	$('#withdraw-savings').click(wdsavings);

	function depsavings()
	{

	var amount = $('#amount-savings').val();
	amount = parseInt(amount);	

	balance_savings= balance_savings+amount;
	balance_savings= parseInt(balance_savings);

	$('#cash-savings').text(balance_savings);

	if(balance_savings < 0)
		$('#cashwrapper-savings').css('background-color','red');
	else
		$('#cashwrapper-savings').css('background-color','white');

	}

	function wdsavings()
	{
	amount = $('#amount-savings').val();
	amount = parseInt(amount);	

	balance_savings = balance_savings-amount;
	balance_savings = parseInt(balance_savings);

	$('#cash-savings').text(balance_savings);

	if(balance_savings < 0)
		$('#cashwrapper-savings').css('background-color','red');
	else
		$('#cashwrapper-savings').css('background-color','white');

	}

	


});

