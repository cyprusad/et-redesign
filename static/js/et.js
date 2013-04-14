$("#target-asia").click(function() {
      $("#asia-markets").removeClass("hidden");
      $("#eur-markets").addClass("hidden");
      $("#us-markets").addClass("hidden");

  		$("#asia-header").addClass("active");
  		$("#eur-header").removeClass("active");
  		$("#us-header").removeClass("active");
  		
  	});
  	$("#target-eur").click(function() {
  		
  		$("#asia-markets").addClass("hidden");
      $("#eur-markets").removeClass("hidden");
      $("#us-markets").addClass("hidden");

  		$("#asia-header").removeClass("active");
  		$("#eur-header").addClass("active");
  		$("#us-header").removeClass("active");
  		
  	})
  	$("#target-us").click(function() {
  		$("#asia-markets").addClass("hidden");
      $("#eur-markets").addClass("hidden");
      $("#us-markets").removeClass("hidden");

  		$("#asia-header").removeClass("active");
  		$("#eur-header").removeClass("active");
  		$("#us-header").addClass("active");
});