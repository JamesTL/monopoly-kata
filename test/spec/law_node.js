/**
 * Created by jameslove on 30/04/2014.
 * * test for law_audioContext AMD- which will create  an audioContext
 */
// Load the validation code and describe tests.
define(
    [
        "model/law_audioContext",
        "model/law_node"
    ],
    function(Law_audioContext,Law_Node){

        // Describe the test suite for this module.
        describe(
            "The Law_Node module provides instantiation and core functionality for an audio Node",
            function(){
                // Create our test module.
                var testLaw,
                    myLawNode;

                beforeEach(function () {
                    testLaw = new Law_audioContext();

                });
                it( "It will create and return and object of type Law_Node",
                    function(){
                        myLawNode = new Law_Node(testLaw.context);

                        var isLawNode = myLawNode instanceof Law_Node;
                        expect(isLawNode).toBe(true);
                    });

              it("It will create an AudioBufferSourceNode  for the Node using the createBufferSource() function of an auudioCOntent",
                    function(){
                        var myLawNode = new Law_Node(testLaw.context);

                        var  isCreateBufferSource =  myLawNode.isBufferSource  instanceof AudioBufferSourceNode;
                        expect(isCreateBufferSource).toBe(true);

                    });

                 it("It will have a type of create an a GainNode if requested",
                    function(){
                        var myLawNode = new Law_Node(testLaw.context,"gainNode");
                         var  isCreateGainNode =  myLawNode.isGainNode instanceof GainNode;
                        expect(isCreateGainNode).toBe(true);

                    });

                it("It will create an oscillator node is required", function(){
                         var myLawNode = new Law_Node(testLaw.context,"oscillatorNode");
                        var isOscillatorNode = myLawNode.isOscillatorNode instanceof OscillatorNode;
                          expect (isOscillatorNode).toBe(true);

                });

                //
             }
        );
    }
);