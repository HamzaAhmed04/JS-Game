var man = 0;
var fly = 300;
var flying = false;
var punching = false;

function abc(event) {
  var standing = document.getElementById("standing");
  standing.style.width = "180px";
  standing.style.height = "180px";
  standing.style.transition = "top 0.4s ease, left 0.3s ease";

  if (punching) return;

  // Move right (D)
  if (event.keyCode === 68 && !punching) {
    man += 30;
    standing.style.left = man + 'px';
    standing.src = flying
      ? "https://fightersgeneration.com/characters2/iron-fly.gif"
      : "https://fightersgeneration.com/characters2/iron-walk.gif";
  }

  // Move left (A)
  if (event.keyCode === 65 && !punching) {
    man -= 30;
    standing.style.left = man + 'px';
    standing.src = flying
      ? "https://fightersgeneration.com/characters2/iron-fly.gif"
      : "https://fightersgeneration.com/characters2/ironman-shield.gif";
  }

  // Fly up (W)
  if (event.keyCode === 87 && !flying && !punching) {
    flying = true;
    fly = 100;
    standing.style.top = fly + 'px';
    standing.src = "https://fightersgeneration.com/characters2/iron-fly.gif";
  }

  // Come down (S)
  if (event.keyCode === 83 && flying && !punching) {
    flying = false;
    fly = 300;
    standing.style.top = fly + 'px';
    setTimeout(() => {
      standing.src = "https://fightersgeneration.com/characters2/ironman-crouch.gif";
    }, 400);
  }

  // Punch (J)
  if (event.keyCode === 74 && !punching) {
    punching = true;
    standing.src = "https://fightersgeneration.com/characters2/iron-gem.gif";
    standing.style.width = "180px";
    standing.style.height = "180px";

    setTimeout(() => {
      standing.src = flying
        ? "https://fightersgeneration.com/characters2/iron-fly.gif"
        : "https://fightersgeneration.com/characters2/iron-man-stance.gif";
        
      punching = false;
    }, 800);
  }
}

window.onkeydown = abc;
