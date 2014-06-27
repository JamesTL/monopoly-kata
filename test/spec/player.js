/**
 * Created by jameslove on 24/02/2014.
 * * test for law_audioCOntext AMD- which will create  an audioContext
 */
// Load the validation code and describe tests.
define(
    [
        "model/player"
    ],
    function(Player){

/*

 As a player, I can take a turn so that I can move around the board.

 User Acceptance Tests
 Player on beginning location (numbered 0), rolls 7, ends up on location 7
 Player on location numbered 39, rolls 6, ends up on location 5



 */

        describe("Player module - creates an returns a Player object",


            function(){

                var testPlayer;

                beforeEach(function(){

                    testPlayer = new Player();

                })

                it("Will return an object of type Player",

                    function(){

                        var isPlayer=  testPlayer instanceof Player;
                        expect(isPlayer).toBe(true);

                  })

                it("A player will have a starting position of 0", function(){

                    var playerStartPosition =  testPlayer.getPlayerStartingPosition();
                    expect(playerStartPosition).toEqual(0);

                });

                it("A player will star with a current position of 0", function(){

                    var playerStartPosition =  testPlayer.getPlayerStartingPosition();
                    expect(playerStartPosition).toEqual(0);

                });


                it("A players current position can be incremented by a specified amount which can be passed parametrically", function(){


                       var currentPosition = testPlayer.getCurrentPlayerPosition();

                       testPlayer.incrementCurrentPosition(5);
                       var getNewPosition = testPlayer.getCurrentPlayerPosition();

                       expect(getNewPosition).toEqual(5);

                       testPlayer.incrementCurrentPosition(7);
                       expect(testPlayer.getCurrentPlayerPosition()).toEqual(12);

                       testPlayer.incrementCurrentPosition(12);
                       expect(testPlayer.getCurrentPlayerPosition()).toEqual(24);

                      });

             } );



    }
);