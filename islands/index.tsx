import { h, hydrate } from '../deps.ts';

import { Intro } from "../components/Intro.tsx";
import { Screening } from "../components/Screening.tsx";
import { Background } from '../components/Background.tsx';
import Matrix from '../components/Matrix.tsx';

// Divz
const home = document.getElementById('homepage');
const bg = document.getElementById('bg');

// Client Functions
function startScreening() {
    hydrate(<Screening />, home);
}

function proceedOrNot(ev: KeyboardEvent) {
    if (ev.key === "y" || ev.key === "Y") proceed();
    else if (ev.key === "n" || ev.key === "N") exitScreening();
}

function proceed() {
    hydrate(<Background />, home);
    hydrate(<Matrix />, bg);
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
