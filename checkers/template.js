$(function(){

create_board();
add_pieces1();
add_pieces2();

subscribe();
$('#joinchat').click(join_chat);
$('#submittalk').click(send_chat);

});


function create_board(){

	for(var x = 0; x <8; x++){

		if (x % 2 === 0)
		{
			$('#board').append('<div id="r' + x + '" class="row clearfix"></div>');
		
			for(var y = 0; y <8; y++){
				if (y % 2 === 0)
				{
					$('#r' + x).append('<div class="square white" data-row="' + x + '" data-col="' + y + '"></div>');
				}
				else
				{
					$('#r' + x).append('<div class="square black" data-row="' + x + '" data-col="' + y + '"></div>');
				}
			}
		}
		else
		{
			$('#board').append('<div id="r' + x + '" class="row clearfix"></div>');
		
			for(var y = 0; y <8; y++){
				if (y % 2 === 0)
				{
					$('#r' + x).append('<div class="square black" data-row="' + x + '" data-col="' + y + '"></div>');
				}
				else
				{
					$('#r' + x).append('<div class="square white" data-row="' + x + '" data-col="' + y + '"></div>');
				}
			}
		}

	}

}

function add_pieces1(){

	for(var x = 0; x < 3; x++){
		$('#r' + x).children('.black').addClass('player1');


	}
}

function add_pieces2(){

	for(var x = 5; x < 8; x++){
		$('#r' + x).children('.black').addClass('player2');

	}
}


function subscribe()
{
    PUBNUB.subscribe({
    	channel    : "checkers",      // CONNECT TO THIS CHANNEL.
    	restore    : false,              // STAY CONNECTED, EVEN WHEN BROWSER IS CLOSED
                                       // OR WHEN PAGE CHANGES.
    	callback   : receive_message, // RECEIVED A MESSAGE.

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

function join_chat()
{
	var name = $('#name').val();
	whoami = name;
	send_join_chat(name);

}

function send_join_chat(name, message)
{
	PUBNUB.publish({
		channel : 'checkers',
		message : {type: 'join', name: name, message: ' has joined the chat.'}
	});

}

function receive_message(message)
{	
	switch(message.type)
	{
		case 'join':
			display_chat(message.name, message.message);
		break;
		case 'chat':
			display_chat(message.name, message.message);

	}		
}

function send_chat()
{
	PUBNUB.publish({
		channel : 'checkers',
		message : {type: 'chat', name: whoami, message: ': ' + $('#talk').val()}
	});


}


function display_chat(name, message)
{

	var msg = name + message;
	var p = $('<p>');
	p.text(msg);
	$('#chatbox').prepend(p);

}