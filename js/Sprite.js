function Sprite()
{
    this.x;
    this.y;
    this.w;
    this.h;
    this.color = "#87eb99";
}

Sprite.prototype.update = function (timer, inputEvents)
{
    
}

Sprite.prototype.draw = function (ctx)
{
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle=this.color;
    ctx.strokeStyle=this.color;
    ctx.moveTo(this.x,this.y);
    ctx.lineTo(this.x+16,this.y+8);
    ctx.lineTo(this.x-16,this.y+16);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
}