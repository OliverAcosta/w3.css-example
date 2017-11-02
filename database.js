function person(id, first, last, sex)
{
  this.id = id;
  this.firstname = first;
  this.lastname = last;
  this.sex = sex;

}

person.prototype.getFullName = function()
{
  return this.firstname + " " + this.lastname;
}
let i = 0;
var customerData = [];
for(;i <10;i++){
    customerData.push(new person(i, "firstname "+ i, "lastname "+i, i%2 == 0 ?'M':'F'));
}


 //
 var db = new Dexie('my-database');
 db.version(1).stores({
   person:"id,name,last"
 });
 db.open().catch(function (err) {
     console.error (err.stack || err);
 });

//  db.person.add({
//    id:1,
//    name:"juan",
//    last:"OLD"
//  });

 db.person.get(1,function(p){
  console.log(p);
 });






