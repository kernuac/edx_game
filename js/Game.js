var GF = function ()
{
    'use strict';
    var frameCount = 0;
    var lastTime;
    var fpsContainer;
    var fps;
    var viewport = document.querySelector("#viewport");
    var ctx = viewport.getContext("2d");
    var w = 400;
    var h = 320;
    
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
        viewport.width = w;
        viewport.height = h;
        viewport.style.border = "1px solid black";
        fpsContainer = document.createElement('div');
        document.body.appendChild(fpsContainer);
        
        var player = new Character("player 1");
        var sprite = new Sprite();
        sprite.update();
        player.update();
        requestAnimationFrame(mainLoop);
    };

    return {
        start: start
    };
};

