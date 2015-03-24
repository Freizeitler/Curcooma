/**
 * Curcooma! Game Engine
 *
 * @desc This is the main function representing the game engine of Curcooma!.
 * @author [@Freizeitler]
 * @dependency jQuery, ...
 */

$.fn.curcooma = function() {


	  // consume game-data.json
    var getGameData = (function() {
          $.ajax({
            'async': false,
            'global': false,
            'url': '../json/player-data.json',
            'dataType': "json",
            'success': function(data) {
            	 	console.log(data);
               	playerData = data.player;
               	gameData = data;
            }
          });
        })();

    // populate player section
    $('.player-name').text(playerData.name);
    $('.player-money').text(gameData.balance);
    switch (playerData.type) {
		  case 1:
		    playerPic = 'http://placehold.it/60x60/8a9b0f/ffffff&text=type+1';
		    break;
		  case 2:
		    playerPic = 'http://placehold.it/60x60/8a9b0f/ffffff&text=type+2';
		    break;
		  case 3:
		    playerPic = 'http://placehold.it/60x60/8a9b0f/ffffff&text=type+3';
		    break;
		  case 4:
		    playerPic = 'http://placehold.it/60x60/8a9b0f/ffffff&text=type+4';
		    break;
		  case 5:
		    playerPic = 'http://placehold.it/60x60/8a9b0f/ffffff&text=type+5';
		    break;
		  default:
		    playerPic = 'http://placehold.it/60x60/8a9b0f/ffffff&text=type+1';
		}
    $('.player-pic img').attr('src', playerPic);

    // populate main section
    $('.restaurant-name').text(playerData.restaurant);


};

// init Curcooma!
$(document).ready(function() {
	$('body').curcooma();
});
