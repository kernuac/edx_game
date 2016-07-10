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
    var psx;
    var psy;
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
                    updateEnemiesFire(tick);
                    updatePlayerFire(tick);
                    updateEnemies(tick);
                    createEnemies(tick);
                    drawEnemies();
                    cwv = collider.collideWithViewport(player, viewport);
                    player.update(tick, input.keys, playerFire,cwv);
                    if(collider.collideWithGroup(player,enemies)
                    || collider.collideWithGroup(player,enemiesFire))
                    {
                        player.life--;
                        if(player.life == 0)
                        {
                            player.isAlive = false;
                        }
                        player.x = psx;
                        player.y = psy;
                    }
                    player.draw(ctx);
                }
                else
                {
                    currentGameState = gameStates.gameOver;
                }
                break;
            case gameStates.mainMenu:
                //Not implemented yet
                break;
                
            case gameStates.gameOver:
                alert("Game OVER!");
                init();
                break;
        }
        requestAnimationFrame(mainLoop);
    };
    var createEnemies = function (tick)
    {

        if(tick > 30 * Math.random()*25 && enemies.length<5)
        {
            enemies.push(new Enemy(viewport.width-20,(viewport.height-20)*Math.random(),0.5,1,"green"))
        }
    }
    
    var updateEnemies = function(tick)
    {
        if(enemies.length>0)
        {
            for(var i = enemies.length;i--;)
            {
                var collide = collider.collideWithViewport(enemies[i], viewport);

                var killed = collider.collideWithGroup(enemies[i], playerFire);
                
                if(collide.left)
                {
                    enemies.splice(i,1);
                }
                else if(killed)
                {
                    enemies.splice(i, 1);
                    player.score += 10;
                }
                else
                {
                    if(enemies[i].fire() && enemiesFire.length < 1)
                    {
                        enemiesFire.push(new Fire(enemies[i].x, enemies[i].y+enemies[i].h/2, 4));

                    }
                    enemies[i].update(tick);
                }
            }
        }
    }
    
    var updateEnemiesFire = function (tick)
    {
        for(var i = enemiesFire.length; i--;)
        {
            var collide = collider.collideWithViewport(enemiesFire[i], viewport);
            if(collide.left)
            {
                enemiesFire.splice(i, 1);
            }
            else
            {
                enemiesFire[i].update(tick);
                enemiesFire[i].draw(ctx);
            }
        }
    }
    
    var updatePlayerFire = function (tick)
    {
        for(var i = playerFire.length; i--;)
        {
            var collide = collider.collideWithViewport(playerFire[i], viewport);
            if(collide.right)
            {
                playerFire.splice(i,1);
            }
            else
            {
                playerFire[i].update(tick);
                playerFire[i].draw(ctx);
            }
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
        
        init();
        requestAnimationFrame(mainLoop);
    };

    var init = function ()
    {
        currentGameState = gameStates.gameRunning;
        input = new Input();
        input.init();
        
        timer = new Timer();
        timer.init();
        
        collider = new Collider();
        psx = 20;
        psy = viewport.height/2;
        
        player = new Character("player 1", "black", psx, psy);
        enemies = [];
        enemiesFire = [];
        playerFire = [];
    }
    return {
        start: start
    };
};

