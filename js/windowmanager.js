var WindowManager = ( function () {
    
    var api = {};
    var screens = [];
    var currentScreen = {};

    api.addScreen = function ( id, screen ) {
        if( ! screen ) {
            return false;
        }

        if( ! id ) {
            return false;
        } 
        screens.push( screen );
    };

    api.setCurrentWindow = function ( id ) {
        if( ! id ) {
            return false;
        }

        currentScreen = id;
    };
    
    api.getCurrentScreen = function () {
        return screens[currentScreen];
    };

    api.update = function () {
        getCurrentScreen().update();
    };
    
    return api;

})();
