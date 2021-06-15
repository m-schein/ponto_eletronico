var main = () => { 
  
  "use strict";
  $(".comment-input button").on("click", (event) => {
    registerTime();
  });

  $(".input-text").on("keypress", (event) => {
    if(event.keyCode === 13){
    getTime();
    }
  });

  Date.prototype.timeNow = function () {
    return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
  }

  function registerTime(){
    var today = new Date();
    var datetime = new Date().timeNow();
    console.log(datetime)

    var $new_register = $("<h4>"), comment_text = $(datetime);
    $new_register.hide();
    $new_register.append('<h4 class = "register">' + datetime + '</h4>');
    $new_register.fadeIn();
    $(".registers").append($new_register);
  }

};
$(document).ready(main);