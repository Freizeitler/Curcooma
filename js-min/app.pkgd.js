/*
 * boilerplate by menadwork kommunikation GmbH (http://www.menadwork.com) (2015-03-25, 08:51)
 */

$.fn.curcooma=function(){!function(){$.ajax({async:!1,global:!1,url:"../json/player-data.json",dataType:"json",success:function(a){console.log(a),playerData=a.player,gameData=a}})}();switch($(".player-name").text(playerData.name),$(".player-money").text(gameData.balance),playerData.type){case 1:playerPic="http://placehold.it/60x60/8a9b0f/ffffff&text=type+1";break;case 2:playerPic="http://placehold.it/60x60/8a9b0f/ffffff&text=type+2";break;case 3:playerPic="http://placehold.it/60x60/8a9b0f/ffffff&text=type+3";break;case 4:playerPic="http://placehold.it/60x60/8a9b0f/ffffff&text=type+4";break;case 5:playerPic="http://placehold.it/60x60/8a9b0f/ffffff&text=type+5";break;default:playerPic="http://placehold.it/60x60/8a9b0f/ffffff&text=type+1"}$(".player-pic img").attr("src",playerPic),$(".restaurant-name").text(playerData.restaurant)},$(document).ready(function(){$("body").curcooma()});
//# sourceMappingURL=app.pkgd.js.map