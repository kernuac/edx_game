function Sprite() {
    var __width = 1;
    var __height = 1;
    var __indexes = [];

    this.update = function ( timer ) {
        
    }

    this.set_indexes = function ( indexes ) {
        __indexes = indexes;
    }

    this.set_size = function ( width, height ) {
        __width = width;
        __height = height;
    }

}

export { Sprite };
