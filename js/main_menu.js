/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var MainMenu = (function (Timer, Context, Input) {
    var api = {};
    
    api.menuItems = [ "start", "options" ];
    api.title = "Simple Shoot'em up!";
    api.currentItem = 0;
    
    api.update = function () {
        
    };
    
    api.draw = function () {
        if( Input.keys.up.pressed ) {
            
        } else if ( Input.keys.down.pressed ) {
            
        } else if ( Input.keys.fire.pressed ) {
            
        }
        
    };
    
    return api;
})(Timer, Context, Input);

export { MainMenu };
/*
function MainMenu()
{
    this.items = ["start", "options"];
    this.options = {
        start: 0,
        options: 1
    };
    this.title = "Simple Shoot 'em up!";
    this.currentOption = 0;
};

MainMenu.prototype.draw = function(ctx)
{
    var optionsLength = this.items.length;
    var colorSelectedOption = "yellow";
    var colorNormalOption = "white";
    var i = 0;
    //var text;
    ctx.save();
    ctx.fillStyle="white";
    ctx.font='12px LVDCGO';
    ctx.fillText(this.title, 20,20);
    ctx.font='10px LVDCGO';
    for(;i < optionsLength;i++)
    {
        if(i  ===  this.currentOption)
        {
            ctx.fillStyle = colorSelectedOption;
            ctx.fillText(">"+this.items[i]+"<",80, 100+i*30);
        }
        else
        {
            ctx.fillStyle = colorNormalOption;
            ctx.fillText(this.items[i],80, 100+i*30);
        }

    }

    ctx.restore();
};

MainMenu.prototype.update = function(tick, inputKeys)
{
    var optionsLength = this.items.length;
    var startGame = false;
    
    if(inputKeys.up && this.currentOption > 0)
    {
        this.currentOption--;
    }
    
    if(inputKeys.down && this.currentOption < optionsLength-1)
    {
        this.currentOption++;
    }
    
    if(inputKeys.space)
    {
        switch(this.currentOption)
        {
            case this.options.start:
                startGame = true;
                break;
                
            case this.options.options:
                break;
        }
    }
    return startGame;
};*/
