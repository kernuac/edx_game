var Renderer = ( function () {
    var api = {
        __canvas : false
    };

    api.set_canvas = function ( canvas ) {
        api.__canvas = canvas;
    };

    api.render = function ( tileset, tile_x, tile_y, pos_x, pos_y ) {
        api.__canvas.save();
        api.__canvas.drawImage(
            tileset.get_tiles(), 
            tile_x, 
            tile_y, 
            8, 8,
            pos_x,
            pos_y,
            8, 8 );
        api.__canvas.restore();
    }

    return api;
})();

export { Renderer };