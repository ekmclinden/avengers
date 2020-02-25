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
      if( !$('#add1').val() ) {
         alert("did you think I'd let you submit this without everything being complete?? THINK AGAIN!!");
         $("#cap").hide();
         $("#thor").hide();
         $("#hulk").hide();
         $(".warning2").hide();
      }
      if( !$('#add2').val() ) {
        alert("did you think I'd let you submit this without everything being complete?? THINK AGAIN!!");
        $("#cap").hide();
        $("#thor").hide();
        $("#hulk").hide();
        $(".warning2").hide();
     }
     if( !$('#add3').val() ) {
      alert("did you think I'd let you submit this without everything being complete?? THINK AGAIN!!"); 
      $("#cap").hide();
      $("#thor").hide();
      $("#hulk").hide();
      $(".warning2").hide();
   }
    if ( 6>= result) {
      $("#thor").show();
      $("#cap").hide();
      $("#hulk").hide();
      $(".warning2").hide();
    }
    if (10 > result && result >= 7) {
      $("#cap").show();
      $("#thor").hide();
      $("#hulk").hide();
      $(".warning2").hide();
    }
    if (11 <= result ) {
      $("#hulk").show();
      $("#thor").hide();
      $("#cap").hide();
      $(".warning2").hide();
    }
      if (number1 <= 0 || number1 >= 6) {
        $(".warning2").show();
        $("#cap").hide();
        $("#thor").hide();
        $("#hulk").hide();
    }
    if (number2 <= 0 || number2 >= 6) {
      $(".warning2").show();
      $("#cap").hide();
      $("#thor").hide();
      $("#hulk").hide();
  }
  if (number3 <= 0 || number3 >= 6) {
    $(".warning2").show();
    $("#cap").hide();
    $("#thor").hide();
    $("#hulk").hide();
}
  }); 
}); 