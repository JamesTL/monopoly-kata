/**
 * Created by jameslove on 24/02/2014.
*/

// Load the validation code and describe tests.

define(
    [
        "model/location"
    ],
    function(Location){



      describe("Location module - creates an returns a location object that will be used to create a monopoly board",


            function(){


                var testLocation;

                beforeEach(function(){

                    testLocation = new Location();

                })

                it("Will return an object of type location",

                    function(){

                        var isLocation= testLocation instanceof  Location;
                        expect(isLocation).toEqual(true);

                      }

                )



            }
         );




       /* Describe the test suite for this module.
        describe(
            "The AudioObjet module provides instantiation and core functionality for an audioContext",
            function(){
                     // Create our test module.
                var testLaw = new Law_audioContext();
                console.log(testLaw);
               //console.log(testLaw.return_Ctx(testLaw));
                //replace with tests approp

                 it( "It  Creates AudioContext when instantiated",
                     function(){
                            var  isAudioContext  =  testLaw.context instanceof AudioContext;
                            expect(isAudioContext).toBe(true);
                     });
             }
        );*/
    }
);