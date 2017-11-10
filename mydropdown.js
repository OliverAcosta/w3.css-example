
 Vue.component('simple-counter', {
   template: '<button v-on:click="ms += 1">{{ ms }}</button>',
   // data is technically a function, so Vue won't
   // complain, but we return the same object
   // reference for each component instance
 props:['ms'],

 })
 new Vue({
   el: '#example-2',
   data:{
       v:0

   },
   methods:{
            value:function()
            {
                    console.log();
            }
   }
 })
