function Character(name, color)
{
    this.name = name;
    this.x = 0;
    this.y = 0;
    this.speed = 1;
    this.life = 1;
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
Character.prototype.update = function (timer, keys)
{
    if(keys.up)
    {
        this.y -= this.speed;
    }
    if(keys.down)
    {
        this.y += this.speed;
    }
    if(keys.left)
    {
        this.x -= this.speed;
    }
    if(keys.right)
    {
        this.x += this.speed;
    }
};
