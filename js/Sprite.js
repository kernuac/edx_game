function Sprite()
{
    this.x;
    this.y;
    this.w;
    this.h;
    this.color = "#87eb99";
}

Sprite.prototype.update = function (timer)
{
    
}

Sprite.prototype.draw = function (ctx)
{
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle=this.color;
    ctx.strokeStyle=this.color;
    ctx.moveTo(this.x,this.y);
    ctx.lineTo(this.x+this.w,this.y+this.h/2);
    ctx.lineTo(this.x,this.y+this.h);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
}
