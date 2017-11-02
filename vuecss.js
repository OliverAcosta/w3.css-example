Vue.component('button-counter', {
    template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
    data: function () {
      return {
        counter: 0
      }
    },
    methods: {
      incrementCounter: function () {
        this.counter += 1
        this.$emit('increment')
      }
    },
  })
  new Vue({
    el: '#counter-event-example',
    data: {
      total: 0
    },
    methods: {
      incrementTotal: function () {
        this.total += 1
      }
    }
  });

  new Vue({
    el: '#counter-event-example2',
    data: {
      total: 0
    },
    methods: {
      incrementTotal: function () {
        this.total += 1
      }
    }
  });


<<<<<<< HEAD
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
=======

>>>>>>> 8af0c5ca2a50fb774bda3e0ba3cbf0aa4a7bd754

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

<<<<<<< HEAD
=======
new Vue({
     el:"#bar1"
     
>>>>>>> 8af0c5ca2a50fb774bda3e0ba3cbf0aa4a7bd754
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
