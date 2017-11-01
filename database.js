var db;

 //No support? Go in the corner and pout.

 var openRequest = indexedDB.open("ora_idb1",1);
 openRequest.onupgradeneeded = function(e) {
 console.log("running onupgradeneeded");
 }
 openRequest.onsuccess = function(e) {
 console.log("running onsuccess");
 db = e.target.result;
 }
 openRequest.onerror = function(e) {
 console.log("onerror!");
 console.dir(e);
 }


