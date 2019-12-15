import { Sprite } from './sprite.js';

var Player = ( function () {
    var api = {};
    var score = 0;
    api.character = null;
 
    api.updateScore = function ( points ) {
        score += points;
    }
    
    api.getScore = function () {
        return score;
    }
    
    api.init = function () {
        console.log( "initializing sprite" );
        api.character = new Sprite();
        api.character.image = new Image();
        api.character.x = 0;
        api.character.y = 0;
        api.character.w = 16;
        api.character.h = 16;
        api.character.image.src = 'assets/img/airplane2.png';    
    }
    
    api.update = function ( keys, dtime ) {
        if( keys.up.pressed ) {
            api.character.y -= 1 * dtime / 10;
        }

        if( keys.down.pressed ) {
            api.character.y += 1 * dtime / 10;
        }
        
        if( keys.left.pressed ) {
            api.character.x -= 1 * dtime / 10;
        }

        if( keys.right.pressed ) {
            api.character.x += 1 * dtime / 10;
        }
    }

    api.draw = function ( ctx, tileset ) {
        api.character.draw( ctx, tileset );
    }
    
    return api;
})();

export { Player };
