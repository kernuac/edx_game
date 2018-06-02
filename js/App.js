'use strict';

var App = (function () 
{
    var api = {};
    
    api.init = function () {
        var game = new GF();
        game.start();
    }
    
    return api;
})();


window.addEventListener('DOMContentLoaded',  App.init );
