document.addEventListener('init', function(event) {
  	var page = event.target;

  	if (page.id === 'home') {
    	page.querySelector('#about').onclick = function() {
      		document.querySelector('#myNavigator').pushPage('about.html');
      	};

      	page.querySelector('#feet-card').onclick = function() {
      		document.querySelector('#myNavigator').pushPage('feet.html');
    	};

    	page.querySelector('#shoulders-card').onclick = function() {
      		document.querySelector('#myNavigator').pushPage('shoulders.html');
    	};

    	page.querySelector('#face-card').onclick = function() {
      		document.querySelector('#myNavigator').pushPage('face.html');
    	};
 	}
});