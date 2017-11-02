
  var pb  = new Vue({
    el: '#sample',
    data: {
        color:"w3-green",
        width:0,
        style:{
            width:0,
            height:"24px",
            "text-align":"center",

        }
    },
    methods:{
        change: function(current){
            this.width = current + "%";
            this.style.width = this.width;
        }
    }

   
  });
  var v = 40;
  pb.change(v);
  function count(){
  setTimeout(function() {
      v++;
        pb.change(v);
      if(v <100){
        count();
      }
  },1000);
}
count();

Vue.component('modal',{
template: `<div class="w3-modal" id="modal-error">
  <div class="w3-modal-content">
  <header class="w3-container w3-panel w3-red">
  <span class="w3-button w3-display-topright" onclick="document.getElementById('modal-error').style.display = 'none'">&times;</span>
  
    <h2>Se ha producido un error, por favor contactar con el administrador.</h2>

  </header>
 <div class="w3-container" style="height:200px; overflow-y:auto !important;">
  <p>{{mensaje}}</p>
  </div>
  <footer class="w3-container w3-red">
   <p></p>
  </footer>
  </div>
</div>`,
props:['mensaje'],

});
var data = "";
var i = 0;
for (;i<100; i ++)
{
    data += "mucho texto que mostrar \n";
}

var modal =  new Vue({
    el:"#mymodal",
    data:{
        mensaje:data
    }
});
