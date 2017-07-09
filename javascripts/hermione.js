hl={
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
}