function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");
  const img = document.querySelector("#profile img");
  const alt = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
    alt.setAttribute(
      "alt",
      "Corretora de Seguros Heliene Gomes sorrindo de óculos escuros e de blusa preta com fundo dourado",
    );
  } else {
    img.setAttribute("src", "./assets/avatar.png");
    alt.setAttribute(
      "alt",
      "Corretora de Seguros Heliene Gomes sorrindo de blusa preta com fundo dourado",
    );
  }
}
