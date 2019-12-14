var Input = (function () {
	var api = {};
	
        api.keys = {
            up: { value: 0, pressed: false },
            down: { value: 0, pressed: false },
            left: { value: 0, pressed: false },
            right: { value: 0, pressed: false },
            fire: { value: 0, pressed: false },
            home: { value: 0, pressed: false }
        };
        
        api.setKeys = function (up, down, left, right, fire, home) {
            api.keys.up.value = up;
            api.keys.down.value = down;
            api.keys.left.value = left;
            api.keys.right.value = right;
            api.keys.fire.value = fire;
            api.keys.home.value = home;
        };
        
        var __setKeyDown = function (ev) {
            var key = ev.keyCode;
            __setKeyState(key, true);
        };
        
        var __setKeyUp = function (ev) {
            var key = ev.keyCode;
            __setKeyState(key, false)
        };
        
        var __setKeyState = function (key, state) {
            
            var keylist = Object.keys( api.keys );

            for ( var k in keylist ) {
                if( api.keys[keylist[k]].value === key ) {
                    api.keys[keylist[k]].pressed = state;
                }
            };
        };
    
    api.update = function () {
        return api.keys;
    }
    
	api.init = function () {
            // we must create a function for loading user preferences
            api.setKeys(38, 40, 37, 39, 32, 27);
            document.addEventListener('keydown', __setKeyDown);
            document.addEventListener('keyup', __setKeyUp);
	};
        
	return api;
})();

export { Input };
