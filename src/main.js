import "./style.css";
import Swal from "sweetalert2";

const heroBox = document.getElementById("hero-box");

const heroImg = document.createElement("img");
heroImg.classList.add("hidden");

const heroName = document.createElement("h2");
heroName.innerHTML = "Nome do Super-Herói";
const sortBtn = document.createElement("button");
sortBtn.innerHTML = "Sortear";

sortBtn.addEventListener("click", () => {
  sortBtn.innerHTML = "Sortear";
  const randomId = Math.floor(Math.random() * 730 + 1);
  fetch(`https://akabab.github.io/superhero-api/api/id/${randomId}.json`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      heroImg.classList.remove("hidden");
      heroImg.setAttribute("src", data.images.md);
      heroName.innerHTML = data.name;
    })
    .catch((error) =>
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Erro ao procurar herói, tente novamente!`,
      })
    );
});

heroBox.appendChild(heroImg);
heroBox.appendChild(heroName);
heroBox.appendChild(sortBtn);
