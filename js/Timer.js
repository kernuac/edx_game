function Timer()
{
    this.now;
    this.last;
}

Timer.prototype.init = function ()
{
    this.now = performance.now();
    this.last = this.now;
}

Timer.prototype.dtime = function ()
{
    var dt = 0;
    this.now = performance.now();
    dt = this.now - this.last;
    this.last = this.now;
    return dt;
}
