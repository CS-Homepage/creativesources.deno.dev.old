import { h, hydrate } from '../deps.ts';

import { Intro } from "../components/Intro.tsx";
import { Screening } from "../components/Screening.tsx";
import { Background } from '../components/Background.tsx';

// Divz
const home = document.getElementById('homepage');

// Client Functions
<<<<<<< HEAD
function startScreening() {
=======
function screening() {
>>>>>>> 249fa1163d622d17091a2437bca28cae8ae87a02
    hydrate(<Screening />, home);
}

function proceedOrNot(ev: KeyboardEvent) {
    if (ev.key === "y" || ev.key === "Y") proceed();
    else if (ev.key === "n" || ev.key === "N") exitScreening();
}

function proceed() {
    hydrate(<Background />, home);
    document.removeEventListener("keydown", proceedOrNot);
}

function exitScreening() {
    document.removeEventListener("keydown",proceedOrNot);
    console.log("EXIT...");
}

// Client Main
if (home) {
    hydrate(<Intro />, home);
    setTimeout(startScreening, 9000);
}

document.addEventListener("keydown", proceedOrNot);