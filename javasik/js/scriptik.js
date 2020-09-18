document.addEventListener("DOMContentLoaded",
	function(event){
		var title = document.querySelector("#title").textContent;
		function saysalam(event) {
			console.log(event);
			this.textContent="madis";
			var name = document.querySelector("#name").value;
			console.log(name);
			var message = "<h2>Salamaleikum " + name + "!</h2>";

			document.querySelector("#content").innerHTML = message;

			if(name === "Adil" || name === "Madina" || name === "Muslim"){
				document.querySelector("#title").textContent = title + " & vashi lubimye chebureki!";
			}
			else{
				document.querySelector("#title").textContent = title;
			}
		}

		document.querySelector("button")
			.addEventListener("click", saysalam);

		document.querySelector("body")
			.addEventListener("mousemove",
				function (event){
					if (event.shiftKey === true) {
						console.log("x : " + event.clientX);
						console.log("y : " + event.clientY);
					}
				}
			);

	}
);