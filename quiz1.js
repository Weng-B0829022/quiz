    function myFunction() {   
        var btn = document.createElement("BUTTON");
        btn.innerHTML = "CLICK ME";
        document.body.appendChild(btn);
        btn.addEventListener("click",change);
     }
     
	function change() {     
		var x = document.getElementById("H1").innerHTML = "CSIE@CGU";
    	var y = document.getElementById("P").innerHTML = "怎麼那麼棒！！";
	}   