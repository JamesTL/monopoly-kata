/**
 * Created by JamesLove on 27/06/2014.
 */
define(
    [],
    function(){

        'use strict';

        var numberOfSpaces= 40;

        function Board(){


        }


        Board.prototype = {

            getNumberOfSpaces: function(){


                return  numberOfSpaces;

            }
        }

        // Return the module constructor.
        return(Board);
    }
);