$(document).ready(function() {
  //Graph Calculations
  $("#optimism").css( "width", optimism * 10 + '%');
  $("#optimism").css( "height", optimism * 10 + '%');

  $("#efficacy").css( "width", efficacy * 10 + '%');
  $("#efficacy").css( "height", efficacy * 10 + '%');

  $("#determination").css( "width", determination * 10 + '%');
  $("#determination").css( "height", determination * 10 + '%');

  $("#temper").css( "width", temper * 10 + '%');
  $("#temper").css( "height", temper * 10 + '%');

  $("#assured").css( "width", assured * 10 + '%');
  $("#assured").css( "height", assured * 10 + '%');

  $("#positive").css( "width", positive * 10 + '%');
  $("#positive").css( "height", positive * 10 + '%');

  $("#adversity").css( "width", adversity * 10 + '%');
  $("#adversity").css( "height",adversity * 10 + '%');

//Resilience Color Conditions
  if (optimism >= 4.6 && optimism <= 7.5) {
    $("#optimism").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#optimism-label").css("background", "#C18625");
    $("#optimism-score").css("color", "#ECA327");
	}
  if (optimism >= 0 && optimism <= 4.5) {
    $("#optimism").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
    $("#optimism-label").css("background", "#CE4427");
    $("#optimism-score").css("color", "#F25C24");
	}
  if (efficacy >= 4.6 && efficacy <= 7.5) {
    $("#efficacy").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#efficacy-label").css("background", "#C18625");
    $("#efficacy-score").css("color", "#ECA327");
	}
  if (efficacy >= 0 && efficacy <= 4.5) {
    $("#efficacy").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
    $("#efficacy-label").css("background", "#CE4427");
    $("#efficacy-score").css("color", "#F25C24");
	}

//Resilience Detailed Metrics
if (optimism >= 0 && optimism <= 2.5) {
  $("#optimism-lowest").show();
  $("#optimism-low").hide();
  $("#optimism-mid").hide();
  $("#optimism-high").hide();
}
if (optimism >= 2.6 && optimism <= 5) {
  $("#optimism-lowest").hide();
  $("#optimism-low").show();
  $("#optimism-mid").hide();
  $("#optimism-high").hide();
}
if (optimism >= 5.1 && optimism <= 7.5) {
  $("#optimism-lowest").hide();
  $("#optimism-low").hide();
  $("#optimism-mid").show();
  $("#optimism-high").hide();
}
if (optimism >= 7.6 && optimism <= 10) {
  $("#optimism-lowest").hide();
  $("#optimism-low").hide();
  $("#optimism-mid").hide();
  $("#optimism-high").show();
}
});
