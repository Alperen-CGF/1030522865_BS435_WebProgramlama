var image_array = ["cat", "dog1", "dog2"];
var left_chance = 2;
var running = true;

function loadGame() {
  image_array = image_array.sort(() => Math.random() - 0.5);
  for (let i = 0; i < 3; i++) {
    var current_id = image_array.pop();
    setCard(current_id);
  }
}

function setCard(id) {
  var card = document.createElement("img");
  card.className = "kart";
  card.src = "img/hidden.jpg";
  card.id = id;
  card.onclick = function () {
    pickCard(this.id);
  };
  document.getElementById("cardContainer").appendChild(card);
}

function pickCard(id) {
  if (!running) {
    return;
  }
  showCard(id);
  setStatus(id);
}

function showCard(id) {
  if (id === "cat") {
    document.getElementById(id).src = "img/cat.jpg";
  } else {
    document.getElementById(id).src = "img/dog.jpg";
  }
}

function setStatus(id) {
  var msg = document.getElementById("messageContainer");

  if (id === "cat") {
    msg.className = "win";
    msg.innerHTML =
      "<p>Tebrikler kazandınız. Yeni oyuna başlamak için <span class='link' onClick='newGame()'>buraya tıklayın</span></p>";
    endGame();
  } else {
    msg.className = "lose";
    left_chance--;
    if (left_chance === 0) {
      msg.innerHTML =
          "<p>Kaybettiniz. Yeni oyuna başlamak için <span class='link' onClick='newGame()'>buraya tıklayın</span></p>";
      endGame();
    } else {
      msg.innerHTML =
          "<p>Son Şansınız. Yeni oyuna başlamak için <span class='link' onClick='newGame()'>buraya tıklayın</span></p>";
    }
  }
}

function endGame() {
  running = false;
}

function newGame() {
  image_array = ["cat", "dog1", "dog2"];
  left_chance = 2;
  running = true;
  document.getElementById("cardContainer").innerHTML = "";
  document.getElementById("messageContainer").className = "mesaj";
  document.getElementById("messageContainer").innerHTML = "";
  loadGame();
}

loadGame();
