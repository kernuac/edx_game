'use strict';
import { Game } from "./game.js";

import "/js/game.js"

var App = (function (Game) 
{
    var api = {};
    
    api.init = function () {
        console.log("initializing Game...");
        Game.init();
    };
    
    return api;
})(Game);


window.addEventListener('DOMContentLoaded',  App.init );
