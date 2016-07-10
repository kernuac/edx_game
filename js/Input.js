function Input()
{
    this.keys = {
        up: false,
        down: false,
        left: false,
        right: false,
        space: false,
        esc: false
    };
}

Input.prototype.init = function ()
{
    var input = this;
    document.addEventListener('keydown', function(event)
    {
        switch(event.keyCode)
        {
            case 27:
                input.keys.esc = true;
                break;
            case 37:
                input.keys.left = true;
                break;
            case 38:
                input.keys.up = true;
                break;
            case 39:
                input.keys.right = true;
                break;
            case 40:
                input.keys.down = true;
                break;
            case 32:
                input.keys.space = true;
                break;
        };
    });
    document.addEventListener('keyup', function(event)
    {
        switch(event.keyCode)
        {
            case 27:
                input.keys.esc = false;
                break;
            case 37:
                input.keys.left = false;
                break;
            case 38:
                input.keys.up = false;
                break;
            case 39:
                input.keys.right = false;
                break;
            case 40:
                input.keys.down = false;
                break;
            case 32:
                input.keys.space = false;
        };
    });
};
