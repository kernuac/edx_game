function Character(name)
{
    this.name = name;
    this.x = 0;
    this.y = 0;
    this.speed = 1;
    this.life = 1;
    this.isAlive = true;
    this.isLanded = true;
    this.direction = {
        up: 1,
        right: 2,
        down: 3,
        left: 4
    }
}

Character.prototype = new Sprite();
Character.prototype.constructor = Character;
Character.prototype.update = function (timer, inputEvents)
{
    
}