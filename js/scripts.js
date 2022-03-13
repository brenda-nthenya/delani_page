//business logic

$(document).ready(function () {

    //toggle what to do.
    $('#design').click(function () {
        $('#design-content').show(function () {
            $('#design').hide('fast');
        });
    });
    $('#design-content').click(function () {
        $('#design').show(function () {
            $('#design-content').hide('fast');
        });
    });

    $('#dev').click(function () {
        $('#dev-content').show(function () {
            $('#dev').hide('fast');
        });
    });
    $('#dev-content').click(function () {
        $('#dev').show(function () {
            $('#dev-content').hide('fast');
        });
    });

    $('#product').click(function () {
        $('#product-content').show(function () {
            $('#product').hide('fast');
        });
    });
    $('#product-content').click(function () {
        $('#product').show(function () {
            $('#product-content').hide('fast');
        });
    });
});

$(document).ready(function(){
    $("#work1").mouseover(function(){
      $("#overlay").show();
    }).mouseout(function(){
      $("#overlay").hide();
    });
  });
  $(document).ready(function(){
    $("#work2").mouseover(function(){
      $("#overlay2").show();
    }).mouseout(function(){
      $("#overlay2").hide();
    });
  });
  $(document).ready(function(){
    $("#work3").mouseover(function(){
      $("#overlay3").show();
    }).mouseout(function(){
      $("#overlay3").hide();
    });
  });
  $(document).ready(function(){
    $("#work4").mouseover(function(){
      $("#overlay4").show();
    }).mouseout(function(){
      $("#overlay4").hide();
    });
  });
  
  $(document).ready(function(){
    $("#work5").mouseover(function(){
      $("#overlay5").show();
    }).mouseout(function(){
      $("#overlay5").hide();
    });
    $("#work6").mouseover(function(){
      $("#overlay6").show();
    }).mouseout(function(){
      $("#overlay6").hide();
    });
    $("#work7").mouseover(function(){
      $("#overlay7").show();
    }).mouseout(function(){
      $("#overlay7").hide();
    });
    $("#work8").mouseover(function(){
      $("#overlay8").show();
    }).mouseout(function(){
      $("#overlay8").hide();
    });
  });

  //user Interface logic
$(document).ready(function () {
    $('form.contact').on('submit', function (e) {
        e.preventDefault();
        var formData = $(this).serialize();
        $.getJSON('https://saboticonstituency.info/delani_studio/mc-end-point.php', formData, function (data) {
            if (data.status === 'subscribed') {
                alert('We have received your message.Our team will get back to you as soon as possible. Thank you for reaching out to us');
                $('form.contact')[0].reset();
            } else {
                alert("oops error: " + data.detail);
                $('form.contact')[0].reset();
            }
        });
    });
})