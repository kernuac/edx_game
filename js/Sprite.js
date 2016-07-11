function Sprite()
{
    this.x;
    this.y;
    this.w;
    this.h;
    this.color = "#87eb99";
    this.image;
}

Sprite.prototype.update = function (timer)
{
    
}

Sprite.prototype.draw = function (ctx)
{
    ctx.save();
    /*this.image.onload = function ()
    {*/
        ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    /*}*/
    ctx.restore();
}
