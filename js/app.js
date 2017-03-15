// la fenêtre pop-up de bienvenue (c'est la puissance)

alert("Hello World! Welcome!");

// la fonction valider le texte et le mettre dans la liste

var bar;							// variable bar initialisé
$("#Send").click(function() {		// quand on click sur le input submit il se passe...
	bar = $("input").hmtl();		// bar récupère le contenu html du input
	$('li').text(bar);				// il doit le mettre dans la liste (normalement...)

});

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