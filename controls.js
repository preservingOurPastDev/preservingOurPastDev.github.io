// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}


// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}

var fullLogo = true;
var navLogo = document.getElementById('navLogo');
var navLogoSmall = document.getElementById('navLogoSmall');
var navButtons = document.getElementsByClassName('nav-button');
window.addEventListener('scroll',function(e) {
	var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	if(scrollTop > 100 && fullLogo) {
		navLogo.classList = 'nav-logo fade-out nav-logo-no-display';
		navLogoSmall.classList = 'nav-logo-small fade-in';
		for(var i =0; i < navButtons.length; i++){
			navButtons[i].classList = 'w3-bar-item w3-button nav-button nav-button-scroll'
		}
		fullLogo = false;
	} else if(scrollTop < 100 && !fullLogo) {
		navLogo.classList = 'nav-logo fade-in';
		navLogoSmall.classList = 'nav-logo-small fade-out nav-logo-no-display';
		for(var i =0; i < navButtons.length; i++){
			navButtons[i].classList = 'w3-bar-item w3-button nav-button'
		}
		fullLogo = true;
	}
});
