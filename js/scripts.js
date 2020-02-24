var add = function(number1, number2, number3) {
  return number1 + number2 + number3;
};

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var number3 = parseInt($("#add3").val());
    var result = add(number1, number2, number3);
    if ((number1 > 0) && ( number2 > 0) && (number3 > 0)) {
    } else { 
      alert ("you seriously couldn't fill in 3 boxes?? AHHHHH. Fix it");
    }
    if ( 6>= result) {
      $("#thor").show();
      $("#cap").hide();
      $("#hulk").hide();
    }
    if (10 > result && result >= 7) {
      $("#cap").show();
      $("#thor").hide();
      $("#hulk").hide();
    }
    if (11 <= result ) {
      $("#hulk").show();
      $("#thor").hide();
      $("#cap").hide();
    }
      if (number1 <= 0 || number1 >= 6) {
        alert ("i'm sorry... is that number 1-5?? follow the RULES");
        $("#cap").hide();
        $("#thor").hide();
        $("#hulk").hide();
    }
  }); 
}); 