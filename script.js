var numberOfFaces = 5;

function generateFaces() {

  var leftSide = document.getElementById("leftside");
  var rightSide = document.getElementById("rightside");
  var face = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";

  for (var i = 0; i < numberOfFaces; i++) {
    var position_x = Math.floor((Math.random() * 400) + 1);
    var position_y = Math.floor((Math.random() * 400) + 1);
    var img = document.createElement("img");
    img.setAttribute("src", face);
    img.style.top = position_y + "px";
    img.style.left = position_x + "px";
    leftSide.appendChild(img);
  }

  var leftSideImages = leftSide.cloneNode(true);
  leftSideImages.removeChild(leftSideImages.lastChild);
  rightSide.appendChild(leftSideImages);

  var theBody =
    document.getElementsByTagName("body")[0];

  leftSide.lastChild.onclick =
    function nextLevel(event) {
      event.stopPropagation();
      numberOfFaces += 5;
      while (leftSide.firstChild) {
        leftSide.removeChild(leftSide.firstChild);
      }
      while (rightSide.firstChild) {
        rightSide.removeChild(rightSide.firstChild);
      }
      generateFaces();
    };

  theBody.onclick = function gameOver() {
    alert("Game Over");
    theBody.onclick = null;
    leftSide.lastChild.onclick - null;
    while (leftSide.firstChild) {
      leftSide.removeChild(leftSide.firstChild);
    }
    while (rightSide.firstChild) {
      rightSide.removeChild(rightSide.firstChild);
    }
    numberOfFaces = 5;
    generateFaces();
  }

}

generateFaces();


// var numberOfFaces = 5;
// var theLeftSide = document.getElementById("LeftSide");

// function generateFaces() {
//     var count = 0;
//     while (count <= numberOfFaces) {
//         var imgFace = document.createElement("img");
//         imgFace.src = "https://upload.wikimedia.org/wikipedia/commons/7/7c/Face-smile.png";
//         var random_nr = Math.random() * 400;
//         random_nr = Math.floor(random_nr);
//         imgFace.style.top = random_nr + "px";
//         imgFace.style.left = random_nr + "px";
//         theLeftSide.appendChild(imgFace);
//         count++;
//     }
// }
// generateFaces();

// var numberOfFaces = 5;
//         var theLeftSide = document.getElementById("LeftSide");

//         function generateFaces() {
//             var count = 0;
//             while(count <= numberOfFaces){
//                 var imgFace = document.createElement("img");
//                 imgFace.src="http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
//                 var random_nr = Math.random() * 400;
//                 random_nr = Math.floor(random_nr);
//                 imgFace.style.top = random_nr + "px";
//                 imgFace.style.left = random_nr + "px";
//                 theLeftSide.appendChild(imgFace);
//                 count++;

//             }
//         }

// generateFaces();