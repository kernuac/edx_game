function Sprite()
{
    this.x;
    this.y;
    this.w;
    this.h;
    this.image;
    
    this.update = function ( timer ) {
        
    }

    this.draw = function ( ctx ) {
        ctx.save();
        ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
        ctx.restore();    
    }
}

export { Sprite };
