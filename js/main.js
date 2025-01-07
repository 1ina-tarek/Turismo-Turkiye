
window.onscroll = function() {
  toggleScrollUp();
  toggleNavbar();
};

function toggleNavbar() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("navbar").classList.add("scrolled");
  } else {
    document.getElementById("navbar").classList.remove("scrolled");
  }
}

function toggleScrollUp() {
  const scrollUpButton = document.getElementById("scrolltoTop");

  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    scrollUpButton.classList.add("show"); 
  } else {
    scrollUpButton.classList.remove("show"); 
  }
}



document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Your booking has been successfully submitted !");
});


window.addEventListener("beforeunload", function (e) {
  e.preventDefault();
  e.returnValue = " ";
});
