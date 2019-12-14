function Shape() {
    
    this.buffer = null;
    this.x = 0;
    this.y = 0;
    this.w = 0;
    this.h = 0;
    this.direction = 0;
 
    this.set_size = function ( sw, sh ) {

        if ( sw < 0 || sh < 0 ) {
            return false;
        }

        this.w = sw;
        this.h = sh;
    }
    
    this.create_shape = function () {
            
    }

    this.draw = function ( ctx ) {
        ctx.save();
        ctx.this.buffer, this.x, this.y, this.w, this.h ); 
        ctx.restore();
    }
}

function Triangle( 
export { Shape };
