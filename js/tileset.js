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

    api.get_tiles = function () {
        return __tiles;
    }

    return api;
})();

export { Tileset };