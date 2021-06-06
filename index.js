let level = 0;
let keypressed = 0;
let gamepattern = [];
let buttonColours = ["green", "red", "yellow", "blue"];
let randomcolor;
let usertPattern = [];
let numberOfClicks = 0;




function nextSequence() {
  usertPattern=[];
  level++;
  $("h1").text("level " + level);
  let randomnumber = (Math.floor(Math.random() * 3) + 1);
  randomcolor = buttonColours[randomnumber];
  fillArray(gamepattern, randomcolor);

  // animate(randomcolor);


  return randomnumber;

};


$(".col").click(function() {

  if (keypressed == 0) {
    gameOver();
  } else {
    fillArray(usertPattern, this.classList[1]);
    chekPattern(usertPattern.length - 1);
  }

});



$(document).keypress(function(event) {
  while (keypressed == 0) {
    keypressed = 1;
    $("h1").text("level " + level);
    nextSequence();


  }


});

function animate(colour) {
  $("." + colour).fadeOut("fast").fadeIn("fast");
  let playsound = new Audio("sounds/" + colour + ".mp3")
  playsound.play();
}

function chekPattern(currentLevel) {
  if (gamepattern[currentLevel] === usertPattern[currentLevel]) {
    if (gamepattern.length === usertPattern.length) {
      setTimeout(function (){
        nextSequence();}, 1000);

    }




  }else {
    //console.log("not Equal");

    gameOver();


  }

}






function fillArray(arr, value) {
  arr.push(value);
  animate(value);
  console.log(arr);

}

function gameOver() {
  keypressed = 0
  level = 0;
  gamepattern = [];
  usertPattern = [];
  $("h1").text("Game Over to try again Prees any key");
  let wrong = new Audio("sounds/wrong.mp3");
  wrong.play();
  $('body').css("backgroundColor", "red");
  setTimeout(() => {
    $('body').css("backgroundColor", "#212133");
  }, 100);
}

// $("."+randomcolor).fadeOut("fast").fadeIn("fast");
