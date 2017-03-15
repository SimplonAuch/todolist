// la fenêtre pop-up de bienvenue (c'est la puissance)

alert("Hello World! Welcome!");

// la fonction valider le texte et le mettre dans la liste

var bar;							// variable bar initialisé
$("#Send").click(function() {		// quand on click sur le input submit il se passe...
	bar = $("input").hmtl();		// bar récupère le contenu html du input
	$('li').text(bar);				// il doit le mettre dans la liste (normalement...)

});

//balise input normalement pas de html
