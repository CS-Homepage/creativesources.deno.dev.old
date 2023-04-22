export const css = `
body {
    margin: 0;
    font-family: monospace;
    font-size: 18px;
    background: black;
}

#intro {
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin: 0px;
  text-align: center;
  z-index: 31;
}

#homepage {
  color: green;
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin: 0px;
  text-align: center;
  z-index: 31;
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

#background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    margin: 0px;
    z-index: 33;
    background: black;
    color: #FFFFFF;
    text-align: center;
    line-height: 100vh;
}
`;