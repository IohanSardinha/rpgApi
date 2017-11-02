var response;
var selected;

document.onreadystatechange = function(){
	if(document.readyState == "complete")
	{
		getClasses();
		document.querySelector("#classes").onchange = show_classes;
		console.log("aaaa");
	}
}

function getClasses()
{
	var httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = function () {
		if(httpRequest.readyState === 4)
		{
			if(httpRequest.status === 200)
			{
				document.querySelector("#message").innerHTML = "Select a class";

				response = JSON.parse(httpRequest.responseText);
				var lista = document.querySelector('#classes');
				lista.innerHTML = "";
				response.forEach(function(el){
					var option = document.createElement("option");
					option.innerHTML = el.name;
					option.setAttribute('Description',JSON.stringify(el.Description));
					option.setAttribute('Hit_Die',JSON.stringify(el.Hit_Die[0]));
					option.setAttribute('Primary_Ability',JSON.stringify(el.Primary_Ability[0]));
					option.setAttribute('Saves',JSON.stringify(el.Saves[0]));
					option.setAttribute('Image_Url',JSON.stringify(el.Image_Url[0]));
					lista.appendChild(option);
				});
			}
		}
	}

	httpRequest.open('GET','/classes');
	httpRequest.send()
}

function show_classes(ev)
{
	selected = ev.target;
	var atributos = document.querySelector("#atributes");
	var descricao = document.querySelector("#description");
	var imagem = document.querySelector("#image");

	var description = JSON.parse(selected.selectedOptions[0].getAttribute("Description"));
	var hitDie = JSON.parse(selected.selectedOptions[0].getAttribute("Hit_Die"));
	var primaryAbility = JSON.parse(selected.selectedOptions[0].getAttribute("Primary_Ability"));
	var saves = JSON.parse(selected.selectedOptions[0].getAttribute("Saves"));
	var imageUrl = JSON.parse(selected.selectedOptions[0].getAttribute("Image_Url"));

	descricao.innerHTML = description;

	atributos.innerHTML = "";
	var il = document.createElement("li");
	il.innerHTML = "Hit Die: " + hitDie;
	atributos.appendChild(il);
	il = document.createElement("li");
	il.innerHTML = "Primary ability: " + primaryAbility;
	atributos.appendChild(il);
	if(saves != "")
	{
		il = document.createElement("li");
		il.innerHTML = "Saves: " + saves;
		atributos.appendChild(il);
	}

	imagem.setAttribute("src",imageUrl);
	imagem.setAttribute("alt","Could not load class image from "+imageUrl);
}