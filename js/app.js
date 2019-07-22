'use strict';

import "/js/game.js"

var App = (function (Game) 
{
    var api = {};
    
    api.init = function () {
        Game.init();
    };
    
    return api;
})(Game);


window.addEventListener('DOMContentLoaded',  App.init );
