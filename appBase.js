function cssCore(){}


var css = new cssCore();


    var menuClick = (function()
    {
        var defaultClass = "w3-green";
        var last = null;
        
            last = document.getElementById("selected");
    
        return function(el)
        {
            last.classList.remove(defaultClass);
            el.classList.add(defaultClass);
            last = el;
        };
    
    })();
