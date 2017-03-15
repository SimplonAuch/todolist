// la fenêtre pop-up de bienvenue (c'est la puissance)

alert("Hello World! Welcome!");

// la fonction valider le texte et le mettre dans la liste


// var bar;							// variable bar initialisé
// $("#Send").click(function Send() {		// quand on click sur le input submit il se passe...
// 	bar = $("input").html();		// bar récupère le contenu html du input
// 	$('li').text(bar);				// il doit le mettre dans la liste (normalement...)
	
// })

var string = '         coucou      '
function noSpace(input) {
	return input.trim();
}if (noSpace(string) !="") {
	return 
}
// console.log(string);
// console.log(noSpace(string));
// var list = "    yop le monde"
// console.log(noSpace(list))

var bar;							// variable bar initialisé
$("#AddaTask").click(function() {		// quand on click sur le input submit il se passe...
	bar = $("AddaTask").hmtl();		// bar récupère le contenu html du input
	$('AddaTask').text(bar);				// il doit le mettre dans la liste (normalement...)
	
})

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

function verifierCaracteres(event) {
	
	var keyCode = event.which ? event.which : event.keyCode;
	var touche = String.fromCharCode(keyCode);

	var champ = document.getElementById('AddaTask');

	var caracteres = 'azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN0123456789'

	if(caracteres.indexOf(touche) >= 0) {
		champ.value += touche;é
	}
}

function verifierCaracteres(event) {
	
	var keyCode = event.which ? event.which : event.keyCode;
	var touche = String.fromCharCode(keyCode);

	var champ = document.getElementById('AddaList');

	var caracteres = 'azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN0123456789'

	if(caracteres.indexOf(touche) >= 0) {
		champ.value += touche;é
	}
}
//balise input normalement pas de html


/*fonction qui prend une chaine de caractere et une longueur max,
 verifie qu'elle existe vraiment et qu'elle soit plus courte que nbr en parametre;*/

function trimTask(chaine,nbr){
	if(chaine){// si la chaine est pas undefined 
		chaine = chaine.trim(); //j'enleve les espace avant et apres

		if(chaine && chaine.length <= nbr ){ // si elle n'est toujours pas undefined et qu'elle est plus courte que nbr
			return chaine;
		}
	}
	console.log("invalid chaine");
}

