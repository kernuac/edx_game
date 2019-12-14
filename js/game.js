import { Viewport } from "./viewport.js";
import { Context } from "./context.js";
import { Input } from "./input.js";
import { Mixer } from "./mixer.js";
import { Timer } from "./timer.js";
import { Player } from "./player.js";


var Game = (function (Viewport, Context, Input, Mixer, Timer) {
    var api = {};
   
   api.init = function () {
        Viewport.init();
        Viewport.setViewPortSize( 320, 240 );
        Context.create( Viewport.viewport, "2d" );
        Player.init();
        Input.init();
        Mixer.init();
        Timer.init();
        window.requestAnimationFrame( mainLoop );
   };
   
   var mainLoop = function () {
        var dtime = Timer.dtime();
        var keys = Input.update();
        Context.clear( Viewport.viewport );
        Player.update( keys, dtime );
        Player.draw( Context.ctx );
        window.requestAnimationFrame( mainLoop );
   };
   
   return api;
})(Viewport, Context, Input, Mixer, Timer);

export { Game };

/*
var GF = function ()
{
    'use strict';
    var frameCount = 0;
    var lastTime;
    
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
    
    var mainMenu;
    function clearCanvas()
    {
        ctx.clearRect(0,0,w,h);
    }
    
    var measureFPS = function(newTime)
    {
        var diffTime;
        
        if(lastTime === undefined)
        {
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
                    updateHud();
                    updateEnemiesFire(tick);
                    updatePlayerFire(tick);
                    updateEnemies(tick);
                    createEnemies(tick);
                    drawEnemies();
                    cwv = collider.collideWithViewport(player, viewport);
                    player.update(tick, input.keys, playerFire, cwv);
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
                var startGame = mainMenu.update(tick, input.keys);
                if(startGame)
                {
                    currentGameState = gameStates.gameRunning;
                }
                mainMenu.draw(ctx);
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
        enemies.map(function (enemy) {
            var collide = collider.collideWithViewport(enemy, viewport);
            var killed = collider.collideWithGroup(enemy, playerFire);
            if(collide.left) {
                enemies.splice(enemies.indexOf(enemy), 1);
            } else if (killed) {
                enemies.splice(enemies.indexOf(enemy), 1);
                player.score += 10;
            } else {
                if(enemy.fire() && enemiesFire.length < 1) {
                    enemiesFire.push(new Fire(enemy.x, enemy.y+enemy.h/2, 4));
                } 
                enemy.update(tick);
            }
        });
    }
    
    var updateEnemiesFire = function (tick)
    {
        enemiesFire.map(function (fire) {
            var collide = collider.collideWithViewport(fire, viewport);
            if(collide.left) {
                enemiesFire.splice(enemiesFire.indexOf(fire), 1);
            } else {
                fire.update(tick);
                fire.draw(ctx);
            }
        });
    }
    
    var updatePlayerFire = function (tick)
    {
        playerFire.map(function (fire) {
            var collide = collider.collideWithViewport(fire, viewport);
            if(collide.right) {
                playerFire.splice(playerFire.indexOf(fire), 1);
            } else {
                fire.update(tick);
                fire.draw(ctx);
            }
        });
    }

    var updateHud = function()
    {
        ctx.save();
        ctx.fillStyle="white";
        ctx.font='8px LVDCGO';
        ctx.fillText('Lives: '+player.life,viewport.x + 20, viewport.y + 15);
        ctx.fillText('Score: '+player.score,viewport.width - 150, viewport.y+15);
        ctx.fillText('FPS: ' + fps ,viewport.x + 20, viewport.height - 20);
        ctx.restore();
    }
    var drawEnemies = function ()
    {
        enemies.map(function (enemy){
            enemy.draw(ctx);
        });
    }
    
    var start = function()
    {
        viewport.width = w;
        viewport.height = h;
                
        init();
        requestAnimationFrame(mainLoop);
    };

    var init = function ()
    {
        currentGameState = gameStates.mainMenu;
        input = new Input();
        input.init();
        
        timer = new Timer();
        timer.init();
        
        mainMenu = new MainMenu();
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
*/
