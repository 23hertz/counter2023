let num = 0;

let value = document.querySelector(".value");
let btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("increase")) {
      value.innerHTML = num++;
    } else if (styles.contains("decrease")) {
      value.innerHTML = num--;
    } else {
        num = 0 
    }

    if (value.innerHTML > 0) {
      value.style.color = "green";
    } else if (value.innerHTML < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }

  });
});

document.body.addEventListener("keypress", (e) => {
  if (e.key === "u") {
    value.innerHTML = num++;
  } else if (e.key === "d") {
    value.innerHTML = num--;
  }

  value.innerHTML > 0 
  ? value.style.color = "green":
   value.innerHTML < 0 ? 
   value.style.color = "red":
   value.style.color = "black"
});
