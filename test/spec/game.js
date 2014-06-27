/**
 Created by JamesLove on 27/06/2014.
 */
// Load the validation code and describe tests.
define(
    [
        "model/game"
    ],
    function(Game){



        describe("Game  module - creates an returns a Game object",


            function(){

                var testGame;

                beforeEach(function(){

                    testGame = new Game();

                })

                it("Will return an object of type Game",

                    function(){

                        var isGame = testGame instanceof Game;
                        expect(isGame).toBe(true);

                    }

                )

             }
        );

        }
);