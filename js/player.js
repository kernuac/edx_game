import { Sprite } from './sprite.js';

var Player = ( function () {
    var api = {};
    var score = 0;
    api.sprite = null;
    api.posx = 0;
    api.posy = 0;

    api.updateScore = function ( points ) {
        score += points;
    }
    
    api.getScore = function () {
        return score;
    }
    
    api.init = function () {
        console.log( "initializing sprite" );
        api.sprite = new Sprite();
        api.sprite.set_size(2, 2);
        api.sprite.set_indexes( [1,2,3,4] );  
    }
    
    api.update = function ( keys, dtime ) {
        if( keys.up.pressed ) {
            api.posy -= 1 * dtime / 10;
        }

        if( keys.down.pressed ) {
            api.posy += 1 * dtime / 10;
        }
        
        if( keys.left.pressed ) {
            api.posx -= 1 * dtime / 10;
        }

        if( keys.right.pressed ) {
            api.posx += 1 * dtime / 10;
        }
    }

    return api;
})();

export { Player };
