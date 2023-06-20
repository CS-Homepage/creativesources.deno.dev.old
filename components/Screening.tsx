import { h } from "../deps.ts";

import { secCookie } from "../main_functions/sec_cookie.ts";

export function Screening() {
  console.log("Screening...");

  const home = document.getElementById("homepage")
  if (home) {
    home.style.padding = "10px";
    home.style.textAlign = "left";
    home.style.fontSize = "18px";
    home.style.color = "green";
  }
  
  async function Animate() {
    console.log("Animate...")
    
    const html1 = "<span style='color:white;'>";
    const array1: string[] = Array.from("Welcome to the CS Deno Server v1.0");
    const html2 = "</span><br /><br />";
    const array2: string[] = Array.from("If you proceed:");
    const nextLine = "<br />";
    const array3: string[] = Array.from("You accept one cookie, visitorID: ");
    const html3 = "<span style='color:yellow;'>";
    const visitorID: string[] = Array.from(secCookie.value);
    const html4 = "</span><br />";
    const array4: string[] = Array.from("We store your browser and IP.");
    const array5: string[] = Array.from("Proceed? (Y/N)");
    
    const array: string[] = [html1].concat(array1).concat([html2]).concat(array2).concat([nextLine]).concat(array3).concat([html3]).concat(visitorID).concat([html4]).concat(array4).concat([nextLine, nextLine]).concat(array5)

    async function typeText(array: string[]) {
      if (home) {
        let i = 0;
        let text = "";
        for await (const char of array) {
          setTimeout(()=>{
            text += char;
            console.log(text);
            home.innerHTML = text;
          }, 113 * i);
          i++;
        }
      }
    }
    await typeText(array)
  }

  return (
    <Animate />
  );
}
