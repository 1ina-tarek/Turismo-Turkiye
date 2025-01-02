
window.onscroll = function() { toggleNavbar() };

function toggleNavbar() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("navbar").classList.add("scrolled");
  } else {
    document.getElementById("navbar").classList.remove("scrolled");
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
