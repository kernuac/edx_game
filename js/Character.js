function Character(name, color)
{
    this.name = name;
    this.x = 0;
    this.y = 0;
    this.w = 16;
    this.h = 16;
    this.speed = 1;
    this.life = 3;
    this.isAlive = true;
    this.isLanded = true;
    this.color = "black";
    this.score = 0;
    this.direction = {
        up: 1,
        right: 2,
        down: 3,
        left: 4
    };
}

Character.prototype = new Sprite();
Character.prototype.constructor = Character;
Character.prototype.update = function (timer, keys, collideViewport)
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
};

/*---------------------- Enemy -------------*/
function Enemy(x, y, speed, life, color)
{
    this.x = x;
    this.y = y;
    this.w = 16;
    this.h = 16;
    this.speed = speed;
    this.color = color;
    this.isInTarget = true;
    this.target = this.y;
    this.distance;
    this.distanceR;
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