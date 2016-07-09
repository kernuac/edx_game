var GF = function ()
{
    'use strict';
    var frameCount = 0;
    var lastTime;
    var fpsContainer;
    var keysContainer;
    var fps;

    var viewport = document.querySelector("#viewport");
    var ctx = viewport.getContext("2d");
    
    var w = 400;
    var h = 320;
    
    var input;
    
    var gameStates = {
        mainMenu: 0,
        gameRunning: 1,
        gamePaused: 2,
        gameOver: 3
    }
    
    var currentGameState = gameStates.gameRunning;
    
    var player = new Character("player 1", "black");
    var enemies = {};
    
    function clearCanvas()
    {
        ctx.clearRect(0,0,w,h);
    }
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
        
        clearCanvas();
        
        switch(currentGameState)
        {
            case gameStates.gameRunning:
                ctx.save();
                ctx.font='8px LVDCGO';
                ctx.fillText('Lives: '+player.life,20,15);
                ctx.fillText('Score: '+player.score,250,15)
                ctx.restore();
                player.update(time, input.keys);
                player.draw(ctx);
                break;
            case gameStates.mainMenu:
                break;
            case gameSates.GameOver:
                break;
        }
        requestAnimationFrame(mainLoop);
    };
    var createEnemies = function ()
    {
        
    }
    var start = function()
    {
        viewport.width = w;
        viewport.height = h;
        viewport.style.border = "1px solid black";
        
        fpsContainer = document.createElement('div');
        document.body.appendChild(fpsContainer);
        keysContainer = document.createElement('div');
        document.body.appendChild(keysContainer);
        
        input = new Input();
        input.init();
        requestAnimationFrame(mainLoop);
    };

    return {
        start: start
    };
};

