// *******************************************************
// fixed Element - Toggle Class on Scroll
myID = document.getElementById("fixedelement");
const add_class_on_scroll = () => myID.classList.add("show");
const remove_class_on_scroll = () => myID.classList.remove("show");
var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 200) {
    add_class_on_scroll();
  }else {
    remove_class_on_scroll();
  }
};

window.addEventListener("scroll", myScrollFunc);

// *******************************************************
// Sticky Header on Scroll
// When the user scrolls the page, execute stickyHeader
window.onscroll = function() {stickyHeader()};
// Get the header
var header = document.getElementById("header");
// Get the offset position of the navbar
var sticky = header.offsetTop;
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}