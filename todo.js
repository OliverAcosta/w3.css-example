
  var db = new Dexie("tododb_version_2");
  db.version(1).stores({
    tareas: '++id,tarea,desc'
  });
  db.open().catch(function(error) {
    console.error("error to open db",error);
});

function newTarea(id,t,d)
{
    this.id = id;
    this.tarea = t;
    this.desc = d;

}


newTarea.prototype.toString =  function(){
    return this.tarea + this.desc;
}

var todolistapp = new Vue({
    el:"#todo",
    data:{
        tarea:"",
        desc:"",
        currentDesc:"",
        self: this,
        items:[]
    },
    methods:{
        add: function(){
            if(tarea.trim() == ""){ return;}
           db.tareas.add({ tarea:this.tarea, desc:this.desc})
            .then(function(index){
                todolistapp.items.push(new newTarea(index,this.tarea, this.desc));
                todolistapp.tarea = "";
                todolistapp.desc = "";
            }).catch(function(error)
            {
                console.error(error);
            }); 
        },
        deleteItem: function(t)
        {
            let current =  this.items.findIndex(function(e){
             return e == t;
            });
            if(current !== undefined)
            {
                db.tareas.where("id").equals(t.id).delete().then(function(index){
                    todolistapp.items.splice(current,1);
                    console.log("id borrado", index);
                }).catch(function(error){
                    console.error(error);
                });
            }
           
        },
        showDesc:function(t){
         
           let current = this.items.find(function(i)
             {
                    return i.tarea ===  t;
             });
           if(current !== undefined){
           this.currentDesc = current.desc;
           }else{
               this.currentDesc = "";
           }
        }
    }

});


(function(){
    let myItems = [];
    db.tareas.toArray().then(function(array){
       todolistapp.items = array;
      }).catch(function(error){
            console.error(error);
      });
})();
    
