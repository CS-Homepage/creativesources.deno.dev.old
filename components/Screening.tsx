import { h } from "../deps.ts";

import { secCookie } from "../main_functions/sec_cookie.ts";

export function Screening() {
  console.log("Screening...");

<<<<<<< HEAD
  const home = document.getElementById("homepage")
  if (home) {
    home.style.padding = "10px";
    home.style.textAlign = "left";
  }
  
  async function Animate() {
    console.log("Animate...")
    
    const html1 = "<span style='color:white;'>";
    const array1: string[] = Array.from("Welcome to the CS Deno Server v1.");
    const html2 = "</span><br /><br />";
    const array2: string[] = Array.from("If you proceed:");
    const nextLine = "<br />";
    const array3: string[] = Array.from("You accept one cookie, visitorID: ");
    const html3 = "<span style='color:yellow;'>";
    const visitorID: string[] = Array.from(secCookie.value);
    const html5 = "</span><br />";
    const array4: string[] = Array.from("We store your browser and IP.");
    const array5: string[] = Array.from("Proceed? (Y/N)");
    
    async function typeText(array: string[]) {
      if (home) {
        let i = 0;
        for await (const char of array) {
          setTimeout(()=>{
            text += char;
            console.log(text);
            home.innerHTML = text;
          }, 132 * i);
          i++;
        }
=======
  function animate() {
    console.log("Animate...");

    const screening = document.getElementById("screening");
    console.log(screening);
    if (screening) {
      const msg: string[] = Array.from("Welcome to the CS Deno Server v1.0\n");
      let text = "";
      for (const char of msg) {
        text += char;
        console.log(text);
        screening.innerText = text;
>>>>>>> 249fa1163d622d17091a2437bca28cae8ae87a02
      }
    }
    
    function setHTML(html: string) {
      if (home) {
        text += html;
        console.log(text);
        home.innerHTML = text;
      }
    }
    
    async function main() {
      setHTML(html1);
      await typeText(array1)
      .then(()=>setHTML(html2))
      .then(()=>typeText(array2))
      .then(()=>setHTML(nextLine))
      .then(()=>typeText(array3))
      setHTML(html3);
      await typeText(visitorID);
      setHTML(html5);
      await typeText(array4);
      setHTML(nextLine);
      await typeText(array5);
    }

    let text = "";
    await main();
  }

  return (
    <Animate />
  );
}
