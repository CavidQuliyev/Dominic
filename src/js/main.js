{
  let sagbtn = document.getElementById('sagbtn')
  let solbtn = document.getElementById('solbtn')
  let mainboxcontent = document.querySelector('.main-box-content')



  solbtn.addEventListener('click', function (e) {
    mainboxcontent.classList.add('main-box-contentcopy')
  })
  sagbtn.addEventListener('click', function (e) {
    mainboxcontent.classList.remove('main-box-contentcopy')
  })



  const navbar = document.querySelector("#navbar");

  document.addEventListener("scroll", function (e) {
    if (window.scrollY > 20) {
      navbar.classList.add("navbarActive")
    }
    else {
      navbar.classList.remove("navbarActive")
    }
  })

  let _CONTENT = ['WEB DESIGN', 'CREATIVE DESIGN', 'GRAPHIC DESIGN', 'WEB DEVELOPER',];

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

}
{
  const btnAll = document.getElementById('btn1')
  const btnWeb = document.getElementById('btn2')
  const btnCreative = document.getElementById('btn3')
  const btnGraphic = document.getElementById('btn4')
  const section4main = document.querySelector('.section4main')
  const section4mainyuxaridiv2= document.querySelector('.section4mainyuxaridiv2')

  let baza = [
    {
      name: "All",
    },
    {
      name: "Web",
    },
    {
      name: "Creative",
    },
    {
      name: "Graphic",
    }
  ]

  btnAll.addEventListener('click', function (e) {
    for (let i = 0; i < baza.length; i++) {
      btnWeb.classList.remove('btncopy')
      btnCreative.classList.remove('btncopy')
      btnGraphic.classList.remove('btncopy')
      if (baza[i].name == "All") {
        section4main.innerHTML = ""
        section4main.innerHTML +=
          `
        <div class="section4mainyuxarihisse">
              <div class="section4mainyuxaridiv1">
                <div class="hover"></div>
              </div>
              <div class="section4mainyuxaridiv2">
                <div class="hover"></div>
              </div>
              <div class="section4mainyuxaridiv3">
                <div class="hover"></div>
              </div>
            </div>
  
  
  
            <div class="section4mainasagihisse">
              <div class="section4mainasagidiv1">
                <div class="hover"></div>
              </div>
              <div class="section4mainasagidiv2">
                <div class="hover"></div>
              </div>
              <div class="section4mainasagidiv3">
                <div class="hover"></div>
              </div>
        `
        btnAll.classList.add('btncopy')
      }
    }
  })
  btnWeb.addEventListener('click', function (e) {
    btnAll.classList.remove('btncopy')
    btnCreative.classList.remove('btncopy')
    btnGraphic.classList.remove('btncopy')
    for (let i = 0; i < baza.length; i++) {
      if (baza[i].name == "Web") {

        section4main.innerHTML = ""
        section4main.innerHTML +=
          `
        <div class="section4mainyuxarihisse">
              <div class="section4mainyuxaridiv1">
                <div class="hover"></div>
              </div>
              <div class="section4mainyuxaridiv2">
                <div class="hover"></div>
              </div>
              <div class="section4mainyuxaridiv3">
                <div class="hover"></div>
              </div>
              <div class="section4mainasagidiv1">
                <div  class="hover"></div>
              </div>
            </div>
  
  
  
            <div class="section4mainasagihisse">
              
              <div class="section4mainasagidiv2">
                <div class="hover"></div>
              </div>
              <div class="section4mainasagidiv3">
                <div class="hover"></div>
              </div>
        `
        section4mainyuxaridiv2.classList.add('section4divcopy')
        btnWeb.classList.add('btncopy')

      }

    }

  })
  btnCreative.addEventListener('click', function (e) {
    btnWeb.classList.remove('btncopy')
    btnAll.classList.remove('btncopy')
    btnGraphic.classList.remove('btncopy')
    for (let i = 0; i < baza.length; i++) {
      if (baza[i].name == "Creative") {

        section4main.innerHTML = ""
        section4main.innerHTML +=
          `
        <div class="section4mainyuxarihisse">
              <div class="section4mainyuxaridiv1">
                <div class="hover"></div>
              </div>
              <div class="section4mainyuxaridiv2">
                <div class="hover"></div>
              </div>
              <div class="section4mainasagidiv1">
                <div class="hover"></div>
              </div>
            </div>
        `

        btnCreative.classList.add('btncopy')
      }
    }

  })
  btnGraphic.addEventListener('click', function (e) {
    btnCreative.classList.remove('btncopy')
    btnWeb.classList.remove('btncopy')
    btnAll.classList.remove('btncopy')
    
    for (let i = 0; i < baza.length; i++) {
      if (baza[i].name == "Graphic") {

        section4main.innerHTML = ""
        section4main.innerHTML +=
          `
        <div class="section4mainyuxarihisse">
              <div class="section4mainyuxaridiv2">
                <div class="hover"></div>
              </div>
              <div class="section4mainyuxaridiv3">
                <div class="hover"></div>
              </div>
              <div class="section4mainasagidiv2">
                <div class="hover"></div>
              </div>
            </div>
  
  
  
            <div class="section4mainasagihisse">
              
              
              <div class="section4mainasagidiv3">
                <div class="hover"></div>
              </div>
        `

        btnGraphic.classList.add('btncopy')
      }
    }

  })

















}