//DOM Elements
const boxes = document.querySelectorAll(".box"),
  image = document.querySelector(".image");

//Percorra cada elemento das caixas
boxes.forEach((box) => {
  //Quando um elemento arrastável é arrastado sobre um elemento de caixa
  box.addEventListener("dragover", (e) => {
    e.preventDefault(); //Impedir o comportamento padrão
    box.classList.add("hovered");
  });

  //Quando um elemento arrastável sai do elemento caixa
  box.addEventListener("dragleave", () => {
    box.classList.remove("hovered");
  });

  //Quando um elemento arrastável é solto em um elemento de caixa
  box.addEventListener("drop", () => {
    box.appendChild(image);
    box.classList.remove("hovered");
  });
});
