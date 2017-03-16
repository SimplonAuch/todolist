// on retire tout les espaces en trop au début et à la fin de la chaine de caractére
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/trim

 function noSpace(input) {
	 return input.trim();
 }

//on vérifie si la longueur de notre chaine n'est pas trop longue
function trimTask(chaine,nbr){
  // Si la longueur de chaine et inférieur ou égale à nbr
	if(chaine.length <= nbr ){
    // alors je return true;
		return true;
	}
  // Sinon je return false;
		return false;
}

// on remplace les chevrons ouvrant d'un balise / script ...
// pour éviter que le script ce lance, ou que les balises soit interprété
function escapeSpecialChar(data){
  // on fait une boucle avec la longueur de data
  for(var i = 0; data.length;i++){
    // on remplace le < par &#60;
    data = data.replace("<", "&#60;");
  }
  // on return data;
  return data;
}

// on vérifie si la chaîne n'est pas vide
function stringIsNotEmpty(value){
  // si value est diférent de ''
  if(value != ""){
    // alors je return true;
    return true;
  }
  // sinon je return false;
  return false;
  }
}

// je met un evenement sur mon boutton d'id addTaskButton;
$("#addTaskButton").click(function(){
  // quand on clique sur le boutton alors je vais récuperer la valeur
  // de mon input d'id task et je le stock dans une variable "value"
  var value = $("#task").val();
  // je supprime les espaces en trop
  value = noSpace(value);
  // je vérifie que value n'est pas vide et n'est pas trop longue
  if(stringIsNotEmpty(value) && trimTask(value, 100)){
    // si les deux fonction return true alors
    // j'utilise la méthod append de jquery pour rajouter la taches dans mon
    // ul d'id todoList
      $("#todoList").append("<li>" + escapeSpecialChar(value) + "</li>");
  };
})
