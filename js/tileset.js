var Tileset = ( function () {
    var api = {};
    var __tiles = false;
    var __width = 0;
    var __height = 0;

    api.load = function ( filename ) {
        __tiles = new Image();
        __tiles.src = filename;
    }

    api.set_size = function( width, height ) {
        __width = width;
        __height = height;
    }

    api.get_size = function() {
        return {
            width: __width,
            height: __height
        }
    }

    api.draw_tile = function ( ctx, tile_position, dest ) {
        ctx.save();
        ctx.drawImage( self.__tiles, sx, sy, sw, sh, x, y, w, h );
        ctx.restore();
    }

    return api;
})();

export { Tileset };