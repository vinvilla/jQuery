  $("h1").addClass("big-title margin-50");


  // use this if you use the jQuery CDN at the top - in the head section of the HTML
  // $(document).ready(function() {
  //   $("h1").css("color","red");
  // });


  setTimeout(function() {
    $("h1").removeClass("big-title");
  }, 3000);


  setTimeout(function() {
    $("h1").css("color", "red");
  }, 3000);

  $("button").css("color", "red");

  $("h1").text("good bye!");
  $("button").text("Dont Click Me");
  $("button").html("<em>Oiiii</em>");

  $("a").attr("href", "https://www.yahoo.com");

  $("h1").click(function() {
    $("h1").css("color", "purple");

  });


  $("button").click(function() {
    $("h1").css("color", "purple");
  });


  $(document).keypress(function(event) {
    console.log(event.key);
    $("h1").text(event.key);
  });

//  $("h1").hide();

  $("h1").fadeOut();
    $("h1").fadeIn();
      $("h1").fadeToggle();
      $("h1").slideUp();
      $("h1").slideDown();
      $("h1").slideToggle();
            $("h1").animate({opacity: 0.5});
            $("h1").animate({margin: "20%"});
            $("h1").slideUp().slideDown().animate({opacity: 0.5});

  $(document).on("mouseover", function() { //callback function
    $("h1").css("color", "orange");
    $("h1").show();
  });

  $(document).on("click", function() { //callback function
    $("button").css("color", "orange");
    $("h1").toggle();
  });

$("h1").before("<button>Prev</button>");

$("h1").after("<button>Next</button>");

$("h1").prepend("<button>Prepend</button>");

$("h1").append("<button>Append</button>");

//$("button").remove();
