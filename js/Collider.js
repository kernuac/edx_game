/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Collider()
{
    
}

Collider.colliderGroup = function(groupa, groupb)
{
    for(var i = groupa.length;i--;)
    {
        for(var j = groupb.length; j--;)
        {
            this.collide(groupa[i-1], groupb[j-1]);
        }
    }
}

Collider.prototype.collideWithGroup = function (object, group)
{
    var collide = false;
    var i = group.length;
    do
    {
        collide = this.collide(object, group[i-1]);
        i--;
    }while( i && !collide );
    return collide;
}

Collider.prototype.collide = function(a, b)
{
    var collide = false;
    if(((a.x > b.x && a.x < b.x+b.w)
    || (a.x+a.w > b.x && a.x+a.w < b.x+b.w))
    && ((a.y > b.y && a.y < b.y+b.h)
    || (a.y+a.h > b.y && a.y+a.h < b.y+b.h)))
    {
        collide = true;
    }
    return collide;
}

Collider.prototype.collideWithViewport = function (object, viewport)
{
    var collide = {
        left: false,
        right: false,
        up: false,
        down: false
    }
    if(object.x <= viewport.x)
    {
        collide.left = true;
    }
    if(object.x+object.w >= viewport.width)
    {
        collide.right = true;
    }
    if(object.y <= viewport.y)
    {
        collide.up = true;
    }
    if(object.y+object.h >= viewport.height)
    {
        collide.down = true;
    }
    
    return collide;
}