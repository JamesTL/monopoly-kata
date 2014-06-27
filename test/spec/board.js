/**
 Created by JamesLove on 27/06/2014.
 */
// Load the validation code and describe tests.
define(
    [
        "model/board"
    ],
    function(Board){



        describe("Board module - creates an returns a board object that will be used to create a monopoly board",


            function(){

         var testBoard;

                beforeEach(function(){

                    testBoard = new Board();

                })

                it("It Will return an object of type Board",

                    function(){

                        var isBoard =  testBoard  instanceof Board;
                        expect(isBoard).toBe(true);

                    }
                  );
                //A board will have 40 composed of 40 spaces

                it("A board will have 40 spaces", function(){

                    var numberOfSpaces = testBoard.getNumberOfSpaces();
                    expect(numberOfSpaces).toBe(40);
                 });
              }
        );

    }
);