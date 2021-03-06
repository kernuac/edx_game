var Timer = ( function () {
    var api = {};

    api.now = 0;
    api.last = 0;

    api.init = function () {
        api.now = performance.now();
        api.last = api.now;
    }

    api.dtime = function () {
        var dt = 0;
        api.now = performance.now();
        dt = api.now - api.last;
        api.last = api.now;
        return dt;
    }

    return api;
})();
