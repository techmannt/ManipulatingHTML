let friends = ["Bill", "Ruth", "John", "Kathy", "Mike", "Heidi", "Mary", "David", "Rhonda", "Thor"];
let currentFriendIndex = 0;

$(document).ready(function () {

  $('body').append('<button id="btn1">Click Me!</button>');

  $('#btn1').click(function () {
    alert("Hey, you clicked me!");
  })

  $('#submit').click(function () {
    alert($('#alertText').val());
  })

  $('#someDiv').mouseover(function () {
    $('#someDiv').css("background-color", "yellow");
  })

  $('#someDiv').mouseleave(function () {
    $('#someDiv').css("background-color", "red");
  })

  $('#pElem').click(function() {
    $('#pElem').css("color", "rgb(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")");
  })

  $('body').append('<button id="btn2">Try not to click me!</button>');
  $('body').append('<div id="div2"></div>');

  $('#btn2').click(function () {
    $('#div2').html("<span>Nate</span>");
  })

  $('#btn3').click(function () {
    if (currentFriendIndex < 10) {
      $('#ulElem').append('<li>' + friends[currentFriendIndex] + '</li>');
      currentFriendIndex++;
    } else {
      alert("No more friends to add!");
    }
  })

});
