//KF PANDA SEARCH


//HTML VARS
let charNameE1 = document.getElementById("char-name")
let charQuoteE1 = document.getElementById("char-quote")
let charImgE1 = document.getElementById("char-img")

//BUTTON EVENT LISTENER
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //INPUT
  let name = document.getElementById("char-in").value;
  console.log(name);
  name = name.toLowerCase();

  //IF STATEMENT - TEST THE INPUT
  //Po
  if (
    name == "po" ||
    name == "dragon warrior" ||
    name == "the dragon warrior"
  ) {
    charNameE1.innerHTML = "Po";
    charQuoteE1.innerHTML =
      "Buddy, I am the Dragon Warrior!";
      charImgE1.src = "img/po.png";
    //tigress
  } else if (name == "tigress") {
    charNameE1.innerHTML = "Tigress";
    charQuoteE1.innerHTML =
      "The hardcore do understand... but I can't watch my friend be killed.";
      charImgE1.src = "img/tigress.png";
    //mantis
  } else if (name == "mantis") {
    charNameE1.innerHTML = "Mantis";
    charQuoteE1.innerHTML = "Fear the bug!";
    charImgE1.src = "img/mantis.png";
  } else if (name == "oogway") {
    charNameE1.innerHTML = "Oogway";
    charQuoteE1.innerHTML =
      "Your mind is like the water, my friend; when it is agitated it becomes difficult to see. But if you allow it to settle, the answer becomes clear";
      charImgE1.src = "img/oogway.png";
  } else if (name == "shifu") {
    charNameE1.innerHTML = "Shifu";
    charQuoteE1.innerHTML =
      "Teaching kung fu is an art that takes years to master. Do not be disappointed if you have failed.";
      charImgE1.src = "img/shifu.png";
  } else if (name == "tai-lung") {
    charNameE1.innerHTML = "Tai-lung";
    charQuoteE1.innerHTML =
      "You... can't defeat me. You... you're just a big... fat... panda!";
      charImgE1.src = "img/tai-lung.png";
  } else if (name == "mr. Ping") {
    charNameE1.innerHTML = "Mr. Ping";
    charQuoteE1.innerHTML =
      " Po was so cute when he was little. He couldn't say the word tomato. He said, 'Amamamomo'.";
      charImgE1.src = "img/mr-ping.png";
  } else if (name == "shen") {
    charNameE1.innerHTML = "Shen";
    charQuoteE1.innerHTML =
      "And you actually believe this is the warrior destined to defeat me?!";
      charImgE1.src = "img/shen.png";
  }
  //question mark
  else {
    charNameE1.innerHTML = "????";
    charQuoteE1.innerHTML = "Who???";
    charImgE1.src = "img/question-mark.png";
  }
}

//LIGHT AND DARK THEME BUTTON
document.getElementById("btn1").addEventListener("click", themeClicked);

function themeClicked() {
  let theme = document.getElementById("theme-in").value;
  theme = theme.toLowerCase();
  console.log(theme);

  if (theme == "dark" || theme == "black") {
    const dStyle = document.querySelector("style");
    dStyle.innerHTML =
      "html{background: url(img/nightBG4.png); background-size: cover;} body {background-color: rgba(0, 0, 0, 0.7);} h1,h2,p{color: white;}";
    console.log("dark");
  }

  if (theme == "light" || theme == "white") {
    const dStyle = document.querySelector("style");
    dStyle.innerHTML =
      "html{background: url(img/1344939.jpeg); background-size: cover;} body {background-color: rgba(255, 255, 255, 0.7);} h1,p{color: black;} h2,#char-quote{color: white;}"
    console.log("light");
  }
}
