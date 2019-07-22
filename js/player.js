var Player = ( function () {
    var api = {};
    var score = 0;
    api.character = 
    api.updateScore = function ( points ) {
        score += points;
    }
    
    api.getScore = function () {
        return score;
    }
    
    api.init = function () {
        
    }
    
    api.update = function () {
    
    }
    
    return api;
})();

export { Player };
