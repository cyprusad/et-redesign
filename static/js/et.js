// markets section

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
  		
});

$("#target-us").click(function() {
  		$("#asia-markets").addClass("hidden");
      $("#eur-markets").addClass("hidden");
      $("#us-markets").removeClass("hidden");

  		$("#asia-header").removeClass("active");
  		$("#eur-header").removeClass("active");
  		$("#us-header").addClass("active");
});

// popular section

$("#target-most-read").click(function() {
      $("#mostread").removeClass("hidden");
      $("#mostcommented").addClass("hidden");
      $("#mostshared").addClass("hidden");

      $("#most-read-header").addClass("active");
      $("#most-commented-header").removeClass("active");
      $("#most-shared-header").removeClass("active");
      
});

$("#target-most-commented").click(function() {
      
      $("#mostread").addClass("hidden");
      $("#mostcommented").removeClass("hidden");
      $("#mostshared").addClass("hidden");

      $("#most-read-header").removeClass("active");
      $("#most-commented-header").addClass("active");
      $("#most-shared-header").removeClass("active");
      
});

$("#target-most-shared").click(function() {
      $("#mostread").addClass("hidden");
      $("#mostcommented").addClass("hidden");
      $("#mostshared").removeClass("hidden");

      $("#most-read-header").removeClass("active");
      $("#most-commented-header").removeClass("active");
      $("#most-shared-header").addClass("active");
});

$(window).scroll(

  function() { 
    var y_scroll_pos = window.pageYOffset; var scroll_pos_test = 130; 
    if(y_scroll_pos > scroll_pos_test) { 
      $('.navwrapper').addClass("fixed"); 
    } else { $('.navwrapper').removeClass("fixed");}
  });