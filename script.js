let i = 0;

function over() {
  if (i == 0) {
    this.style.backgroundColor = "red";
  } else if (i == 1) {
    this.style.backgroundColor = "yellow";
  } else if (i == 2) {
    this.style.backgroundColor = "green";
  } else if (i == 3) {
    i = -1;
  }
  i++;
}

function out() {
  this.style.backgroundColor = "darkmagenta";
}

document.querySelector(".block").addEventListener("mouseover", over);
document.querySelector(".block").addEventListener("mouseout", out);
