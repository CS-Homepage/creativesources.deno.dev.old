export const css = `
body {
  background: black;
}

#homepage {
  font-family: monospace;
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin: 0px;
  text-align: center;
}

#bg {
  padding: 0px;
  text-align: center;
  font-size: 3em;
  color: darken(green, 20%);
}

#banner {
  position: absolute;
  z-index: 1;
  top: 50vh;
}

@keyframes pulse {
  0% {
    opacity: 0;
    height: 0vh;
    top: 50vh;
  }
  45% {
    opacity: 1;
    height: 60vh;
    top: 20vh;
  }
  70% {
    opacity: 1;
    height: 60vh;
    top: 20vh;
  }
  100% {
    opacity: 0;
    height: 20vh;
    top: 40vh;
  }
}
  
.transition {
    animation: pulse 9s 1;
    position: relative;
}
`;
