var callback = function(){
  // Handler when the DOM is fully loaded
};

hl={
	docReady: function(){
	},
	/* hl.currentMenu called when menu loaded (xhttp.onload include.js) */
	currentMenu: function(menu){
		document.querySelectorAll("#menu>li").forEach(function(list){
			list.classList.remove("selected");
			if(document.body.classList.contains(list.classList[0])){
				list.classList.add("selected");
			}
			list.addEventListener("click", hl.expandLinkAreaToList);
		});
	},
	expandLinkAreaToList: function(e){
		window.location = e.target.firstElementChild.getAttribute("href");
	},
	about: {
		calcAge: function(id, date){
			var today = new Date();
			var birthday = new Date(date);
			var ageMs = today-birthday;
			var age = Math.floor(ageMs/(1000*60*60*24*365.25));
			if(age<1){
				age = Math.floor(ageMs/(1000*60*60*24*30)) + " months";
			}
			document.getElementById(id).innerHTML = age;
		}
	}
};
if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  hl.docReady();
} else {
  document.addEventListener("DOMContentLoaded", hl.docReady);
}
