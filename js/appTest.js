// test//////////////
$("#taskForm").submit( function(ev) {
  /*il y a un evenement submit == car on a cliquer sur le bouton && les conditions
   sont remplie (pattern, long max, non vide) ( on doit l'attcher au formulaire et non au bouton) */
  //console.log( "bouton id=addTaskButton ==> evenement submit()" );
  //localStorage.setItem('monChat', 'Tom');
   //ev.preventDefault(); //  ==>  http://api.jquery.com/submit/ empeche l' action="" du form
});

$("#addTaskButton").click( function(ev) {
  // il y a un evenement click meme si les condition ne sont pas remplies :/
  console.log( "bouton id=addTaskButton ==> evenement click()" );
  console.log(trimTask($("#addTaskText")));

});


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

