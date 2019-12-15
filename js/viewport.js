/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var Viewport = (function () 
{
    var api = {};
    
    api.viewport = {};
    api.viewport.width = 0;
    api.viewport.height = 0;
    api.viewport.x = 0;
    api.viewport.y = 0;
    
    api.init = function () {
        console.log("intializing viewport...");
        api.viewport = document.querySelector('#viewport');
        if( ! api.viewport ) {
            console.log('No viewport Found');
            return false;
        }
        
    };
    
    api.setViewPortSize = function ( width, height ) {
        console.log("setting viewpoert size");
        api.viewport.width = width;
        api.viewport.height = height;
        api.viewport.style.margin = "0 auto";
        api.viewport.style.display = "block";
    }
    
    return api;
})();

export { Viewport };
