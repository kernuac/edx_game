window.addEventListener('DOMContentLoaded',  function init()
{
    var game = new GF();
    game.start();
});

var GF = function ()
{
    var frameCount = 0;
    var lastTime;
    var fpsContainer;
    var fps;
    var viewport;
    var ctx;
    var w;
    var h;

    var measureFPS = function(newTime)
    {
        var diffTime;
        //console.log("hosa");
        if(lastTime === undefined) {
            lastTime = newTime;
            return;
        };
        
        var diffTime = newTime - lastTime;

        if(diffTime >= 1000)
        {
            fps = frameCount;
            frameCount = 0;
            lastTime = newTime;
        }

        fpsContainer.innerHTML = 'FPS: ' + fps;
        frameCount++;
    };

    var mainLoop = function(time)
    {
        measureFPS(time);
        requestAnimationFrame(mainLoop);
    };

    var start = function()
    {
        fpsContainer = document.createElement('div');
        document.body.appendChild(fpsContainer);
        requestAnimationFrame(mainLoop);
    };

    return {
        start: start
    };
};

