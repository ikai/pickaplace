var PAP = {};
PAP.onReady = function() {
	var availableCities = [
			"San Francisco",
			"New York City",
			"Chicago",
			"Los Angeles"
	];

	$( "#citySelect" ).autocomplete({
		source: availableCities
	});

	$( "#venueSelect" ).autocomplete({
		source: "/venue_search",
		minLength: 2,
		select: function( event, ui ) {
				console.log( ui.item ?
					"Selected: " + ui.item.value + " aka " + ui.item.id :
					"Nothing selected, input was " + this.value );
			}
	});

	// check for Geolocation support
	if (navigator.geolocation) {
	  console.log('Geolocation is supported!');
	  navigator.geolocation.getCurrentPosition(function(position) {
	    PAP.currentLat = position.coords.latitude;
		PAP.currentLong = position.coords.longitude;

		console.log("Latitude: " + PAP.currentLat);
		console.log("Longitude: " + PAP.currentLong);
	  }, function(error) {
	    console.log('Error occurred. Error code: ' + error.code);
	    // error.code can be:
	    //   0: unknown error
	    //   1: permission denied
	    //   2: position unavailable (error response from locaton provider)
	    //   3: timed out
	  });

	}
	else {
	  console.log('Geolocation is not supported for this Browser/OS version yet.');
	  // Do something - manually ask user for a city
	}

};