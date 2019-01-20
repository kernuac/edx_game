var Mixer = (function () {
    var api = {};
    api.init = function () {
        
    };
    
    return api;
})();

export { Mixer };
/*function Mixer()
{
    this.soundFile = [];
    this.sfx = [];
    this.ctx;   
}

Mixer.prototype.init = function ()
{
    var audioContext = window.AudioContext || window.webkitAudioContext;
    this.ctx = new audioContext();

}

Mixer.prototype.loadFile = function (file)
{
    return new Audio(file);
}

Mixer.prototype.loadSoundFile(id, file)
{
    this.soundFile[id] = this.loadFile(file);
}

Mixer.prototype.loadSfx(id, file)
{
    this.sfx[id] = this.loadFile(file);
}

*/
