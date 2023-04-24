const navbar = document.querySelector("#navbar");

document.addEventListener("scroll" , function(e) {
    if(window.scrollY > 20){
        navbar.classList.add("navbarActive")
    }
    else{
        navbar.classList.remove("navbarActive")
    }
})

let _CONTENT = ['WEB DESIGN','CREATIVE DESIGN','GRAPHIC DESIGN','WEB DEVELOPER',];

// Current sentence being processed
let _PART = 0;

// Character number of the current sentence being processed
let _PART_INDEX = 0;

// Holds the handle returned from setInterval
let _INTERVAL_VAL;

// Element that holds the text
let _ELEMENT = document.querySelector("#tanitim");


// Implements typing effect
function Type() {
  // Get substring with 1 characater added
  let text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
  _ELEMENT.innerHTML = text;
  _PART_INDEX++;

  // If full sentence has been displayed then start to delete the sentence after some time
  if (text === _CONTENT[_PART]) {
    // Hide the cursor
    // _CURSOR.style.display = 'none';

    clearInterval(_INTERVAL_VAL);
    setTimeout(function () {
      _INTERVAL_VAL = setInterval(Delete, 50);
    }, 1000);
  }
}

// Implements deleting effect
function Delete() {
  // Get substring with 1 characater deleted
  let text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
  _ELEMENT.innerHTML = text;
  _PART_INDEX--;

  // If sentence has been deleted then start to display the next sentence
  if (text === "") {
    clearInterval(_INTERVAL_VAL);

    // If current sentence was last then display the first one, else move to the next
    if (_PART == _CONTENT.length - 1) _PART = 0;
    else _PART++;

    _PART_INDEX = 0;

    // Start to display the next sentence after some time
    setTimeout(function () {
      // _CURSOR.style.display = 'inline-block';
      _INTERVAL_VAL = setInterval(Type, 50);
    }, 200);
  }
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 50);


