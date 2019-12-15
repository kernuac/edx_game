function Sprite() {
    this.x;
    this.y;
    this.w;
    this.h;
    this.image;
    
    this.update = function ( timer ) {
        
    }

    this.draw = function ( ctx, tileset, sx, sy, sw, sh, dx, dy, dw, dh ) {
        ctx.save();
        ctx.drawImage(tileset.tileset, this.x, this.y, this.w, this.h);
        ctx.restore();    
    }
}

export { Sprite };
