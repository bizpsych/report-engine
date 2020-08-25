$(document).ready(function() {
  var optimism = {{wf {&quot;path&quot;:&quot;optimism&quot;,&quot;type&quot;:&quot;Number&quot;\} }};
  var efficacy = {{wf {&quot;path&quot;:&quot;self-efficacy-score&quot;,&quot;type&quot;:&quot;Number&quot;\} }};
  var determination = {{wf {&quot;path&quot;:&quot;determination-score&quot;,&quot;type&quot;:&quot;Number&quot;\} }};
  var temper = {{wf {&quot;path&quot;:&quot;mild-temper-score&quot;,&quot;type&quot;:&quot;Number&quot;\} }};
  var assured = {{wf {&quot;path&quot;:&quot;self-assured-score&quot;,&quot;type&quot;:&quot;Number&quot;\} }};
  var positive = {{wf {&quot;path&quot;:&quot;positive-reinterpretation-score&quot;,&quot;type&quot;:&quot;Number&quot;\} }};
  var adversity = {{wf {&quot;path&quot;:&quot;facing-adversity-score&quot;,&quot;type&quot;:&quot;Number&quot;\} }};
  var diligence = {{wf {&quot;path&quot;:&quot;diligence-score&quot;,&quot;type&quot;:&quot;Number&quot;\} }};
  var leadership = {{wf {&quot;path&quot;:&quot;leadership-score&quot;,&quot;type&quot;:&quot;Number&quot;\} }};
  var seeking = {{wf {&quot;path&quot;:&quot;seeking-success-score&quot;,&quot;type&quot;:&quot;Number&quot;\} }};
  var intelect = {{wf {&quot;path&quot;:&quot;intellect-score&quot;,&quot;type&quot;:&quot;Number&quot;\} }};
  var success = {{wf {&quot;path&quot;:&quot;seeking-success-score&quot;,&quot;type&quot;:&quot;Number&quot;\} }};
  var autonomy = {{wf {&quot;path&quot;:&quot;autonomy-score&quot;,&quot;type&quot;:&quot;Number&quot;\} }};
  var persistence = {{wf {&quot;path&quot;:&quot;persistence-score&quot;,&quot;type&quot;:&quot;Number&quot;\} }};
  var assertiveness = {{wf {&quot;path&quot;:&quot;assertiveness-2&quot;,&quot;type&quot;:&quot;Number&quot;\} }};
  var security = {{wf {&quot;path&quot;:&quot;emotional-security-score&quot;,&quot;type&quot;:&quot;Number&quot;\} }};
  var thinking = {{wf {&quot;path&quot;:&quot;innovative-thinking-score&quot;,&quot;type&quot;:&quot;Number&quot;\} }};
  var confidence = {{wf {&quot;path&quot;:&quot;self-confidence-score&quot;,&quot;type&quot;:&quot;Number&quot;\} }};
  var trust = {{wf {&quot;path&quot;:&quot;team-trust-score&quot;,&quot;type&quot;:&quot;Number&quot;\} }};
  var composure = {{wf {&quot;path&quot;:&quot;composure-score&quot;,&quot;type&quot;:&quot;Number&quot;\} }};
  var ideas = {{wf {&quot;path&quot;:&quot;independent-ideas-score&quot;,&quot;type&quot;:&quot;Number&quot;\} }};

  //Graph Calculations
  $("#optimism").css( "width", optimism * 10 + '%');
  $("#optimism").css( "height", optimism * 10 + '%');

  $("#self-efficacy").css( "width", efficacy * 10 + '%');
  $("#self-efficacy").css( "height", efficacy * 10 + '%');

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

  $("#diligence").css( "width", diligence * 10 + '%');
  $("#diligence").css( "height",diligence * 10 + '%');

  $("#leadership").css( "width", leadership * 10 + '%');
  $("#leadership").css( "height",leadership * 10 + '%');

  $("#seeking").css( "width", seeking * 10 + '%');
  $("#seeking").css( "height",seeking * 10 + '%');

  $("#intelect").css( "width", intelect * 10 + '%');
  $("#intelect").css( "height",intelect * 10 + '%');

  $("#success").css( "width", success * 10 + '%');
  $("#success").css( "height",success * 10 + '%');

  $("#autonomy").css( "width", autonomy * 10 + '%');
  $("#autonomy").css( "height",autonomy * 10 + '%');

  $("#persistence").css( "width", persistence * 10 + '%');
  $("#persistence").css( "height",persistence * 10 + '%');

  $("#assertiveness").css( "width", assertiveness * 10 + '%');
  $("#assertiveness").css( "height",assertiveness * 10 + '%');

  $("#security").css( "width", security * 10 + '%');
  $("#security").css( "height",security * 10 + '%');

  $("#thinking").css( "width", thinking * 10 + '%');
  $("#thinking").css( "height",thinking * 10 + '%');

  $("#confidence").css( "width", confidence * 10 + '%');
  $("#confidence").css( "height",confidence * 10 + '%');

  $("#trust").css( "width", trust * 10 + '%');
  $("#trust").css( "height",trust * 10 + '%');

  $("#composure").css( "width", composure * 10 + '%');
  $("#composure").css( "height",composure * 10 + '%');

  $("#ideas").css( "width", ideas * 10 + '%');
  $("#ideas").css( "height",ideas * 10 + '%');

//Resilience Conditions
  if (optimism < 7.6) {
    $("#optimism").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#optimism-label").css("background", "#C18625");
    $("#optimism-score").css("color", "#ECA327");
	}
  if (optimism < 4.6) {
  	$("#optimism").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
    $("#optimism-label").css("background", "#CE4427");
    $("#optimism-score").css("color", "#F25C24");
	}
  if (efficacy < 7.6) {
    $("#self-efficacy").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#efficacy-label").css("background", "#C18625");
	}
  if (efficacy < 4.6) {
  	$("#self-efficacy").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
    $("#efficacy-label").css("background", "#CE4427");
	}
  if (determination < 7.6) {
    $("#determination").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#determination-label").css("background", "#C18625");
  }
  if (determination < 4.6) {
    $("#determination").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
    $("#determination-label").css("background", "#CE4427");
  }
  if (temper < 7.6) {
    $("#temper").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#temper-label").css("background", "#C18625");
  }
  if (temper < 4.6) {
    $("#temper").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
    $("#temper-label").css("background", "#CE4427");
  }
  if (assured < 7.6) {
    $("#assured").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#assured-label").css("background", "#C18625");
  }
  if (assured < 4.6) {
    $("#assured").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
    $("#assured-label").css("background", "#CE4427");
  }
  if (positive < 7.6) {
    $("#positive").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#positive-label").css("background", "#C18625");
  }
  if (positive < 4.6) {
    $("#positive").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
    $("#positive-label").css("background", "#CE4427");
  }
  if (adversity < 7.6) {
    $("#adversity").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#adversity-label").css("background", "#C18625");
  }
  if (adversity < 4.6) {
    $("#adversity").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
    $("#adversity-label").css("background", "#CE4427");
  }
});
