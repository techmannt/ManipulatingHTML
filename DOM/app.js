let friends = ["Bill", "Ruth", "John", "Kathy", "Mike", "Heidi", "Mary", "David", "Rhonda", "Thor"];
let currentFriendIndex = 0;

window.addEventListener('DOMContentLoaded', function () {
  let btn = document.createElement('button');
  let btnText = document.createTextNode('Click Me!');
  btn.className = "button";
  btn.appendChild(btnText);
  document.body.appendChild(btn);

  btn.addEventListener("click", function () {
    alert("Hey, you clicked me!");
  })

  let submitBtn = document.getElementById('submit');

  submitBtn.addEventListener("click", function () {
    let alertText = document.getElementById('alertText').value;
    alert(alertText);
  })

  let div = document.getElementById('someDiv');
  div.className = "div1";

  div.addEventListener("mouseover", function () {
    div.style.backgroundColor = "yellow";
  })

  div.addEventListener("mouseout", function () {
    div.style.backgroundColor = "red";
  })

  let pElem = document.getElementById('pElem');

  pElem.addEventListener("click", function () {
    pElem.style.color = "rgb(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")";
  })

  let btn2 = document.createElement('button');
  let btn2Text = document.createTextNode('Try not to Click Me!');
  btn2.appendChild(btn2Text);

  let div2 = document.createElement('div');
  div2.className = "div2";
  document.body.appendChild(btn2);
  document.body.appendChild(div2);

  btn2.addEventListener("click", function () {
    let span = document.createElement('span');
    let spanText = document.createTextNode("Nate");
    span.appendChild(spanText);
    div2.appendChild(span);
  })

  let btn3 = document.getElementById('btn3');

  btn3.addEventListener("click", function () {
    let ul = document.getElementById('ulElem');

    if (currentFriendIndex < 10) {
      let li = document.createElement('li');
      let liText = document.createTextNode(friends[currentFriendIndex]);
      li.appendChild(liText);
      ul.appendChild(li);
      currentFriendIndex++;
    } else {
      alert("No more friends to add!");
    }

  })
})
