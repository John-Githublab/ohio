// selecting of dom
const plus = document.querySelectorAll(".plus");
const pm = document.getElementById("");

active = 1;
// looping to give addeventlistener
for (i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    if (active === 1) {
      let m = this.nextElementSibling;
      m.classList.remove("hidden1");
      console.log(active);

      active = active == 1 ? 2 : 1;
      this.querySelector("span").textContent = "-";
    } else {
      console.log("hello");
      this.nextElementSibling.classList.add("hidden1");
      active = active == 1 ? 2 : 1;
      this.querySelector("span").textContent = "+";
    }
  });
}
