/* W3.JS 1.01 Jan 2017 by w3schools.com */
"use strict";
var w3 = {};
//w3.includeHTML = function() {
//  var z, i, a, file, xhttp;
//  z = document.getElementsByTagName("*");
//  for (i = 0; i < z.length; i++) {
//    if (z[i].getAttribute("w3-include-html")) {
//      a = z[i].cloneNode(false);
//      file = z[i].getAttribute("w3-include-html");
//      var xhttp = new XMLHttpRequest();
//      xhttp.onreadystatechange = function() {
//        if (xhttp.readyState == 4 && xhttp.status == 200) {
//          a.removeAttribute("w3-include-html");
//          a.innerHTML = xhttp.responseText;
//
//          z[i].parentNode.replaceChild(a, z[i]);
//          w3IncludeHTML();
//        }
//      }      
//      xhttp.open("GET", file, true);
//      xhttp.send();
//      return;
//    }
//  }
//}

if(window.location.hostname=="localhost"){
	w3.root = window.location.pathname.split(/pages/)[0] /* everything before pages, or everything if index */
}else{
	w3.root = "/"
}
w3.includeHTML = function() {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          elmnt.innerHTML = this.responseText;
					if(window.location.hostname=="localhost"){
						Array.from(document.querySelectorAll('a')).forEach(function(element){
							//console.log(element.href.indexOf(w3.root))
							if(element.href.indexOf(w3.root)==-1){
								element.href = element.href.replace("localhost/", "localhost"+w3.root)
							}
						});
					}
          elmnt.removeAttribute("w3-include-html");
          w3.includeHTML();
        }
      }
			var address = w3.root + file 
      xhttp.open("GET", address, true);
			xhttp.onload = function () {
			  /* Request finished. Do processing here. */
				var menu = document.querySelector("#menu");
				hl.currentMenu(menu);
			};
      xhttp.send();
      return;
    }
  }
};

