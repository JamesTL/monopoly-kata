// Law_audioContextn
// Module creates an audioContext
//refrence context--> Law_audioContext.context will reference the audioContext
define(
    [],
    function(){

        'use strict';

        function Law_Node(ctx,type ){

          if(type ===undefined) this.isBufferSource = ctx.createBufferSource();
          else
            if(type ==="gainNode")this.isGainNode = ctx.createGain();
            else
              if (type==="oscillatorNode")this.isOscillatorNode = ctx.createOscillator();

            console.log(this);
        }


        // Return the module constructor.
        return(Law_Node);
    }
);
