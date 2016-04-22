var outputEl = document.getElementById("output-target");

/*
  You can get a reference to DOM elements and
  directly attach an event handler. In this
  example, we get every element with a class of
  "article-section" and listen for when the
  user clicks on the element. When that event
  fires, the attached "handleSectionClick"
  function gets executed.
 */
var articleEl = document.getElementsByClassName("article-section");

function handleSectionClick(MouseEvent) {
  var elementText = MouseEvent.target.innerHTML;
  outputEl.innerHTML += "You clicked on the " + elementText + " section";
}

for (var i = 0; i < articleEl.length; i++) {
  articleEl[i].addEventListener("click", handleSectionClick);
}

/*
  Get a reference to the DOM element with an id of
  "page-header", and attach an event handler for the
  mouseover, and mouseout, events.
 */
header.addEventListener("mouseover", handleHeaderMouseOver);
header.addEventListener("mouseout", handleHeaderMouseOut);



/*
  We can also write an anonymous function (lamba expression)
  in the addEventListener declaration instead of using a
  function reference
 */
var fieldEl = document.getElementById("keypress-input");


/*
  Now we can start making a truly interactive experience
  combining HTML, JavaScript and CSS. When a user clicks
  on a button in the DOM, we can listen for that event in
  JavaScript, and then add, or remove, CSS classes.

  In this example, I simply use the `toggle()` method on
  the `classList` property of a DOM element to automatically
  add and remove a class.
 */
var guineaPig = document.getElementById("guinea-pig");
