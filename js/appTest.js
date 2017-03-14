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
