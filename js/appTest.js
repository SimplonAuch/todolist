// test
$("#addTaskButton").submit( function() { // il y a un evenement submit == on a cliquer sur le bouton et les conditions sont remplie (pattern, long max, non vide)
    console.log( "bouton id=addTaskButton ==> evenement submit()" );
});

$("#addTaskButton").click( function() {
  console.log( "bouton id=addTaskButton ==> evenement click()" );
});
