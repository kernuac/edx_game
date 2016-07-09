var GF = function ()
{
    'use strict';
    var frameCount = 0;
    var lastTime;
    var fpsContainer;
    var keysContainer;
    var fps;

    var viewport = document.querySelector("#viewport");
    viewport.x = 0;
    viewport.y = 0;
    var ctx = viewport.getContext("2d");
    
    var w = 400;
    var h = 320;
    
    var input;
    var timer;
    var collider;
    
    var gameStates = {
        mainMenu: 0,
        gameRunning: 1,
        gamePaused: 2,
        gameOver: 3
    }
    
    var currentGameState = gameStates.gameRunning;
    
    var player;
    var playerFire;
    var enemies;
    var enemiesFire;
    
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
        var tick = timer.dtime();
        var cwv;
        clearCanvas();
        
        switch(currentGameState)
        {
            case gameStates.gameRunning:
                if(player.isAlive)
                {
                    ctx.save();
                    ctx.font='8px LVDCGO';
                    ctx.fillText('Lives: '+player.life,20,15);
                    ctx.fillText('Score: '+player.score,250,15)
                    ctx.restore();
                    createEnemies(tick);
                    updateEnemies(tick);
                    updateFire(tick);
                    drawEnemies();
                    cwv = collider.collideWithViewport(player, viewport);
                    player.update(tick, input.keys, cwv);
                    if(collider.collideWithGroup(player,enemies))
                    {
                        player.life--;
                        if(player.life == 0)
                        {
                            player.isAlive = false;
                        }
                        player.x = 20;
                        player.y = 20;
                    }
                    player.draw(ctx);
                }
                else
                {
                    currentGameState = gameStates.gameOver;
                }
                break;
            case gameStates.mainMenu:
                break;
                
            case gameStates.gameOver:
                alert("Game OVER!");
                //I need reset the game in a better way...
                //I tried to call start function but it
                //doesn't work
                //start();
                window.location.href="./";
                break;
        }
        requestAnimationFrame(mainLoop);
    };
    var createEnemies = function (tick)
    {
        //console.log(tick);
        //console.log(enemies.length);
        if(tick > 30 * Math.random()*25 && enemies.length<10)
        {
            enemies.push(new Enemy(viewport.width-20,viewport.height*Math.random(),0.5,1,"green"))
        }
    }
    
    var updateEnemies = function(tick)
    {
        if(enemies.length>0)
        {
            for(var i = enemies.length;i--;)
            {
                var collide = collider.collideWithViewport(enemies[i], viewport);
                if(collide.left)
                {
                    enemies.splice(i,1);
                //console.log(enemies.length);
                }
                else
                {
                    if(enemies[i].fire())
                    {
                        enemiesFire.push(new Fire(4));
                        //console.log(enemiesFire.length);
                    }
                    enemies[i].update(tick);
                }
            }
        }
    }
    
    var updateFire = function (tick)
    {
        for(var i = enemiesFire.length; i--;)
        {
            enemiesFire[i].update(tick);
            enemiesFire[i].draw(ctx);
        }
    }
    var drawEnemies = function ()
    {
        for(var i = enemies.length; i--;)
        {
            enemies[i].draw(ctx);
        }
    }
    var start = function()
    {
        viewport.width = w;
        viewport.height = h;
        viewport.style.border = "1px solid black";
        
        fpsContainer = document.createElement('div');
        document.body.appendChild(fpsContainer);
        
        input = new Input();
        input.init();
        
        timer = new Timer();
        timer.init();
        
        collider = new Collider();
        
        player = new Character("player 1", "black");
        enemies = [
            new Enemy(viewport.width-20,viewport.height*Math.random(),0.5,1,"green"),
            new Enemy(viewport.width-20,viewport.height*Math.random(),0.8,3,"red")
        ];
        enemiesFire = [];
        playerFire = [];
        requestAnimationFrame(mainLoop);
    };

    return {
        start: start
    };
};

