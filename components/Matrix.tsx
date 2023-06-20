import { h, Fragment } from "../deps.ts";

export default function Matrix() {
  console.log("Matrix started...");

  const bg = document.getElementById("bg");

  const div = document.createElement("div");
  div.id = "matrix";
    
  let n = 0;
  let value: number;
 
  while (n < 80) {
    const column = document.createElement("div");
    column.classList.add("column");
    column.classList.add(`col-${++n}`);
    div.appendChild(column);
    let i = 0;
    while (i < 50) {
      console.log("GLYPH");
      ++i;
      value = Math.floor(Math.random() * 255) + 10240;
      const span = document.createElement("span");
      const glyph = document.createTextNode(`&#${value};`); // Yandeu: Dangerous HTML?
      span.appendChild(glyph);
      column.appendChild(span);
    }
  }

  console.log(div);
  if (bg) bg.appendChild(div);
  console.log(bg);
}
