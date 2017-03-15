<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 22cbd06f676cffa313c0de3992fe650ac9c438d9
// test//////////////
$("#taskForm").submit( function(ev) {
  /*il y a un evenement submit == car on a cliquer sur le bouton && les conditions
   sont remplie (pattern, long max, non vide) ( on doit l'attcher au formulaire et non au bouton) */
<<<<<<< HEAD
  console.log( "bouton id=addTaskButton ==> evenement submit()" );
  localStorage.setItem('monChat', 'Tom');
=======
  //console.log( "bouton id=addTaskButton ==> evenement submit()" );
  //localStorage.setItem('monChat', 'Tom');
>>>>>>> 22cbd06f676cffa313c0de3992fe650ac9c438d9
   //ev.preventDefault(); //  ==>  http://api.jquery.com/submit/ empeche l' action="" du form
});

$("#addTaskButton").click( function(ev) {
  // il y a un evenement click meme si les condition ne sont pas remplies :/
  console.log( "bouton id=addTaskButton ==> evenement click()" );
<<<<<<< HEAD
});
=======
=======
  console.log(trimTask($("#addTaskText")));

});


/*fonction qui prend une chaine de caractere et une longueur max,
 verifie qu'elle existe vraiment et qu'elle soit plus courte que nbr en parametre;*/


>>>>>>> 22cbd06f676cffa313c0de3992fe650ac9c438d9
 // test//////////////
	$("#taskForm").submit( function(ev) {
	/*il y a un evenement submit == car on a cliquer sur le bouton && les conditions
	sont remplie (pattern, long max, non vide) ( on doit l'attcher au formulaire et non au bouton) */
	console.log( "bouton id=addTaskButton ==> evenement submit()" );
	localStorage.setItem('monChat', 'Tom');
	//ev.preventDefault(); //  ==>  http://api.jquery.com/submit/ empeche l' action="" du form
	});

	$("#addTaskButton").click( function(ev) {
	// il y a un evenement click meme si les condition ne sont pas remplies :/
	console.log( "bouton id=addTaskButton ==> evenement click()" );
	});

	var bar;
	$("#addlistButton").click(function(){
		bar = document.getElementById("addlistText").value; //enregistrer le contenu de input dans bar
		console.log(bar);
	});
<<<<<<< HEAD
>>>>>>> cea59db07aeb3d5197c173c9da3a6787ad217637
=======

>>>>>>> 22cbd06f676cffa313c0de3992fe650ac9c438d9
