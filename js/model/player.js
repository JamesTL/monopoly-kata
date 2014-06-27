/**
* Created by JamesLove on 27/06/2014.
*/
define(
    [],
    function(){

        'use strict';
        var playerStartingPosition = 0,
            playerCurrentPosition = 0;

         function Player(){

        }

        Player.prototype = {

              getPlayerStartingPosition: function(){

                  return playerStartingPosition;

                },

                getCurrentPlayerPosition: function(){

                  return playerCurrentPosition ;

                 },
                incrementCurrentPosition: function(val){

                    playerCurrentPosition =  playerCurrentPosition + val;
                 }
            }
        // Return the module constructor.
        return(Player);
    }
);