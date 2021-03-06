function Character(name, color, psx, psy)
{
    this.name = name;
    this.x = psx;
    this.y = psy;
    this.w = 48;
    this.h = 16;
    this.speed = 1;
    this.life = 3;
    this.isAlive = true;
    this.isLanded = true;
    this.color = "black";
    this.score = 0;
    this.image = new Image();
    this.image.src = 'assets/img/airplane.png';
    this.direction = {
        up: 1,
        right: 2,
        down: 3,
        left: 4
    };
    //this.type = this.types.player;
}

Character.prototype = new Sprite();
Character.prototype.constructor = Character;
Character.prototype.update = function (timer, keys, myfires, collideViewport)
{
    
    if(keys.up && !collideViewport.up)
    {
        this.y -= (this.speed*timer/10);
    }
    if(keys.down && !collideViewport.down)
    {
        this.y += (this.speed*timer/10);
    }
    if(keys.left && !collideViewport.left)
    {
        this.x -= (this.speed*timer/10);
    }
    if(keys.right && !collideViewport.right)
    {
        this.x += (this.speed*timer/10);
    }
    if(keys.space)
    {
        if(myfires.length < 1)
        {
            myfires.push(new Fire(this.x, this.y+this.h/2, this.direction.right));
        }
    }
};

Character.prototype.fire = function()
{
    return true;
};

/*---------------------- Enemy -------------*/
function Enemy(x, y, speed, life, color)
{
    this.x = x;
    this.y = y;
    this.w = 48;
    this.h = 27;
    this.speed = speed;
    this.color = color;
    this.isInTarget = true;
    this.target = this.y;
    this.distance;
    this.distanceR;
    this.image = new Image();
    this.image.src = 'assets/img/enemy.png';
    //this.type = this.types.enemy;
}

Enemy.prototype = new Sprite();
Enemy.prototype.constructor = Enemy;
Enemy.prototype.update = function(timer)
{
    if(this.isInTarget)
    {
        this.setTarget(((Math.random()*300)));
    }
    this.moveToTarget(timer);
}

Enemy.prototype.setTarget = function(y)
{
    this.isInTarget = false;
    this.target = y;
    this.distance = Math.abs(this.y-this.target);
    this.distanceR = 0;  
}

Enemy.prototype.moveToTarget = function(timer)
{

    if(this.distanceR <= this.distance)
    {
        if(this.target - this.y > 0)
        {
            this.y += this.speed*timer/10;
        }
        else
        {
            this.y -= this.speed*timer/10;
        }
        this.x -= this.speed*timer/10;
        this.distanceR += this.speed*timer/10;
    }
    else
    {
        this.isInTarget = true;
    }
}

Enemy.prototype.fire = function ()
{
    var fire = false;
    if(Math.random()*100 < 3)
    {
        fire = true;
    }
    return fire;
}

function Fire(x, y, dir)
{
    this.speed = 1;
    this.color = "red";
    this.x = x;
    this.y = y;
    this.w = 16;
    this.h = 11;
    this.dir = dir;
    this.direction = {
        up: 1,
        right: 2,
        down: 3,
        left: 4
    };
    this.image = new Image();
    this.setImage(this.dir);
}

Fire.prototype = new Sprite();
Fire.prototype.constructor = Fire;
Fire.prototype.setImage = function(dir)
{
    if(this.dir == this.direction.left)
    {
        this.image.src='assets/img/fireleft.png';
    }
    else if(this.dir == this.direction.right)
    {
        this.image.src='assets/img/fireright.png';
    }
}

Fire.prototype.update = function(timer)
{
    if(this.dir == this.direction.left)
    {
        this.x -= this.speed * timer;
    }
    else if(this.dir == this.direction.right)
    {
        this.x += this.speed * timer;
    }
}

/*Fire.prototype.draw = function (ctx)
{
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.restore();
}*/
