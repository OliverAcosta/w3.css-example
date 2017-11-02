// var menuClick = (function()
// {
//  var defaultClass = "w3-green";
//  var last = null;
//  last = document.getElementById("selected");
    
// return function(el)
// {
//  last.classList.remove(defaultClass);
//  el.classList.add(defaultClass);
//  last = el;
// };
// })();


// var listItem = (function ()
// {
//     let principal = null;
//     let childs = null;
//     let pClass = null;
//     return function(el, childsEls, theClass){
//         principal = el;
//         childs = childsEls;
//         pClass = theClass;
//     };
// })();

function valuesManager(val){
    let value = null;
    if(val !== undefined){ value = val;}
    var values =(function(){
        return {
            get: function(){ return value;},
            set: function(v) { value = v;}
        }
    })();
    return values;
}


function listItems(principal, childs, cssClass, elNumber)
{
   //let internalValue = new valuesManager();
   let el;
   var collection = document.getElementById(principal).getElementsByTagName(childs);
   if(collection.length > 0){
       //internalValue.set(collection[elNumber]);
       collection[elNumber].classList.add(cssClass);
       el = collection[elNumber];
       var i = 0;
       for(;i< collection.length; i++){
           collection[i].addEventListener("click", function(event){
               el.classList.remove(cssClass);
               event.currentTarget.classList.add(cssClass);
               el = event.currentTarget;
           });
       }
   }
   
}
let menuPrincipal  = new listItems("menu-principal","a","w3-green",0);




var modal  = (function ()
{
    function btns( id,  fnParameter)
    {
        if(fnParameter !== undefined  && id !== undefined)
        {
           let btn =  document.getElementById(id);
           btn.classList.remove('w3-hide');
           btn.addEventListener("click", fnParameter);
       
        }else if(id !== undefined){
            document.getElementById(id).classList.add("w3-hide");
            
        }
        
     
    }
    return{
        setExito: function(titulo, mensaje, pie)
        {
            document.getElementById('titulo-modal-exito').innerHTML = titulo;
            document.getElementById('mensaje-modal-exito').innerHTML = mensaje;
            document.getElementById('pie-modal-exito').innerHTML = pie;
        },
        showExito: function(show)
        {
            if(show){
                document.getElementById('modal-exito').style.display = 'block' ;
            }else{
                document.getElementById('modal-exito').style.display = 'none' ;
            }
        },
        setAdventencia: function(titulo, mensaje, pie)
        {
            document.getElementById('titulo-modal-advertencia').innerHTML = titulo;
            document.getElementById('mensaje-modal-advertencia').innerHTML = mensaje;
            document.getElementById('pie-modal-advertencia').innerHTML = pie;
        },
        showAdventencia: function(show)
        {
            if(show){
                document.getElementById('modal-advertencia').style.display = 'block' ;
            }else{
                document.getElementById('modal-advertencia').style.display = 'none' ;
            }
        },
        
        setError: function(titulo, mensaje, pie, fnAceptar, fnCancelar)
        {
            document.getElementById('titulo-modal-error').innerHTML = titulo;
            document.getElementById('mensaje-modal-error').innerHTML = mensaje;
            document.getElementById('pie-modal-error').innerHTML = pie;
            btns('btn-modal-error-aceptar', fnAceptar);
            btns('btn-modal-error-cancelar', fnCancelar);
        },
        showError: function(show)
        {
            if(show){
                document.getElementById('modal-errores').style.display = 'block' ;
            }else{
                document.getElementById('modal-errores').style.display = 'none' ;
            }
        }
    
    }
})();

// let i = 0;
// var mensaje = "";
// for (;i<100; i++){
//   mensaje += "Esto es un vendito mensaje de prueba \n";
// }

// var add =   (function()
// {
//     var i = 0;
//     return function()
//     {
//        return i++;
//     };

// })();
// function aceptar()
// {
//       console.log(add());
// }

// function cancelar(){
// modal.showError(false);
// }
// modal.setError("modal para mostrar los errores",mensaje,"",aceptar,cancelar );
// modal.showError(true);
