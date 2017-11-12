let dropdownTemplate = {
   template: `
    <div class="w3-dropdown-click">
    <button class="w3-button w3-green">{{title}}</button>
    <div class="w3-dropdown-content w3-bar-block w3-card-4">
        <option v-for="value in values" value="value" v-on:click="selected(value)" class="w3-bar-item w3-button">value.name</option>
    </div>
    </div>
  `

  
};


let dropdown1 = new Vue({
    el:"#sample",
    data:{
        title:"un dropdown en vue",
        values:[]
    },
    components:{
        'dropdown-value':dropdownTemplate
    },
    methods:{
        fill : function(){
            let i = 0;
            for(;i<20;i++)
            {
                this.values.push({value: (i+1), name: "name of value = "+ (i+1) });
            }
        },
        selected: function(v)
        {
            console.log(v);
        }

    }
});
dropdown1.fill();

var instance = new Vue({
    el:"",
    data:{
          dropdownItems : [],
          root :'https://jsonplaceholder.typicode.com/users'
    },
    methods:{
        getData:function(){
          $.ajax({
              url: this.root ,
              method: 'GET'
              }).then(function(data) {
                  this.dropdownItems = data;
                  console.log(data);
              });
        }
    }
});
instance.getData();