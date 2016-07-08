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
    
    var inputStates = {};
    
    var gameStates = {
        mainMenu: 0,
        gameRunning: 1,
        gamePaused: 2,
        gameOver: 3
    }
    
    var currentGameState = gameStates.gameRunning;
    
    var player = new Character("player 1");
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
        

        var sprite = new Sprite();
        var enemies = {};
        requestAnimationFrame(mainLoop);
    };

    return {
        start: start
    };
};

