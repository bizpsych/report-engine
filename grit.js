$(document).ready(function() {
  $("#diligence").css( "width", diligence * 10 + '%');
  $("#diligence").css( "height", diligence * 10 + '%');

  $("#leadership").css( "width", leadership * 10 + '%');
  $("#leadership").css( "height", leadership * 10 + '%');

  $("#seeking-graph").css( "width", seeking * 10 + '%');
  $("#seeking-graph").css( "height", seeking * 10 + '%');

  $("#intelect").css( "width", intelect * 10 + '%');
  $("#intelect").css( "height", intelect * 10 + '%');

  $("#success").css( "width", success * 10 + '%');
  $("#success").css( "height", success * 10 + '%');

  $("#autonomy").css( "width", autonomy * 10 + '%');
  $("#autonomy").css( "height", autonomy * 10 + '%');

  $("#persistence").css( "width", persistence * 10 + '%');
  $("#persistence").css( "height", persistence * 10 + '%');

  //Grit Color Conditions
    if (diligence < 7.6) {
      $("#diligence").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
      $("#diligence-label").css("background", "#C18625");
      $("#diligence-score").css("color", "#ECA327");
  	}
    if (diligence < 4.6) {
    	$("#diligence").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
      $("#diligence-label").css("background", "#CE4427");
      $("#diligence-score").css("color", "#F25C24");
  	}
    if (leadership < 7.6) {
      $("#leadership").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
      $("#leadership-label").css("background", "#C18625");
      $("#leadership-score").css("color", "#ECA327");
  	}
    if (leadership < 4.6) {
    	$("#leadership").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
      $("#leadership-label").css("background", "#CE4427");
      $("#leadership-score").css("color", "#F25C24");
  	}
    if (seeking < 7.6) {
      $("#seeking-graph").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
      $("#seeking-label").css("background", "#C18625");
      $("#seeking-score").css("color", "#ECA327");
    }
    if (seeking < 4.6) {
      $("#seeking-graph").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
      $("#seeking-label").css("background", "#CE4427");
      $("#seeking-score").css("color", "#F25C24");
    }
    if (intelect < 7.6) {
      $("#intelect").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
      $("#intelect-label").css("background", "#C18625");
      $("#intelect-score").css("color", "#ECA327");
    }
    if (intelect < 4.6) {
      $("#intelect").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
      $("#intelect-label").css("background", "#CE4427");
      $("#intelect-score").css("color", "#F25C24");
    }
    if (success < 7.6) {
      $("#success").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
      $("#success-label").css("background", "#C18625");
      $("#success-score").css("color", "#ECA327");
    }
    if (success < 4.6) {
      $("#success").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
      $("#success-label").css("background", "#CE4427");
      $("#success-score").css("color", "#F25C24");
    }
    if (autonomy < 7.6) {
      $("#autonomy").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
      $("#autonomy-label").css("background", "#C18625");
      $("#autonomy-score").css("color", "#ECA327");
    }
    if (autonomy < 4.6) {
      $("#autonomy").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
      $("#autonomy-label").css("background", "#CE4427");
      $("#autonomy-score").css("color", "#F25C24");
    }
    if (persistence < 7.6) {
      $("#persistence").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
      $("#persistence-label").css("background", "#C18625");
      $("#persistence-score").css("color", "#ECA327");
    }
    if (persistence < 4.6) {
      $("#persistence").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
      $("#persistence-label").css("background", "#CE4427");
      $("#persistence-score").css("color", "#F25C24");
    }
  });
