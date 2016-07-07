function Character(name)
{
    this.name = name;
    this.isAlive = true;
    this.isLanded = true;
}

Character.prototype = new Sprite();
Character.prototype.constructor = Character;
Character.prototype.update = function ()
{
    console.log("Hola, soy "+this.name);
}