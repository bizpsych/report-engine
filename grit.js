$(document).ready(function() {
  //Graph Calculations
  $("#diligence").css( "width", diligence * 10 + '%');
  $("#diligence").css( "height", diligence * 10 + '%');

  $("#leadership").css( "width", leadership * 10 + '%');
  $("#leadership").css( "height", leadership * 10 + '%');

  $("#seeking").css( "width", seeking * 10 + '%');
  $("#seeking").css( "height", seeking * 10 + '%');

  $("#intelect").css( "width", intelect * 10 + '%');
  $("#intelect").css( "height", intelect * 10 + '%');

  $("#success").css( "width", success * 10 + '%');
  $("#success").css( "height", success * 10 + '%');

  $("#autonomy").css( "width", autonomy * 10 + '%');
  $("#autonomy").css( "height", autonomy * 10 + '%');

  $("#persistence").css( "width", persistence * 10 + '%');
  $("#persistence").css( "height",persistence * 10 + '%');

//Color Conditions
  if (diligence >= 4.6 && diligence <= 7.5) {
    $("#diligence").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#diligence-label").css("background", "#C18625");
    $("#diligence-score").css("color", "#ECA327");
	}
  if (diligence >= 0 && diligence <= 4.5) {
    $("#diligence").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
    $("#diligence-label").css("background", "#CE4427");
    $("#diligence-score").css("color", "#F25C24");
	}
  if (leadership >= 4.6 && leadership <= 7.5) {
    $("#leadership").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#leadership-label").css("background", "#C18625");
    $("#leadership-score").css("color", "#ECA327");
	}
  if (leadership >= 0 && leadership <= 4.5) {
    $("#leadership").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
    $("#leadership-label").css("background", "#CE4427");
    $("#leadership-score").css("color", "#F25C24");
	}
  if (seeking >= 4.6 && seeking <= 7.5) {
    $("#seeking").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#seeking-label").css("background", "#C18625");
    $("#seeking-score").css("color", "#ECA327");
	}
  if (seeking >= 0 && seeking <= 4.5) {
    $("#seeking").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
    $("#seeking-label").css("background", "#CE4427");
    $("#seeking-score").css("color", "#F25C24");
	}
  if (intelect >= 4.6 && intelect <= 7.5) {
    $("#intelect").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#intelect-label").css("background", "#C18625");
    $("#intelect-score").css("color", "#ECA327");
	}
  if (intelect >= 0 && intelect <= 4.5) {
    $("#intelect").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
    $("#intelect-label").css("background", "#CE4427");
    $("#intelect-score").css("color", "#F25C24");
	}
  if (success >= 4.6 && success <= 7.5) {
    $("#success").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#success-label").css("background", "#C18625");
    $("#success-score").css("color", "#ECA327");
	}
  if (success >= 0 && success <= 4.5) {
    $("#success").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
    $("#success-label").css("background", "#CE4427");
    $("#success-score").css("color", "#F25C24");
	}
  if (autonomy >= 4.6 && autonomy <= 7.5) {
    $("#autonomy").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#autonomy-label").css("background", "#C18625");
    $("#autonomy-score").css("color", "#ECA327");
	}
  if (autonomy >= 0 && autonomy <= 4.5) {
    $("#autonomy").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
    $("#autonomy-label").css("background", "#CE4427");
    $("#autonomy-score").css("color", "#F25C24");
	}
  if (persistence >= 4.6 && persistence <= 7.5) {
    $("#persistence").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#persistence-label").css("background", "#C18625");
    $("#persistence-score").css("color", "#ECA327");
	}
  if (persistence >= 0 && persistence <= 4.5) {
    $("#persistence").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
    $("#persistence-label").css("background", "#CE4427");
    $("#persistence-score").css("color", "#F25C24");
	}

//Diligence Detailed Metrics
if (diligence >= 0 && diligence <= 2.5) {
  $("#diligence-lowest").show();
  $("#diligence-low").hide();
  $("#diligence-mid").hide();
  $("#diligence-high").hide();
}
if (diligence >= 2.6 && diligence <= 5) {
  $("#diligence-lowest").hide();
  $("#diligence-low").show();
  $("#diligence-mid").hide();
  $("#diligence-high").hide();
}
if (diligence >= 5.1 && diligence <= 7.5) {
  $("#diligence-lowest").hide();
  $("#diligence-low").hide();
  $("#diligence-mid").show();
  $("#diligence-high").hide();
}
if (diligence >= 7.6 && diligence <= 10) {
  $("#diligence-lowest").hide();
  $("#diligence-low").hide();
  $("#diligence-mid").hide();
  $("#diligence-high").show();
}

//Leadership Detailed Metrics
if (leadership >= 0 && leadership <= 2.5) {
  $("#leadership-lowest").show();
  $("#leadership-low").hide();
  $("#leadership-mid").hide();
  $("#leadership-high").hide();
}
if (leadership >= 2.6 && leadership <= 5) {
  $("#leadership-lowest").hide();
  $("#leadership-low").show();
  $("#leadership-mid").hide();
  $("#leadership-high").hide();
}
if (leadership >= 5.1 && leadership <= 7.5) {
  $("#leadership-lowest").hide();
  $("#leadership-low").hide();
  $("#leadership-mid").show();
  $("#leadership-high").hide();
}
if (leadership >= 7.6 && leadership <= 10) {
  $("#leadership-lowest").hide();
  $("#leadership-low").hide();
  $("#leadership-mid").hide();
  $("#leadership-high").show();
}

//Seeking Detailed Metrics
if (seeking >= 0 && seeking <= 2.5) {
  $("#seeking-lowest").show();
  $("#seeking-low").hide();
  $("#seeking-mid").hide();
  $("#seeking-high").hide();
}
if (seeking >= 2.6 && seeking <= 5) {
  $("#seeking-lowest").hide();
  $("#seeking-low").show();
  $("#seeking-mid").hide();
  $("#seeking-high").hide();
}
if (seeking >= 5.1 && seeking <= 7.5) {
  $("#seeking-lowest").hide();
  $("#seeking-low").hide();
  $("#seeking-mid").show();
  $("#seeking-high").hide();
}
if (seeking >= 7.6 && seeking <= 10) {
  $("#seeking-lowest").hide();
  $("#seeking-low").hide();
  $("#seeking-mid").hide();
  $("#seeking-high").show();
}

//Intelect Detailed Metrics
if (intelect >= 0 && intelect <= 2.5) {
  $("#intelect-lowest").show();
  $("#intelect-low").hide();
  $("#intelect-mid").hide();
  $("#intelect-high").hide();
}
if (intelect >= 2.6 && intelect <= 5) {
  $("#intelect-lowest").hide();
  $("#intelect-low").show();
  $("#intelect-mid").hide();
  $("#intelect-high").hide();
}
if (intelect >= 5.1 && intelect <= 7.5) {
  $("#intelect-lowest").hide();
  $("#intelect-low").hide();
  $("#intelect-mid").show();
  $("#intelect-high").hide();
}
if (intelect >= 7.6 && intelect <= 10) {
  $("#intelect-lowest").hide();
  $("#intelect-low").hide();
  $("#intelect-mid").hide();
  $("#intelect-high").show();
}

//Success Detailed Metrics
if (success >= 0 && success <= 2.5) {
  $("#success-lowest").show();
  $("#success-low").hide();
  $("#success-mid").hide();
  $("#success-high").hide();
}
if (success >= 2.6 && success <= 5) {
  $("#success-lowest").hide();
  $("#success-low").show();
  $("#success-mid").hide();
  $("#success-high").hide();
}
if (success >= 5.1 && success <= 7.5) {
  $("#success-lowest").hide();
  $("#success-low").hide();
  $("#success-mid").show();
  $("#success-high").hide();
}
if (success >= 7.6 && success <= 10) {
  $("#success-lowest").hide();
  $("#success-low").hide();
  $("#success-mid").hide();
  $("#success-high").show();
}

//Autonomy Detailed Metrics
if (autonomy >= 0 && autonomy <= 2.5) {
  $("#autonomy-lowest").show();
  $("#autonomy-low").hide();
  $("#autonomy-mid").hide();
  $("#autonomy-high").hide();
}
if (autonomy >= 2.6 && autonomy <= 5) {
  $("#autonomy-lowest").hide();
  $("#autonomy-low").show();
  $("#autonomy-mid").hide();
  $("#autonomy-high").hide();
}
if (autonomy >= 5.1 && autonomy <= 7.5) {
  $("#autonomy-lowest").hide();
  $("#autonomy-low").hide();
  $("#autonomy-mid").show();
  $("#autonomy-high").hide();
}
if (autonomy >= 7.6 && autonomy <= 10) {
  $("#autonomy-lowest").hide();
  $("#autonomy-low").hide();
  $("#autonomy-mid").hide();
  $("#autonomy-high").show();
}

//Persistence Detailed Metrics
if (persistence >= 0 && persistence <= 2.5) {
  $("#persistence-lowest").show();
  $("#persistence-low").hide();
  $("#persistence-mid").hide();
  $("#persistence-high").hide();
}
if (persistence >= 2.6 && persistence <= 5) {
  $("#persistence-lowest").hide();
  $("#persistence-low").show();
  $("#persistence-mid").hide();
  $("#persistence-high").hide();
}
if (persistence >= 5.1 && persistence <= 7.5) {
  $("#persistence-lowest").hide();
  $("#persistence-low").hide();
  $("#persistence-mid").show();
  $("#persistence-high").hide();
}
if (persistence >= 7.6 && persistence <= 10) {
  $("#persistence-lowest").hide();
  $("#persistence-low").hide();
  $("#persistence-mid").hide();
  $("#persistence-high").show();
}
});
