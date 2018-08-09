$(document).ready(function(){
  $("form#friends-quiz").submit(function(event){
    var thing = $("input:radio[name=fav]:checked").val();
    var color = $("input:radio[name=color]:checked").val();

    if (thing === "dinasours" && color === "brown" || thing === "dinasours" && color === "green"){
      $("#ross").show();
      $("#monica").hide();
      $("#joey").hide();
      $("#pheobe").hide();
      $("#rachel").hide();
      $("#chandler").hide();
      $("#none").hide();

  } else if(thing === "cleaning" && color === "black"){
      $("#ross").hide();
      $("#monica").show();
      $("#joey").hide();
      $("#pheobe").hide();
      $("#rachel").hide();
      $("#chandler").hide();
      $("#none").hide();
    }
    else if(thing === "sandwiches" && color === "red"){
        $("#ross").hide();
        $("#monica").hide();
        $("#joey").show();
        $("#pheobe").hide();
        $("#rachel").hide();
        $("#chandler").hide()
        $("#none").hide();
      }
      else if(thing === "fashion" && color === "green"){
        $("#ross").hide();
        $("#monica").hide();
        $("#joey").hide();
        $("#pheobe").hide();
        $("#rachel").show();
        $("#chandler").hide()
        $("#none").hide();
      }
      else if(thing === "sarcasm" && color === "blue"){
        $("#ross").hide();
        $("#monica").hide();
        $("#joey").hide();
        $("#pheobe").hide();
        $("#rachel").hide();
        $("#chandler").show()
        $("#none").hide();
      }
      else if(thing === "songs" && color === "yellow"){
        $("#ross").hide();
        $("#monica").hide();
        $("#joey").hide();
        $("#pheobe").show();
        $("#rachel").hide();
        $("#chandler").hide()
        $("#none").hide();
      }
      else{
        $("#ross").hide();
        $("#monica").hide();
        $("#joey").hide();
        $("#pheobe").hide();
        $("#rachel").hide();
        $("#chandler").hide();
        $("#none").show();
      }



  event.preventDefault();
  });
});
