function w3_open() {
    document.getElementById("sidebar-menu").style.display = "block";
}
function w3_close() {
    document.getElementById("sidebar-menu").style.display = "none";
}

var userAccess = [];
let j = 0;
for(;j<400; j++)
{
    userAccess.push( {url: "fake url"+ j, text:"fake url"+ j, cssClass:"w3-bar-item w3-button ", canView: j%2==0 ? true : false});
}


var linkAccess = (function()
{
    // get data from current user
    //here some fake data
    
    return function(url)
    {
        
        var canView = userAccess.find(function(b)
        {
               return b.url === url && b.canView === true;
        });
        if(canView !== undefined) return true;
        return false;
    };

})();





var menuAccess = new Vue({
    el:"#sidebar-menu",
    data:{
        links:userAccess
    },
    methods:{
      linkAccess: function(url)
      {
       
          var canView = userAccess.find(function(b)
          {
                 return b.url === url && b.canView === true;
          });
          if(canView !== undefined) return true;
          return false;
      }
        
    }
});

window.onbeforeunload = function() {
    console.log("element unload");
    return '';
}

if (!window.indexedDB) {
    window.alert("Su navegador no soporta una versión estable de indexedDB.Tal y como las características no serán validas");
}