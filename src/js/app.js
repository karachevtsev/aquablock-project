$(document).ready(function() {

    $('a.scrollto').click(function(e) {
      e.preventDefault();
      var target = $(this).attr('href');
      $('html, body').stop().animate({scrollTop: $(target).offset().top}, 1600, 'easeInOutExpo',
        function(){window.location.hash = target;});

      if ($('.navbar-collapse').hasClass('in')) {
        $('.navbar-collapse').removeClass('in').addClass('collapse');
      }
    });

    $('.phone-mask').mask('(000) 00-00-000');

  $("#callback-form-popup").submit(function() {
    $.ajax({
      type: "POST",
      url: "thanks.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      $(".success").fadeIn('300');
      $("#callback-form").trigger("reset");
    });
    return false;
  });

  $("#callback-form-inline-1").submit(function() {
    $.ajax({
      type: "POST",
      url: "thanks.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      $(".success-form-inline").fadeIn('300');
      $("#callback-form-inline").trigger("reset");
    });
    return false;
  });

  $("#callback-form-inline-2").submit(function() {
    $.ajax({
      type: "POST",
      url: "thanks.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      $(".success-form-inline").fadeIn('300');
      $("#callback-form-inline").trigger("reset");
    });
    return false;
  });

  $("#callback-form-inline-3").submit(function() {
    $.ajax({
      type: "POST",
      url: "thanks.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      $(".success-form-inline").fadeIn('300');
      $("#callback-form-inline").trigger("reset");
    });
    return false;
  });

});
