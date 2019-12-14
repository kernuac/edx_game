var Context = (function () 
{
    var api = {};
    
    api.ctx = {};
    
    api.create = function (viewport, context) {
        if( ! viewport ) {
            console.log('can not create a valid context');
            return false;
        }
        
        if( context !== '2d' && context !== '3d') {
            console.log('context must be 2d or 3d');
            return false;
        }
        
        api.ctx = viewport.getContext(context);
    };
    
    api.clear = function ( viewport ) {
        api.ctx.clearRect(0, 0, viewport.width, viewport.height);
    };

    return api;
})();

export { Context }
