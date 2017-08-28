$('#controlR').click(function() {
  event.preventDefault();
  $('#content').animate({
    marginLeft: "-=400px"
  }, "fast");
});

$('#controlL').click(function() {
  event.preventDefault();
  $('#content').animate({
    marginLeft: "+=400px"
  }, "fast");
});



/*jQuery(document).ready(function ($) {



	var slideCount = $('.module-section ul li').length;
	var slideWidth = $('.module-section ul li').width();
	var slideHeight = $('.module-section ul li').height();
	var sliderUlWidth = slideCount * slideWidth;

	$('.module-section').css({ width: slideWidth, height: slideHeight });

	$('.module-section ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('.module-section ul li:last-child').prependTo('.module-section ul');

    function moveLeft() {
        $('.module-section ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('.module-section ul li:last-child').prependTo('.module-section ul');
            $('.module-section ul').css('left', '');
        });
    };

    function moveRight() {
        $('.module-section ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('.module-section ul li:first-child').appendTo('.module-section ul');
            $('.module-section ul').css('left', '');
        });
    };

    $('.left-controls').click(function () {
        moveLeft();
    });

    $('.right-controls').click(function () {
        moveRight();
    });

});



*/

$(function() {
  var lat
  $(".fa-dot-circle-o").click(function() {
    function success(pos) {
      var loco = pos.coords
      lat = loco.latitude
      lan = loco.longitude
      console.log(lat)
      console.log(lan)


    }
    navigator.geolocation.getCurrentPosition(success);

  })

  $("button.is-primary").click(function() {
    var enter0 = $("input").val()
    if (lat) {
      $.get(`https://galvanize-cors-proxy.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyBS9VzSULa8twrcLqcpI2u6oXCLHztWVkg&location=${lat},${lan}&radius=3000&types=food,restaurant&opennow&keyword=` + enter0).then(function(data) {
        console.log(data.results)
        // console.log(data.results[2].name)

        $("#content").empty()
        for (var i = 0; i < data.results.length; i++) {
          var info = data.results[i].name
          var stats = data.results[i].rating
          console.log(info)
          console.log(stats)
          var namecard = `<li class="card effect1">
            <div class="inside-top">
            <h1>${info}</h1>
            <h1><i class="fa fa-star-o fa-lg" aria-hidden="true"></i>${stats} </h1>
              <img src="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${data.results[i].photos["0"].photo_reference}&key=AIzaSyBS9VzSULa8twrcLqcpI2u6oXCLHztWVkg">

            </div>
          </li>`
          $("#content").append(namecard)

        }
        // (data.results).forEach(function(place) {
        //   $(info).append(place.name)
        // })
      })

    } else {

    console.log(enter0)
    $.get(`https://galvanize-cors-proxy.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyBS9VzSULa8twrcLqcpI2u6oXCLHztWVkg&location=39.7392,-104.9903&radius=3000&types=food,restaurant&opennow&keyword=` + enter0).then(function(data) {
      console.log(data.results)
      // console.log(data.results[2].name)

      $("#content").empty()
      for (var i = 0; i < data.results.length; i++) {
        var info = data.results[i].name
        var stats = data.results[i].rating
        console.log(info)
        console.log(stats)
        var namecard = `<li class="card effect1">
          <div class="inside-top">
          <h1>${info}</h1>
          <h1><i class="fa fa-star-o fa-lg" aria-hidden="true"></i>${stats} </h1>
            <img src="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${data.results[i].photos["0"].photo_reference}&key=AIzaSyBS9VzSULa8twrcLqcpI2u6oXCLHztWVkg">

          </div>
        </li>`
        $("#content").append(namecard)

      }
      // (data.results).forEach(function(place) {
      //   $(info).append(place.name)
      // })
    })
  }

  })

})
