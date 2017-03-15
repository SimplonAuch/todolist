 function noSpace(input) {
	 return input.trim();
 }

function trimTask(chaine,nbr){
	if(chaine.length <= nbr ){ // si elle est plus courte que nbr
		return true;
	}
		return false;
}

function escapeSpecialChar(data){
  var escape = data.replace("<", "&#60;");
}

function stringIsNotEmpty(value){
  if(value != ""){
    return true;
  }else{
    return false;
  }
}

$("#addTaskButton").click(function(){
  var value = $("#task").val();
  value = noSpace(value);
  if(stringIsNotEmpty(value) && trimTask(value, 100)){
      $("#todoList").append("<li>" + value + "</li>");
  };
})
