let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");
let toggle = document.querySelector(".toggle");

toggle.onclick = () => {
  main.classList.toggle("active");
  navigation.classList.toggle("active");
};
