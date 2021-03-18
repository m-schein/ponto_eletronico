var main = function() {
"use strict";
jQuery(".comment-input button").on("click", function(event){
 comment();
});
jQuery(".input-text").on("keypress", function(event){
  if(event.keyCode === 13){
   getTime();
  }
});

  function comment(){
    var today = new Date();
    var year = today.getFullYear();
    var ok = today.toDateString(); 
    console.log(today.toDateString());
    console.log(year);
    console.log(typeof ok)

    var min = today.getUTCMinutes();
    console.log(min);

    var horas = today.getHours();
    console.log(horas);

    var hora_agora = horas + ":" + min;

    var $new_comment = $("<p>"), comment_text = $(ok);
    $new_comment.hide();
    $new_comment.append('<p class = "data">' + hora_agora +'</p>');
    $new_comment.fadeIn();
    $(".comments").append($new_comment);
    //$(".input-text").val(""); //limpa a caixa de texto
    
  }

};
$(document).ready(main);