!function(){"use strict";var e={categories:[],comments:[],news:[]};fetch("http://localhost:4200/category").then((function(e){return e.json()})).then((function(t){var o;e.categories=t,o=document.querySelector(".root"),e.categories.forEach((function(t){console.log(e);var n=document.createElement("div");console.log(t),n.textContent=t.name,o.prepend(n)}))}))}();