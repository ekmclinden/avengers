var add = function(number1, number2, number3, number4, number5) {
  return number1 + number2 + number3 + number4 + number5;
};

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var number3 = parseInt($("#add3").val());
    var number4 = parseInt($("#add4").val());
    var number5 = parseInt($("#add5").val());
    var result = add(number1, number2, number3, number4, number5);
      if( !$('#add1').val() ) {
        $(".warning1").show();
        $("#cap").hide();
        $("#thor").hide();
        $("#hulk").hide();
        $(".warning2").hide();
       }
      if( !$('#add2').val() ) {
        $(".warning1").show();
        $("#cap").hide();
        $("#thor").hide();
        $("#hulk").hide();
        $(".warning2").hide();
       }
      if( !$('#add3').val() ) {
        $(".warning1").show();
        $("#cap").hide();
        $("#thor").hide();
        $("#hulk").hide();
        $(".warning2").hide();
       }
      if( !$('#add4').val() ) {
        $(".warning1").show();
        $("#cap").hide();
        $("#thor").hide();
        $("#hulk").hide();
          $(".warning2").hide();
        }
      if( !$('#add5').val() ) {
        $(".warning1").show();
        $("#cap").hide();
        $("#thor").hide();
        $("#hulk").hide();
        $(".warning2").hide();
        }
      if (10 >= result) {
        $("#thor").show();
        $("#cap").hide();
        $("#hulk").hide();
        $(".warning2").hide();
        $(".warning1").hide();
        }
      if (17 > result && result >= 11) {
        $("#cap").show();
        $("#thor").hide();
        $("#hulk").hide();
        $(".warning2").hide();
        $(".warning1").hide();
       }
      if (18 < result) {
        $("#hulk").show();
        $("#thor").hide();
        $("#cap").hide();
        $(".warning2").hide();
        $(".warning1").hide();
        }
      if (number1 <= 0 || number1 >= 6) {
        $(".warning2").show();
        $("#cap").hide();
        $("#thor").hide();
        $("#hulk").hide();
        $(".warning1").hide();
        }
      if (number2 <= 0 || number2 >= 6) {
        $(".warning2").show();
        $("#cap").hide();
        $("#thor").hide();
        $("#hulk").hide();
        $(".warning1").hide();
        }
      if (number3 <= 0 || number3 >= 6) {
        $(".warning2").show();
        $("#cap").hide();
        $("#thor").hide();
        $("#hulk").hide();
        $(".warning1").hide();
      }
      if (number4 <= 0 || number4 >= 6) {
        $(".warning2").show();
        $("#cap").hide();
        $("#thor").hide();
        $("#hulk").hide();
        $(".warning1").hide();
      }
      if (number5 <= 0 || number5 >= 6) {
        $(".warning2").show();
        $("#cap").hide();
        $("#thor").hide();
        $("#hulk").hide();
        $(".warning1").hide();
      }
  }); 
}); 