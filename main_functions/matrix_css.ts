export const matrix = `
#matrix {
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    text-align: center;
}

@keyframes colorPulse {
  0% {
    color: lighten(green, 70%);
  }
  40% {
    color: green;
  }
  50% {
    color: darken(green, 5%);
  }
  100% {
    color: darken(green, 20%);
  }
}

.column > * {
  display: block;
  animation: 3s infinite colorPulse;
  padding: 0 0.125em;
}

.col-1 :nth-child(1) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.0408695652s;
}

.col-1 :nth-child(2) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.0817391304s;
}

.col-1 :nth-child(3) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.1226086957s;
}

.col-1 :nth-child(4) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.1634782609s;
}

.col-1 :nth-child(5) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.2043478261s;
}

.col-1 :nth-child(6) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.2452173913s;
}

.col-1 :nth-child(7) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.2860869565s;
}

.col-1 :nth-child(8) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.3269565217s;
}

.col-1 :nth-child(9) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.367826087s;
}

.col-1 :nth-child(10) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.4086956522s;
}

.col-1 :nth-child(11) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.4495652174s;
}

.col-1 :nth-child(12) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.4904347826s;
}

.col-1 :nth-child(13) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.5313043478s;
}

.col-1 :nth-child(14) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.572173913s;
}

.col-1 :nth-child(15) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.6130434783s;
}

.col-1 :nth-child(16) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.6539130435s;
}

.col-1 :nth-child(17) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.6947826087s;
}

.col-1 :nth-child(18) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.7356521739s;
}

.col-1 :nth-child(19) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.7765217391s;
}

.col-1 :nth-child(20) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.8173913043s;
}

.col-1 :nth-child(21) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.8582608696s;
}

.col-1 :nth-child(22) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.8991304348s;
}

.col-1 :nth-child(23) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.94s;
}

.col-1 :nth-child(24) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.9808695652s;
}

.col-1 :nth-child(25) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.0217391304s;
}

.col-1 :nth-child(26) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.0626086957s;
}

.col-1 :nth-child(27) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.1034782609s;
}

.col-1 :nth-child(28) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.1443478261s;
}

.col-1 :nth-child(29) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.1852173913s;
}

.col-1 :nth-child(30) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.2260869565s;
}

.col-1 :nth-child(31) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.2669565217s;
}

.col-1 :nth-child(32) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.307826087s;
}

.col-1 :nth-child(33) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.3486956522s;
}

.col-1 :nth-child(34) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.3895652174s;
}

.col-1 :nth-child(35) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.4304347826s;
}

.col-1 :nth-child(36) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.4713043478s;
}

.col-1 :nth-child(37) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.512173913s;
}

.col-1 :nth-child(38) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.5530434783s;
}

.col-1 :nth-child(39) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.5939130435s;
}

.col-1 :nth-child(40) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.6347826087s;
}

.col-1 :nth-child(41) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.6756521739s;
}

.col-1 :nth-child(42) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.7165217391s;
}

.col-1 :nth-child(43) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.7573913043s;
}

.col-1 :nth-child(44) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.7982608696s;
}

.col-1 :nth-child(45) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.8391304348s;
}

.col-1 :nth-child(46) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.88s;
}

.col-1 :nth-child(47) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.9208695652s;
}

.col-1 :nth-child(48) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.9617391304s;
}

.col-1 :nth-child(49) {
  animation-duration: 2.0434782609s;
  animation-delay: 2.0026086957s;
}

.col-1 :nth-child(50) {
  animation-duration: 2.0434782609s;
  animation-delay: 2.0434782609s;
}

.col-2 :nth-child(1) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.0217391304s;
}

.col-2 :nth-child(2) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.0434782609s;
}

.col-2 :nth-child(3) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.0652173913s;
}

.col-2 :nth-child(4) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.0869565217s;
}

.col-2 :nth-child(5) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.1086956522s;
}

.col-2 :nth-child(6) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.1304347826s;
}

.col-2 :nth-child(7) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.152173913s;
}

.col-2 :nth-child(8) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.1739130435s;
}

.col-2 :nth-child(9) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.1956521739s;
}

.col-2 :nth-child(10) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.2173913043s;
}

.col-2 :nth-child(11) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.2391304348s;
}

.col-2 :nth-child(12) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.2608695652s;
}

.col-2 :nth-child(13) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.2826086957s;
}

.col-2 :nth-child(14) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.3043478261s;
}

.col-2 :nth-child(15) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.3260869565s;
}

.col-2 :nth-child(16) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.347826087s;
}

.col-2 :nth-child(17) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.3695652174s;
}

.col-2 :nth-child(18) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.3913043478s;
}

.col-2 :nth-child(19) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.4130434783s;
}

.col-2 :nth-child(20) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.4347826087s;
}

.col-2 :nth-child(21) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.4565217391s;
}

.col-2 :nth-child(22) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.4782608696s;
}

.col-2 :nth-child(23) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.5s;
}

.col-2 :nth-child(24) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.5217391304s;
}

.col-2 :nth-child(25) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.5434782609s;
}

.col-2 :nth-child(26) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.5652173913s;
}

.col-2 :nth-child(27) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.5869565217s;
}

.col-2 :nth-child(28) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.6086956522s;
}

.col-2 :nth-child(29) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.6304347826s;
}

.col-2 :nth-child(30) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.652173913s;
}

.col-2 :nth-child(31) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.6739130435s;
}

.col-2 :nth-child(32) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.6956521739s;
}

.col-2 :nth-child(33) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.7173913043s;
}

.col-2 :nth-child(34) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.7391304348s;
}

.col-2 :nth-child(35) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.7608695652s;
}

.col-2 :nth-child(36) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.7826086957s;
}

.col-2 :nth-child(37) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.8043478261s;
}

.col-2 :nth-child(38) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.8260869565s;
}

.col-2 :nth-child(39) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.847826087s;
}

.col-2 :nth-child(40) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.8695652174s;
}

.col-2 :nth-child(41) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.8913043478s;
}

.col-2 :nth-child(42) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.9130434783s;
}

.col-2 :nth-child(43) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.9347826087s;
}

.col-2 :nth-child(44) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.9565217391s;
}

.col-2 :nth-child(45) {
  animation-duration: 1.0869565217s;
  animation-delay: 0.9782608696s;
}

.col-2 :nth-child(46) {
  animation-duration: 1.0869565217s;
  animation-delay: 1s;
}

.col-2 :nth-child(47) {
  animation-duration: 1.0869565217s;
  animation-delay: 1.0217391304s;
}

.col-2 :nth-child(48) {
  animation-duration: 1.0869565217s;
  animation-delay: 1.0434782609s;
}

.col-2 :nth-child(49) {
  animation-duration: 1.0869565217s;
  animation-delay: 1.0652173913s;
}

.col-2 :nth-child(50) {
  animation-duration: 1.0869565217s;
  animation-delay: 1.0869565217s;
}

.col-3 :nth-child(1) {
  animation-duration: 3.8260869565s;
  animation-delay: 0.0765217391s;
}

.col-3 :nth-child(2) {
  animation-duration: 3.8260869565s;
  animation-delay: 0.1530434783s;
}

.col-3 :nth-child(3) {
  animation-duration: 3.8260869565s;
  animation-delay: 0.2295652174s;
}

.col-3 :nth-child(4) {
  animation-duration: 3.8260869565s;
  animation-delay: 0.3060869565s;
}

.col-3 :nth-child(5) {
  animation-duration: 3.8260869565s;
  animation-delay: 0.3826086957s;
}

.col-3 :nth-child(6) {
  animation-duration: 3.8260869565s;
  animation-delay: 0.4591304348s;
}

.col-3 :nth-child(7) {
  animation-duration: 3.8260869565s;
  animation-delay: 0.5356521739s;
}

.col-3 :nth-child(8) {
  animation-duration: 3.8260869565s;
  animation-delay: 0.612173913s;
}

.col-3 :nth-child(9) {
  animation-duration: 3.8260869565s;
  animation-delay: 0.6886956522s;
}

.col-3 :nth-child(10) {
  animation-duration: 3.8260869565s;
  animation-delay: 0.7652173913s;
}

.col-3 :nth-child(11) {
  animation-duration: 3.8260869565s;
  animation-delay: 0.8417391304s;
}

.col-3 :nth-child(12) {
  animation-duration: 3.8260869565s;
  animation-delay: 0.9182608696s;
}

.col-3 :nth-child(13) {
  animation-duration: 3.8260869565s;
  animation-delay: 0.9947826087s;
}

.col-3 :nth-child(14) {
  animation-duration: 3.8260869565s;
  animation-delay: 1.0713043478s;
}

.col-3 :nth-child(15) {
  animation-duration: 3.8260869565s;
  animation-delay: 1.147826087s;
}

.col-3 :nth-child(16) {
  animation-duration: 3.8260869565s;
  animation-delay: 1.2243478261s;
}

.col-3 :nth-child(17) {
  animation-duration: 3.8260869565s;
  animation-delay: 1.3008695652s;
}

.col-3 :nth-child(18) {
  animation-duration: 3.8260869565s;
  animation-delay: 1.3773913043s;
}

.col-3 :nth-child(19) {
  animation-duration: 3.8260869565s;
  animation-delay: 1.4539130435s;
}

.col-3 :nth-child(20) {
  animation-duration: 3.8260869565s;
  animation-delay: 1.5304347826s;
}

.col-3 :nth-child(21) {
  animation-duration: 3.8260869565s;
  animation-delay: 1.6069565217s;
}

.col-3 :nth-child(22) {
  animation-duration: 3.8260869565s;
  animation-delay: 1.6834782609s;
}

.col-3 :nth-child(23) {
  animation-duration: 3.8260869565s;
  animation-delay: 1.76s;
}

.col-3 :nth-child(24) {
  animation-duration: 3.8260869565s;
  animation-delay: 1.8365217391s;
}

.col-3 :nth-child(25) {
  animation-duration: 3.8260869565s;
  animation-delay: 1.9130434783s;
}

.col-3 :nth-child(26) {
  animation-duration: 3.8260869565s;
  animation-delay: 1.9895652174s;
}

.col-3 :nth-child(27) {
  animation-duration: 3.8260869565s;
  animation-delay: 2.0660869565s;
}

.col-3 :nth-child(28) {
  animation-duration: 3.8260869565s;
  animation-delay: 2.1426086957s;
}

.col-3 :nth-child(29) {
  animation-duration: 3.8260869565s;
  animation-delay: 2.2191304348s;
}

.col-3 :nth-child(30) {
  animation-duration: 3.8260869565s;
  animation-delay: 2.2956521739s;
}

.col-3 :nth-child(31) {
  animation-duration: 3.8260869565s;
  animation-delay: 2.372173913s;
}

.col-3 :nth-child(32) {
  animation-duration: 3.8260869565s;
  animation-delay: 2.4486956522s;
}

.col-3 :nth-child(33) {
  animation-duration: 3.8260869565s;
  animation-delay: 2.5252173913s;
}

.col-3 :nth-child(34) {
  animation-duration: 3.8260869565s;
  animation-delay: 2.6017391304s;
}

.col-3 :nth-child(35) {
  animation-duration: 3.8260869565s;
  animation-delay: 2.6782608696s;
}

.col-3 :nth-child(36) {
  animation-duration: 3.8260869565s;
  animation-delay: 2.7547826087s;
}

.col-3 :nth-child(37) {
  animation-duration: 3.8260869565s;
  animation-delay: 2.8313043478s;
}

.col-3 :nth-child(38) {
  animation-duration: 3.8260869565s;
  animation-delay: 2.907826087s;
}

.col-3 :nth-child(39) {
  animation-duration: 3.8260869565s;
  animation-delay: 2.9843478261s;
}

.col-3 :nth-child(40) {
  animation-duration: 3.8260869565s;
  animation-delay: 3.0608695652s;
}

.col-3 :nth-child(41) {
  animation-duration: 3.8260869565s;
  animation-delay: 3.1373913043s;
}

.col-3 :nth-child(42) {
  animation-duration: 3.8260869565s;
  animation-delay: 3.2139130435s;
}

.col-3 :nth-child(43) {
  animation-duration: 3.8260869565s;
  animation-delay: 3.2904347826s;
}

.col-3 :nth-child(44) {
  animation-duration: 3.8260869565s;
  animation-delay: 3.3669565217s;
}

.col-3 :nth-child(45) {
  animation-duration: 3.8260869565s;
  animation-delay: 3.4434782609s;
}

.col-3 :nth-child(46) {
  animation-duration: 3.8260869565s;
  animation-delay: 3.52s;
}

.col-3 :nth-child(47) {
  animation-duration: 3.8260869565s;
  animation-delay: 3.5965217391s;
}

.col-3 :nth-child(48) {
  animation-duration: 3.8260869565s;
  animation-delay: 3.6730434783s;
}

.col-3 :nth-child(49) {
  animation-duration: 3.8260869565s;
  animation-delay: 3.7495652174s;
}

.col-3 :nth-child(50) {
  animation-duration: 3.8260869565s;
  animation-delay: 3.8260869565s;
}

.col-4 :nth-child(1) {
  animation-duration: 4.652173913s;
  animation-delay: 0.0930434783s;
}

.col-4 :nth-child(2) {
  animation-duration: 4.652173913s;
  animation-delay: 0.1860869565s;
}

.col-4 :nth-child(3) {
  animation-duration: 4.652173913s;
  animation-delay: 0.2791304348s;
}

.col-4 :nth-child(4) {
  animation-duration: 4.652173913s;
  animation-delay: 0.372173913s;
}

.col-4 :nth-child(5) {
  animation-duration: 4.652173913s;
  animation-delay: 0.4652173913s;
}

.col-4 :nth-child(6) {
  animation-duration: 4.652173913s;
  animation-delay: 0.5582608696s;
}

.col-4 :nth-child(7) {
  animation-duration: 4.652173913s;
  animation-delay: 0.6513043478s;
}

.col-4 :nth-child(8) {
  animation-duration: 4.652173913s;
  animation-delay: 0.7443478261s;
}

.col-4 :nth-child(9) {
  animation-duration: 4.652173913s;
  animation-delay: 0.8373913043s;
}

.col-4 :nth-child(10) {
  animation-duration: 4.652173913s;
  animation-delay: 0.9304347826s;
}

.col-4 :nth-child(11) {
  animation-duration: 4.652173913s;
  animation-delay: 1.0234782609s;
}

.col-4 :nth-child(12) {
  animation-duration: 4.652173913s;
  animation-delay: 1.1165217391s;
}

.col-4 :nth-child(13) {
  animation-duration: 4.652173913s;
  animation-delay: 1.2095652174s;
}

.col-4 :nth-child(14) {
  animation-duration: 4.652173913s;
  animation-delay: 1.3026086957s;
}

.col-4 :nth-child(15) {
  animation-duration: 4.652173913s;
  animation-delay: 1.3956521739s;
}

.col-4 :nth-child(16) {
  animation-duration: 4.652173913s;
  animation-delay: 1.4886956522s;
}

.col-4 :nth-child(17) {
  animation-duration: 4.652173913s;
  animation-delay: 1.5817391304s;
}

.col-4 :nth-child(18) {
  animation-duration: 4.652173913s;
  animation-delay: 1.6747826087s;
}

.col-4 :nth-child(19) {
  animation-duration: 4.652173913s;
  animation-delay: 1.767826087s;
}

.col-4 :nth-child(20) {
  animation-duration: 4.652173913s;
  animation-delay: 1.8608695652s;
}

.col-4 :nth-child(21) {
  animation-duration: 4.652173913s;
  animation-delay: 1.9539130435s;
}

.col-4 :nth-child(22) {
  animation-duration: 4.652173913s;
  animation-delay: 2.0469565217s;
}

.col-4 :nth-child(23) {
  animation-duration: 4.652173913s;
  animation-delay: 2.14s;
}

.col-4 :nth-child(24) {
  animation-duration: 4.652173913s;
  animation-delay: 2.2330434783s;
}

.col-4 :nth-child(25) {
  animation-duration: 4.652173913s;
  animation-delay: 2.3260869565s;
}

.col-4 :nth-child(26) {
  animation-duration: 4.652173913s;
  animation-delay: 2.4191304348s;
}

.col-4 :nth-child(27) {
  animation-duration: 4.652173913s;
  animation-delay: 2.512173913s;
}

.col-4 :nth-child(28) {
  animation-duration: 4.652173913s;
  animation-delay: 2.6052173913s;
}

.col-4 :nth-child(29) {
  animation-duration: 4.652173913s;
  animation-delay: 2.6982608696s;
}

.col-4 :nth-child(30) {
  animation-duration: 4.652173913s;
  animation-delay: 2.7913043478s;
}

.col-4 :nth-child(31) {
  animation-duration: 4.652173913s;
  animation-delay: 2.8843478261s;
}

.col-4 :nth-child(32) {
  animation-duration: 4.652173913s;
  animation-delay: 2.9773913043s;
}

.col-4 :nth-child(33) {
  animation-duration: 4.652173913s;
  animation-delay: 3.0704347826s;
}

.col-4 :nth-child(34) {
  animation-duration: 4.652173913s;
  animation-delay: 3.1634782609s;
}

.col-4 :nth-child(35) {
  animation-duration: 4.652173913s;
  animation-delay: 3.2565217391s;
}

.col-4 :nth-child(36) {
  animation-duration: 4.652173913s;
  animation-delay: 3.3495652174s;
}

.col-4 :nth-child(37) {
  animation-duration: 4.652173913s;
  animation-delay: 3.4426086957s;
}

.col-4 :nth-child(38) {
  animation-duration: 4.652173913s;
  animation-delay: 3.5356521739s;
}

.col-4 :nth-child(39) {
  animation-duration: 4.652173913s;
  animation-delay: 3.6286956522s;
}

.col-4 :nth-child(40) {
  animation-duration: 4.652173913s;
  animation-delay: 3.7217391304s;
}

.col-4 :nth-child(41) {
  animation-duration: 4.652173913s;
  animation-delay: 3.8147826087s;
}

.col-4 :nth-child(42) {
  animation-duration: 4.652173913s;
  animation-delay: 3.907826087s;
}

.col-4 :nth-child(43) {
  animation-duration: 4.652173913s;
  animation-delay: 4.0008695652s;
}

.col-4 :nth-child(44) {
  animation-duration: 4.652173913s;
  animation-delay: 4.0939130435s;
}

.col-4 :nth-child(45) {
  animation-duration: 4.652173913s;
  animation-delay: 4.1869565217s;
}

.col-4 :nth-child(46) {
  animation-duration: 4.652173913s;
  animation-delay: 4.28s;
}

.col-4 :nth-child(47) {
  animation-duration: 4.652173913s;
  animation-delay: 4.3730434783s;
}

.col-4 :nth-child(48) {
  animation-duration: 4.652173913s;
  animation-delay: 4.4660869565s;
}

.col-4 :nth-child(49) {
  animation-duration: 4.652173913s;
  animation-delay: 4.5591304348s;
}

.col-4 :nth-child(50) {
  animation-duration: 4.652173913s;
  animation-delay: 4.652173913s;
}

.col-5 :nth-child(1) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.0286956522s;
}

.col-5 :nth-child(2) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.0573913043s;
}

.col-5 :nth-child(3) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.0860869565s;
}

.col-5 :nth-child(4) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.1147826087s;
}

.col-5 :nth-child(5) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.1434782609s;
}

.col-5 :nth-child(6) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.172173913s;
}

.col-5 :nth-child(7) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.2008695652s;
}

.col-5 :nth-child(8) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.2295652174s;
}

.col-5 :nth-child(9) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.2582608696s;
}

.col-5 :nth-child(10) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.2869565217s;
}

.col-5 :nth-child(11) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.3156521739s;
}

.col-5 :nth-child(12) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.3443478261s;
}

.col-5 :nth-child(13) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.3730434783s;
}

.col-5 :nth-child(14) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.4017391304s;
}

.col-5 :nth-child(15) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.4304347826s;
}

.col-5 :nth-child(16) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.4591304348s;
}

.col-5 :nth-child(17) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.487826087s;
}

.col-5 :nth-child(18) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.5165217391s;
}

.col-5 :nth-child(19) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.5452173913s;
}

.col-5 :nth-child(20) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.5739130435s;
}

.col-5 :nth-child(21) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.6026086957s;
}

.col-5 :nth-child(22) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.6313043478s;
}

.col-5 :nth-child(23) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.66s;
}

.col-5 :nth-child(24) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.6886956522s;
}

.col-5 :nth-child(25) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.7173913043s;
}

.col-5 :nth-child(26) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.7460869565s;
}

.col-5 :nth-child(27) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.7747826087s;
}

.col-5 :nth-child(28) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.8034782609s;
}

.col-5 :nth-child(29) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.832173913s;
}

.col-5 :nth-child(30) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.8608695652s;
}

.col-5 :nth-child(31) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.8895652174s;
}

.col-5 :nth-child(32) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.9182608696s;
}

.col-5 :nth-child(33) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.9469565217s;
}

.col-5 :nth-child(34) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.9756521739s;
}

.col-5 :nth-child(35) {
  animation-duration: 1.4347826087s;
  animation-delay: 1.0043478261s;
}

.col-5 :nth-child(36) {
  animation-duration: 1.4347826087s;
  animation-delay: 1.0330434783s;
}

.col-5 :nth-child(37) {
  animation-duration: 1.4347826087s;
  animation-delay: 1.0617391304s;
}

.col-5 :nth-child(38) {
  animation-duration: 1.4347826087s;
  animation-delay: 1.0904347826s;
}

.col-5 :nth-child(39) {
  animation-duration: 1.4347826087s;
  animation-delay: 1.1191304348s;
}

.col-5 :nth-child(40) {
  animation-duration: 1.4347826087s;
  animation-delay: 1.147826087s;
}

.col-5 :nth-child(41) {
  animation-duration: 1.4347826087s;
  animation-delay: 1.1765217391s;
}

.col-5 :nth-child(42) {
  animation-duration: 1.4347826087s;
  animation-delay: 1.2052173913s;
}

.col-5 :nth-child(43) {
  animation-duration: 1.4347826087s;
  animation-delay: 1.2339130435s;
}

.col-5 :nth-child(44) {
  animation-duration: 1.4347826087s;
  animation-delay: 1.2626086957s;
}

.col-5 :nth-child(45) {
  animation-duration: 1.4347826087s;
  animation-delay: 1.2913043478s;
}

.col-5 :nth-child(46) {
  animation-duration: 1.4347826087s;
  animation-delay: 1.32s;
}

.col-5 :nth-child(47) {
  animation-duration: 1.4347826087s;
  animation-delay: 1.3486956522s;
}

.col-5 :nth-child(48) {
  animation-duration: 1.4347826087s;
  animation-delay: 1.3773913043s;
}

.col-5 :nth-child(49) {
  animation-duration: 1.4347826087s;
  animation-delay: 1.4060869565s;
}

.col-5 :nth-child(50) {
  animation-duration: 1.4347826087s;
  animation-delay: 1.4347826087s;
}

.col-6 :nth-child(1) {
  animation-duration: 5.0869565217s;
  animation-delay: 0.1017391304s;
}

.col-6 :nth-child(2) {
  animation-duration: 5.0869565217s;
  animation-delay: 0.2034782609s;
}

.col-6 :nth-child(3) {
  animation-duration: 5.0869565217s;
  animation-delay: 0.3052173913s;
}

.col-6 :nth-child(4) {
  animation-duration: 5.0869565217s;
  animation-delay: 0.4069565217s;
}

.col-6 :nth-child(5) {
  animation-duration: 5.0869565217s;
  animation-delay: 0.5086956522s;
}

.col-6 :nth-child(6) {
  animation-duration: 5.0869565217s;
  animation-delay: 0.6104347826s;
}

.col-6 :nth-child(7) {
  animation-duration: 5.0869565217s;
  animation-delay: 0.712173913s;
}

.col-6 :nth-child(8) {
  animation-duration: 5.0869565217s;
  animation-delay: 0.8139130435s;
}

.col-6 :nth-child(9) {
  animation-duration: 5.0869565217s;
  animation-delay: 0.9156521739s;
}

.col-6 :nth-child(10) {
  animation-duration: 5.0869565217s;
  animation-delay: 1.0173913043s;
}

.col-6 :nth-child(11) {
  animation-duration: 5.0869565217s;
  animation-delay: 1.1191304348s;
}

.col-6 :nth-child(12) {
  animation-duration: 5.0869565217s;
  animation-delay: 1.2208695652s;
}

.col-6 :nth-child(13) {
  animation-duration: 5.0869565217s;
  animation-delay: 1.3226086957s;
}

.col-6 :nth-child(14) {
  animation-duration: 5.0869565217s;
  animation-delay: 1.4243478261s;
}

.col-6 :nth-child(15) {
  animation-duration: 5.0869565217s;
  animation-delay: 1.5260869565s;
}

.col-6 :nth-child(16) {
  animation-duration: 5.0869565217s;
  animation-delay: 1.627826087s;
}

.col-6 :nth-child(17) {
  animation-duration: 5.0869565217s;
  animation-delay: 1.7295652174s;
}

.col-6 :nth-child(18) {
  animation-duration: 5.0869565217s;
  animation-delay: 1.8313043478s;
}

.col-6 :nth-child(19) {
  animation-duration: 5.0869565217s;
  animation-delay: 1.9330434783s;
}

.col-6 :nth-child(20) {
  animation-duration: 5.0869565217s;
  animation-delay: 2.0347826087s;
}

.col-6 :nth-child(21) {
  animation-duration: 5.0869565217s;
  animation-delay: 2.1365217391s;
}

.col-6 :nth-child(22) {
  animation-duration: 5.0869565217s;
  animation-delay: 2.2382608696s;
}

.col-6 :nth-child(23) {
  animation-duration: 5.0869565217s;
  animation-delay: 2.34s;
}

.col-6 :nth-child(24) {
  animation-duration: 5.0869565217s;
  animation-delay: 2.4417391304s;
}

.col-6 :nth-child(25) {
  animation-duration: 5.0869565217s;
  animation-delay: 2.5434782609s;
}

.col-6 :nth-child(26) {
  animation-duration: 5.0869565217s;
  animation-delay: 2.6452173913s;
}

.col-6 :nth-child(27) {
  animation-duration: 5.0869565217s;
  animation-delay: 2.7469565217s;
}

.col-6 :nth-child(28) {
  animation-duration: 5.0869565217s;
  animation-delay: 2.8486956522s;
}

.col-6 :nth-child(29) {
  animation-duration: 5.0869565217s;
  animation-delay: 2.9504347826s;
}

.col-6 :nth-child(30) {
  animation-duration: 5.0869565217s;
  animation-delay: 3.052173913s;
}

.col-6 :nth-child(31) {
  animation-duration: 5.0869565217s;
  animation-delay: 3.1539130435s;
}

.col-6 :nth-child(32) {
  animation-duration: 5.0869565217s;
  animation-delay: 3.2556521739s;
}

.col-6 :nth-child(33) {
  animation-duration: 5.0869565217s;
  animation-delay: 3.3573913043s;
}

.col-6 :nth-child(34) {
  animation-duration: 5.0869565217s;
  animation-delay: 3.4591304348s;
}

.col-6 :nth-child(35) {
  animation-duration: 5.0869565217s;
  animation-delay: 3.5608695652s;
}

.col-6 :nth-child(36) {
  animation-duration: 5.0869565217s;
  animation-delay: 3.6626086957s;
}

.col-6 :nth-child(37) {
  animation-duration: 5.0869565217s;
  animation-delay: 3.7643478261s;
}

.col-6 :nth-child(38) {
  animation-duration: 5.0869565217s;
  animation-delay: 3.8660869565s;
}

.col-6 :nth-child(39) {
  animation-duration: 5.0869565217s;
  animation-delay: 3.967826087s;
}

.col-6 :nth-child(40) {
  animation-duration: 5.0869565217s;
  animation-delay: 4.0695652174s;
}

.col-6 :nth-child(41) {
  animation-duration: 5.0869565217s;
  animation-delay: 4.1713043478s;
}

.col-6 :nth-child(42) {
  animation-duration: 5.0869565217s;
  animation-delay: 4.2730434783s;
}

.col-6 :nth-child(43) {
  animation-duration: 5.0869565217s;
  animation-delay: 4.3747826087s;
}

.col-6 :nth-child(44) {
  animation-duration: 5.0869565217s;
  animation-delay: 4.4765217391s;
}

.col-6 :nth-child(45) {
  animation-duration: 5.0869565217s;
  animation-delay: 4.5782608696s;
}

.col-6 :nth-child(46) {
  animation-duration: 5.0869565217s;
  animation-delay: 4.68s;
}

.col-6 :nth-child(47) {
  animation-duration: 5.0869565217s;
  animation-delay: 4.7817391304s;
}

.col-6 :nth-child(48) {
  animation-duration: 5.0869565217s;
  animation-delay: 4.8834782609s;
}

.col-6 :nth-child(49) {
  animation-duration: 5.0869565217s;
  animation-delay: 4.9852173913s;
}

.col-6 :nth-child(50) {
  animation-duration: 5.0869565217s;
  animation-delay: 5.0869565217s;
}

.col-7 :nth-child(1) {
  animation-duration: 2.7826086957s;
  animation-delay: 0.0556521739s;
}

.col-7 :nth-child(2) {
  animation-duration: 2.7826086957s;
  animation-delay: 0.1113043478s;
}

.col-7 :nth-child(3) {
  animation-duration: 2.7826086957s;
  animation-delay: 0.1669565217s;
}

.col-7 :nth-child(4) {
  animation-duration: 2.7826086957s;
  animation-delay: 0.2226086957s;
}

.col-7 :nth-child(5) {
  animation-duration: 2.7826086957s;
  animation-delay: 0.2782608696s;
}

.col-7 :nth-child(6) {
  animation-duration: 2.7826086957s;
  animation-delay: 0.3339130435s;
}

.col-7 :nth-child(7) {
  animation-duration: 2.7826086957s;
  animation-delay: 0.3895652174s;
}

.col-7 :nth-child(8) {
  animation-duration: 2.7826086957s;
  animation-delay: 0.4452173913s;
}

.col-7 :nth-child(9) {
  animation-duration: 2.7826086957s;
  animation-delay: 0.5008695652s;
}

.col-7 :nth-child(10) {
  animation-duration: 2.7826086957s;
  animation-delay: 0.5565217391s;
}

.col-7 :nth-child(11) {
  animation-duration: 2.7826086957s;
  animation-delay: 0.612173913s;
}

.col-7 :nth-child(12) {
  animation-duration: 2.7826086957s;
  animation-delay: 0.667826087s;
}

.col-7 :nth-child(13) {
  animation-duration: 2.7826086957s;
  animation-delay: 0.7234782609s;
}

.col-7 :nth-child(14) {
  animation-duration: 2.7826086957s;
  animation-delay: 0.7791304348s;
}

.col-7 :nth-child(15) {
  animation-duration: 2.7826086957s;
  animation-delay: 0.8347826087s;
}

.col-7 :nth-child(16) {
  animation-duration: 2.7826086957s;
  animation-delay: 0.8904347826s;
}

.col-7 :nth-child(17) {
  animation-duration: 2.7826086957s;
  animation-delay: 0.9460869565s;
}

.col-7 :nth-child(18) {
  animation-duration: 2.7826086957s;
  animation-delay: 1.0017391304s;
}

.col-7 :nth-child(19) {
  animation-duration: 2.7826086957s;
  animation-delay: 1.0573913043s;
}

.col-7 :nth-child(20) {
  animation-duration: 2.7826086957s;
  animation-delay: 1.1130434783s;
}

.col-7 :nth-child(21) {
  animation-duration: 2.7826086957s;
  animation-delay: 1.1686956522s;
}

.col-7 :nth-child(22) {
  animation-duration: 2.7826086957s;
  animation-delay: 1.2243478261s;
}

.col-7 :nth-child(23) {
  animation-duration: 2.7826086957s;
  animation-delay: 1.28s;
}

.col-7 :nth-child(24) {
  animation-duration: 2.7826086957s;
  animation-delay: 1.3356521739s;
}

.col-7 :nth-child(25) {
  animation-duration: 2.7826086957s;
  animation-delay: 1.3913043478s;
}

.col-7 :nth-child(26) {
  animation-duration: 2.7826086957s;
  animation-delay: 1.4469565217s;
}

.col-7 :nth-child(27) {
  animation-duration: 2.7826086957s;
  animation-delay: 1.5026086957s;
}

.col-7 :nth-child(28) {
  animation-duration: 2.7826086957s;
  animation-delay: 1.5582608696s;
}

.col-7 :nth-child(29) {
  animation-duration: 2.7826086957s;
  animation-delay: 1.6139130435s;
}

.col-7 :nth-child(30) {
  animation-duration: 2.7826086957s;
  animation-delay: 1.6695652174s;
}

.col-7 :nth-child(31) {
  animation-duration: 2.7826086957s;
  animation-delay: 1.7252173913s;
}

.col-7 :nth-child(32) {
  animation-duration: 2.7826086957s;
  animation-delay: 1.7808695652s;
}

.col-7 :nth-child(33) {
  animation-duration: 2.7826086957s;
  animation-delay: 1.8365217391s;
}

.col-7 :nth-child(34) {
  animation-duration: 2.7826086957s;
  animation-delay: 1.892173913s;
}

.col-7 :nth-child(35) {
  animation-duration: 2.7826086957s;
  animation-delay: 1.947826087s;
}

.col-7 :nth-child(36) {
  animation-duration: 2.7826086957s;
  animation-delay: 2.0034782609s;
}

.col-7 :nth-child(37) {
  animation-duration: 2.7826086957s;
  animation-delay: 2.0591304348s;
}

.col-7 :nth-child(38) {
  animation-duration: 2.7826086957s;
  animation-delay: 2.1147826087s;
}

.col-7 :nth-child(39) {
  animation-duration: 2.7826086957s;
  animation-delay: 2.1704347826s;
}

.col-7 :nth-child(40) {
  animation-duration: 2.7826086957s;
  animation-delay: 2.2260869565s;
}

.col-7 :nth-child(41) {
  animation-duration: 2.7826086957s;
  animation-delay: 2.2817391304s;
}

.col-7 :nth-child(42) {
  animation-duration: 2.7826086957s;
  animation-delay: 2.3373913043s;
}

.col-7 :nth-child(43) {
  animation-duration: 2.7826086957s;
  animation-delay: 2.3930434783s;
}

.col-7 :nth-child(44) {
  animation-duration: 2.7826086957s;
  animation-delay: 2.4486956522s;
}

.col-7 :nth-child(45) {
  animation-duration: 2.7826086957s;
  animation-delay: 2.5043478261s;
}

.col-7 :nth-child(46) {
  animation-duration: 2.7826086957s;
  animation-delay: 2.56s;
}

.col-7 :nth-child(47) {
  animation-duration: 2.7826086957s;
  animation-delay: 2.6156521739s;
}

.col-7 :nth-child(48) {
  animation-duration: 2.7826086957s;
  animation-delay: 2.6713043478s;
}

.col-7 :nth-child(49) {
  animation-duration: 2.7826086957s;
  animation-delay: 2.7269565217s;
}

.col-7 :nth-child(50) {
  animation-duration: 2.7826086957s;
  animation-delay: 2.7826086957s;
}

.col-8 :nth-child(1) {
  animation-duration: 3.7391304348s;
  animation-delay: 0.0747826087s;
}

.col-8 :nth-child(2) {
  animation-duration: 3.7391304348s;
  animation-delay: 0.1495652174s;
}

.col-8 :nth-child(3) {
  animation-duration: 3.7391304348s;
  animation-delay: 0.2243478261s;
}

.col-8 :nth-child(4) {
  animation-duration: 3.7391304348s;
  animation-delay: 0.2991304348s;
}

.col-8 :nth-child(5) {
  animation-duration: 3.7391304348s;
  animation-delay: 0.3739130435s;
}

.col-8 :nth-child(6) {
  animation-duration: 3.7391304348s;
  animation-delay: 0.4486956522s;
}

.col-8 :nth-child(7) {
  animation-duration: 3.7391304348s;
  animation-delay: 0.5234782609s;
}

.col-8 :nth-child(8) {
  animation-duration: 3.7391304348s;
  animation-delay: 0.5982608696s;
}

.col-8 :nth-child(9) {
  animation-duration: 3.7391304348s;
  animation-delay: 0.6730434783s;
}

.col-8 :nth-child(10) {
  animation-duration: 3.7391304348s;
  animation-delay: 0.747826087s;
}

.col-8 :nth-child(11) {
  animation-duration: 3.7391304348s;
  animation-delay: 0.8226086957s;
}

.col-8 :nth-child(12) {
  animation-duration: 3.7391304348s;
  animation-delay: 0.8973913043s;
}

.col-8 :nth-child(13) {
  animation-duration: 3.7391304348s;
  animation-delay: 0.972173913s;
}

.col-8 :nth-child(14) {
  animation-duration: 3.7391304348s;
  animation-delay: 1.0469565217s;
}

.col-8 :nth-child(15) {
  animation-duration: 3.7391304348s;
  animation-delay: 1.1217391304s;
}

.col-8 :nth-child(16) {
  animation-duration: 3.7391304348s;
  animation-delay: 1.1965217391s;
}

.col-8 :nth-child(17) {
  animation-duration: 3.7391304348s;
  animation-delay: 1.2713043478s;
}

.col-8 :nth-child(18) {
  animation-duration: 3.7391304348s;
  animation-delay: 1.3460869565s;
}

.col-8 :nth-child(19) {
  animation-duration: 3.7391304348s;
  animation-delay: 1.4208695652s;
}

.col-8 :nth-child(20) {
  animation-duration: 3.7391304348s;
  animation-delay: 1.4956521739s;
}

.col-8 :nth-child(21) {
  animation-duration: 3.7391304348s;
  animation-delay: 1.5704347826s;
}

.col-8 :nth-child(22) {
  animation-duration: 3.7391304348s;
  animation-delay: 1.6452173913s;
}

.col-8 :nth-child(23) {
  animation-duration: 3.7391304348s;
  animation-delay: 1.72s;
}

.col-8 :nth-child(24) {
  animation-duration: 3.7391304348s;
  animation-delay: 1.7947826087s;
}

.col-8 :nth-child(25) {
  animation-duration: 3.7391304348s;
  animation-delay: 1.8695652174s;
}

.col-8 :nth-child(26) {
  animation-duration: 3.7391304348s;
  animation-delay: 1.9443478261s;
}

.col-8 :nth-child(27) {
  animation-duration: 3.7391304348s;
  animation-delay: 2.0191304348s;
}

.col-8 :nth-child(28) {
  animation-duration: 3.7391304348s;
  animation-delay: 2.0939130435s;
}

.col-8 :nth-child(29) {
  animation-duration: 3.7391304348s;
  animation-delay: 2.1686956522s;
}

.col-8 :nth-child(30) {
  animation-duration: 3.7391304348s;
  animation-delay: 2.2434782609s;
}

.col-8 :nth-child(31) {
  animation-duration: 3.7391304348s;
  animation-delay: 2.3182608696s;
}

.col-8 :nth-child(32) {
  animation-duration: 3.7391304348s;
  animation-delay: 2.3930434783s;
}

.col-8 :nth-child(33) {
  animation-duration: 3.7391304348s;
  animation-delay: 2.467826087s;
}

.col-8 :nth-child(34) {
  animation-duration: 3.7391304348s;
  animation-delay: 2.5426086957s;
}

.col-8 :nth-child(35) {
  animation-duration: 3.7391304348s;
  animation-delay: 2.6173913043s;
}

.col-8 :nth-child(36) {
  animation-duration: 3.7391304348s;
  animation-delay: 2.692173913s;
}

.col-8 :nth-child(37) {
  animation-duration: 3.7391304348s;
  animation-delay: 2.7669565217s;
}

.col-8 :nth-child(38) {
  animation-duration: 3.7391304348s;
  animation-delay: 2.8417391304s;
}

.col-8 :nth-child(39) {
  animation-duration: 3.7391304348s;
  animation-delay: 2.9165217391s;
}

.col-8 :nth-child(40) {
  animation-duration: 3.7391304348s;
  animation-delay: 2.9913043478s;
}

.col-8 :nth-child(41) {
  animation-duration: 3.7391304348s;
  animation-delay: 3.0660869565s;
}

.col-8 :nth-child(42) {
  animation-duration: 3.7391304348s;
  animation-delay: 3.1408695652s;
}

.col-8 :nth-child(43) {
  animation-duration: 3.7391304348s;
  animation-delay: 3.2156521739s;
}

.col-8 :nth-child(44) {
  animation-duration: 3.7391304348s;
  animation-delay: 3.2904347826s;
}

.col-8 :nth-child(45) {
  animation-duration: 3.7391304348s;
  animation-delay: 3.3652173913s;
}

.col-8 :nth-child(46) {
  animation-duration: 3.7391304348s;
  animation-delay: 3.44s;
}

.col-8 :nth-child(47) {
  animation-duration: 3.7391304348s;
  animation-delay: 3.5147826087s;
}

.col-8 :nth-child(48) {
  animation-duration: 3.7391304348s;
  animation-delay: 3.5895652174s;
}

.col-8 :nth-child(49) {
  animation-duration: 3.7391304348s;
  animation-delay: 3.6643478261s;
}

.col-8 :nth-child(50) {
  animation-duration: 3.7391304348s;
  animation-delay: 3.7391304348s;
}

.col-9 :nth-child(1) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.0234782609s;
}

.col-9 :nth-child(2) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.0469565217s;
}

.col-9 :nth-child(3) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.0704347826s;
}

.col-9 :nth-child(4) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.0939130435s;
}

.col-9 :nth-child(5) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.1173913043s;
}

.col-9 :nth-child(6) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.1408695652s;
}

.col-9 :nth-child(7) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.1643478261s;
}

.col-9 :nth-child(8) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.187826087s;
}

.col-9 :nth-child(9) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.2113043478s;
}

.col-9 :nth-child(10) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.2347826087s;
}

.col-9 :nth-child(11) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.2582608696s;
}

.col-9 :nth-child(12) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.2817391304s;
}

.col-9 :nth-child(13) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.3052173913s;
}

.col-9 :nth-child(14) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.3286956522s;
}

.col-9 :nth-child(15) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.352173913s;
}

.col-9 :nth-child(16) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.3756521739s;
}

.col-9 :nth-child(17) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.3991304348s;
}

.col-9 :nth-child(18) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.4226086957s;
}

.col-9 :nth-child(19) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.4460869565s;
}

.col-9 :nth-child(20) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.4695652174s;
}

.col-9 :nth-child(21) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.4930434783s;
}

.col-9 :nth-child(22) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.5165217391s;
}

.col-9 :nth-child(23) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.54s;
}

.col-9 :nth-child(24) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.5634782609s;
}

.col-9 :nth-child(25) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.5869565217s;
}

.col-9 :nth-child(26) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.6104347826s;
}

.col-9 :nth-child(27) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.6339130435s;
}

.col-9 :nth-child(28) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.6573913043s;
}

.col-9 :nth-child(29) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.6808695652s;
}

.col-9 :nth-child(30) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.7043478261s;
}

.col-9 :nth-child(31) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.727826087s;
}

.col-9 :nth-child(32) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.7513043478s;
}

.col-9 :nth-child(33) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.7747826087s;
}

.col-9 :nth-child(34) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.7982608696s;
}

.col-9 :nth-child(35) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.8217391304s;
}

.col-9 :nth-child(36) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.8452173913s;
}

.col-9 :nth-child(37) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.8686956522s;
}

.col-9 :nth-child(38) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.892173913s;
}

.col-9 :nth-child(39) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.9156521739s;
}

.col-9 :nth-child(40) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.9391304348s;
}

.col-9 :nth-child(41) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.9626086957s;
}

.col-9 :nth-child(42) {
  animation-duration: 1.1739130435s;
  animation-delay: 0.9860869565s;
}

.col-9 :nth-child(43) {
  animation-duration: 1.1739130435s;
  animation-delay: 1.0095652174s;
}

.col-9 :nth-child(44) {
  animation-duration: 1.1739130435s;
  animation-delay: 1.0330434783s;
}

.col-9 :nth-child(45) {
  animation-duration: 1.1739130435s;
  animation-delay: 1.0565217391s;
}

.col-9 :nth-child(46) {
  animation-duration: 1.1739130435s;
  animation-delay: 1.08s;
}

.col-9 :nth-child(47) {
  animation-duration: 1.1739130435s;
  animation-delay: 1.1034782609s;
}

.col-9 :nth-child(48) {
  animation-duration: 1.1739130435s;
  animation-delay: 1.1269565217s;
}

.col-9 :nth-child(49) {
  animation-duration: 1.1739130435s;
  animation-delay: 1.1504347826s;
}

.col-9 :nth-child(50) {
  animation-duration: 1.1739130435s;
  animation-delay: 1.1739130435s;
}

.col-10 :nth-child(1) {
  animation-duration: 5.2173913043s;
  animation-delay: 0.1043478261s;
}

.col-10 :nth-child(2) {
  animation-duration: 5.2173913043s;
  animation-delay: 0.2086956522s;
}

.col-10 :nth-child(3) {
  animation-duration: 5.2173913043s;
  animation-delay: 0.3130434783s;
}

.col-10 :nth-child(4) {
  animation-duration: 5.2173913043s;
  animation-delay: 0.4173913043s;
}

.col-10 :nth-child(5) {
  animation-duration: 5.2173913043s;
  animation-delay: 0.5217391304s;
}

.col-10 :nth-child(6) {
  animation-duration: 5.2173913043s;
  animation-delay: 0.6260869565s;
}

.col-10 :nth-child(7) {
  animation-duration: 5.2173913043s;
  animation-delay: 0.7304347826s;
}

.col-10 :nth-child(8) {
  animation-duration: 5.2173913043s;
  animation-delay: 0.8347826087s;
}

.col-10 :nth-child(9) {
  animation-duration: 5.2173913043s;
  animation-delay: 0.9391304348s;
}

.col-10 :nth-child(10) {
  animation-duration: 5.2173913043s;
  animation-delay: 1.0434782609s;
}

.col-10 :nth-child(11) {
  animation-duration: 5.2173913043s;
  animation-delay: 1.147826087s;
}

.col-10 :nth-child(12) {
  animation-duration: 5.2173913043s;
  animation-delay: 1.252173913s;
}

.col-10 :nth-child(13) {
  animation-duration: 5.2173913043s;
  animation-delay: 1.3565217391s;
}

.col-10 :nth-child(14) {
  animation-duration: 5.2173913043s;
  animation-delay: 1.4608695652s;
}

.col-10 :nth-child(15) {
  animation-duration: 5.2173913043s;
  animation-delay: 1.5652173913s;
}

.col-10 :nth-child(16) {
  animation-duration: 5.2173913043s;
  animation-delay: 1.6695652174s;
}

.col-10 :nth-child(17) {
  animation-duration: 5.2173913043s;
  animation-delay: 1.7739130435s;
}

.col-10 :nth-child(18) {
  animation-duration: 5.2173913043s;
  animation-delay: 1.8782608696s;
}

.col-10 :nth-child(19) {
  animation-duration: 5.2173913043s;
  animation-delay: 1.9826086957s;
}

.col-10 :nth-child(20) {
  animation-duration: 5.2173913043s;
  animation-delay: 2.0869565217s;
}

.col-10 :nth-child(21) {
  animation-duration: 5.2173913043s;
  animation-delay: 2.1913043478s;
}

.col-10 :nth-child(22) {
  animation-duration: 5.2173913043s;
  animation-delay: 2.2956521739s;
}

.col-10 :nth-child(23) {
  animation-duration: 5.2173913043s;
  animation-delay: 2.4s;
}

.col-10 :nth-child(24) {
  animation-duration: 5.2173913043s;
  animation-delay: 2.5043478261s;
}

.col-10 :nth-child(25) {
  animation-duration: 5.2173913043s;
  animation-delay: 2.6086956522s;
}

.col-10 :nth-child(26) {
  animation-duration: 5.2173913043s;
  animation-delay: 2.7130434783s;
}

.col-10 :nth-child(27) {
  animation-duration: 5.2173913043s;
  animation-delay: 2.8173913043s;
}

.col-10 :nth-child(28) {
  animation-duration: 5.2173913043s;
  animation-delay: 2.9217391304s;
}

.col-10 :nth-child(29) {
  animation-duration: 5.2173913043s;
  animation-delay: 3.0260869565s;
}

.col-10 :nth-child(30) {
  animation-duration: 5.2173913043s;
  animation-delay: 3.1304347826s;
}

.col-10 :nth-child(31) {
  animation-duration: 5.2173913043s;
  animation-delay: 3.2347826087s;
}

.col-10 :nth-child(32) {
  animation-duration: 5.2173913043s;
  animation-delay: 3.3391304348s;
}

.col-10 :nth-child(33) {
  animation-duration: 5.2173913043s;
  animation-delay: 3.4434782609s;
}

.col-10 :nth-child(34) {
  animation-duration: 5.2173913043s;
  animation-delay: 3.547826087s;
}

.col-10 :nth-child(35) {
  animation-duration: 5.2173913043s;
  animation-delay: 3.652173913s;
}

.col-10 :nth-child(36) {
  animation-duration: 5.2173913043s;
  animation-delay: 3.7565217391s;
}

.col-10 :nth-child(37) {
  animation-duration: 5.2173913043s;
  animation-delay: 3.8608695652s;
}

.col-10 :nth-child(38) {
  animation-duration: 5.2173913043s;
  animation-delay: 3.9652173913s;
}

.col-10 :nth-child(39) {
  animation-duration: 5.2173913043s;
  animation-delay: 4.0695652174s;
}

.col-10 :nth-child(40) {
  animation-duration: 5.2173913043s;
  animation-delay: 4.1739130435s;
}

.col-10 :nth-child(41) {
  animation-duration: 5.2173913043s;
  animation-delay: 4.2782608696s;
}

.col-10 :nth-child(42) {
  animation-duration: 5.2173913043s;
  animation-delay: 4.3826086957s;
}

.col-10 :nth-child(43) {
  animation-duration: 5.2173913043s;
  animation-delay: 4.4869565217s;
}

.col-10 :nth-child(44) {
  animation-duration: 5.2173913043s;
  animation-delay: 4.5913043478s;
}

.col-10 :nth-child(45) {
  animation-duration: 5.2173913043s;
  animation-delay: 4.6956521739s;
}

.col-10 :nth-child(46) {
  animation-duration: 5.2173913043s;
  animation-delay: 4.8s;
}

.col-10 :nth-child(47) {
  animation-duration: 5.2173913043s;
  animation-delay: 4.9043478261s;
}

.col-10 :nth-child(48) {
  animation-duration: 5.2173913043s;
  animation-delay: 5.0086956522s;
}

.col-10 :nth-child(49) {
  animation-duration: 5.2173913043s;
  animation-delay: 5.1130434783s;
}

.col-10 :nth-child(50) {
  animation-duration: 5.2173913043s;
  animation-delay: 5.2173913043s;
}

.col-11 :nth-child(1) {
  animation-duration: 3.652173913s;
  animation-delay: 0.0730434783s;
}

.col-11 :nth-child(2) {
  animation-duration: 3.652173913s;
  animation-delay: 0.1460869565s;
}

.col-11 :nth-child(3) {
  animation-duration: 3.652173913s;
  animation-delay: 0.2191304348s;
}

.col-11 :nth-child(4) {
  animation-duration: 3.652173913s;
  animation-delay: 0.292173913s;
}

.col-11 :nth-child(5) {
  animation-duration: 3.652173913s;
  animation-delay: 0.3652173913s;
}

.col-11 :nth-child(6) {
  animation-duration: 3.652173913s;
  animation-delay: 0.4382608696s;
}

.col-11 :nth-child(7) {
  animation-duration: 3.652173913s;
  animation-delay: 0.5113043478s;
}

.col-11 :nth-child(8) {
  animation-duration: 3.652173913s;
  animation-delay: 0.5843478261s;
}

.col-11 :nth-child(9) {
  animation-duration: 3.652173913s;
  animation-delay: 0.6573913043s;
}

.col-11 :nth-child(10) {
  animation-duration: 3.652173913s;
  animation-delay: 0.7304347826s;
}

.col-11 :nth-child(11) {
  animation-duration: 3.652173913s;
  animation-delay: 0.8034782609s;
}

.col-11 :nth-child(12) {
  animation-duration: 3.652173913s;
  animation-delay: 0.8765217391s;
}

.col-11 :nth-child(13) {
  animation-duration: 3.652173913s;
  animation-delay: 0.9495652174s;
}

.col-11 :nth-child(14) {
  animation-duration: 3.652173913s;
  animation-delay: 1.0226086957s;
}

.col-11 :nth-child(15) {
  animation-duration: 3.652173913s;
  animation-delay: 1.0956521739s;
}

.col-11 :nth-child(16) {
  animation-duration: 3.652173913s;
  animation-delay: 1.1686956522s;
}

.col-11 :nth-child(17) {
  animation-duration: 3.652173913s;
  animation-delay: 1.2417391304s;
}

.col-11 :nth-child(18) {
  animation-duration: 3.652173913s;
  animation-delay: 1.3147826087s;
}

.col-11 :nth-child(19) {
  animation-duration: 3.652173913s;
  animation-delay: 1.387826087s;
}

.col-11 :nth-child(20) {
  animation-duration: 3.652173913s;
  animation-delay: 1.4608695652s;
}

.col-11 :nth-child(21) {
  animation-duration: 3.652173913s;
  animation-delay: 1.5339130435s;
}

.col-11 :nth-child(22) {
  animation-duration: 3.652173913s;
  animation-delay: 1.6069565217s;
}

.col-11 :nth-child(23) {
  animation-duration: 3.652173913s;
  animation-delay: 1.68s;
}

.col-11 :nth-child(24) {
  animation-duration: 3.652173913s;
  animation-delay: 1.7530434783s;
}

.col-11 :nth-child(25) {
  animation-duration: 3.652173913s;
  animation-delay: 1.8260869565s;
}

.col-11 :nth-child(26) {
  animation-duration: 3.652173913s;
  animation-delay: 1.8991304348s;
}

.col-11 :nth-child(27) {
  animation-duration: 3.652173913s;
  animation-delay: 1.972173913s;
}

.col-11 :nth-child(28) {
  animation-duration: 3.652173913s;
  animation-delay: 2.0452173913s;
}

.col-11 :nth-child(29) {
  animation-duration: 3.652173913s;
  animation-delay: 2.1182608696s;
}

.col-11 :nth-child(30) {
  animation-duration: 3.652173913s;
  animation-delay: 2.1913043478s;
}

.col-11 :nth-child(31) {
  animation-duration: 3.652173913s;
  animation-delay: 2.2643478261s;
}

.col-11 :nth-child(32) {
  animation-duration: 3.652173913s;
  animation-delay: 2.3373913043s;
}

.col-11 :nth-child(33) {
  animation-duration: 3.652173913s;
  animation-delay: 2.4104347826s;
}

.col-11 :nth-child(34) {
  animation-duration: 3.652173913s;
  animation-delay: 2.4834782609s;
}

.col-11 :nth-child(35) {
  animation-duration: 3.652173913s;
  animation-delay: 2.5565217391s;
}

.col-11 :nth-child(36) {
  animation-duration: 3.652173913s;
  animation-delay: 2.6295652174s;
}

.col-11 :nth-child(37) {
  animation-duration: 3.652173913s;
  animation-delay: 2.7026086957s;
}

.col-11 :nth-child(38) {
  animation-duration: 3.652173913s;
  animation-delay: 2.7756521739s;
}

.col-11 :nth-child(39) {
  animation-duration: 3.652173913s;
  animation-delay: 2.8486956522s;
}

.col-11 :nth-child(40) {
  animation-duration: 3.652173913s;
  animation-delay: 2.9217391304s;
}

.col-11 :nth-child(41) {
  animation-duration: 3.652173913s;
  animation-delay: 2.9947826087s;
}

.col-11 :nth-child(42) {
  animation-duration: 3.652173913s;
  animation-delay: 3.067826087s;
}

.col-11 :nth-child(43) {
  animation-duration: 3.652173913s;
  animation-delay: 3.1408695652s;
}

.col-11 :nth-child(44) {
  animation-duration: 3.652173913s;
  animation-delay: 3.2139130435s;
}

.col-11 :nth-child(45) {
  animation-duration: 3.652173913s;
  animation-delay: 3.2869565217s;
}

.col-11 :nth-child(46) {
  animation-duration: 3.652173913s;
  animation-delay: 3.36s;
}

.col-11 :nth-child(47) {
  animation-duration: 3.652173913s;
  animation-delay: 3.4330434783s;
}

.col-11 :nth-child(48) {
  animation-duration: 3.652173913s;
  animation-delay: 3.5060869565s;
}

.col-11 :nth-child(49) {
  animation-duration: 3.652173913s;
  animation-delay: 3.5791304348s;
}

.col-11 :nth-child(50) {
  animation-duration: 3.652173913s;
  animation-delay: 3.652173913s;
}

.col-12 :nth-child(1) {
  animation-duration: 5.3043478261s;
  animation-delay: 0.1060869565s;
}

.col-12 :nth-child(2) {
  animation-duration: 5.3043478261s;
  animation-delay: 0.212173913s;
}

.col-12 :nth-child(3) {
  animation-duration: 5.3043478261s;
  animation-delay: 0.3182608696s;
}

.col-12 :nth-child(4) {
  animation-duration: 5.3043478261s;
  animation-delay: 0.4243478261s;
}

.col-12 :nth-child(5) {
  animation-duration: 5.3043478261s;
  animation-delay: 0.5304347826s;
}

.col-12 :nth-child(6) {
  animation-duration: 5.3043478261s;
  animation-delay: 0.6365217391s;
}

.col-12 :nth-child(7) {
  animation-duration: 5.3043478261s;
  animation-delay: 0.7426086957s;
}

.col-12 :nth-child(8) {
  animation-duration: 5.3043478261s;
  animation-delay: 0.8486956522s;
}

.col-12 :nth-child(9) {
  animation-duration: 5.3043478261s;
  animation-delay: 0.9547826087s;
}

.col-12 :nth-child(10) {
  animation-duration: 5.3043478261s;
  animation-delay: 1.0608695652s;
}

.col-12 :nth-child(11) {
  animation-duration: 5.3043478261s;
  animation-delay: 1.1669565217s;
}

.col-12 :nth-child(12) {
  animation-duration: 5.3043478261s;
  animation-delay: 1.2730434783s;
}

.col-12 :nth-child(13) {
  animation-duration: 5.3043478261s;
  animation-delay: 1.3791304348s;
}

.col-12 :nth-child(14) {
  animation-duration: 5.3043478261s;
  animation-delay: 1.4852173913s;
}

.col-12 :nth-child(15) {
  animation-duration: 5.3043478261s;
  animation-delay: 1.5913043478s;
}

.col-12 :nth-child(16) {
  animation-duration: 5.3043478261s;
  animation-delay: 1.6973913043s;
}

.col-12 :nth-child(17) {
  animation-duration: 5.3043478261s;
  animation-delay: 1.8034782609s;
}

.col-12 :nth-child(18) {
  animation-duration: 5.3043478261s;
  animation-delay: 1.9095652174s;
}

.col-12 :nth-child(19) {
  animation-duration: 5.3043478261s;
  animation-delay: 2.0156521739s;
}

.col-12 :nth-child(20) {
  animation-duration: 5.3043478261s;
  animation-delay: 2.1217391304s;
}

.col-12 :nth-child(21) {
  animation-duration: 5.3043478261s;
  animation-delay: 2.227826087s;
}

.col-12 :nth-child(22) {
  animation-duration: 5.3043478261s;
  animation-delay: 2.3339130435s;
}

.col-12 :nth-child(23) {
  animation-duration: 5.3043478261s;
  animation-delay: 2.44s;
}

.col-12 :nth-child(24) {
  animation-duration: 5.3043478261s;
  animation-delay: 2.5460869565s;
}

.col-12 :nth-child(25) {
  animation-duration: 5.3043478261s;
  animation-delay: 2.652173913s;
}

.col-12 :nth-child(26) {
  animation-duration: 5.3043478261s;
  animation-delay: 2.7582608696s;
}

.col-12 :nth-child(27) {
  animation-duration: 5.3043478261s;
  animation-delay: 2.8643478261s;
}

.col-12 :nth-child(28) {
  animation-duration: 5.3043478261s;
  animation-delay: 2.9704347826s;
}

.col-12 :nth-child(29) {
  animation-duration: 5.3043478261s;
  animation-delay: 3.0765217391s;
}

.col-12 :nth-child(30) {
  animation-duration: 5.3043478261s;
  animation-delay: 3.1826086957s;
}

.col-12 :nth-child(31) {
  animation-duration: 5.3043478261s;
  animation-delay: 3.2886956522s;
}

.col-12 :nth-child(32) {
  animation-duration: 5.3043478261s;
  animation-delay: 3.3947826087s;
}

.col-12 :nth-child(33) {
  animation-duration: 5.3043478261s;
  animation-delay: 3.5008695652s;
}

.col-12 :nth-child(34) {
  animation-duration: 5.3043478261s;
  animation-delay: 3.6069565217s;
}

.col-12 :nth-child(35) {
  animation-duration: 5.3043478261s;
  animation-delay: 3.7130434783s;
}

.col-12 :nth-child(36) {
  animation-duration: 5.3043478261s;
  animation-delay: 3.8191304348s;
}

.col-12 :nth-child(37) {
  animation-duration: 5.3043478261s;
  animation-delay: 3.9252173913s;
}

.col-12 :nth-child(38) {
  animation-duration: 5.3043478261s;
  animation-delay: 4.0313043478s;
}

.col-12 :nth-child(39) {
  animation-duration: 5.3043478261s;
  animation-delay: 4.1373913043s;
}

.col-12 :nth-child(40) {
  animation-duration: 5.3043478261s;
  animation-delay: 4.2434782609s;
}

.col-12 :nth-child(41) {
  animation-duration: 5.3043478261s;
  animation-delay: 4.3495652174s;
}

.col-12 :nth-child(42) {
  animation-duration: 5.3043478261s;
  animation-delay: 4.4556521739s;
}

.col-12 :nth-child(43) {
  animation-duration: 5.3043478261s;
  animation-delay: 4.5617391304s;
}

.col-12 :nth-child(44) {
  animation-duration: 5.3043478261s;
  animation-delay: 4.667826087s;
}

.col-12 :nth-child(45) {
  animation-duration: 5.3043478261s;
  animation-delay: 4.7739130435s;
}

.col-12 :nth-child(46) {
  animation-duration: 5.3043478261s;
  animation-delay: 4.88s;
}

.col-12 :nth-child(47) {
  animation-duration: 5.3043478261s;
  animation-delay: 4.9860869565s;
}

.col-12 :nth-child(48) {
  animation-duration: 5.3043478261s;
  animation-delay: 5.092173913s;
}

.col-12 :nth-child(49) {
  animation-duration: 5.3043478261s;
  animation-delay: 5.1982608696s;
}

.col-12 :nth-child(50) {
  animation-duration: 5.3043478261s;
  animation-delay: 5.3043478261s;
}

.col-13 :nth-child(1) {
  animation-duration: 4.7826086957s;
  animation-delay: 0.0956521739s;
}

.col-13 :nth-child(2) {
  animation-duration: 4.7826086957s;
  animation-delay: 0.1913043478s;
}

.col-13 :nth-child(3) {
  animation-duration: 4.7826086957s;
  animation-delay: 0.2869565217s;
}

.col-13 :nth-child(4) {
  animation-duration: 4.7826086957s;
  animation-delay: 0.3826086957s;
}

.col-13 :nth-child(5) {
  animation-duration: 4.7826086957s;
  animation-delay: 0.4782608696s;
}

.col-13 :nth-child(6) {
  animation-duration: 4.7826086957s;
  animation-delay: 0.5739130435s;
}

.col-13 :nth-child(7) {
  animation-duration: 4.7826086957s;
  animation-delay: 0.6695652174s;
}

.col-13 :nth-child(8) {
  animation-duration: 4.7826086957s;
  animation-delay: 0.7652173913s;
}

.col-13 :nth-child(9) {
  animation-duration: 4.7826086957s;
  animation-delay: 0.8608695652s;
}

.col-13 :nth-child(10) {
  animation-duration: 4.7826086957s;
  animation-delay: 0.9565217391s;
}

.col-13 :nth-child(11) {
  animation-duration: 4.7826086957s;
  animation-delay: 1.052173913s;
}

.col-13 :nth-child(12) {
  animation-duration: 4.7826086957s;
  animation-delay: 1.147826087s;
}

.col-13 :nth-child(13) {
  animation-duration: 4.7826086957s;
  animation-delay: 1.2434782609s;
}

.col-13 :nth-child(14) {
  animation-duration: 4.7826086957s;
  animation-delay: 1.3391304348s;
}

.col-13 :nth-child(15) {
  animation-duration: 4.7826086957s;
  animation-delay: 1.4347826087s;
}

.col-13 :nth-child(16) {
  animation-duration: 4.7826086957s;
  animation-delay: 1.5304347826s;
}

.col-13 :nth-child(17) {
  animation-duration: 4.7826086957s;
  animation-delay: 1.6260869565s;
}

.col-13 :nth-child(18) {
  animation-duration: 4.7826086957s;
  animation-delay: 1.7217391304s;
}

.col-13 :nth-child(19) {
  animation-duration: 4.7826086957s;
  animation-delay: 1.8173913043s;
}

.col-13 :nth-child(20) {
  animation-duration: 4.7826086957s;
  animation-delay: 1.9130434783s;
}

.col-13 :nth-child(21) {
  animation-duration: 4.7826086957s;
  animation-delay: 2.0086956522s;
}

.col-13 :nth-child(22) {
  animation-duration: 4.7826086957s;
  animation-delay: 2.1043478261s;
}

.col-13 :nth-child(23) {
  animation-duration: 4.7826086957s;
  animation-delay: 2.2s;
}

.col-13 :nth-child(24) {
  animation-duration: 4.7826086957s;
  animation-delay: 2.2956521739s;
}

.col-13 :nth-child(25) {
  animation-duration: 4.7826086957s;
  animation-delay: 2.3913043478s;
}

.col-13 :nth-child(26) {
  animation-duration: 4.7826086957s;
  animation-delay: 2.4869565217s;
}

.col-13 :nth-child(27) {
  animation-duration: 4.7826086957s;
  animation-delay: 2.5826086957s;
}

.col-13 :nth-child(28) {
  animation-duration: 4.7826086957s;
  animation-delay: 2.6782608696s;
}

.col-13 :nth-child(29) {
  animation-duration: 4.7826086957s;
  animation-delay: 2.7739130435s;
}

.col-13 :nth-child(30) {
  animation-duration: 4.7826086957s;
  animation-delay: 2.8695652174s;
}

.col-13 :nth-child(31) {
  animation-duration: 4.7826086957s;
  animation-delay: 2.9652173913s;
}

.col-13 :nth-child(32) {
  animation-duration: 4.7826086957s;
  animation-delay: 3.0608695652s;
}

.col-13 :nth-child(33) {
  animation-duration: 4.7826086957s;
  animation-delay: 3.1565217391s;
}

.col-13 :nth-child(34) {
  animation-duration: 4.7826086957s;
  animation-delay: 3.252173913s;
}

.col-13 :nth-child(35) {
  animation-duration: 4.7826086957s;
  animation-delay: 3.347826087s;
}

.col-13 :nth-child(36) {
  animation-duration: 4.7826086957s;
  animation-delay: 3.4434782609s;
}

.col-13 :nth-child(37) {
  animation-duration: 4.7826086957s;
  animation-delay: 3.5391304348s;
}

.col-13 :nth-child(38) {
  animation-duration: 4.7826086957s;
  animation-delay: 3.6347826087s;
}

.col-13 :nth-child(39) {
  animation-duration: 4.7826086957s;
  animation-delay: 3.7304347826s;
}

.col-13 :nth-child(40) {
  animation-duration: 4.7826086957s;
  animation-delay: 3.8260869565s;
}

.col-13 :nth-child(41) {
  animation-duration: 4.7826086957s;
  animation-delay: 3.9217391304s;
}

.col-13 :nth-child(42) {
  animation-duration: 4.7826086957s;
  animation-delay: 4.0173913043s;
}

.col-13 :nth-child(43) {
  animation-duration: 4.7826086957s;
  animation-delay: 4.1130434783s;
}

.col-13 :nth-child(44) {
  animation-duration: 4.7826086957s;
  animation-delay: 4.2086956522s;
}

.col-13 :nth-child(45) {
  animation-duration: 4.7826086957s;
  animation-delay: 4.3043478261s;
}

.col-13 :nth-child(46) {
  animation-duration: 4.7826086957s;
  animation-delay: 4.4s;
}

.col-13 :nth-child(47) {
  animation-duration: 4.7826086957s;
  animation-delay: 4.4956521739s;
}

.col-13 :nth-child(48) {
  animation-duration: 4.7826086957s;
  animation-delay: 4.5913043478s;
}

.col-13 :nth-child(49) {
  animation-duration: 4.7826086957s;
  animation-delay: 4.6869565217s;
}

.col-13 :nth-child(50) {
  animation-duration: 4.7826086957s;
  animation-delay: 4.7826086957s;
}

.col-14 :nth-child(1) {
  animation-duration: 1.5217391304s;
  animation-delay: 0.0304347826s;
}

.col-14 :nth-child(2) {
  animation-duration: 1.5217391304s;
  animation-delay: 0.0608695652s;
}

.col-14 :nth-child(3) {
  animation-duration: 1.5217391304s;
  animation-delay: 0.0913043478s;
}

.col-14 :nth-child(4) {
  animation-duration: 1.5217391304s;
  animation-delay: 0.1217391304s;
}

.col-14 :nth-child(5) {
  animation-duration: 1.5217391304s;
  animation-delay: 0.152173913s;
}

.col-14 :nth-child(6) {
  animation-duration: 1.5217391304s;
  animation-delay: 0.1826086957s;
}

.col-14 :nth-child(7) {
  animation-duration: 1.5217391304s;
  animation-delay: 0.2130434783s;
}

.col-14 :nth-child(8) {
  animation-duration: 1.5217391304s;
  animation-delay: 0.2434782609s;
}

.col-14 :nth-child(9) {
  animation-duration: 1.5217391304s;
  animation-delay: 0.2739130435s;
}

.col-14 :nth-child(10) {
  animation-duration: 1.5217391304s;
  animation-delay: 0.3043478261s;
}

.col-14 :nth-child(11) {
  animation-duration: 1.5217391304s;
  animation-delay: 0.3347826087s;
}

.col-14 :nth-child(12) {
  animation-duration: 1.5217391304s;
  animation-delay: 0.3652173913s;
}

.col-14 :nth-child(13) {
  animation-duration: 1.5217391304s;
  animation-delay: 0.3956521739s;
}

.col-14 :nth-child(14) {
  animation-duration: 1.5217391304s;
  animation-delay: 0.4260869565s;
}

.col-14 :nth-child(15) {
  animation-duration: 1.5217391304s;
  animation-delay: 0.4565217391s;
}

.col-14 :nth-child(16) {
  animation-duration: 1.5217391304s;
  animation-delay: 0.4869565217s;
}

.col-14 :nth-child(17) {
  animation-duration: 1.5217391304s;
  animation-delay: 0.5173913043s;
}

.col-14 :nth-child(18) {
  animation-duration: 1.5217391304s;
  animation-delay: 0.547826087s;
}

.col-14 :nth-child(19) {
  animation-duration: 1.5217391304s;
  animation-delay: 0.5782608696s;
}

.col-14 :nth-child(20) {
  animation-duration: 1.5217391304s;
  animation-delay: 0.6086956522s;
}

.col-14 :nth-child(21) {
  animation-duration: 1.5217391304s;
  animation-delay: 0.6391304348s;
}

.col-14 :nth-child(22) {
  animation-duration: 1.5217391304s;
  animation-delay: 0.6695652174s;
}

.col-14 :nth-child(23) {
  animation-duration: 1.5217391304s;
  animation-delay: 0.7s;
}

.col-14 :nth-child(24) {
  animation-duration: 1.5217391304s;
  animation-delay: 0.7304347826s;
}

.col-14 :nth-child(25) {
  animation-duration: 1.5217391304s;
  animation-delay: 0.7608695652s;
}

.col-14 :nth-child(26) {
  animation-duration: 1.5217391304s;
  animation-delay: 0.7913043478s;
}

.col-14 :nth-child(27) {
  animation-duration: 1.5217391304s;
  animation-delay: 0.8217391304s;
}

.col-14 :nth-child(28) {
  animation-duration: 1.5217391304s;
  animation-delay: 0.852173913s;
}

.col-14 :nth-child(29) {
  animation-duration: 1.5217391304s;
  animation-delay: 0.8826086957s;
}

.col-14 :nth-child(30) {
  animation-duration: 1.5217391304s;
  animation-delay: 0.9130434783s;
}

.col-14 :nth-child(31) {
  animation-duration: 1.5217391304s;
  animation-delay: 0.9434782609s;
}

.col-14 :nth-child(32) {
  animation-duration: 1.5217391304s;
  animation-delay: 0.9739130435s;
}

.col-14 :nth-child(33) {
  animation-duration: 1.5217391304s;
  animation-delay: 1.0043478261s;
}

.col-14 :nth-child(34) {
  animation-duration: 1.5217391304s;
  animation-delay: 1.0347826087s;
}

.col-14 :nth-child(35) {
  animation-duration: 1.5217391304s;
  animation-delay: 1.0652173913s;
}

.col-14 :nth-child(36) {
  animation-duration: 1.5217391304s;
  animation-delay: 1.0956521739s;
}

.col-14 :nth-child(37) {
  animation-duration: 1.5217391304s;
  animation-delay: 1.1260869565s;
}

.col-14 :nth-child(38) {
  animation-duration: 1.5217391304s;
  animation-delay: 1.1565217391s;
}

.col-14 :nth-child(39) {
  animation-duration: 1.5217391304s;
  animation-delay: 1.1869565217s;
}

.col-14 :nth-child(40) {
  animation-duration: 1.5217391304s;
  animation-delay: 1.2173913043s;
}

.col-14 :nth-child(41) {
  animation-duration: 1.5217391304s;
  animation-delay: 1.247826087s;
}

.col-14 :nth-child(42) {
  animation-duration: 1.5217391304s;
  animation-delay: 1.2782608696s;
}

.col-14 :nth-child(43) {
  animation-duration: 1.5217391304s;
  animation-delay: 1.3086956522s;
}

.col-14 :nth-child(44) {
  animation-duration: 1.5217391304s;
  animation-delay: 1.3391304348s;
}

.col-14 :nth-child(45) {
  animation-duration: 1.5217391304s;
  animation-delay: 1.3695652174s;
}

.col-14 :nth-child(46) {
  animation-duration: 1.5217391304s;
  animation-delay: 1.4s;
}

.col-14 :nth-child(47) {
  animation-duration: 1.5217391304s;
  animation-delay: 1.4304347826s;
}

.col-14 :nth-child(48) {
  animation-duration: 1.5217391304s;
  animation-delay: 1.4608695652s;
}

.col-14 :nth-child(49) {
  animation-duration: 1.5217391304s;
  animation-delay: 1.4913043478s;
}

.col-14 :nth-child(50) {
  animation-duration: 1.5217391304s;
  animation-delay: 1.5217391304s;
}

.col-15 :nth-child(1) {
  animation-duration: 4.6086956522s;
  animation-delay: 0.092173913s;
}

.col-15 :nth-child(2) {
  animation-duration: 4.6086956522s;
  animation-delay: 0.1843478261s;
}

.col-15 :nth-child(3) {
  animation-duration: 4.6086956522s;
  animation-delay: 0.2765217391s;
}

.col-15 :nth-child(4) {
  animation-duration: 4.6086956522s;
  animation-delay: 0.3686956522s;
}

.col-15 :nth-child(5) {
  animation-duration: 4.6086956522s;
  animation-delay: 0.4608695652s;
}

.col-15 :nth-child(6) {
  animation-duration: 4.6086956522s;
  animation-delay: 0.5530434783s;
}

.col-15 :nth-child(7) {
  animation-duration: 4.6086956522s;
  animation-delay: 0.6452173913s;
}

.col-15 :nth-child(8) {
  animation-duration: 4.6086956522s;
  animation-delay: 0.7373913043s;
}

.col-15 :nth-child(9) {
  animation-duration: 4.6086956522s;
  animation-delay: 0.8295652174s;
}

.col-15 :nth-child(10) {
  animation-duration: 4.6086956522s;
  animation-delay: 0.9217391304s;
}

.col-15 :nth-child(11) {
  animation-duration: 4.6086956522s;
  animation-delay: 1.0139130435s;
}

.col-15 :nth-child(12) {
  animation-duration: 4.6086956522s;
  animation-delay: 1.1060869565s;
}

.col-15 :nth-child(13) {
  animation-duration: 4.6086956522s;
  animation-delay: 1.1982608696s;
}

.col-15 :nth-child(14) {
  animation-duration: 4.6086956522s;
  animation-delay: 1.2904347826s;
}

.col-15 :nth-child(15) {
  animation-duration: 4.6086956522s;
  animation-delay: 1.3826086957s;
}

.col-15 :nth-child(16) {
  animation-duration: 4.6086956522s;
  animation-delay: 1.4747826087s;
}

.col-15 :nth-child(17) {
  animation-duration: 4.6086956522s;
  animation-delay: 1.5669565217s;
}

.col-15 :nth-child(18) {
  animation-duration: 4.6086956522s;
  animation-delay: 1.6591304348s;
}

.col-15 :nth-child(19) {
  animation-duration: 4.6086956522s;
  animation-delay: 1.7513043478s;
}

.col-15 :nth-child(20) {
  animation-duration: 4.6086956522s;
  animation-delay: 1.8434782609s;
}

.col-15 :nth-child(21) {
  animation-duration: 4.6086956522s;
  animation-delay: 1.9356521739s;
}

.col-15 :nth-child(22) {
  animation-duration: 4.6086956522s;
  animation-delay: 2.027826087s;
}

.col-15 :nth-child(23) {
  animation-duration: 4.6086956522s;
  animation-delay: 2.12s;
}

.col-15 :nth-child(24) {
  animation-duration: 4.6086956522s;
  animation-delay: 2.212173913s;
}

.col-15 :nth-child(25) {
  animation-duration: 4.6086956522s;
  animation-delay: 2.3043478261s;
}

.col-15 :nth-child(26) {
  animation-duration: 4.6086956522s;
  animation-delay: 2.3965217391s;
}

.col-15 :nth-child(27) {
  animation-duration: 4.6086956522s;
  animation-delay: 2.4886956522s;
}

.col-15 :nth-child(28) {
  animation-duration: 4.6086956522s;
  animation-delay: 2.5808695652s;
}

.col-15 :nth-child(29) {
  animation-duration: 4.6086956522s;
  animation-delay: 2.6730434783s;
}

.col-15 :nth-child(30) {
  animation-duration: 4.6086956522s;
  animation-delay: 2.7652173913s;
}

.col-15 :nth-child(31) {
  animation-duration: 4.6086956522s;
  animation-delay: 2.8573913043s;
}

.col-15 :nth-child(32) {
  animation-duration: 4.6086956522s;
  animation-delay: 2.9495652174s;
}

.col-15 :nth-child(33) {
  animation-duration: 4.6086956522s;
  animation-delay: 3.0417391304s;
}

.col-15 :nth-child(34) {
  animation-duration: 4.6086956522s;
  animation-delay: 3.1339130435s;
}

.col-15 :nth-child(35) {
  animation-duration: 4.6086956522s;
  animation-delay: 3.2260869565s;
}

.col-15 :nth-child(36) {
  animation-duration: 4.6086956522s;
  animation-delay: 3.3182608696s;
}

.col-15 :nth-child(37) {
  animation-duration: 4.6086956522s;
  animation-delay: 3.4104347826s;
}

.col-15 :nth-child(38) {
  animation-duration: 4.6086956522s;
  animation-delay: 3.5026086957s;
}

.col-15 :nth-child(39) {
  animation-duration: 4.6086956522s;
  animation-delay: 3.5947826087s;
}

.col-15 :nth-child(40) {
  animation-duration: 4.6086956522s;
  animation-delay: 3.6869565217s;
}

.col-15 :nth-child(41) {
  animation-duration: 4.6086956522s;
  animation-delay: 3.7791304348s;
}

.col-15 :nth-child(42) {
  animation-duration: 4.6086956522s;
  animation-delay: 3.8713043478s;
}

.col-15 :nth-child(43) {
  animation-duration: 4.6086956522s;
  animation-delay: 3.9634782609s;
}

.col-15 :nth-child(44) {
  animation-duration: 4.6086956522s;
  animation-delay: 4.0556521739s;
}

.col-15 :nth-child(45) {
  animation-duration: 4.6086956522s;
  animation-delay: 4.147826087s;
}

.col-15 :nth-child(46) {
  animation-duration: 4.6086956522s;
  animation-delay: 4.24s;
}

.col-15 :nth-child(47) {
  animation-duration: 4.6086956522s;
  animation-delay: 4.332173913s;
}

.col-15 :nth-child(48) {
  animation-duration: 4.6086956522s;
  animation-delay: 4.4243478261s;
}

.col-15 :nth-child(49) {
  animation-duration: 4.6086956522s;
  animation-delay: 4.5165217391s;
}

.col-15 :nth-child(50) {
  animation-duration: 4.6086956522s;
  animation-delay: 4.6086956522s;
}

.col-16 :nth-child(1) {
  animation-duration: 5.0434782609s;
  animation-delay: 0.1008695652s;
}

.col-16 :nth-child(2) {
  animation-duration: 5.0434782609s;
  animation-delay: 0.2017391304s;
}

.col-16 :nth-child(3) {
  animation-duration: 5.0434782609s;
  animation-delay: 0.3026086957s;
}

.col-16 :nth-child(4) {
  animation-duration: 5.0434782609s;
  animation-delay: 0.4034782609s;
}

.col-16 :nth-child(5) {
  animation-duration: 5.0434782609s;
  animation-delay: 0.5043478261s;
}

.col-16 :nth-child(6) {
  animation-duration: 5.0434782609s;
  animation-delay: 0.6052173913s;
}

.col-16 :nth-child(7) {
  animation-duration: 5.0434782609s;
  animation-delay: 0.7060869565s;
}

.col-16 :nth-child(8) {
  animation-duration: 5.0434782609s;
  animation-delay: 0.8069565217s;
}

.col-16 :nth-child(9) {
  animation-duration: 5.0434782609s;
  animation-delay: 0.907826087s;
}

.col-16 :nth-child(10) {
  animation-duration: 5.0434782609s;
  animation-delay: 1.0086956522s;
}

.col-16 :nth-child(11) {
  animation-duration: 5.0434782609s;
  animation-delay: 1.1095652174s;
}

.col-16 :nth-child(12) {
  animation-duration: 5.0434782609s;
  animation-delay: 1.2104347826s;
}

.col-16 :nth-child(13) {
  animation-duration: 5.0434782609s;
  animation-delay: 1.3113043478s;
}

.col-16 :nth-child(14) {
  animation-duration: 5.0434782609s;
  animation-delay: 1.412173913s;
}

.col-16 :nth-child(15) {
  animation-duration: 5.0434782609s;
  animation-delay: 1.5130434783s;
}

.col-16 :nth-child(16) {
  animation-duration: 5.0434782609s;
  animation-delay: 1.6139130435s;
}

.col-16 :nth-child(17) {
  animation-duration: 5.0434782609s;
  animation-delay: 1.7147826087s;
}

.col-16 :nth-child(18) {
  animation-duration: 5.0434782609s;
  animation-delay: 1.8156521739s;
}

.col-16 :nth-child(19) {
  animation-duration: 5.0434782609s;
  animation-delay: 1.9165217391s;
}

.col-16 :nth-child(20) {
  animation-duration: 5.0434782609s;
  animation-delay: 2.0173913043s;
}

.col-16 :nth-child(21) {
  animation-duration: 5.0434782609s;
  animation-delay: 2.1182608696s;
}

.col-16 :nth-child(22) {
  animation-duration: 5.0434782609s;
  animation-delay: 2.2191304348s;
}

.col-16 :nth-child(23) {
  animation-duration: 5.0434782609s;
  animation-delay: 2.32s;
}

.col-16 :nth-child(24) {
  animation-duration: 5.0434782609s;
  animation-delay: 2.4208695652s;
}

.col-16 :nth-child(25) {
  animation-duration: 5.0434782609s;
  animation-delay: 2.5217391304s;
}

.col-16 :nth-child(26) {
  animation-duration: 5.0434782609s;
  animation-delay: 2.6226086957s;
}

.col-16 :nth-child(27) {
  animation-duration: 5.0434782609s;
  animation-delay: 2.7234782609s;
}

.col-16 :nth-child(28) {
  animation-duration: 5.0434782609s;
  animation-delay: 2.8243478261s;
}

.col-16 :nth-child(29) {
  animation-duration: 5.0434782609s;
  animation-delay: 2.9252173913s;
}

.col-16 :nth-child(30) {
  animation-duration: 5.0434782609s;
  animation-delay: 3.0260869565s;
}

.col-16 :nth-child(31) {
  animation-duration: 5.0434782609s;
  animation-delay: 3.1269565217s;
}

.col-16 :nth-child(32) {
  animation-duration: 5.0434782609s;
  animation-delay: 3.227826087s;
}

.col-16 :nth-child(33) {
  animation-duration: 5.0434782609s;
  animation-delay: 3.3286956522s;
}

.col-16 :nth-child(34) {
  animation-duration: 5.0434782609s;
  animation-delay: 3.4295652174s;
}

.col-16 :nth-child(35) {
  animation-duration: 5.0434782609s;
  animation-delay: 3.5304347826s;
}

.col-16 :nth-child(36) {
  animation-duration: 5.0434782609s;
  animation-delay: 3.6313043478s;
}

.col-16 :nth-child(37) {
  animation-duration: 5.0434782609s;
  animation-delay: 3.732173913s;
}

.col-16 :nth-child(38) {
  animation-duration: 5.0434782609s;
  animation-delay: 3.8330434783s;
}

.col-16 :nth-child(39) {
  animation-duration: 5.0434782609s;
  animation-delay: 3.9339130435s;
}

.col-16 :nth-child(40) {
  animation-duration: 5.0434782609s;
  animation-delay: 4.0347826087s;
}

.col-16 :nth-child(41) {
  animation-duration: 5.0434782609s;
  animation-delay: 4.1356521739s;
}

.col-16 :nth-child(42) {
  animation-duration: 5.0434782609s;
  animation-delay: 4.2365217391s;
}

.col-16 :nth-child(43) {
  animation-duration: 5.0434782609s;
  animation-delay: 4.3373913043s;
}

.col-16 :nth-child(44) {
  animation-duration: 5.0434782609s;
  animation-delay: 4.4382608696s;
}

.col-16 :nth-child(45) {
  animation-duration: 5.0434782609s;
  animation-delay: 4.5391304348s;
}

.col-16 :nth-child(46) {
  animation-duration: 5.0434782609s;
  animation-delay: 4.64s;
}

.col-16 :nth-child(47) {
  animation-duration: 5.0434782609s;
  animation-delay: 4.7408695652s;
}

.col-16 :nth-child(48) {
  animation-duration: 5.0434782609s;
  animation-delay: 4.8417391304s;
}

.col-16 :nth-child(49) {
  animation-duration: 5.0434782609s;
  animation-delay: 4.9426086957s;
}

.col-16 :nth-child(50) {
  animation-duration: 5.0434782609s;
  animation-delay: 5.0434782609s;
}

.col-17 :nth-child(1) {
  animation-duration: 2.4782608696s;
  animation-delay: 0.0495652174s;
}

.col-17 :nth-child(2) {
  animation-duration: 2.4782608696s;
  animation-delay: 0.0991304348s;
}

.col-17 :nth-child(3) {
  animation-duration: 2.4782608696s;
  animation-delay: 0.1486956522s;
}

.col-17 :nth-child(4) {
  animation-duration: 2.4782608696s;
  animation-delay: 0.1982608696s;
}

.col-17 :nth-child(5) {
  animation-duration: 2.4782608696s;
  animation-delay: 0.247826087s;
}

.col-17 :nth-child(6) {
  animation-duration: 2.4782608696s;
  animation-delay: 0.2973913043s;
}

.col-17 :nth-child(7) {
  animation-duration: 2.4782608696s;
  animation-delay: 0.3469565217s;
}

.col-17 :nth-child(8) {
  animation-duration: 2.4782608696s;
  animation-delay: 0.3965217391s;
}

.col-17 :nth-child(9) {
  animation-duration: 2.4782608696s;
  animation-delay: 0.4460869565s;
}

.col-17 :nth-child(10) {
  animation-duration: 2.4782608696s;
  animation-delay: 0.4956521739s;
}

.col-17 :nth-child(11) {
  animation-duration: 2.4782608696s;
  animation-delay: 0.5452173913s;
}

.col-17 :nth-child(12) {
  animation-duration: 2.4782608696s;
  animation-delay: 0.5947826087s;
}

.col-17 :nth-child(13) {
  animation-duration: 2.4782608696s;
  animation-delay: 0.6443478261s;
}

.col-17 :nth-child(14) {
  animation-duration: 2.4782608696s;
  animation-delay: 0.6939130435s;
}

.col-17 :nth-child(15) {
  animation-duration: 2.4782608696s;
  animation-delay: 0.7434782609s;
}

.col-17 :nth-child(16) {
  animation-duration: 2.4782608696s;
  animation-delay: 0.7930434783s;
}

.col-17 :nth-child(17) {
  animation-duration: 2.4782608696s;
  animation-delay: 0.8426086957s;
}

.col-17 :nth-child(18) {
  animation-duration: 2.4782608696s;
  animation-delay: 0.892173913s;
}

.col-17 :nth-child(19) {
  animation-duration: 2.4782608696s;
  animation-delay: 0.9417391304s;
}

.col-17 :nth-child(20) {
  animation-duration: 2.4782608696s;
  animation-delay: 0.9913043478s;
}

.col-17 :nth-child(21) {
  animation-duration: 2.4782608696s;
  animation-delay: 1.0408695652s;
}

.col-17 :nth-child(22) {
  animation-duration: 2.4782608696s;
  animation-delay: 1.0904347826s;
}

.col-17 :nth-child(23) {
  animation-duration: 2.4782608696s;
  animation-delay: 1.14s;
}

.col-17 :nth-child(24) {
  animation-duration: 2.4782608696s;
  animation-delay: 1.1895652174s;
}

.col-17 :nth-child(25) {
  animation-duration: 2.4782608696s;
  animation-delay: 1.2391304348s;
}

.col-17 :nth-child(26) {
  animation-duration: 2.4782608696s;
  animation-delay: 1.2886956522s;
}

.col-17 :nth-child(27) {
  animation-duration: 2.4782608696s;
  animation-delay: 1.3382608696s;
}

.col-17 :nth-child(28) {
  animation-duration: 2.4782608696s;
  animation-delay: 1.387826087s;
}

.col-17 :nth-child(29) {
  animation-duration: 2.4782608696s;
  animation-delay: 1.4373913043s;
}

.col-17 :nth-child(30) {
  animation-duration: 2.4782608696s;
  animation-delay: 1.4869565217s;
}

.col-17 :nth-child(31) {
  animation-duration: 2.4782608696s;
  animation-delay: 1.5365217391s;
}

.col-17 :nth-child(32) {
  animation-duration: 2.4782608696s;
  animation-delay: 1.5860869565s;
}

.col-17 :nth-child(33) {
  animation-duration: 2.4782608696s;
  animation-delay: 1.6356521739s;
}

.col-17 :nth-child(34) {
  animation-duration: 2.4782608696s;
  animation-delay: 1.6852173913s;
}

.col-17 :nth-child(35) {
  animation-duration: 2.4782608696s;
  animation-delay: 1.7347826087s;
}

.col-17 :nth-child(36) {
  animation-duration: 2.4782608696s;
  animation-delay: 1.7843478261s;
}

.col-17 :nth-child(37) {
  animation-duration: 2.4782608696s;
  animation-delay: 1.8339130435s;
}

.col-17 :nth-child(38) {
  animation-duration: 2.4782608696s;
  animation-delay: 1.8834782609s;
}

.col-17 :nth-child(39) {
  animation-duration: 2.4782608696s;
  animation-delay: 1.9330434783s;
}

.col-17 :nth-child(40) {
  animation-duration: 2.4782608696s;
  animation-delay: 1.9826086957s;
}

.col-17 :nth-child(41) {
  animation-duration: 2.4782608696s;
  animation-delay: 2.032173913s;
}

.col-17 :nth-child(42) {
  animation-duration: 2.4782608696s;
  animation-delay: 2.0817391304s;
}

.col-17 :nth-child(43) {
  animation-duration: 2.4782608696s;
  animation-delay: 2.1313043478s;
}

.col-17 :nth-child(44) {
  animation-duration: 2.4782608696s;
  animation-delay: 2.1808695652s;
}

.col-17 :nth-child(45) {
  animation-duration: 2.4782608696s;
  animation-delay: 2.2304347826s;
}

.col-17 :nth-child(46) {
  animation-duration: 2.4782608696s;
  animation-delay: 2.28s;
}

.col-17 :nth-child(47) {
  animation-duration: 2.4782608696s;
  animation-delay: 2.3295652174s;
}

.col-17 :nth-child(48) {
  animation-duration: 2.4782608696s;
  animation-delay: 2.3791304348s;
}

.col-17 :nth-child(49) {
  animation-duration: 2.4782608696s;
  animation-delay: 2.4286956522s;
}

.col-17 :nth-child(50) {
  animation-duration: 2.4782608696s;
  animation-delay: 2.4782608696s;
}

.col-18 :nth-child(1) {
  animation-duration: 3.2608695652s;
  animation-delay: 0.0652173913s;
}

.col-18 :nth-child(2) {
  animation-duration: 3.2608695652s;
  animation-delay: 0.1304347826s;
}

.col-18 :nth-child(3) {
  animation-duration: 3.2608695652s;
  animation-delay: 0.1956521739s;
}

.col-18 :nth-child(4) {
  animation-duration: 3.2608695652s;
  animation-delay: 0.2608695652s;
}

.col-18 :nth-child(5) {
  animation-duration: 3.2608695652s;
  animation-delay: 0.3260869565s;
}

.col-18 :nth-child(6) {
  animation-duration: 3.2608695652s;
  animation-delay: 0.3913043478s;
}

.col-18 :nth-child(7) {
  animation-duration: 3.2608695652s;
  animation-delay: 0.4565217391s;
}

.col-18 :nth-child(8) {
  animation-duration: 3.2608695652s;
  animation-delay: 0.5217391304s;
}

.col-18 :nth-child(9) {
  animation-duration: 3.2608695652s;
  animation-delay: 0.5869565217s;
}

.col-18 :nth-child(10) {
  animation-duration: 3.2608695652s;
  animation-delay: 0.652173913s;
}

.col-18 :nth-child(11) {
  animation-duration: 3.2608695652s;
  animation-delay: 0.7173913043s;
}

.col-18 :nth-child(12) {
  animation-duration: 3.2608695652s;
  animation-delay: 0.7826086957s;
}

.col-18 :nth-child(13) {
  animation-duration: 3.2608695652s;
  animation-delay: 0.847826087s;
}

.col-18 :nth-child(14) {
  animation-duration: 3.2608695652s;
  animation-delay: 0.9130434783s;
}

.col-18 :nth-child(15) {
  animation-duration: 3.2608695652s;
  animation-delay: 0.9782608696s;
}

.col-18 :nth-child(16) {
  animation-duration: 3.2608695652s;
  animation-delay: 1.0434782609s;
}

.col-18 :nth-child(17) {
  animation-duration: 3.2608695652s;
  animation-delay: 1.1086956522s;
}

.col-18 :nth-child(18) {
  animation-duration: 3.2608695652s;
  animation-delay: 1.1739130435s;
}

.col-18 :nth-child(19) {
  animation-duration: 3.2608695652s;
  animation-delay: 1.2391304348s;
}

.col-18 :nth-child(20) {
  animation-duration: 3.2608695652s;
  animation-delay: 1.3043478261s;
}

.col-18 :nth-child(21) {
  animation-duration: 3.2608695652s;
  animation-delay: 1.3695652174s;
}

.col-18 :nth-child(22) {
  animation-duration: 3.2608695652s;
  animation-delay: 1.4347826087s;
}

.col-18 :nth-child(23) {
  animation-duration: 3.2608695652s;
  animation-delay: 1.5s;
}

.col-18 :nth-child(24) {
  animation-duration: 3.2608695652s;
  animation-delay: 1.5652173913s;
}

.col-18 :nth-child(25) {
  animation-duration: 3.2608695652s;
  animation-delay: 1.6304347826s;
}

.col-18 :nth-child(26) {
  animation-duration: 3.2608695652s;
  animation-delay: 1.6956521739s;
}

.col-18 :nth-child(27) {
  animation-duration: 3.2608695652s;
  animation-delay: 1.7608695652s;
}

.col-18 :nth-child(28) {
  animation-duration: 3.2608695652s;
  animation-delay: 1.8260869565s;
}

.col-18 :nth-child(29) {
  animation-duration: 3.2608695652s;
  animation-delay: 1.8913043478s;
}

.col-18 :nth-child(30) {
  animation-duration: 3.2608695652s;
  animation-delay: 1.9565217391s;
}

.col-18 :nth-child(31) {
  animation-duration: 3.2608695652s;
  animation-delay: 2.0217391304s;
}

.col-18 :nth-child(32) {
  animation-duration: 3.2608695652s;
  animation-delay: 2.0869565217s;
}

.col-18 :nth-child(33) {
  animation-duration: 3.2608695652s;
  animation-delay: 2.152173913s;
}

.col-18 :nth-child(34) {
  animation-duration: 3.2608695652s;
  animation-delay: 2.2173913043s;
}

.col-18 :nth-child(35) {
  animation-duration: 3.2608695652s;
  animation-delay: 2.2826086957s;
}

.col-18 :nth-child(36) {
  animation-duration: 3.2608695652s;
  animation-delay: 2.347826087s;
}

.col-18 :nth-child(37) {
  animation-duration: 3.2608695652s;
  animation-delay: 2.4130434783s;
}

.col-18 :nth-child(38) {
  animation-duration: 3.2608695652s;
  animation-delay: 2.4782608696s;
}

.col-18 :nth-child(39) {
  animation-duration: 3.2608695652s;
  animation-delay: 2.5434782609s;
}

.col-18 :nth-child(40) {
  animation-duration: 3.2608695652s;
  animation-delay: 2.6086956522s;
}

.col-18 :nth-child(41) {
  animation-duration: 3.2608695652s;
  animation-delay: 2.6739130435s;
}

.col-18 :nth-child(42) {
  animation-duration: 3.2608695652s;
  animation-delay: 2.7391304348s;
}

.col-18 :nth-child(43) {
  animation-duration: 3.2608695652s;
  animation-delay: 2.8043478261s;
}

.col-18 :nth-child(44) {
  animation-duration: 3.2608695652s;
  animation-delay: 2.8695652174s;
}

.col-18 :nth-child(45) {
  animation-duration: 3.2608695652s;
  animation-delay: 2.9347826087s;
}

.col-18 :nth-child(46) {
  animation-duration: 3.2608695652s;
  animation-delay: 3s;
}

.col-18 :nth-child(47) {
  animation-duration: 3.2608695652s;
  animation-delay: 3.0652173913s;
}

.col-18 :nth-child(48) {
  animation-duration: 3.2608695652s;
  animation-delay: 3.1304347826s;
}

.col-18 :nth-child(49) {
  animation-duration: 3.2608695652s;
  animation-delay: 3.1956521739s;
}

.col-18 :nth-child(50) {
  animation-duration: 3.2608695652s;
  animation-delay: 3.2608695652s;
}

.col-19 :nth-child(1) {
  animation-duration: 1.7391304348s;
  animation-delay: 0.0347826087s;
}

.col-19 :nth-child(2) {
  animation-duration: 1.7391304348s;
  animation-delay: 0.0695652174s;
}

.col-19 :nth-child(3) {
  animation-duration: 1.7391304348s;
  animation-delay: 0.1043478261s;
}

.col-19 :nth-child(4) {
  animation-duration: 1.7391304348s;
  animation-delay: 0.1391304348s;
}

.col-19 :nth-child(5) {
  animation-duration: 1.7391304348s;
  animation-delay: 0.1739130435s;
}

.col-19 :nth-child(6) {
  animation-duration: 1.7391304348s;
  animation-delay: 0.2086956522s;
}

.col-19 :nth-child(7) {
  animation-duration: 1.7391304348s;
  animation-delay: 0.2434782609s;
}

.col-19 :nth-child(8) {
  animation-duration: 1.7391304348s;
  animation-delay: 0.2782608696s;
}

.col-19 :nth-child(9) {
  animation-duration: 1.7391304348s;
  animation-delay: 0.3130434783s;
}

.col-19 :nth-child(10) {
  animation-duration: 1.7391304348s;
  animation-delay: 0.347826087s;
}

.col-19 :nth-child(11) {
  animation-duration: 1.7391304348s;
  animation-delay: 0.3826086957s;
}

.col-19 :nth-child(12) {
  animation-duration: 1.7391304348s;
  animation-delay: 0.4173913043s;
}

.col-19 :nth-child(13) {
  animation-duration: 1.7391304348s;
  animation-delay: 0.452173913s;
}

.col-19 :nth-child(14) {
  animation-duration: 1.7391304348s;
  animation-delay: 0.4869565217s;
}

.col-19 :nth-child(15) {
  animation-duration: 1.7391304348s;
  animation-delay: 0.5217391304s;
}

.col-19 :nth-child(16) {
  animation-duration: 1.7391304348s;
  animation-delay: 0.5565217391s;
}

.col-19 :nth-child(17) {
  animation-duration: 1.7391304348s;
  animation-delay: 0.5913043478s;
}

.col-19 :nth-child(18) {
  animation-duration: 1.7391304348s;
  animation-delay: 0.6260869565s;
}

.col-19 :nth-child(19) {
  animation-duration: 1.7391304348s;
  animation-delay: 0.6608695652s;
}

.col-19 :nth-child(20) {
  animation-duration: 1.7391304348s;
  animation-delay: 0.6956521739s;
}

.col-19 :nth-child(21) {
  animation-duration: 1.7391304348s;
  animation-delay: 0.7304347826s;
}

.col-19 :nth-child(22) {
  animation-duration: 1.7391304348s;
  animation-delay: 0.7652173913s;
}

.col-19 :nth-child(23) {
  animation-duration: 1.7391304348s;
  animation-delay: 0.8s;
}

.col-19 :nth-child(24) {
  animation-duration: 1.7391304348s;
  animation-delay: 0.8347826087s;
}

.col-19 :nth-child(25) {
  animation-duration: 1.7391304348s;
  animation-delay: 0.8695652174s;
}

.col-19 :nth-child(26) {
  animation-duration: 1.7391304348s;
  animation-delay: 0.9043478261s;
}

.col-19 :nth-child(27) {
  animation-duration: 1.7391304348s;
  animation-delay: 0.9391304348s;
}

.col-19 :nth-child(28) {
  animation-duration: 1.7391304348s;
  animation-delay: 0.9739130435s;
}

.col-19 :nth-child(29) {
  animation-duration: 1.7391304348s;
  animation-delay: 1.0086956522s;
}

.col-19 :nth-child(30) {
  animation-duration: 1.7391304348s;
  animation-delay: 1.0434782609s;
}

.col-19 :nth-child(31) {
  animation-duration: 1.7391304348s;
  animation-delay: 1.0782608696s;
}

.col-19 :nth-child(32) {
  animation-duration: 1.7391304348s;
  animation-delay: 1.1130434783s;
}

.col-19 :nth-child(33) {
  animation-duration: 1.7391304348s;
  animation-delay: 1.147826087s;
}

.col-19 :nth-child(34) {
  animation-duration: 1.7391304348s;
  animation-delay: 1.1826086957s;
}

.col-19 :nth-child(35) {
  animation-duration: 1.7391304348s;
  animation-delay: 1.2173913043s;
}

.col-19 :nth-child(36) {
  animation-duration: 1.7391304348s;
  animation-delay: 1.252173913s;
}

.col-19 :nth-child(37) {
  animation-duration: 1.7391304348s;
  animation-delay: 1.2869565217s;
}

.col-19 :nth-child(38) {
  animation-duration: 1.7391304348s;
  animation-delay: 1.3217391304s;
}

.col-19 :nth-child(39) {
  animation-duration: 1.7391304348s;
  animation-delay: 1.3565217391s;
}

.col-19 :nth-child(40) {
  animation-duration: 1.7391304348s;
  animation-delay: 1.3913043478s;
}

.col-19 :nth-child(41) {
  animation-duration: 1.7391304348s;
  animation-delay: 1.4260869565s;
}

.col-19 :nth-child(42) {
  animation-duration: 1.7391304348s;
  animation-delay: 1.4608695652s;
}

.col-19 :nth-child(43) {
  animation-duration: 1.7391304348s;
  animation-delay: 1.4956521739s;
}

.col-19 :nth-child(44) {
  animation-duration: 1.7391304348s;
  animation-delay: 1.5304347826s;
}

.col-19 :nth-child(45) {
  animation-duration: 1.7391304348s;
  animation-delay: 1.5652173913s;
}

.col-19 :nth-child(46) {
  animation-duration: 1.7391304348s;
  animation-delay: 1.6s;
}

.col-19 :nth-child(47) {
  animation-duration: 1.7391304348s;
  animation-delay: 1.6347826087s;
}

.col-19 :nth-child(48) {
  animation-duration: 1.7391304348s;
  animation-delay: 1.6695652174s;
}

.col-19 :nth-child(49) {
  animation-duration: 1.7391304348s;
  animation-delay: 1.7043478261s;
}

.col-19 :nth-child(50) {
  animation-duration: 1.7391304348s;
  animation-delay: 1.7391304348s;
}

.col-20 :nth-child(1) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.0547826087s;
}

.col-20 :nth-child(2) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.1095652174s;
}

.col-20 :nth-child(3) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.1643478261s;
}

.col-20 :nth-child(4) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.2191304348s;
}

.col-20 :nth-child(5) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.2739130435s;
}

.col-20 :nth-child(6) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.3286956522s;
}

.col-20 :nth-child(7) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.3834782609s;
}

.col-20 :nth-child(8) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.4382608696s;
}

.col-20 :nth-child(9) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.4930434783s;
}

.col-20 :nth-child(10) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.547826087s;
}

.col-20 :nth-child(11) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.6026086957s;
}

.col-20 :nth-child(12) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.6573913043s;
}

.col-20 :nth-child(13) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.712173913s;
}

.col-20 :nth-child(14) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.7669565217s;
}

.col-20 :nth-child(15) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.8217391304s;
}

.col-20 :nth-child(16) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.8765217391s;
}

.col-20 :nth-child(17) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.9313043478s;
}

.col-20 :nth-child(18) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.9860869565s;
}

.col-20 :nth-child(19) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.0408695652s;
}

.col-20 :nth-child(20) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.0956521739s;
}

.col-20 :nth-child(21) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.1504347826s;
}

.col-20 :nth-child(22) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.2052173913s;
}

.col-20 :nth-child(23) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.26s;
}

.col-20 :nth-child(24) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.3147826087s;
}

.col-20 :nth-child(25) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.3695652174s;
}

.col-20 :nth-child(26) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.4243478261s;
}

.col-20 :nth-child(27) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.4791304348s;
}

.col-20 :nth-child(28) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.5339130435s;
}

.col-20 :nth-child(29) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.5886956522s;
}

.col-20 :nth-child(30) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.6434782609s;
}

.col-20 :nth-child(31) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.6982608696s;
}

.col-20 :nth-child(32) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.7530434783s;
}

.col-20 :nth-child(33) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.807826087s;
}

.col-20 :nth-child(34) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.8626086957s;
}

.col-20 :nth-child(35) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.9173913043s;
}

.col-20 :nth-child(36) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.972173913s;
}

.col-20 :nth-child(37) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.0269565217s;
}

.col-20 :nth-child(38) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.0817391304s;
}

.col-20 :nth-child(39) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.1365217391s;
}

.col-20 :nth-child(40) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.1913043478s;
}

.col-20 :nth-child(41) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.2460869565s;
}

.col-20 :nth-child(42) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.3008695652s;
}

.col-20 :nth-child(43) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.3556521739s;
}

.col-20 :nth-child(44) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.4104347826s;
}

.col-20 :nth-child(45) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.4652173913s;
}

.col-20 :nth-child(46) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.52s;
}

.col-20 :nth-child(47) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.5747826087s;
}

.col-20 :nth-child(48) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.6295652174s;
}

.col-20 :nth-child(49) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.6843478261s;
}

.col-20 :nth-child(50) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.7391304348s;
}

.col-21 :nth-child(1) {
  animation-duration: 4.4347826087s;
  animation-delay: 0.0886956522s;
}

.col-21 :nth-child(2) {
  animation-duration: 4.4347826087s;
  animation-delay: 0.1773913043s;
}

.col-21 :nth-child(3) {
  animation-duration: 4.4347826087s;
  animation-delay: 0.2660869565s;
}

.col-21 :nth-child(4) {
  animation-duration: 4.4347826087s;
  animation-delay: 0.3547826087s;
}

.col-21 :nth-child(5) {
  animation-duration: 4.4347826087s;
  animation-delay: 0.4434782609s;
}

.col-21 :nth-child(6) {
  animation-duration: 4.4347826087s;
  animation-delay: 0.532173913s;
}

.col-21 :nth-child(7) {
  animation-duration: 4.4347826087s;
  animation-delay: 0.6208695652s;
}

.col-21 :nth-child(8) {
  animation-duration: 4.4347826087s;
  animation-delay: 0.7095652174s;
}

.col-21 :nth-child(9) {
  animation-duration: 4.4347826087s;
  animation-delay: 0.7982608696s;
}

.col-21 :nth-child(10) {
  animation-duration: 4.4347826087s;
  animation-delay: 0.8869565217s;
}

.col-21 :nth-child(11) {
  animation-duration: 4.4347826087s;
  animation-delay: 0.9756521739s;
}

.col-21 :nth-child(12) {
  animation-duration: 4.4347826087s;
  animation-delay: 1.0643478261s;
}

.col-21 :nth-child(13) {
  animation-duration: 4.4347826087s;
  animation-delay: 1.1530434783s;
}

.col-21 :nth-child(14) {
  animation-duration: 4.4347826087s;
  animation-delay: 1.2417391304s;
}

.col-21 :nth-child(15) {
  animation-duration: 4.4347826087s;
  animation-delay: 1.3304347826s;
}

.col-21 :nth-child(16) {
  animation-duration: 4.4347826087s;
  animation-delay: 1.4191304348s;
}

.col-21 :nth-child(17) {
  animation-duration: 4.4347826087s;
  animation-delay: 1.507826087s;
}

.col-21 :nth-child(18) {
  animation-duration: 4.4347826087s;
  animation-delay: 1.5965217391s;
}

.col-21 :nth-child(19) {
  animation-duration: 4.4347826087s;
  animation-delay: 1.6852173913s;
}

.col-21 :nth-child(20) {
  animation-duration: 4.4347826087s;
  animation-delay: 1.7739130435s;
}

.col-21 :nth-child(21) {
  animation-duration: 4.4347826087s;
  animation-delay: 1.8626086957s;
}

.col-21 :nth-child(22) {
  animation-duration: 4.4347826087s;
  animation-delay: 1.9513043478s;
}

.col-21 :nth-child(23) {
  animation-duration: 4.4347826087s;
  animation-delay: 2.04s;
}

.col-21 :nth-child(24) {
  animation-duration: 4.4347826087s;
  animation-delay: 2.1286956522s;
}

.col-21 :nth-child(25) {
  animation-duration: 4.4347826087s;
  animation-delay: 2.2173913043s;
}

.col-21 :nth-child(26) {
  animation-duration: 4.4347826087s;
  animation-delay: 2.3060869565s;
}

.col-21 :nth-child(27) {
  animation-duration: 4.4347826087s;
  animation-delay: 2.3947826087s;
}

.col-21 :nth-child(28) {
  animation-duration: 4.4347826087s;
  animation-delay: 2.4834782609s;
}

.col-21 :nth-child(29) {
  animation-duration: 4.4347826087s;
  animation-delay: 2.572173913s;
}

.col-21 :nth-child(30) {
  animation-duration: 4.4347826087s;
  animation-delay: 2.6608695652s;
}

.col-21 :nth-child(31) {
  animation-duration: 4.4347826087s;
  animation-delay: 2.7495652174s;
}

.col-21 :nth-child(32) {
  animation-duration: 4.4347826087s;
  animation-delay: 2.8382608696s;
}

.col-21 :nth-child(33) {
  animation-duration: 4.4347826087s;
  animation-delay: 2.9269565217s;
}

.col-21 :nth-child(34) {
  animation-duration: 4.4347826087s;
  animation-delay: 3.0156521739s;
}

.col-21 :nth-child(35) {
  animation-duration: 4.4347826087s;
  animation-delay: 3.1043478261s;
}

.col-21 :nth-child(36) {
  animation-duration: 4.4347826087s;
  animation-delay: 3.1930434783s;
}

.col-21 :nth-child(37) {
  animation-duration: 4.4347826087s;
  animation-delay: 3.2817391304s;
}

.col-21 :nth-child(38) {
  animation-duration: 4.4347826087s;
  animation-delay: 3.3704347826s;
}

.col-21 :nth-child(39) {
  animation-duration: 4.4347826087s;
  animation-delay: 3.4591304348s;
}

.col-21 :nth-child(40) {
  animation-duration: 4.4347826087s;
  animation-delay: 3.547826087s;
}

.col-21 :nth-child(41) {
  animation-duration: 4.4347826087s;
  animation-delay: 3.6365217391s;
}

.col-21 :nth-child(42) {
  animation-duration: 4.4347826087s;
  animation-delay: 3.7252173913s;
}

.col-21 :nth-child(43) {
  animation-duration: 4.4347826087s;
  animation-delay: 3.8139130435s;
}

.col-21 :nth-child(44) {
  animation-duration: 4.4347826087s;
  animation-delay: 3.9026086957s;
}

.col-21 :nth-child(45) {
  animation-duration: 4.4347826087s;
  animation-delay: 3.9913043478s;
}

.col-21 :nth-child(46) {
  animation-duration: 4.4347826087s;
  animation-delay: 4.08s;
}

.col-21 :nth-child(47) {
  animation-duration: 4.4347826087s;
  animation-delay: 4.1686956522s;
}

.col-21 :nth-child(48) {
  animation-duration: 4.4347826087s;
  animation-delay: 4.2573913043s;
}

.col-21 :nth-child(49) {
  animation-duration: 4.4347826087s;
  animation-delay: 4.3460869565s;
}

.col-21 :nth-child(50) {
  animation-duration: 4.4347826087s;
  animation-delay: 4.4347826087s;
}

.col-22 :nth-child(1) {
  animation-duration: 4.3043478261s;
  animation-delay: 0.0860869565s;
}

.col-22 :nth-child(2) {
  animation-duration: 4.3043478261s;
  animation-delay: 0.172173913s;
}

.col-22 :nth-child(3) {
  animation-duration: 4.3043478261s;
  animation-delay: 0.2582608696s;
}

.col-22 :nth-child(4) {
  animation-duration: 4.3043478261s;
  animation-delay: 0.3443478261s;
}

.col-22 :nth-child(5) {
  animation-duration: 4.3043478261s;
  animation-delay: 0.4304347826s;
}

.col-22 :nth-child(6) {
  animation-duration: 4.3043478261s;
  animation-delay: 0.5165217391s;
}

.col-22 :nth-child(7) {
  animation-duration: 4.3043478261s;
  animation-delay: 0.6026086957s;
}

.col-22 :nth-child(8) {
  animation-duration: 4.3043478261s;
  animation-delay: 0.6886956522s;
}

.col-22 :nth-child(9) {
  animation-duration: 4.3043478261s;
  animation-delay: 0.7747826087s;
}

.col-22 :nth-child(10) {
  animation-duration: 4.3043478261s;
  animation-delay: 0.8608695652s;
}

.col-22 :nth-child(11) {
  animation-duration: 4.3043478261s;
  animation-delay: 0.9469565217s;
}

.col-22 :nth-child(12) {
  animation-duration: 4.3043478261s;
  animation-delay: 1.0330434783s;
}

.col-22 :nth-child(13) {
  animation-duration: 4.3043478261s;
  animation-delay: 1.1191304348s;
}

.col-22 :nth-child(14) {
  animation-duration: 4.3043478261s;
  animation-delay: 1.2052173913s;
}

.col-22 :nth-child(15) {
  animation-duration: 4.3043478261s;
  animation-delay: 1.2913043478s;
}

.col-22 :nth-child(16) {
  animation-duration: 4.3043478261s;
  animation-delay: 1.3773913043s;
}

.col-22 :nth-child(17) {
  animation-duration: 4.3043478261s;
  animation-delay: 1.4634782609s;
}

.col-22 :nth-child(18) {
  animation-duration: 4.3043478261s;
  animation-delay: 1.5495652174s;
}

.col-22 :nth-child(19) {
  animation-duration: 4.3043478261s;
  animation-delay: 1.6356521739s;
}

.col-22 :nth-child(20) {
  animation-duration: 4.3043478261s;
  animation-delay: 1.7217391304s;
}

.col-22 :nth-child(21) {
  animation-duration: 4.3043478261s;
  animation-delay: 1.807826087s;
}

.col-22 :nth-child(22) {
  animation-duration: 4.3043478261s;
  animation-delay: 1.8939130435s;
}

.col-22 :nth-child(23) {
  animation-duration: 4.3043478261s;
  animation-delay: 1.98s;
}

.col-22 :nth-child(24) {
  animation-duration: 4.3043478261s;
  animation-delay: 2.0660869565s;
}

.col-22 :nth-child(25) {
  animation-duration: 4.3043478261s;
  animation-delay: 2.152173913s;
}

.col-22 :nth-child(26) {
  animation-duration: 4.3043478261s;
  animation-delay: 2.2382608696s;
}

.col-22 :nth-child(27) {
  animation-duration: 4.3043478261s;
  animation-delay: 2.3243478261s;
}

.col-22 :nth-child(28) {
  animation-duration: 4.3043478261s;
  animation-delay: 2.4104347826s;
}

.col-22 :nth-child(29) {
  animation-duration: 4.3043478261s;
  animation-delay: 2.4965217391s;
}

.col-22 :nth-child(30) {
  animation-duration: 4.3043478261s;
  animation-delay: 2.5826086957s;
}

.col-22 :nth-child(31) {
  animation-duration: 4.3043478261s;
  animation-delay: 2.6686956522s;
}

.col-22 :nth-child(32) {
  animation-duration: 4.3043478261s;
  animation-delay: 2.7547826087s;
}

.col-22 :nth-child(33) {
  animation-duration: 4.3043478261s;
  animation-delay: 2.8408695652s;
}

.col-22 :nth-child(34) {
  animation-duration: 4.3043478261s;
  animation-delay: 2.9269565217s;
}

.col-22 :nth-child(35) {
  animation-duration: 4.3043478261s;
  animation-delay: 3.0130434783s;
}

.col-22 :nth-child(36) {
  animation-duration: 4.3043478261s;
  animation-delay: 3.0991304348s;
}

.col-22 :nth-child(37) {
  animation-duration: 4.3043478261s;
  animation-delay: 3.1852173913s;
}

.col-22 :nth-child(38) {
  animation-duration: 4.3043478261s;
  animation-delay: 3.2713043478s;
}

.col-22 :nth-child(39) {
  animation-duration: 4.3043478261s;
  animation-delay: 3.3573913043s;
}

.col-22 :nth-child(40) {
  animation-duration: 4.3043478261s;
  animation-delay: 3.4434782609s;
}

.col-22 :nth-child(41) {
  animation-duration: 4.3043478261s;
  animation-delay: 3.5295652174s;
}

.col-22 :nth-child(42) {
  animation-duration: 4.3043478261s;
  animation-delay: 3.6156521739s;
}

.col-22 :nth-child(43) {
  animation-duration: 4.3043478261s;
  animation-delay: 3.7017391304s;
}

.col-22 :nth-child(44) {
  animation-duration: 4.3043478261s;
  animation-delay: 3.787826087s;
}

.col-22 :nth-child(45) {
  animation-duration: 4.3043478261s;
  animation-delay: 3.8739130435s;
}

.col-22 :nth-child(46) {
  animation-duration: 4.3043478261s;
  animation-delay: 3.96s;
}

.col-22 :nth-child(47) {
  animation-duration: 4.3043478261s;
  animation-delay: 4.0460869565s;
}

.col-22 :nth-child(48) {
  animation-duration: 4.3043478261s;
  animation-delay: 4.132173913s;
}

.col-22 :nth-child(49) {
  animation-duration: 4.3043478261s;
  animation-delay: 4.2182608696s;
}

.col-22 :nth-child(50) {
  animation-duration: 4.3043478261s;
  animation-delay: 4.3043478261s;
}

.col-23 :nth-child(1) {
  animation-duration: 5.347826087s;
  animation-delay: 0.1069565217s;
}

.col-23 :nth-child(2) {
  animation-duration: 5.347826087s;
  animation-delay: 0.2139130435s;
}

.col-23 :nth-child(3) {
  animation-duration: 5.347826087s;
  animation-delay: 0.3208695652s;
}

.col-23 :nth-child(4) {
  animation-duration: 5.347826087s;
  animation-delay: 0.427826087s;
}

.col-23 :nth-child(5) {
  animation-duration: 5.347826087s;
  animation-delay: 0.5347826087s;
}

.col-23 :nth-child(6) {
  animation-duration: 5.347826087s;
  animation-delay: 0.6417391304s;
}

.col-23 :nth-child(7) {
  animation-duration: 5.347826087s;
  animation-delay: 0.7486956522s;
}

.col-23 :nth-child(8) {
  animation-duration: 5.347826087s;
  animation-delay: 0.8556521739s;
}

.col-23 :nth-child(9) {
  animation-duration: 5.347826087s;
  animation-delay: 0.9626086957s;
}

.col-23 :nth-child(10) {
  animation-duration: 5.347826087s;
  animation-delay: 1.0695652174s;
}

.col-23 :nth-child(11) {
  animation-duration: 5.347826087s;
  animation-delay: 1.1765217391s;
}

.col-23 :nth-child(12) {
  animation-duration: 5.347826087s;
  animation-delay: 1.2834782609s;
}

.col-23 :nth-child(13) {
  animation-duration: 5.347826087s;
  animation-delay: 1.3904347826s;
}

.col-23 :nth-child(14) {
  animation-duration: 5.347826087s;
  animation-delay: 1.4973913043s;
}

.col-23 :nth-child(15) {
  animation-duration: 5.347826087s;
  animation-delay: 1.6043478261s;
}

.col-23 :nth-child(16) {
  animation-duration: 5.347826087s;
  animation-delay: 1.7113043478s;
}

.col-23 :nth-child(17) {
  animation-duration: 5.347826087s;
  animation-delay: 1.8182608696s;
}

.col-23 :nth-child(18) {
  animation-duration: 5.347826087s;
  animation-delay: 1.9252173913s;
}

.col-23 :nth-child(19) {
  animation-duration: 5.347826087s;
  animation-delay: 2.032173913s;
}

.col-23 :nth-child(20) {
  animation-duration: 5.347826087s;
  animation-delay: 2.1391304348s;
}

.col-23 :nth-child(21) {
  animation-duration: 5.347826087s;
  animation-delay: 2.2460869565s;
}

.col-23 :nth-child(22) {
  animation-duration: 5.347826087s;
  animation-delay: 2.3530434783s;
}

.col-23 :nth-child(23) {
  animation-duration: 5.347826087s;
  animation-delay: 2.46s;
}

.col-23 :nth-child(24) {
  animation-duration: 5.347826087s;
  animation-delay: 2.5669565217s;
}

.col-23 :nth-child(25) {
  animation-duration: 5.347826087s;
  animation-delay: 2.6739130435s;
}

.col-23 :nth-child(26) {
  animation-duration: 5.347826087s;
  animation-delay: 2.7808695652s;
}

.col-23 :nth-child(27) {
  animation-duration: 5.347826087s;
  animation-delay: 2.887826087s;
}

.col-23 :nth-child(28) {
  animation-duration: 5.347826087s;
  animation-delay: 2.9947826087s;
}

.col-23 :nth-child(29) {
  animation-duration: 5.347826087s;
  animation-delay: 3.1017391304s;
}

.col-23 :nth-child(30) {
  animation-duration: 5.347826087s;
  animation-delay: 3.2086956522s;
}

.col-23 :nth-child(31) {
  animation-duration: 5.347826087s;
  animation-delay: 3.3156521739s;
}

.col-23 :nth-child(32) {
  animation-duration: 5.347826087s;
  animation-delay: 3.4226086957s;
}

.col-23 :nth-child(33) {
  animation-duration: 5.347826087s;
  animation-delay: 3.5295652174s;
}

.col-23 :nth-child(34) {
  animation-duration: 5.347826087s;
  animation-delay: 3.6365217391s;
}

.col-23 :nth-child(35) {
  animation-duration: 5.347826087s;
  animation-delay: 3.7434782609s;
}

.col-23 :nth-child(36) {
  animation-duration: 5.347826087s;
  animation-delay: 3.8504347826s;
}

.col-23 :nth-child(37) {
  animation-duration: 5.347826087s;
  animation-delay: 3.9573913043s;
}

.col-23 :nth-child(38) {
  animation-duration: 5.347826087s;
  animation-delay: 4.0643478261s;
}

.col-23 :nth-child(39) {
  animation-duration: 5.347826087s;
  animation-delay: 4.1713043478s;
}

.col-23 :nth-child(40) {
  animation-duration: 5.347826087s;
  animation-delay: 4.2782608696s;
}

.col-23 :nth-child(41) {
  animation-duration: 5.347826087s;
  animation-delay: 4.3852173913s;
}

.col-23 :nth-child(42) {
  animation-duration: 5.347826087s;
  animation-delay: 4.492173913s;
}

.col-23 :nth-child(43) {
  animation-duration: 5.347826087s;
  animation-delay: 4.5991304348s;
}

.col-23 :nth-child(44) {
  animation-duration: 5.347826087s;
  animation-delay: 4.7060869565s;
}

.col-23 :nth-child(45) {
  animation-duration: 5.347826087s;
  animation-delay: 4.8130434783s;
}

.col-23 :nth-child(46) {
  animation-duration: 5.347826087s;
  animation-delay: 4.92s;
}

.col-23 :nth-child(47) {
  animation-duration: 5.347826087s;
  animation-delay: 5.0269565217s;
}

.col-23 :nth-child(48) {
  animation-duration: 5.347826087s;
  animation-delay: 5.1339130435s;
}

.col-23 :nth-child(49) {
  animation-duration: 5.347826087s;
  animation-delay: 5.2408695652s;
}

.col-23 :nth-child(50) {
  animation-duration: 5.347826087s;
  animation-delay: 5.347826087s;
}

.col-24 :nth-child(1) {
  animation-duration: 3.5217391304s;
  animation-delay: 0.0704347826s;
}

.col-24 :nth-child(2) {
  animation-duration: 3.5217391304s;
  animation-delay: 0.1408695652s;
}

.col-24 :nth-child(3) {
  animation-duration: 3.5217391304s;
  animation-delay: 0.2113043478s;
}

.col-24 :nth-child(4) {
  animation-duration: 3.5217391304s;
  animation-delay: 0.2817391304s;
}

.col-24 :nth-child(5) {
  animation-duration: 3.5217391304s;
  animation-delay: 0.352173913s;
}

.col-24 :nth-child(6) {
  animation-duration: 3.5217391304s;
  animation-delay: 0.4226086957s;
}

.col-24 :nth-child(7) {
  animation-duration: 3.5217391304s;
  animation-delay: 0.4930434783s;
}

.col-24 :nth-child(8) {
  animation-duration: 3.5217391304s;
  animation-delay: 0.5634782609s;
}

.col-24 :nth-child(9) {
  animation-duration: 3.5217391304s;
  animation-delay: 0.6339130435s;
}

.col-24 :nth-child(10) {
  animation-duration: 3.5217391304s;
  animation-delay: 0.7043478261s;
}

.col-24 :nth-child(11) {
  animation-duration: 3.5217391304s;
  animation-delay: 0.7747826087s;
}

.col-24 :nth-child(12) {
  animation-duration: 3.5217391304s;
  animation-delay: 0.8452173913s;
}

.col-24 :nth-child(13) {
  animation-duration: 3.5217391304s;
  animation-delay: 0.9156521739s;
}

.col-24 :nth-child(14) {
  animation-duration: 3.5217391304s;
  animation-delay: 0.9860869565s;
}

.col-24 :nth-child(15) {
  animation-duration: 3.5217391304s;
  animation-delay: 1.0565217391s;
}

.col-24 :nth-child(16) {
  animation-duration: 3.5217391304s;
  animation-delay: 1.1269565217s;
}

.col-24 :nth-child(17) {
  animation-duration: 3.5217391304s;
  animation-delay: 1.1973913043s;
}

.col-24 :nth-child(18) {
  animation-duration: 3.5217391304s;
  animation-delay: 1.267826087s;
}

.col-24 :nth-child(19) {
  animation-duration: 3.5217391304s;
  animation-delay: 1.3382608696s;
}

.col-24 :nth-child(20) {
  animation-duration: 3.5217391304s;
  animation-delay: 1.4086956522s;
}

.col-24 :nth-child(21) {
  animation-duration: 3.5217391304s;
  animation-delay: 1.4791304348s;
}

.col-24 :nth-child(22) {
  animation-duration: 3.5217391304s;
  animation-delay: 1.5495652174s;
}

.col-24 :nth-child(23) {
  animation-duration: 3.5217391304s;
  animation-delay: 1.62s;
}

.col-24 :nth-child(24) {
  animation-duration: 3.5217391304s;
  animation-delay: 1.6904347826s;
}

.col-24 :nth-child(25) {
  animation-duration: 3.5217391304s;
  animation-delay: 1.7608695652s;
}

.col-24 :nth-child(26) {
  animation-duration: 3.5217391304s;
  animation-delay: 1.8313043478s;
}

.col-24 :nth-child(27) {
  animation-duration: 3.5217391304s;
  animation-delay: 1.9017391304s;
}

.col-24 :nth-child(28) {
  animation-duration: 3.5217391304s;
  animation-delay: 1.972173913s;
}

.col-24 :nth-child(29) {
  animation-duration: 3.5217391304s;
  animation-delay: 2.0426086957s;
}

.col-24 :nth-child(30) {
  animation-duration: 3.5217391304s;
  animation-delay: 2.1130434783s;
}

.col-24 :nth-child(31) {
  animation-duration: 3.5217391304s;
  animation-delay: 2.1834782609s;
}

.col-24 :nth-child(32) {
  animation-duration: 3.5217391304s;
  animation-delay: 2.2539130435s;
}

.col-24 :nth-child(33) {
  animation-duration: 3.5217391304s;
  animation-delay: 2.3243478261s;
}

.col-24 :nth-child(34) {
  animation-duration: 3.5217391304s;
  animation-delay: 2.3947826087s;
}

.col-24 :nth-child(35) {
  animation-duration: 3.5217391304s;
  animation-delay: 2.4652173913s;
}

.col-24 :nth-child(36) {
  animation-duration: 3.5217391304s;
  animation-delay: 2.5356521739s;
}

.col-24 :nth-child(37) {
  animation-duration: 3.5217391304s;
  animation-delay: 2.6060869565s;
}

.col-24 :nth-child(38) {
  animation-duration: 3.5217391304s;
  animation-delay: 2.6765217391s;
}

.col-24 :nth-child(39) {
  animation-duration: 3.5217391304s;
  animation-delay: 2.7469565217s;
}

.col-24 :nth-child(40) {
  animation-duration: 3.5217391304s;
  animation-delay: 2.8173913043s;
}

.col-24 :nth-child(41) {
  animation-duration: 3.5217391304s;
  animation-delay: 2.887826087s;
}

.col-24 :nth-child(42) {
  animation-duration: 3.5217391304s;
  animation-delay: 2.9582608696s;
}

.col-24 :nth-child(43) {
  animation-duration: 3.5217391304s;
  animation-delay: 3.0286956522s;
}

.col-24 :nth-child(44) {
  animation-duration: 3.5217391304s;
  animation-delay: 3.0991304348s;
}

.col-24 :nth-child(45) {
  animation-duration: 3.5217391304s;
  animation-delay: 3.1695652174s;
}

.col-24 :nth-child(46) {
  animation-duration: 3.5217391304s;
  animation-delay: 3.24s;
}

.col-24 :nth-child(47) {
  animation-duration: 3.5217391304s;
  animation-delay: 3.3104347826s;
}

.col-24 :nth-child(48) {
  animation-duration: 3.5217391304s;
  animation-delay: 3.3808695652s;
}

.col-24 :nth-child(49) {
  animation-duration: 3.5217391304s;
  animation-delay: 3.4513043478s;
}

.col-24 :nth-child(50) {
  animation-duration: 3.5217391304s;
  animation-delay: 3.5217391304s;
}

.col-25 :nth-child(1) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.0643478261s;
}

.col-25 :nth-child(2) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.1286956522s;
}

.col-25 :nth-child(3) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.1930434783s;
}

.col-25 :nth-child(4) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.2573913043s;
}

.col-25 :nth-child(5) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.3217391304s;
}

.col-25 :nth-child(6) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.3860869565s;
}

.col-25 :nth-child(7) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.4504347826s;
}

.col-25 :nth-child(8) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.5147826087s;
}

.col-25 :nth-child(9) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.5791304348s;
}

.col-25 :nth-child(10) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.6434782609s;
}

.col-25 :nth-child(11) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.707826087s;
}

.col-25 :nth-child(12) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.772173913s;
}

.col-25 :nth-child(13) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.8365217391s;
}

.col-25 :nth-child(14) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.9008695652s;
}

.col-25 :nth-child(15) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.9652173913s;
}

.col-25 :nth-child(16) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.0295652174s;
}

.col-25 :nth-child(17) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.0939130435s;
}

.col-25 :nth-child(18) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.1582608696s;
}

.col-25 :nth-child(19) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.2226086957s;
}

.col-25 :nth-child(20) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.2869565217s;
}

.col-25 :nth-child(21) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.3513043478s;
}

.col-25 :nth-child(22) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.4156521739s;
}

.col-25 :nth-child(23) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.48s;
}

.col-25 :nth-child(24) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.5443478261s;
}

.col-25 :nth-child(25) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.6086956522s;
}

.col-25 :nth-child(26) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.6730434783s;
}

.col-25 :nth-child(27) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.7373913043s;
}

.col-25 :nth-child(28) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.8017391304s;
}

.col-25 :nth-child(29) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.8660869565s;
}

.col-25 :nth-child(30) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.9304347826s;
}

.col-25 :nth-child(31) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.9947826087s;
}

.col-25 :nth-child(32) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.0591304348s;
}

.col-25 :nth-child(33) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.1234782609s;
}

.col-25 :nth-child(34) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.187826087s;
}

.col-25 :nth-child(35) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.252173913s;
}

.col-25 :nth-child(36) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.3165217391s;
}

.col-25 :nth-child(37) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.3808695652s;
}

.col-25 :nth-child(38) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.4452173913s;
}

.col-25 :nth-child(39) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.5095652174s;
}

.col-25 :nth-child(40) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.5739130435s;
}

.col-25 :nth-child(41) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.6382608696s;
}

.col-25 :nth-child(42) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.7026086957s;
}

.col-25 :nth-child(43) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.7669565217s;
}

.col-25 :nth-child(44) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.8313043478s;
}

.col-25 :nth-child(45) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.8956521739s;
}

.col-25 :nth-child(46) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.96s;
}

.col-25 :nth-child(47) {
  animation-duration: 3.2173913043s;
  animation-delay: 3.0243478261s;
}

.col-25 :nth-child(48) {
  animation-duration: 3.2173913043s;
  animation-delay: 3.0886956522s;
}

.col-25 :nth-child(49) {
  animation-duration: 3.2173913043s;
  animation-delay: 3.1530434783s;
}

.col-25 :nth-child(50) {
  animation-duration: 3.2173913043s;
  animation-delay: 3.2173913043s;
}

.col-26 :nth-child(1) {
  animation-duration: 5.347826087s;
  animation-delay: 0.1069565217s;
}

.col-26 :nth-child(2) {
  animation-duration: 5.347826087s;
  animation-delay: 0.2139130435s;
}

.col-26 :nth-child(3) {
  animation-duration: 5.347826087s;
  animation-delay: 0.3208695652s;
}

.col-26 :nth-child(4) {
  animation-duration: 5.347826087s;
  animation-delay: 0.427826087s;
}

.col-26 :nth-child(5) {
  animation-duration: 5.347826087s;
  animation-delay: 0.5347826087s;
}

.col-26 :nth-child(6) {
  animation-duration: 5.347826087s;
  animation-delay: 0.6417391304s;
}

.col-26 :nth-child(7) {
  animation-duration: 5.347826087s;
  animation-delay: 0.7486956522s;
}

.col-26 :nth-child(8) {
  animation-duration: 5.347826087s;
  animation-delay: 0.8556521739s;
}

.col-26 :nth-child(9) {
  animation-duration: 5.347826087s;
  animation-delay: 0.9626086957s;
}

.col-26 :nth-child(10) {
  animation-duration: 5.347826087s;
  animation-delay: 1.0695652174s;
}

.col-26 :nth-child(11) {
  animation-duration: 5.347826087s;
  animation-delay: 1.1765217391s;
}

.col-26 :nth-child(12) {
  animation-duration: 5.347826087s;
  animation-delay: 1.2834782609s;
}

.col-26 :nth-child(13) {
  animation-duration: 5.347826087s;
  animation-delay: 1.3904347826s;
}

.col-26 :nth-child(14) {
  animation-duration: 5.347826087s;
  animation-delay: 1.4973913043s;
}

.col-26 :nth-child(15) {
  animation-duration: 5.347826087s;
  animation-delay: 1.6043478261s;
}

.col-26 :nth-child(16) {
  animation-duration: 5.347826087s;
  animation-delay: 1.7113043478s;
}

.col-26 :nth-child(17) {
  animation-duration: 5.347826087s;
  animation-delay: 1.8182608696s;
}

.col-26 :nth-child(18) {
  animation-duration: 5.347826087s;
  animation-delay: 1.9252173913s;
}

.col-26 :nth-child(19) {
  animation-duration: 5.347826087s;
  animation-delay: 2.032173913s;
}

.col-26 :nth-child(20) {
  animation-duration: 5.347826087s;
  animation-delay: 2.1391304348s;
}

.col-26 :nth-child(21) {
  animation-duration: 5.347826087s;
  animation-delay: 2.2460869565s;
}

.col-26 :nth-child(22) {
  animation-duration: 5.347826087s;
  animation-delay: 2.3530434783s;
}

.col-26 :nth-child(23) {
  animation-duration: 5.347826087s;
  animation-delay: 2.46s;
}

.col-26 :nth-child(24) {
  animation-duration: 5.347826087s;
  animation-delay: 2.5669565217s;
}

.col-26 :nth-child(25) {
  animation-duration: 5.347826087s;
  animation-delay: 2.6739130435s;
}

.col-26 :nth-child(26) {
  animation-duration: 5.347826087s;
  animation-delay: 2.7808695652s;
}

.col-26 :nth-child(27) {
  animation-duration: 5.347826087s;
  animation-delay: 2.887826087s;
}

.col-26 :nth-child(28) {
  animation-duration: 5.347826087s;
  animation-delay: 2.9947826087s;
}

.col-26 :nth-child(29) {
  animation-duration: 5.347826087s;
  animation-delay: 3.1017391304s;
}

.col-26 :nth-child(30) {
  animation-duration: 5.347826087s;
  animation-delay: 3.2086956522s;
}

.col-26 :nth-child(31) {
  animation-duration: 5.347826087s;
  animation-delay: 3.3156521739s;
}

.col-26 :nth-child(32) {
  animation-duration: 5.347826087s;
  animation-delay: 3.4226086957s;
}

.col-26 :nth-child(33) {
  animation-duration: 5.347826087s;
  animation-delay: 3.5295652174s;
}

.col-26 :nth-child(34) {
  animation-duration: 5.347826087s;
  animation-delay: 3.6365217391s;
}

.col-26 :nth-child(35) {
  animation-duration: 5.347826087s;
  animation-delay: 3.7434782609s;
}

.col-26 :nth-child(36) {
  animation-duration: 5.347826087s;
  animation-delay: 3.8504347826s;
}

.col-26 :nth-child(37) {
  animation-duration: 5.347826087s;
  animation-delay: 3.9573913043s;
}

.col-26 :nth-child(38) {
  animation-duration: 5.347826087s;
  animation-delay: 4.0643478261s;
}

.col-26 :nth-child(39) {
  animation-duration: 5.347826087s;
  animation-delay: 4.1713043478s;
}

.col-26 :nth-child(40) {
  animation-duration: 5.347826087s;
  animation-delay: 4.2782608696s;
}

.col-26 :nth-child(41) {
  animation-duration: 5.347826087s;
  animation-delay: 4.3852173913s;
}

.col-26 :nth-child(42) {
  animation-duration: 5.347826087s;
  animation-delay: 4.492173913s;
}

.col-26 :nth-child(43) {
  animation-duration: 5.347826087s;
  animation-delay: 4.5991304348s;
}

.col-26 :nth-child(44) {
  animation-duration: 5.347826087s;
  animation-delay: 4.7060869565s;
}

.col-26 :nth-child(45) {
  animation-duration: 5.347826087s;
  animation-delay: 4.8130434783s;
}

.col-26 :nth-child(46) {
  animation-duration: 5.347826087s;
  animation-delay: 4.92s;
}

.col-26 :nth-child(47) {
  animation-duration: 5.347826087s;
  animation-delay: 5.0269565217s;
}

.col-26 :nth-child(48) {
  animation-duration: 5.347826087s;
  animation-delay: 5.1339130435s;
}

.col-26 :nth-child(49) {
  animation-duration: 5.347826087s;
  animation-delay: 5.2408695652s;
}

.col-26 :nth-child(50) {
  animation-duration: 5.347826087s;
  animation-delay: 5.347826087s;
}

.col-27 :nth-child(1) {
  animation-duration: 4.652173913s;
  animation-delay: 0.0930434783s;
}

.col-27 :nth-child(2) {
  animation-duration: 4.652173913s;
  animation-delay: 0.1860869565s;
}

.col-27 :nth-child(3) {
  animation-duration: 4.652173913s;
  animation-delay: 0.2791304348s;
}

.col-27 :nth-child(4) {
  animation-duration: 4.652173913s;
  animation-delay: 0.372173913s;
}

.col-27 :nth-child(5) {
  animation-duration: 4.652173913s;
  animation-delay: 0.4652173913s;
}

.col-27 :nth-child(6) {
  animation-duration: 4.652173913s;
  animation-delay: 0.5582608696s;
}

.col-27 :nth-child(7) {
  animation-duration: 4.652173913s;
  animation-delay: 0.6513043478s;
}

.col-27 :nth-child(8) {
  animation-duration: 4.652173913s;
  animation-delay: 0.7443478261s;
}

.col-27 :nth-child(9) {
  animation-duration: 4.652173913s;
  animation-delay: 0.8373913043s;
}

.col-27 :nth-child(10) {
  animation-duration: 4.652173913s;
  animation-delay: 0.9304347826s;
}

.col-27 :nth-child(11) {
  animation-duration: 4.652173913s;
  animation-delay: 1.0234782609s;
}

.col-27 :nth-child(12) {
  animation-duration: 4.652173913s;
  animation-delay: 1.1165217391s;
}

.col-27 :nth-child(13) {
  animation-duration: 4.652173913s;
  animation-delay: 1.2095652174s;
}

.col-27 :nth-child(14) {
  animation-duration: 4.652173913s;
  animation-delay: 1.3026086957s;
}

.col-27 :nth-child(15) {
  animation-duration: 4.652173913s;
  animation-delay: 1.3956521739s;
}

.col-27 :nth-child(16) {
  animation-duration: 4.652173913s;
  animation-delay: 1.4886956522s;
}

.col-27 :nth-child(17) {
  animation-duration: 4.652173913s;
  animation-delay: 1.5817391304s;
}

.col-27 :nth-child(18) {
  animation-duration: 4.652173913s;
  animation-delay: 1.6747826087s;
}

.col-27 :nth-child(19) {
  animation-duration: 4.652173913s;
  animation-delay: 1.767826087s;
}

.col-27 :nth-child(20) {
  animation-duration: 4.652173913s;
  animation-delay: 1.8608695652s;
}

.col-27 :nth-child(21) {
  animation-duration: 4.652173913s;
  animation-delay: 1.9539130435s;
}

.col-27 :nth-child(22) {
  animation-duration: 4.652173913s;
  animation-delay: 2.0469565217s;
}

.col-27 :nth-child(23) {
  animation-duration: 4.652173913s;
  animation-delay: 2.14s;
}

.col-27 :nth-child(24) {
  animation-duration: 4.652173913s;
  animation-delay: 2.2330434783s;
}

.col-27 :nth-child(25) {
  animation-duration: 4.652173913s;
  animation-delay: 2.3260869565s;
}

.col-27 :nth-child(26) {
  animation-duration: 4.652173913s;
  animation-delay: 2.4191304348s;
}

.col-27 :nth-child(27) {
  animation-duration: 4.652173913s;
  animation-delay: 2.512173913s;
}

.col-27 :nth-child(28) {
  animation-duration: 4.652173913s;
  animation-delay: 2.6052173913s;
}

.col-27 :nth-child(29) {
  animation-duration: 4.652173913s;
  animation-delay: 2.6982608696s;
}

.col-27 :nth-child(30) {
  animation-duration: 4.652173913s;
  animation-delay: 2.7913043478s;
}

.col-27 :nth-child(31) {
  animation-duration: 4.652173913s;
  animation-delay: 2.8843478261s;
}

.col-27 :nth-child(32) {
  animation-duration: 4.652173913s;
  animation-delay: 2.9773913043s;
}

.col-27 :nth-child(33) {
  animation-duration: 4.652173913s;
  animation-delay: 3.0704347826s;
}

.col-27 :nth-child(34) {
  animation-duration: 4.652173913s;
  animation-delay: 3.1634782609s;
}

.col-27 :nth-child(35) {
  animation-duration: 4.652173913s;
  animation-delay: 3.2565217391s;
}

.col-27 :nth-child(36) {
  animation-duration: 4.652173913s;
  animation-delay: 3.3495652174s;
}

.col-27 :nth-child(37) {
  animation-duration: 4.652173913s;
  animation-delay: 3.4426086957s;
}

.col-27 :nth-child(38) {
  animation-duration: 4.652173913s;
  animation-delay: 3.5356521739s;
}

.col-27 :nth-child(39) {
  animation-duration: 4.652173913s;
  animation-delay: 3.6286956522s;
}

.col-27 :nth-child(40) {
  animation-duration: 4.652173913s;
  animation-delay: 3.7217391304s;
}

.col-27 :nth-child(41) {
  animation-duration: 4.652173913s;
  animation-delay: 3.8147826087s;
}

.col-27 :nth-child(42) {
  animation-duration: 4.652173913s;
  animation-delay: 3.907826087s;
}

.col-27 :nth-child(43) {
  animation-duration: 4.652173913s;
  animation-delay: 4.0008695652s;
}

.col-27 :nth-child(44) {
  animation-duration: 4.652173913s;
  animation-delay: 4.0939130435s;
}

.col-27 :nth-child(45) {
  animation-duration: 4.652173913s;
  animation-delay: 4.1869565217s;
}

.col-27 :nth-child(46) {
  animation-duration: 4.652173913s;
  animation-delay: 4.28s;
}

.col-27 :nth-child(47) {
  animation-duration: 4.652173913s;
  animation-delay: 4.3730434783s;
}

.col-27 :nth-child(48) {
  animation-duration: 4.652173913s;
  animation-delay: 4.4660869565s;
}

.col-27 :nth-child(49) {
  animation-duration: 4.652173913s;
  animation-delay: 4.5591304348s;
}

.col-27 :nth-child(50) {
  animation-duration: 4.652173913s;
  animation-delay: 4.652173913s;
}

.col-28 :nth-child(1) {
  animation-duration: 2.6086956522s;
  animation-delay: 0.052173913s;
}

.col-28 :nth-child(2) {
  animation-duration: 2.6086956522s;
  animation-delay: 0.1043478261s;
}

.col-28 :nth-child(3) {
  animation-duration: 2.6086956522s;
  animation-delay: 0.1565217391s;
}

.col-28 :nth-child(4) {
  animation-duration: 2.6086956522s;
  animation-delay: 0.2086956522s;
}

.col-28 :nth-child(5) {
  animation-duration: 2.6086956522s;
  animation-delay: 0.2608695652s;
}

.col-28 :nth-child(6) {
  animation-duration: 2.6086956522s;
  animation-delay: 0.3130434783s;
}

.col-28 :nth-child(7) {
  animation-duration: 2.6086956522s;
  animation-delay: 0.3652173913s;
}

.col-28 :nth-child(8) {
  animation-duration: 2.6086956522s;
  animation-delay: 0.4173913043s;
}

.col-28 :nth-child(9) {
  animation-duration: 2.6086956522s;
  animation-delay: 0.4695652174s;
}

.col-28 :nth-child(10) {
  animation-duration: 2.6086956522s;
  animation-delay: 0.5217391304s;
}

.col-28 :nth-child(11) {
  animation-duration: 2.6086956522s;
  animation-delay: 0.5739130435s;
}

.col-28 :nth-child(12) {
  animation-duration: 2.6086956522s;
  animation-delay: 0.6260869565s;
}

.col-28 :nth-child(13) {
  animation-duration: 2.6086956522s;
  animation-delay: 0.6782608696s;
}

.col-28 :nth-child(14) {
  animation-duration: 2.6086956522s;
  animation-delay: 0.7304347826s;
}

.col-28 :nth-child(15) {
  animation-duration: 2.6086956522s;
  animation-delay: 0.7826086957s;
}

.col-28 :nth-child(16) {
  animation-duration: 2.6086956522s;
  animation-delay: 0.8347826087s;
}

.col-28 :nth-child(17) {
  animation-duration: 2.6086956522s;
  animation-delay: 0.8869565217s;
}

.col-28 :nth-child(18) {
  animation-duration: 2.6086956522s;
  animation-delay: 0.9391304348s;
}

.col-28 :nth-child(19) {
  animation-duration: 2.6086956522s;
  animation-delay: 0.9913043478s;
}

.col-28 :nth-child(20) {
  animation-duration: 2.6086956522s;
  animation-delay: 1.0434782609s;
}

.col-28 :nth-child(21) {
  animation-duration: 2.6086956522s;
  animation-delay: 1.0956521739s;
}

.col-28 :nth-child(22) {
  animation-duration: 2.6086956522s;
  animation-delay: 1.147826087s;
}

.col-28 :nth-child(23) {
  animation-duration: 2.6086956522s;
  animation-delay: 1.2s;
}

.col-28 :nth-child(24) {
  animation-duration: 2.6086956522s;
  animation-delay: 1.252173913s;
}

.col-28 :nth-child(25) {
  animation-duration: 2.6086956522s;
  animation-delay: 1.3043478261s;
}

.col-28 :nth-child(26) {
  animation-duration: 2.6086956522s;
  animation-delay: 1.3565217391s;
}

.col-28 :nth-child(27) {
  animation-duration: 2.6086956522s;
  animation-delay: 1.4086956522s;
}

.col-28 :nth-child(28) {
  animation-duration: 2.6086956522s;
  animation-delay: 1.4608695652s;
}

.col-28 :nth-child(29) {
  animation-duration: 2.6086956522s;
  animation-delay: 1.5130434783s;
}

.col-28 :nth-child(30) {
  animation-duration: 2.6086956522s;
  animation-delay: 1.5652173913s;
}

.col-28 :nth-child(31) {
  animation-duration: 2.6086956522s;
  animation-delay: 1.6173913043s;
}

.col-28 :nth-child(32) {
  animation-duration: 2.6086956522s;
  animation-delay: 1.6695652174s;
}

.col-28 :nth-child(33) {
  animation-duration: 2.6086956522s;
  animation-delay: 1.7217391304s;
}

.col-28 :nth-child(34) {
  animation-duration: 2.6086956522s;
  animation-delay: 1.7739130435s;
}

.col-28 :nth-child(35) {
  animation-duration: 2.6086956522s;
  animation-delay: 1.8260869565s;
}

.col-28 :nth-child(36) {
  animation-duration: 2.6086956522s;
  animation-delay: 1.8782608696s;
}

.col-28 :nth-child(37) {
  animation-duration: 2.6086956522s;
  animation-delay: 1.9304347826s;
}

.col-28 :nth-child(38) {
  animation-duration: 2.6086956522s;
  animation-delay: 1.9826086957s;
}

.col-28 :nth-child(39) {
  animation-duration: 2.6086956522s;
  animation-delay: 2.0347826087s;
}

.col-28 :nth-child(40) {
  animation-duration: 2.6086956522s;
  animation-delay: 2.0869565217s;
}

.col-28 :nth-child(41) {
  animation-duration: 2.6086956522s;
  animation-delay: 2.1391304348s;
}

.col-28 :nth-child(42) {
  animation-duration: 2.6086956522s;
  animation-delay: 2.1913043478s;
}

.col-28 :nth-child(43) {
  animation-duration: 2.6086956522s;
  animation-delay: 2.2434782609s;
}

.col-28 :nth-child(44) {
  animation-duration: 2.6086956522s;
  animation-delay: 2.2956521739s;
}

.col-28 :nth-child(45) {
  animation-duration: 2.6086956522s;
  animation-delay: 2.347826087s;
}

.col-28 :nth-child(46) {
  animation-duration: 2.6086956522s;
  animation-delay: 2.4s;
}

.col-28 :nth-child(47) {
  animation-duration: 2.6086956522s;
  animation-delay: 2.452173913s;
}

.col-28 :nth-child(48) {
  animation-duration: 2.6086956522s;
  animation-delay: 2.5043478261s;
}

.col-28 :nth-child(49) {
  animation-duration: 2.6086956522s;
  animation-delay: 2.5565217391s;
}

.col-28 :nth-child(50) {
  animation-duration: 2.6086956522s;
  animation-delay: 2.6086956522s;
}

.col-29 :nth-child(1) {
  animation-duration: 2.6956521739s;
  animation-delay: 0.0539130435s;
}

.col-29 :nth-child(2) {
  animation-duration: 2.6956521739s;
  animation-delay: 0.107826087s;
}

.col-29 :nth-child(3) {
  animation-duration: 2.6956521739s;
  animation-delay: 0.1617391304s;
}

.col-29 :nth-child(4) {
  animation-duration: 2.6956521739s;
  animation-delay: 0.2156521739s;
}

.col-29 :nth-child(5) {
  animation-duration: 2.6956521739s;
  animation-delay: 0.2695652174s;
}

.col-29 :nth-child(6) {
  animation-duration: 2.6956521739s;
  animation-delay: 0.3234782609s;
}

.col-29 :nth-child(7) {
  animation-duration: 2.6956521739s;
  animation-delay: 0.3773913043s;
}

.col-29 :nth-child(8) {
  animation-duration: 2.6956521739s;
  animation-delay: 0.4313043478s;
}

.col-29 :nth-child(9) {
  animation-duration: 2.6956521739s;
  animation-delay: 0.4852173913s;
}

.col-29 :nth-child(10) {
  animation-duration: 2.6956521739s;
  animation-delay: 0.5391304348s;
}

.col-29 :nth-child(11) {
  animation-duration: 2.6956521739s;
  animation-delay: 0.5930434783s;
}

.col-29 :nth-child(12) {
  animation-duration: 2.6956521739s;
  animation-delay: 0.6469565217s;
}

.col-29 :nth-child(13) {
  animation-duration: 2.6956521739s;
  animation-delay: 0.7008695652s;
}

.col-29 :nth-child(14) {
  animation-duration: 2.6956521739s;
  animation-delay: 0.7547826087s;
}

.col-29 :nth-child(15) {
  animation-duration: 2.6956521739s;
  animation-delay: 0.8086956522s;
}

.col-29 :nth-child(16) {
  animation-duration: 2.6956521739s;
  animation-delay: 0.8626086957s;
}

.col-29 :nth-child(17) {
  animation-duration: 2.6956521739s;
  animation-delay: 0.9165217391s;
}

.col-29 :nth-child(18) {
  animation-duration: 2.6956521739s;
  animation-delay: 0.9704347826s;
}

.col-29 :nth-child(19) {
  animation-duration: 2.6956521739s;
  animation-delay: 1.0243478261s;
}

.col-29 :nth-child(20) {
  animation-duration: 2.6956521739s;
  animation-delay: 1.0782608696s;
}

.col-29 :nth-child(21) {
  animation-duration: 2.6956521739s;
  animation-delay: 1.132173913s;
}

.col-29 :nth-child(22) {
  animation-duration: 2.6956521739s;
  animation-delay: 1.1860869565s;
}

.col-29 :nth-child(23) {
  animation-duration: 2.6956521739s;
  animation-delay: 1.24s;
}

.col-29 :nth-child(24) {
  animation-duration: 2.6956521739s;
  animation-delay: 1.2939130435s;
}

.col-29 :nth-child(25) {
  animation-duration: 2.6956521739s;
  animation-delay: 1.347826087s;
}

.col-29 :nth-child(26) {
  animation-duration: 2.6956521739s;
  animation-delay: 1.4017391304s;
}

.col-29 :nth-child(27) {
  animation-duration: 2.6956521739s;
  animation-delay: 1.4556521739s;
}

.col-29 :nth-child(28) {
  animation-duration: 2.6956521739s;
  animation-delay: 1.5095652174s;
}

.col-29 :nth-child(29) {
  animation-duration: 2.6956521739s;
  animation-delay: 1.5634782609s;
}

.col-29 :nth-child(30) {
  animation-duration: 2.6956521739s;
  animation-delay: 1.6173913043s;
}

.col-29 :nth-child(31) {
  animation-duration: 2.6956521739s;
  animation-delay: 1.6713043478s;
}

.col-29 :nth-child(32) {
  animation-duration: 2.6956521739s;
  animation-delay: 1.7252173913s;
}

.col-29 :nth-child(33) {
  animation-duration: 2.6956521739s;
  animation-delay: 1.7791304348s;
}

.col-29 :nth-child(34) {
  animation-duration: 2.6956521739s;
  animation-delay: 1.8330434783s;
}

.col-29 :nth-child(35) {
  animation-duration: 2.6956521739s;
  animation-delay: 1.8869565217s;
}

.col-29 :nth-child(36) {
  animation-duration: 2.6956521739s;
  animation-delay: 1.9408695652s;
}

.col-29 :nth-child(37) {
  animation-duration: 2.6956521739s;
  animation-delay: 1.9947826087s;
}

.col-29 :nth-child(38) {
  animation-duration: 2.6956521739s;
  animation-delay: 2.0486956522s;
}

.col-29 :nth-child(39) {
  animation-duration: 2.6956521739s;
  animation-delay: 2.1026086957s;
}

.col-29 :nth-child(40) {
  animation-duration: 2.6956521739s;
  animation-delay: 2.1565217391s;
}

.col-29 :nth-child(41) {
  animation-duration: 2.6956521739s;
  animation-delay: 2.2104347826s;
}

.col-29 :nth-child(42) {
  animation-duration: 2.6956521739s;
  animation-delay: 2.2643478261s;
}

.col-29 :nth-child(43) {
  animation-duration: 2.6956521739s;
  animation-delay: 2.3182608696s;
}

.col-29 :nth-child(44) {
  animation-duration: 2.6956521739s;
  animation-delay: 2.372173913s;
}

.col-29 :nth-child(45) {
  animation-duration: 2.6956521739s;
  animation-delay: 2.4260869565s;
}

.col-29 :nth-child(46) {
  animation-duration: 2.6956521739s;
  animation-delay: 2.48s;
}

.col-29 :nth-child(47) {
  animation-duration: 2.6956521739s;
  animation-delay: 2.5339130435s;
}

.col-29 :nth-child(48) {
  animation-duration: 2.6956521739s;
  animation-delay: 2.587826087s;
}

.col-29 :nth-child(49) {
  animation-duration: 2.6956521739s;
  animation-delay: 2.6417391304s;
}

.col-29 :nth-child(50) {
  animation-duration: 2.6956521739s;
  animation-delay: 2.6956521739s;
}

.col-30 :nth-child(1) {
  animation-duration: 3.6086956522s;
  animation-delay: 0.072173913s;
}

.col-30 :nth-child(2) {
  animation-duration: 3.6086956522s;
  animation-delay: 0.1443478261s;
}

.col-30 :nth-child(3) {
  animation-duration: 3.6086956522s;
  animation-delay: 0.2165217391s;
}

.col-30 :nth-child(4) {
  animation-duration: 3.6086956522s;
  animation-delay: 0.2886956522s;
}

.col-30 :nth-child(5) {
  animation-duration: 3.6086956522s;
  animation-delay: 0.3608695652s;
}

.col-30 :nth-child(6) {
  animation-duration: 3.6086956522s;
  animation-delay: 0.4330434783s;
}

.col-30 :nth-child(7) {
  animation-duration: 3.6086956522s;
  animation-delay: 0.5052173913s;
}

.col-30 :nth-child(8) {
  animation-duration: 3.6086956522s;
  animation-delay: 0.5773913043s;
}

.col-30 :nth-child(9) {
  animation-duration: 3.6086956522s;
  animation-delay: 0.6495652174s;
}

.col-30 :nth-child(10) {
  animation-duration: 3.6086956522s;
  animation-delay: 0.7217391304s;
}

.col-30 :nth-child(11) {
  animation-duration: 3.6086956522s;
  animation-delay: 0.7939130435s;
}

.col-30 :nth-child(12) {
  animation-duration: 3.6086956522s;
  animation-delay: 0.8660869565s;
}

.col-30 :nth-child(13) {
  animation-duration: 3.6086956522s;
  animation-delay: 0.9382608696s;
}

.col-30 :nth-child(14) {
  animation-duration: 3.6086956522s;
  animation-delay: 1.0104347826s;
}

.col-30 :nth-child(15) {
  animation-duration: 3.6086956522s;
  animation-delay: 1.0826086957s;
}

.col-30 :nth-child(16) {
  animation-duration: 3.6086956522s;
  animation-delay: 1.1547826087s;
}

.col-30 :nth-child(17) {
  animation-duration: 3.6086956522s;
  animation-delay: 1.2269565217s;
}

.col-30 :nth-child(18) {
  animation-duration: 3.6086956522s;
  animation-delay: 1.2991304348s;
}

.col-30 :nth-child(19) {
  animation-duration: 3.6086956522s;
  animation-delay: 1.3713043478s;
}

.col-30 :nth-child(20) {
  animation-duration: 3.6086956522s;
  animation-delay: 1.4434782609s;
}

.col-30 :nth-child(21) {
  animation-duration: 3.6086956522s;
  animation-delay: 1.5156521739s;
}

.col-30 :nth-child(22) {
  animation-duration: 3.6086956522s;
  animation-delay: 1.587826087s;
}

.col-30 :nth-child(23) {
  animation-duration: 3.6086956522s;
  animation-delay: 1.66s;
}

.col-30 :nth-child(24) {
  animation-duration: 3.6086956522s;
  animation-delay: 1.732173913s;
}

.col-30 :nth-child(25) {
  animation-duration: 3.6086956522s;
  animation-delay: 1.8043478261s;
}

.col-30 :nth-child(26) {
  animation-duration: 3.6086956522s;
  animation-delay: 1.8765217391s;
}

.col-30 :nth-child(27) {
  animation-duration: 3.6086956522s;
  animation-delay: 1.9486956522s;
}

.col-30 :nth-child(28) {
  animation-duration: 3.6086956522s;
  animation-delay: 2.0208695652s;
}

.col-30 :nth-child(29) {
  animation-duration: 3.6086956522s;
  animation-delay: 2.0930434783s;
}

.col-30 :nth-child(30) {
  animation-duration: 3.6086956522s;
  animation-delay: 2.1652173913s;
}

.col-30 :nth-child(31) {
  animation-duration: 3.6086956522s;
  animation-delay: 2.2373913043s;
}

.col-30 :nth-child(32) {
  animation-duration: 3.6086956522s;
  animation-delay: 2.3095652174s;
}

.col-30 :nth-child(33) {
  animation-duration: 3.6086956522s;
  animation-delay: 2.3817391304s;
}

.col-30 :nth-child(34) {
  animation-duration: 3.6086956522s;
  animation-delay: 2.4539130435s;
}

.col-30 :nth-child(35) {
  animation-duration: 3.6086956522s;
  animation-delay: 2.5260869565s;
}

.col-30 :nth-child(36) {
  animation-duration: 3.6086956522s;
  animation-delay: 2.5982608696s;
}

.col-30 :nth-child(37) {
  animation-duration: 3.6086956522s;
  animation-delay: 2.6704347826s;
}

.col-30 :nth-child(38) {
  animation-duration: 3.6086956522s;
  animation-delay: 2.7426086957s;
}

.col-30 :nth-child(39) {
  animation-duration: 3.6086956522s;
  animation-delay: 2.8147826087s;
}

.col-30 :nth-child(40) {
  animation-duration: 3.6086956522s;
  animation-delay: 2.8869565217s;
}

.col-30 :nth-child(41) {
  animation-duration: 3.6086956522s;
  animation-delay: 2.9591304348s;
}

.col-30 :nth-child(42) {
  animation-duration: 3.6086956522s;
  animation-delay: 3.0313043478s;
}

.col-30 :nth-child(43) {
  animation-duration: 3.6086956522s;
  animation-delay: 3.1034782609s;
}

.col-30 :nth-child(44) {
  animation-duration: 3.6086956522s;
  animation-delay: 3.1756521739s;
}

.col-30 :nth-child(45) {
  animation-duration: 3.6086956522s;
  animation-delay: 3.247826087s;
}

.col-30 :nth-child(46) {
  animation-duration: 3.6086956522s;
  animation-delay: 3.32s;
}

.col-30 :nth-child(47) {
  animation-duration: 3.6086956522s;
  animation-delay: 3.392173913s;
}

.col-30 :nth-child(48) {
  animation-duration: 3.6086956522s;
  animation-delay: 3.4643478261s;
}

.col-30 :nth-child(49) {
  animation-duration: 3.6086956522s;
  animation-delay: 3.5365217391s;
}

.col-30 :nth-child(50) {
  animation-duration: 3.6086956522s;
  animation-delay: 3.6086956522s;
}

.col-31 :nth-child(1) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.0382608696s;
}

.col-31 :nth-child(2) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.0765217391s;
}

.col-31 :nth-child(3) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.1147826087s;
}

.col-31 :nth-child(4) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.1530434783s;
}

.col-31 :nth-child(5) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.1913043478s;
}

.col-31 :nth-child(6) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.2295652174s;
}

.col-31 :nth-child(7) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.267826087s;
}

.col-31 :nth-child(8) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.3060869565s;
}

.col-31 :nth-child(9) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.3443478261s;
}

.col-31 :nth-child(10) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.3826086957s;
}

.col-31 :nth-child(11) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.4208695652s;
}

.col-31 :nth-child(12) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.4591304348s;
}

.col-31 :nth-child(13) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.4973913043s;
}

.col-31 :nth-child(14) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.5356521739s;
}

.col-31 :nth-child(15) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.5739130435s;
}

.col-31 :nth-child(16) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.612173913s;
}

.col-31 :nth-child(17) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.6504347826s;
}

.col-31 :nth-child(18) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.6886956522s;
}

.col-31 :nth-child(19) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.7269565217s;
}

.col-31 :nth-child(20) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.7652173913s;
}

.col-31 :nth-child(21) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.8034782609s;
}

.col-31 :nth-child(22) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.8417391304s;
}

.col-31 :nth-child(23) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.88s;
}

.col-31 :nth-child(24) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.9182608696s;
}

.col-31 :nth-child(25) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.9565217391s;
}

.col-31 :nth-child(26) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.9947826087s;
}

.col-31 :nth-child(27) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.0330434783s;
}

.col-31 :nth-child(28) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.0713043478s;
}

.col-31 :nth-child(29) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.1095652174s;
}

.col-31 :nth-child(30) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.147826087s;
}

.col-31 :nth-child(31) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.1860869565s;
}

.col-31 :nth-child(32) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.2243478261s;
}

.col-31 :nth-child(33) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.2626086957s;
}

.col-31 :nth-child(34) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.3008695652s;
}

.col-31 :nth-child(35) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.3391304348s;
}

.col-31 :nth-child(36) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.3773913043s;
}

.col-31 :nth-child(37) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.4156521739s;
}

.col-31 :nth-child(38) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.4539130435s;
}

.col-31 :nth-child(39) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.492173913s;
}

.col-31 :nth-child(40) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.5304347826s;
}

.col-31 :nth-child(41) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.5686956522s;
}

.col-31 :nth-child(42) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.6069565217s;
}

.col-31 :nth-child(43) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.6452173913s;
}

.col-31 :nth-child(44) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.6834782609s;
}

.col-31 :nth-child(45) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.7217391304s;
}

.col-31 :nth-child(46) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.76s;
}

.col-31 :nth-child(47) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.7982608696s;
}

.col-31 :nth-child(48) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.8365217391s;
}

.col-31 :nth-child(49) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.8747826087s;
}

.col-31 :nth-child(50) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.9130434783s;
}

.col-32 :nth-child(1) {
  animation-duration: 1.347826087s;
  animation-delay: 0.0269565217s;
}

.col-32 :nth-child(2) {
  animation-duration: 1.347826087s;
  animation-delay: 0.0539130435s;
}

.col-32 :nth-child(3) {
  animation-duration: 1.347826087s;
  animation-delay: 0.0808695652s;
}

.col-32 :nth-child(4) {
  animation-duration: 1.347826087s;
  animation-delay: 0.107826087s;
}

.col-32 :nth-child(5) {
  animation-duration: 1.347826087s;
  animation-delay: 0.1347826087s;
}

.col-32 :nth-child(6) {
  animation-duration: 1.347826087s;
  animation-delay: 0.1617391304s;
}

.col-32 :nth-child(7) {
  animation-duration: 1.347826087s;
  animation-delay: 0.1886956522s;
}

.col-32 :nth-child(8) {
  animation-duration: 1.347826087s;
  animation-delay: 0.2156521739s;
}

.col-32 :nth-child(9) {
  animation-duration: 1.347826087s;
  animation-delay: 0.2426086957s;
}

.col-32 :nth-child(10) {
  animation-duration: 1.347826087s;
  animation-delay: 0.2695652174s;
}

.col-32 :nth-child(11) {
  animation-duration: 1.347826087s;
  animation-delay: 0.2965217391s;
}

.col-32 :nth-child(12) {
  animation-duration: 1.347826087s;
  animation-delay: 0.3234782609s;
}

.col-32 :nth-child(13) {
  animation-duration: 1.347826087s;
  animation-delay: 0.3504347826s;
}

.col-32 :nth-child(14) {
  animation-duration: 1.347826087s;
  animation-delay: 0.3773913043s;
}

.col-32 :nth-child(15) {
  animation-duration: 1.347826087s;
  animation-delay: 0.4043478261s;
}

.col-32 :nth-child(16) {
  animation-duration: 1.347826087s;
  animation-delay: 0.4313043478s;
}

.col-32 :nth-child(17) {
  animation-duration: 1.347826087s;
  animation-delay: 0.4582608696s;
}

.col-32 :nth-child(18) {
  animation-duration: 1.347826087s;
  animation-delay: 0.4852173913s;
}

.col-32 :nth-child(19) {
  animation-duration: 1.347826087s;
  animation-delay: 0.512173913s;
}

.col-32 :nth-child(20) {
  animation-duration: 1.347826087s;
  animation-delay: 0.5391304348s;
}

.col-32 :nth-child(21) {
  animation-duration: 1.347826087s;
  animation-delay: 0.5660869565s;
}

.col-32 :nth-child(22) {
  animation-duration: 1.347826087s;
  animation-delay: 0.5930434783s;
}

.col-32 :nth-child(23) {
  animation-duration: 1.347826087s;
  animation-delay: 0.62s;
}

.col-32 :nth-child(24) {
  animation-duration: 1.347826087s;
  animation-delay: 0.6469565217s;
}

.col-32 :nth-child(25) {
  animation-duration: 1.347826087s;
  animation-delay: 0.6739130435s;
}

.col-32 :nth-child(26) {
  animation-duration: 1.347826087s;
  animation-delay: 0.7008695652s;
}

.col-32 :nth-child(27) {
  animation-duration: 1.347826087s;
  animation-delay: 0.727826087s;
}

.col-32 :nth-child(28) {
  animation-duration: 1.347826087s;
  animation-delay: 0.7547826087s;
}

.col-32 :nth-child(29) {
  animation-duration: 1.347826087s;
  animation-delay: 0.7817391304s;
}

.col-32 :nth-child(30) {
  animation-duration: 1.347826087s;
  animation-delay: 0.8086956522s;
}

.col-32 :nth-child(31) {
  animation-duration: 1.347826087s;
  animation-delay: 0.8356521739s;
}

.col-32 :nth-child(32) {
  animation-duration: 1.347826087s;
  animation-delay: 0.8626086957s;
}

.col-32 :nth-child(33) {
  animation-duration: 1.347826087s;
  animation-delay: 0.8895652174s;
}

.col-32 :nth-child(34) {
  animation-duration: 1.347826087s;
  animation-delay: 0.9165217391s;
}

.col-32 :nth-child(35) {
  animation-duration: 1.347826087s;
  animation-delay: 0.9434782609s;
}

.col-32 :nth-child(36) {
  animation-duration: 1.347826087s;
  animation-delay: 0.9704347826s;
}

.col-32 :nth-child(37) {
  animation-duration: 1.347826087s;
  animation-delay: 0.9973913043s;
}

.col-32 :nth-child(38) {
  animation-duration: 1.347826087s;
  animation-delay: 1.0243478261s;
}

.col-32 :nth-child(39) {
  animation-duration: 1.347826087s;
  animation-delay: 1.0513043478s;
}

.col-32 :nth-child(40) {
  animation-duration: 1.347826087s;
  animation-delay: 1.0782608696s;
}

.col-32 :nth-child(41) {
  animation-duration: 1.347826087s;
  animation-delay: 1.1052173913s;
}

.col-32 :nth-child(42) {
  animation-duration: 1.347826087s;
  animation-delay: 1.132173913s;
}

.col-32 :nth-child(43) {
  animation-duration: 1.347826087s;
  animation-delay: 1.1591304348s;
}

.col-32 :nth-child(44) {
  animation-duration: 1.347826087s;
  animation-delay: 1.1860869565s;
}

.col-32 :nth-child(45) {
  animation-duration: 1.347826087s;
  animation-delay: 1.2130434783s;
}

.col-32 :nth-child(46) {
  animation-duration: 1.347826087s;
  animation-delay: 1.24s;
}

.col-32 :nth-child(47) {
  animation-duration: 1.347826087s;
  animation-delay: 1.2669565217s;
}

.col-32 :nth-child(48) {
  animation-duration: 1.347826087s;
  animation-delay: 1.2939130435s;
}

.col-32 :nth-child(49) {
  animation-duration: 1.347826087s;
  animation-delay: 1.3208695652s;
}

.col-32 :nth-child(50) {
  animation-duration: 1.347826087s;
  animation-delay: 1.347826087s;
}

.col-33 :nth-child(1) {
  animation-duration: 3s;
  animation-delay: 0.06s;
}

.col-33 :nth-child(2) {
  animation-duration: 3s;
  animation-delay: 0.12s;
}

.col-33 :nth-child(3) {
  animation-duration: 3s;
  animation-delay: 0.18s;
}

.col-33 :nth-child(4) {
  animation-duration: 3s;
  animation-delay: 0.24s;
}

.col-33 :nth-child(5) {
  animation-duration: 3s;
  animation-delay: 0.3s;
}

.col-33 :nth-child(6) {
  animation-duration: 3s;
  animation-delay: 0.36s;
}

.col-33 :nth-child(7) {
  animation-duration: 3s;
  animation-delay: 0.42s;
}

.col-33 :nth-child(8) {
  animation-duration: 3s;
  animation-delay: 0.48s;
}

.col-33 :nth-child(9) {
  animation-duration: 3s;
  animation-delay: 0.54s;
}

.col-33 :nth-child(10) {
  animation-duration: 3s;
  animation-delay: 0.6s;
}

.col-33 :nth-child(11) {
  animation-duration: 3s;
  animation-delay: 0.66s;
}

.col-33 :nth-child(12) {
  animation-duration: 3s;
  animation-delay: 0.72s;
}

.col-33 :nth-child(13) {
  animation-duration: 3s;
  animation-delay: 0.78s;
}

.col-33 :nth-child(14) {
  animation-duration: 3s;
  animation-delay: 0.84s;
}

.col-33 :nth-child(15) {
  animation-duration: 3s;
  animation-delay: 0.9s;
}

.col-33 :nth-child(16) {
  animation-duration: 3s;
  animation-delay: 0.96s;
}

.col-33 :nth-child(17) {
  animation-duration: 3s;
  animation-delay: 1.02s;
}

.col-33 :nth-child(18) {
  animation-duration: 3s;
  animation-delay: 1.08s;
}

.col-33 :nth-child(19) {
  animation-duration: 3s;
  animation-delay: 1.14s;
}

.col-33 :nth-child(20) {
  animation-duration: 3s;
  animation-delay: 1.2s;
}

.col-33 :nth-child(21) {
  animation-duration: 3s;
  animation-delay: 1.26s;
}

.col-33 :nth-child(22) {
  animation-duration: 3s;
  animation-delay: 1.32s;
}

.col-33 :nth-child(23) {
  animation-duration: 3s;
  animation-delay: 1.38s;
}

.col-33 :nth-child(24) {
  animation-duration: 3s;
  animation-delay: 1.44s;
}

.col-33 :nth-child(25) {
  animation-duration: 3s;
  animation-delay: 1.5s;
}

.col-33 :nth-child(26) {
  animation-duration: 3s;
  animation-delay: 1.56s;
}

.col-33 :nth-child(27) {
  animation-duration: 3s;
  animation-delay: 1.62s;
}

.col-33 :nth-child(28) {
  animation-duration: 3s;
  animation-delay: 1.68s;
}

.col-33 :nth-child(29) {
  animation-duration: 3s;
  animation-delay: 1.74s;
}

.col-33 :nth-child(30) {
  animation-duration: 3s;
  animation-delay: 1.8s;
}

.col-33 :nth-child(31) {
  animation-duration: 3s;
  animation-delay: 1.86s;
}

.col-33 :nth-child(32) {
  animation-duration: 3s;
  animation-delay: 1.92s;
}

.col-33 :nth-child(33) {
  animation-duration: 3s;
  animation-delay: 1.98s;
}

.col-33 :nth-child(34) {
  animation-duration: 3s;
  animation-delay: 2.04s;
}

.col-33 :nth-child(35) {
  animation-duration: 3s;
  animation-delay: 2.1s;
}

.col-33 :nth-child(36) {
  animation-duration: 3s;
  animation-delay: 2.16s;
}

.col-33 :nth-child(37) {
  animation-duration: 3s;
  animation-delay: 2.22s;
}

.col-33 :nth-child(38) {
  animation-duration: 3s;
  animation-delay: 2.28s;
}

.col-33 :nth-child(39) {
  animation-duration: 3s;
  animation-delay: 2.34s;
}

.col-33 :nth-child(40) {
  animation-duration: 3s;
  animation-delay: 2.4s;
}

.col-33 :nth-child(41) {
  animation-duration: 3s;
  animation-delay: 2.46s;
}

.col-33 :nth-child(42) {
  animation-duration: 3s;
  animation-delay: 2.52s;
}

.col-33 :nth-child(43) {
  animation-duration: 3s;
  animation-delay: 2.58s;
}

.col-33 :nth-child(44) {
  animation-duration: 3s;
  animation-delay: 2.64s;
}

.col-33 :nth-child(45) {
  animation-duration: 3s;
  animation-delay: 2.7s;
}

.col-33 :nth-child(46) {
  animation-duration: 3s;
  animation-delay: 2.76s;
}

.col-33 :nth-child(47) {
  animation-duration: 3s;
  animation-delay: 2.82s;
}

.col-33 :nth-child(48) {
  animation-duration: 3s;
  animation-delay: 2.88s;
}

.col-33 :nth-child(49) {
  animation-duration: 3s;
  animation-delay: 2.94s;
}

.col-33 :nth-child(50) {
  animation-duration: 3s;
  animation-delay: 3s;
}

.col-34 :nth-child(1) {
  animation-duration: 3.347826087s;
  animation-delay: 0.0669565217s;
}

.col-34 :nth-child(2) {
  animation-duration: 3.347826087s;
  animation-delay: 0.1339130435s;
}

.col-34 :nth-child(3) {
  animation-duration: 3.347826087s;
  animation-delay: 0.2008695652s;
}

.col-34 :nth-child(4) {
  animation-duration: 3.347826087s;
  animation-delay: 0.267826087s;
}

.col-34 :nth-child(5) {
  animation-duration: 3.347826087s;
  animation-delay: 0.3347826087s;
}

.col-34 :nth-child(6) {
  animation-duration: 3.347826087s;
  animation-delay: 0.4017391304s;
}

.col-34 :nth-child(7) {
  animation-duration: 3.347826087s;
  animation-delay: 0.4686956522s;
}

.col-34 :nth-child(8) {
  animation-duration: 3.347826087s;
  animation-delay: 0.5356521739s;
}

.col-34 :nth-child(9) {
  animation-duration: 3.347826087s;
  animation-delay: 0.6026086957s;
}

.col-34 :nth-child(10) {
  animation-duration: 3.347826087s;
  animation-delay: 0.6695652174s;
}

.col-34 :nth-child(11) {
  animation-duration: 3.347826087s;
  animation-delay: 0.7365217391s;
}

.col-34 :nth-child(12) {
  animation-duration: 3.347826087s;
  animation-delay: 0.8034782609s;
}

.col-34 :nth-child(13) {
  animation-duration: 3.347826087s;
  animation-delay: 0.8704347826s;
}

.col-34 :nth-child(14) {
  animation-duration: 3.347826087s;
  animation-delay: 0.9373913043s;
}

.col-34 :nth-child(15) {
  animation-duration: 3.347826087s;
  animation-delay: 1.0043478261s;
}

.col-34 :nth-child(16) {
  animation-duration: 3.347826087s;
  animation-delay: 1.0713043478s;
}

.col-34 :nth-child(17) {
  animation-duration: 3.347826087s;
  animation-delay: 1.1382608696s;
}

.col-34 :nth-child(18) {
  animation-duration: 3.347826087s;
  animation-delay: 1.2052173913s;
}

.col-34 :nth-child(19) {
  animation-duration: 3.347826087s;
  animation-delay: 1.272173913s;
}

.col-34 :nth-child(20) {
  animation-duration: 3.347826087s;
  animation-delay: 1.3391304348s;
}

.col-34 :nth-child(21) {
  animation-duration: 3.347826087s;
  animation-delay: 1.4060869565s;
}

.col-34 :nth-child(22) {
  animation-duration: 3.347826087s;
  animation-delay: 1.4730434783s;
}

.col-34 :nth-child(23) {
  animation-duration: 3.347826087s;
  animation-delay: 1.54s;
}

.col-34 :nth-child(24) {
  animation-duration: 3.347826087s;
  animation-delay: 1.6069565217s;
}

.col-34 :nth-child(25) {
  animation-duration: 3.347826087s;
  animation-delay: 1.6739130435s;
}

.col-34 :nth-child(26) {
  animation-duration: 3.347826087s;
  animation-delay: 1.7408695652s;
}

.col-34 :nth-child(27) {
  animation-duration: 3.347826087s;
  animation-delay: 1.807826087s;
}

.col-34 :nth-child(28) {
  animation-duration: 3.347826087s;
  animation-delay: 1.8747826087s;
}

.col-34 :nth-child(29) {
  animation-duration: 3.347826087s;
  animation-delay: 1.9417391304s;
}

.col-34 :nth-child(30) {
  animation-duration: 3.347826087s;
  animation-delay: 2.0086956522s;
}

.col-34 :nth-child(31) {
  animation-duration: 3.347826087s;
  animation-delay: 2.0756521739s;
}

.col-34 :nth-child(32) {
  animation-duration: 3.347826087s;
  animation-delay: 2.1426086957s;
}

.col-34 :nth-child(33) {
  animation-duration: 3.347826087s;
  animation-delay: 2.2095652174s;
}

.col-34 :nth-child(34) {
  animation-duration: 3.347826087s;
  animation-delay: 2.2765217391s;
}

.col-34 :nth-child(35) {
  animation-duration: 3.347826087s;
  animation-delay: 2.3434782609s;
}

.col-34 :nth-child(36) {
  animation-duration: 3.347826087s;
  animation-delay: 2.4104347826s;
}

.col-34 :nth-child(37) {
  animation-duration: 3.347826087s;
  animation-delay: 2.4773913043s;
}

.col-34 :nth-child(38) {
  animation-duration: 3.347826087s;
  animation-delay: 2.5443478261s;
}

.col-34 :nth-child(39) {
  animation-duration: 3.347826087s;
  animation-delay: 2.6113043478s;
}

.col-34 :nth-child(40) {
  animation-duration: 3.347826087s;
  animation-delay: 2.6782608696s;
}

.col-34 :nth-child(41) {
  animation-duration: 3.347826087s;
  animation-delay: 2.7452173913s;
}

.col-34 :nth-child(42) {
  animation-duration: 3.347826087s;
  animation-delay: 2.812173913s;
}

.col-34 :nth-child(43) {
  animation-duration: 3.347826087s;
  animation-delay: 2.8791304348s;
}

.col-34 :nth-child(44) {
  animation-duration: 3.347826087s;
  animation-delay: 2.9460869565s;
}

.col-34 :nth-child(45) {
  animation-duration: 3.347826087s;
  animation-delay: 3.0130434783s;
}

.col-34 :nth-child(46) {
  animation-duration: 3.347826087s;
  animation-delay: 3.08s;
}

.col-34 :nth-child(47) {
  animation-duration: 3.347826087s;
  animation-delay: 3.1469565217s;
}

.col-34 :nth-child(48) {
  animation-duration: 3.347826087s;
  animation-delay: 3.2139130435s;
}

.col-34 :nth-child(49) {
  animation-duration: 3.347826087s;
  animation-delay: 3.2808695652s;
}

.col-34 :nth-child(50) {
  animation-duration: 3.347826087s;
  animation-delay: 3.347826087s;
}

.col-35 :nth-child(1) {
  animation-duration: 2.5652173913s;
  animation-delay: 0.0513043478s;
}

.col-35 :nth-child(2) {
  animation-duration: 2.5652173913s;
  animation-delay: 0.1026086957s;
}

.col-35 :nth-child(3) {
  animation-duration: 2.5652173913s;
  animation-delay: 0.1539130435s;
}

.col-35 :nth-child(4) {
  animation-duration: 2.5652173913s;
  animation-delay: 0.2052173913s;
}

.col-35 :nth-child(5) {
  animation-duration: 2.5652173913s;
  animation-delay: 0.2565217391s;
}

.col-35 :nth-child(6) {
  animation-duration: 2.5652173913s;
  animation-delay: 0.307826087s;
}

.col-35 :nth-child(7) {
  animation-duration: 2.5652173913s;
  animation-delay: 0.3591304348s;
}

.col-35 :nth-child(8) {
  animation-duration: 2.5652173913s;
  animation-delay: 0.4104347826s;
}

.col-35 :nth-child(9) {
  animation-duration: 2.5652173913s;
  animation-delay: 0.4617391304s;
}

.col-35 :nth-child(10) {
  animation-duration: 2.5652173913s;
  animation-delay: 0.5130434783s;
}

.col-35 :nth-child(11) {
  animation-duration: 2.5652173913s;
  animation-delay: 0.5643478261s;
}

.col-35 :nth-child(12) {
  animation-duration: 2.5652173913s;
  animation-delay: 0.6156521739s;
}

.col-35 :nth-child(13) {
  animation-duration: 2.5652173913s;
  animation-delay: 0.6669565217s;
}

.col-35 :nth-child(14) {
  animation-duration: 2.5652173913s;
  animation-delay: 0.7182608696s;
}

.col-35 :nth-child(15) {
  animation-duration: 2.5652173913s;
  animation-delay: 0.7695652174s;
}

.col-35 :nth-child(16) {
  animation-duration: 2.5652173913s;
  animation-delay: 0.8208695652s;
}

.col-35 :nth-child(17) {
  animation-duration: 2.5652173913s;
  animation-delay: 0.872173913s;
}

.col-35 :nth-child(18) {
  animation-duration: 2.5652173913s;
  animation-delay: 0.9234782609s;
}

.col-35 :nth-child(19) {
  animation-duration: 2.5652173913s;
  animation-delay: 0.9747826087s;
}

.col-35 :nth-child(20) {
  animation-duration: 2.5652173913s;
  animation-delay: 1.0260869565s;
}

.col-35 :nth-child(21) {
  animation-duration: 2.5652173913s;
  animation-delay: 1.0773913043s;
}

.col-35 :nth-child(22) {
  animation-duration: 2.5652173913s;
  animation-delay: 1.1286956522s;
}

.col-35 :nth-child(23) {
  animation-duration: 2.5652173913s;
  animation-delay: 1.18s;
}

.col-35 :nth-child(24) {
  animation-duration: 2.5652173913s;
  animation-delay: 1.2313043478s;
}

.col-35 :nth-child(25) {
  animation-duration: 2.5652173913s;
  animation-delay: 1.2826086957s;
}

.col-35 :nth-child(26) {
  animation-duration: 2.5652173913s;
  animation-delay: 1.3339130435s;
}

.col-35 :nth-child(27) {
  animation-duration: 2.5652173913s;
  animation-delay: 1.3852173913s;
}

.col-35 :nth-child(28) {
  animation-duration: 2.5652173913s;
  animation-delay: 1.4365217391s;
}

.col-35 :nth-child(29) {
  animation-duration: 2.5652173913s;
  animation-delay: 1.487826087s;
}

.col-35 :nth-child(30) {
  animation-duration: 2.5652173913s;
  animation-delay: 1.5391304348s;
}

.col-35 :nth-child(31) {
  animation-duration: 2.5652173913s;
  animation-delay: 1.5904347826s;
}

.col-35 :nth-child(32) {
  animation-duration: 2.5652173913s;
  animation-delay: 1.6417391304s;
}

.col-35 :nth-child(33) {
  animation-duration: 2.5652173913s;
  animation-delay: 1.6930434783s;
}

.col-35 :nth-child(34) {
  animation-duration: 2.5652173913s;
  animation-delay: 1.7443478261s;
}

.col-35 :nth-child(35) {
  animation-duration: 2.5652173913s;
  animation-delay: 1.7956521739s;
}

.col-35 :nth-child(36) {
  animation-duration: 2.5652173913s;
  animation-delay: 1.8469565217s;
}

.col-35 :nth-child(37) {
  animation-duration: 2.5652173913s;
  animation-delay: 1.8982608696s;
}

.col-35 :nth-child(38) {
  animation-duration: 2.5652173913s;
  animation-delay: 1.9495652174s;
}

.col-35 :nth-child(39) {
  animation-duration: 2.5652173913s;
  animation-delay: 2.0008695652s;
}

.col-35 :nth-child(40) {
  animation-duration: 2.5652173913s;
  animation-delay: 2.052173913s;
}

.col-35 :nth-child(41) {
  animation-duration: 2.5652173913s;
  animation-delay: 2.1034782609s;
}

.col-35 :nth-child(42) {
  animation-duration: 2.5652173913s;
  animation-delay: 2.1547826087s;
}

.col-35 :nth-child(43) {
  animation-duration: 2.5652173913s;
  animation-delay: 2.2060869565s;
}

.col-35 :nth-child(44) {
  animation-duration: 2.5652173913s;
  animation-delay: 2.2573913043s;
}

.col-35 :nth-child(45) {
  animation-duration: 2.5652173913s;
  animation-delay: 2.3086956522s;
}

.col-35 :nth-child(46) {
  animation-duration: 2.5652173913s;
  animation-delay: 2.36s;
}

.col-35 :nth-child(47) {
  animation-duration: 2.5652173913s;
  animation-delay: 2.4113043478s;
}

.col-35 :nth-child(48) {
  animation-duration: 2.5652173913s;
  animation-delay: 2.4626086957s;
}

.col-35 :nth-child(49) {
  animation-duration: 2.5652173913s;
  animation-delay: 2.5139130435s;
}

.col-35 :nth-child(50) {
  animation-duration: 2.5652173913s;
  animation-delay: 2.5652173913s;
}

.col-36 :nth-child(1) {
  animation-duration: 2.9130434783s;
  animation-delay: 0.0582608696s;
}

.col-36 :nth-child(2) {
  animation-duration: 2.9130434783s;
  animation-delay: 0.1165217391s;
}

.col-36 :nth-child(3) {
  animation-duration: 2.9130434783s;
  animation-delay: 0.1747826087s;
}

.col-36 :nth-child(4) {
  animation-duration: 2.9130434783s;
  animation-delay: 0.2330434783s;
}

.col-36 :nth-child(5) {
  animation-duration: 2.9130434783s;
  animation-delay: 0.2913043478s;
}

.col-36 :nth-child(6) {
  animation-duration: 2.9130434783s;
  animation-delay: 0.3495652174s;
}

.col-36 :nth-child(7) {
  animation-duration: 2.9130434783s;
  animation-delay: 0.407826087s;
}

.col-36 :nth-child(8) {
  animation-duration: 2.9130434783s;
  animation-delay: 0.4660869565s;
}

.col-36 :nth-child(9) {
  animation-duration: 2.9130434783s;
  animation-delay: 0.5243478261s;
}

.col-36 :nth-child(10) {
  animation-duration: 2.9130434783s;
  animation-delay: 0.5826086957s;
}

.col-36 :nth-child(11) {
  animation-duration: 2.9130434783s;
  animation-delay: 0.6408695652s;
}

.col-36 :nth-child(12) {
  animation-duration: 2.9130434783s;
  animation-delay: 0.6991304348s;
}

.col-36 :nth-child(13) {
  animation-duration: 2.9130434783s;
  animation-delay: 0.7573913043s;
}

.col-36 :nth-child(14) {
  animation-duration: 2.9130434783s;
  animation-delay: 0.8156521739s;
}

.col-36 :nth-child(15) {
  animation-duration: 2.9130434783s;
  animation-delay: 0.8739130435s;
}

.col-36 :nth-child(16) {
  animation-duration: 2.9130434783s;
  animation-delay: 0.932173913s;
}

.col-36 :nth-child(17) {
  animation-duration: 2.9130434783s;
  animation-delay: 0.9904347826s;
}

.col-36 :nth-child(18) {
  animation-duration: 2.9130434783s;
  animation-delay: 1.0486956522s;
}

.col-36 :nth-child(19) {
  animation-duration: 2.9130434783s;
  animation-delay: 1.1069565217s;
}

.col-36 :nth-child(20) {
  animation-duration: 2.9130434783s;
  animation-delay: 1.1652173913s;
}

.col-36 :nth-child(21) {
  animation-duration: 2.9130434783s;
  animation-delay: 1.2234782609s;
}

.col-36 :nth-child(22) {
  animation-duration: 2.9130434783s;
  animation-delay: 1.2817391304s;
}

.col-36 :nth-child(23) {
  animation-duration: 2.9130434783s;
  animation-delay: 1.34s;
}

.col-36 :nth-child(24) {
  animation-duration: 2.9130434783s;
  animation-delay: 1.3982608696s;
}

.col-36 :nth-child(25) {
  animation-duration: 2.9130434783s;
  animation-delay: 1.4565217391s;
}

.col-36 :nth-child(26) {
  animation-duration: 2.9130434783s;
  animation-delay: 1.5147826087s;
}

.col-36 :nth-child(27) {
  animation-duration: 2.9130434783s;
  animation-delay: 1.5730434783s;
}

.col-36 :nth-child(28) {
  animation-duration: 2.9130434783s;
  animation-delay: 1.6313043478s;
}

.col-36 :nth-child(29) {
  animation-duration: 2.9130434783s;
  animation-delay: 1.6895652174s;
}

.col-36 :nth-child(30) {
  animation-duration: 2.9130434783s;
  animation-delay: 1.747826087s;
}

.col-36 :nth-child(31) {
  animation-duration: 2.9130434783s;
  animation-delay: 1.8060869565s;
}

.col-36 :nth-child(32) {
  animation-duration: 2.9130434783s;
  animation-delay: 1.8643478261s;
}

.col-36 :nth-child(33) {
  animation-duration: 2.9130434783s;
  animation-delay: 1.9226086957s;
}

.col-36 :nth-child(34) {
  animation-duration: 2.9130434783s;
  animation-delay: 1.9808695652s;
}

.col-36 :nth-child(35) {
  animation-duration: 2.9130434783s;
  animation-delay: 2.0391304348s;
}

.col-36 :nth-child(36) {
  animation-duration: 2.9130434783s;
  animation-delay: 2.0973913043s;
}

.col-36 :nth-child(37) {
  animation-duration: 2.9130434783s;
  animation-delay: 2.1556521739s;
}

.col-36 :nth-child(38) {
  animation-duration: 2.9130434783s;
  animation-delay: 2.2139130435s;
}

.col-36 :nth-child(39) {
  animation-duration: 2.9130434783s;
  animation-delay: 2.272173913s;
}

.col-36 :nth-child(40) {
  animation-duration: 2.9130434783s;
  animation-delay: 2.3304347826s;
}

.col-36 :nth-child(41) {
  animation-duration: 2.9130434783s;
  animation-delay: 2.3886956522s;
}

.col-36 :nth-child(42) {
  animation-duration: 2.9130434783s;
  animation-delay: 2.4469565217s;
}

.col-36 :nth-child(43) {
  animation-duration: 2.9130434783s;
  animation-delay: 2.5052173913s;
}

.col-36 :nth-child(44) {
  animation-duration: 2.9130434783s;
  animation-delay: 2.5634782609s;
}

.col-36 :nth-child(45) {
  animation-duration: 2.9130434783s;
  animation-delay: 2.6217391304s;
}

.col-36 :nth-child(46) {
  animation-duration: 2.9130434783s;
  animation-delay: 2.68s;
}

.col-36 :nth-child(47) {
  animation-duration: 2.9130434783s;
  animation-delay: 2.7382608696s;
}

.col-36 :nth-child(48) {
  animation-duration: 2.9130434783s;
  animation-delay: 2.7965217391s;
}

.col-36 :nth-child(49) {
  animation-duration: 2.9130434783s;
  animation-delay: 2.8547826087s;
}

.col-36 :nth-child(50) {
  animation-duration: 2.9130434783s;
  animation-delay: 2.9130434783s;
}

.col-37 :nth-child(1) {
  animation-duration: 4.652173913s;
  animation-delay: 0.0930434783s;
}

.col-37 :nth-child(2) {
  animation-duration: 4.652173913s;
  animation-delay: 0.1860869565s;
}

.col-37 :nth-child(3) {
  animation-duration: 4.652173913s;
  animation-delay: 0.2791304348s;
}

.col-37 :nth-child(4) {
  animation-duration: 4.652173913s;
  animation-delay: 0.372173913s;
}

.col-37 :nth-child(5) {
  animation-duration: 4.652173913s;
  animation-delay: 0.4652173913s;
}

.col-37 :nth-child(6) {
  animation-duration: 4.652173913s;
  animation-delay: 0.5582608696s;
}

.col-37 :nth-child(7) {
  animation-duration: 4.652173913s;
  animation-delay: 0.6513043478s;
}

.col-37 :nth-child(8) {
  animation-duration: 4.652173913s;
  animation-delay: 0.7443478261s;
}

.col-37 :nth-child(9) {
  animation-duration: 4.652173913s;
  animation-delay: 0.8373913043s;
}

.col-37 :nth-child(10) {
  animation-duration: 4.652173913s;
  animation-delay: 0.9304347826s;
}

.col-37 :nth-child(11) {
  animation-duration: 4.652173913s;
  animation-delay: 1.0234782609s;
}

.col-37 :nth-child(12) {
  animation-duration: 4.652173913s;
  animation-delay: 1.1165217391s;
}

.col-37 :nth-child(13) {
  animation-duration: 4.652173913s;
  animation-delay: 1.2095652174s;
}

.col-37 :nth-child(14) {
  animation-duration: 4.652173913s;
  animation-delay: 1.3026086957s;
}

.col-37 :nth-child(15) {
  animation-duration: 4.652173913s;
  animation-delay: 1.3956521739s;
}

.col-37 :nth-child(16) {
  animation-duration: 4.652173913s;
  animation-delay: 1.4886956522s;
}

.col-37 :nth-child(17) {
  animation-duration: 4.652173913s;
  animation-delay: 1.5817391304s;
}

.col-37 :nth-child(18) {
  animation-duration: 4.652173913s;
  animation-delay: 1.6747826087s;
}

.col-37 :nth-child(19) {
  animation-duration: 4.652173913s;
  animation-delay: 1.767826087s;
}

.col-37 :nth-child(20) {
  animation-duration: 4.652173913s;
  animation-delay: 1.8608695652s;
}

.col-37 :nth-child(21) {
  animation-duration: 4.652173913s;
  animation-delay: 1.9539130435s;
}

.col-37 :nth-child(22) {
  animation-duration: 4.652173913s;
  animation-delay: 2.0469565217s;
}

.col-37 :nth-child(23) {
  animation-duration: 4.652173913s;
  animation-delay: 2.14s;
}

.col-37 :nth-child(24) {
  animation-duration: 4.652173913s;
  animation-delay: 2.2330434783s;
}

.col-37 :nth-child(25) {
  animation-duration: 4.652173913s;
  animation-delay: 2.3260869565s;
}

.col-37 :nth-child(26) {
  animation-duration: 4.652173913s;
  animation-delay: 2.4191304348s;
}

.col-37 :nth-child(27) {
  animation-duration: 4.652173913s;
  animation-delay: 2.512173913s;
}

.col-37 :nth-child(28) {
  animation-duration: 4.652173913s;
  animation-delay: 2.6052173913s;
}

.col-37 :nth-child(29) {
  animation-duration: 4.652173913s;
  animation-delay: 2.6982608696s;
}

.col-37 :nth-child(30) {
  animation-duration: 4.652173913s;
  animation-delay: 2.7913043478s;
}

.col-37 :nth-child(31) {
  animation-duration: 4.652173913s;
  animation-delay: 2.8843478261s;
}

.col-37 :nth-child(32) {
  animation-duration: 4.652173913s;
  animation-delay: 2.9773913043s;
}

.col-37 :nth-child(33) {
  animation-duration: 4.652173913s;
  animation-delay: 3.0704347826s;
}

.col-37 :nth-child(34) {
  animation-duration: 4.652173913s;
  animation-delay: 3.1634782609s;
}

.col-37 :nth-child(35) {
  animation-duration: 4.652173913s;
  animation-delay: 3.2565217391s;
}

.col-37 :nth-child(36) {
  animation-duration: 4.652173913s;
  animation-delay: 3.3495652174s;
}

.col-37 :nth-child(37) {
  animation-duration: 4.652173913s;
  animation-delay: 3.4426086957s;
}

.col-37 :nth-child(38) {
  animation-duration: 4.652173913s;
  animation-delay: 3.5356521739s;
}

.col-37 :nth-child(39) {
  animation-duration: 4.652173913s;
  animation-delay: 3.6286956522s;
}

.col-37 :nth-child(40) {
  animation-duration: 4.652173913s;
  animation-delay: 3.7217391304s;
}

.col-37 :nth-child(41) {
  animation-duration: 4.652173913s;
  animation-delay: 3.8147826087s;
}

.col-37 :nth-child(42) {
  animation-duration: 4.652173913s;
  animation-delay: 3.907826087s;
}

.col-37 :nth-child(43) {
  animation-duration: 4.652173913s;
  animation-delay: 4.0008695652s;
}

.col-37 :nth-child(44) {
  animation-duration: 4.652173913s;
  animation-delay: 4.0939130435s;
}

.col-37 :nth-child(45) {
  animation-duration: 4.652173913s;
  animation-delay: 4.1869565217s;
}

.col-37 :nth-child(46) {
  animation-duration: 4.652173913s;
  animation-delay: 4.28s;
}

.col-37 :nth-child(47) {
  animation-duration: 4.652173913s;
  animation-delay: 4.3730434783s;
}

.col-37 :nth-child(48) {
  animation-duration: 4.652173913s;
  animation-delay: 4.4660869565s;
}

.col-37 :nth-child(49) {
  animation-duration: 4.652173913s;
  animation-delay: 4.5591304348s;
}

.col-37 :nth-child(50) {
  animation-duration: 4.652173913s;
  animation-delay: 4.652173913s;
}

.col-38 :nth-child(1) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.0434782609s;
}

.col-38 :nth-child(2) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.0869565217s;
}

.col-38 :nth-child(3) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.1304347826s;
}

.col-38 :nth-child(4) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.1739130435s;
}

.col-38 :nth-child(5) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.2173913043s;
}

.col-38 :nth-child(6) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.2608695652s;
}

.col-38 :nth-child(7) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.3043478261s;
}

.col-38 :nth-child(8) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.347826087s;
}

.col-38 :nth-child(9) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.3913043478s;
}

.col-38 :nth-child(10) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.4347826087s;
}

.col-38 :nth-child(11) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.4782608696s;
}

.col-38 :nth-child(12) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.5217391304s;
}

.col-38 :nth-child(13) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.5652173913s;
}

.col-38 :nth-child(14) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.6086956522s;
}

.col-38 :nth-child(15) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.652173913s;
}

.col-38 :nth-child(16) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.6956521739s;
}

.col-38 :nth-child(17) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.7391304348s;
}

.col-38 :nth-child(18) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.7826086957s;
}

.col-38 :nth-child(19) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.8260869565s;
}

.col-38 :nth-child(20) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.8695652174s;
}

.col-38 :nth-child(21) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.9130434783s;
}

.col-38 :nth-child(22) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.9565217391s;
}

.col-38 :nth-child(23) {
  animation-duration: 2.1739130435s;
  animation-delay: 1s;
}

.col-38 :nth-child(24) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.0434782609s;
}

.col-38 :nth-child(25) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.0869565217s;
}

.col-38 :nth-child(26) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.1304347826s;
}

.col-38 :nth-child(27) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.1739130435s;
}

.col-38 :nth-child(28) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.2173913043s;
}

.col-38 :nth-child(29) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.2608695652s;
}

.col-38 :nth-child(30) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.3043478261s;
}

.col-38 :nth-child(31) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.347826087s;
}

.col-38 :nth-child(32) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.3913043478s;
}

.col-38 :nth-child(33) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.4347826087s;
}

.col-38 :nth-child(34) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.4782608696s;
}

.col-38 :nth-child(35) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.5217391304s;
}

.col-38 :nth-child(36) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.5652173913s;
}

.col-38 :nth-child(37) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.6086956522s;
}

.col-38 :nth-child(38) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.652173913s;
}

.col-38 :nth-child(39) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.6956521739s;
}

.col-38 :nth-child(40) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.7391304348s;
}

.col-38 :nth-child(41) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.7826086957s;
}

.col-38 :nth-child(42) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.8260869565s;
}

.col-38 :nth-child(43) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.8695652174s;
}

.col-38 :nth-child(44) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.9130434783s;
}

.col-38 :nth-child(45) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.9565217391s;
}

.col-38 :nth-child(46) {
  animation-duration: 2.1739130435s;
  animation-delay: 2s;
}

.col-38 :nth-child(47) {
  animation-duration: 2.1739130435s;
  animation-delay: 2.0434782609s;
}

.col-38 :nth-child(48) {
  animation-duration: 2.1739130435s;
  animation-delay: 2.0869565217s;
}

.col-38 :nth-child(49) {
  animation-duration: 2.1739130435s;
  animation-delay: 2.1304347826s;
}

.col-38 :nth-child(50) {
  animation-duration: 2.1739130435s;
  animation-delay: 2.1739130435s;
}

.col-39 :nth-child(1) {
  animation-duration: 2.652173913s;
  animation-delay: 0.0530434783s;
}

.col-39 :nth-child(2) {
  animation-duration: 2.652173913s;
  animation-delay: 0.1060869565s;
}

.col-39 :nth-child(3) {
  animation-duration: 2.652173913s;
  animation-delay: 0.1591304348s;
}

.col-39 :nth-child(4) {
  animation-duration: 2.652173913s;
  animation-delay: 0.212173913s;
}

.col-39 :nth-child(5) {
  animation-duration: 2.652173913s;
  animation-delay: 0.2652173913s;
}

.col-39 :nth-child(6) {
  animation-duration: 2.652173913s;
  animation-delay: 0.3182608696s;
}

.col-39 :nth-child(7) {
  animation-duration: 2.652173913s;
  animation-delay: 0.3713043478s;
}

.col-39 :nth-child(8) {
  animation-duration: 2.652173913s;
  animation-delay: 0.4243478261s;
}

.col-39 :nth-child(9) {
  animation-duration: 2.652173913s;
  animation-delay: 0.4773913043s;
}

.col-39 :nth-child(10) {
  animation-duration: 2.652173913s;
  animation-delay: 0.5304347826s;
}

.col-39 :nth-child(11) {
  animation-duration: 2.652173913s;
  animation-delay: 0.5834782609s;
}

.col-39 :nth-child(12) {
  animation-duration: 2.652173913s;
  animation-delay: 0.6365217391s;
}

.col-39 :nth-child(13) {
  animation-duration: 2.652173913s;
  animation-delay: 0.6895652174s;
}

.col-39 :nth-child(14) {
  animation-duration: 2.652173913s;
  animation-delay: 0.7426086957s;
}

.col-39 :nth-child(15) {
  animation-duration: 2.652173913s;
  animation-delay: 0.7956521739s;
}

.col-39 :nth-child(16) {
  animation-duration: 2.652173913s;
  animation-delay: 0.8486956522s;
}

.col-39 :nth-child(17) {
  animation-duration: 2.652173913s;
  animation-delay: 0.9017391304s;
}

.col-39 :nth-child(18) {
  animation-duration: 2.652173913s;
  animation-delay: 0.9547826087s;
}

.col-39 :nth-child(19) {
  animation-duration: 2.652173913s;
  animation-delay: 1.007826087s;
}

.col-39 :nth-child(20) {
  animation-duration: 2.652173913s;
  animation-delay: 1.0608695652s;
}

.col-39 :nth-child(21) {
  animation-duration: 2.652173913s;
  animation-delay: 1.1139130435s;
}

.col-39 :nth-child(22) {
  animation-duration: 2.652173913s;
  animation-delay: 1.1669565217s;
}

.col-39 :nth-child(23) {
  animation-duration: 2.652173913s;
  animation-delay: 1.22s;
}

.col-39 :nth-child(24) {
  animation-duration: 2.652173913s;
  animation-delay: 1.2730434783s;
}

.col-39 :nth-child(25) {
  animation-duration: 2.652173913s;
  animation-delay: 1.3260869565s;
}

.col-39 :nth-child(26) {
  animation-duration: 2.652173913s;
  animation-delay: 1.3791304348s;
}

.col-39 :nth-child(27) {
  animation-duration: 2.652173913s;
  animation-delay: 1.432173913s;
}

.col-39 :nth-child(28) {
  animation-duration: 2.652173913s;
  animation-delay: 1.4852173913s;
}

.col-39 :nth-child(29) {
  animation-duration: 2.652173913s;
  animation-delay: 1.5382608696s;
}

.col-39 :nth-child(30) {
  animation-duration: 2.652173913s;
  animation-delay: 1.5913043478s;
}

.col-39 :nth-child(31) {
  animation-duration: 2.652173913s;
  animation-delay: 1.6443478261s;
}

.col-39 :nth-child(32) {
  animation-duration: 2.652173913s;
  animation-delay: 1.6973913043s;
}

.col-39 :nth-child(33) {
  animation-duration: 2.652173913s;
  animation-delay: 1.7504347826s;
}

.col-39 :nth-child(34) {
  animation-duration: 2.652173913s;
  animation-delay: 1.8034782609s;
}

.col-39 :nth-child(35) {
  animation-duration: 2.652173913s;
  animation-delay: 1.8565217391s;
}

.col-39 :nth-child(36) {
  animation-duration: 2.652173913s;
  animation-delay: 1.9095652174s;
}

.col-39 :nth-child(37) {
  animation-duration: 2.652173913s;
  animation-delay: 1.9626086957s;
}

.col-39 :nth-child(38) {
  animation-duration: 2.652173913s;
  animation-delay: 2.0156521739s;
}

.col-39 :nth-child(39) {
  animation-duration: 2.652173913s;
  animation-delay: 2.0686956522s;
}

.col-39 :nth-child(40) {
  animation-duration: 2.652173913s;
  animation-delay: 2.1217391304s;
}

.col-39 :nth-child(41) {
  animation-duration: 2.652173913s;
  animation-delay: 2.1747826087s;
}

.col-39 :nth-child(42) {
  animation-duration: 2.652173913s;
  animation-delay: 2.227826087s;
}

.col-39 :nth-child(43) {
  animation-duration: 2.652173913s;
  animation-delay: 2.2808695652s;
}

.col-39 :nth-child(44) {
  animation-duration: 2.652173913s;
  animation-delay: 2.3339130435s;
}

.col-39 :nth-child(45) {
  animation-duration: 2.652173913s;
  animation-delay: 2.3869565217s;
}

.col-39 :nth-child(46) {
  animation-duration: 2.652173913s;
  animation-delay: 2.44s;
}

.col-39 :nth-child(47) {
  animation-duration: 2.652173913s;
  animation-delay: 2.4930434783s;
}

.col-39 :nth-child(48) {
  animation-duration: 2.652173913s;
  animation-delay: 2.5460869565s;
}

.col-39 :nth-child(49) {
  animation-duration: 2.652173913s;
  animation-delay: 2.5991304348s;
}

.col-39 :nth-child(50) {
  animation-duration: 2.652173913s;
  animation-delay: 2.652173913s;
}

.col-40 :nth-child(1) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.0643478261s;
}

.col-40 :nth-child(2) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.1286956522s;
}

.col-40 :nth-child(3) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.1930434783s;
}

.col-40 :nth-child(4) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.2573913043s;
}

.col-40 :nth-child(5) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.3217391304s;
}

.col-40 :nth-child(6) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.3860869565s;
}

.col-40 :nth-child(7) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.4504347826s;
}

.col-40 :nth-child(8) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.5147826087s;
}

.col-40 :nth-child(9) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.5791304348s;
}

.col-40 :nth-child(10) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.6434782609s;
}

.col-40 :nth-child(11) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.707826087s;
}

.col-40 :nth-child(12) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.772173913s;
}

.col-40 :nth-child(13) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.8365217391s;
}

.col-40 :nth-child(14) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.9008695652s;
}

.col-40 :nth-child(15) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.9652173913s;
}

.col-40 :nth-child(16) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.0295652174s;
}

.col-40 :nth-child(17) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.0939130435s;
}

.col-40 :nth-child(18) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.1582608696s;
}

.col-40 :nth-child(19) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.2226086957s;
}

.col-40 :nth-child(20) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.2869565217s;
}

.col-40 :nth-child(21) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.3513043478s;
}

.col-40 :nth-child(22) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.4156521739s;
}

.col-40 :nth-child(23) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.48s;
}

.col-40 :nth-child(24) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.5443478261s;
}

.col-40 :nth-child(25) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.6086956522s;
}

.col-40 :nth-child(26) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.6730434783s;
}

.col-40 :nth-child(27) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.7373913043s;
}

.col-40 :nth-child(28) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.8017391304s;
}

.col-40 :nth-child(29) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.8660869565s;
}

.col-40 :nth-child(30) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.9304347826s;
}

.col-40 :nth-child(31) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.9947826087s;
}

.col-40 :nth-child(32) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.0591304348s;
}

.col-40 :nth-child(33) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.1234782609s;
}

.col-40 :nth-child(34) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.187826087s;
}

.col-40 :nth-child(35) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.252173913s;
}

.col-40 :nth-child(36) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.3165217391s;
}

.col-40 :nth-child(37) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.3808695652s;
}

.col-40 :nth-child(38) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.4452173913s;
}

.col-40 :nth-child(39) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.5095652174s;
}

.col-40 :nth-child(40) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.5739130435s;
}

.col-40 :nth-child(41) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.6382608696s;
}

.col-40 :nth-child(42) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.7026086957s;
}

.col-40 :nth-child(43) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.7669565217s;
}

.col-40 :nth-child(44) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.8313043478s;
}

.col-40 :nth-child(45) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.8956521739s;
}

.col-40 :nth-child(46) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.96s;
}

.col-40 :nth-child(47) {
  animation-duration: 3.2173913043s;
  animation-delay: 3.0243478261s;
}

.col-40 :nth-child(48) {
  animation-duration: 3.2173913043s;
  animation-delay: 3.0886956522s;
}

.col-40 :nth-child(49) {
  animation-duration: 3.2173913043s;
  animation-delay: 3.1530434783s;
}

.col-40 :nth-child(50) {
  animation-duration: 3.2173913043s;
  animation-delay: 3.2173913043s;
}

.col-41 :nth-child(1) {
  animation-duration: 2.6086956522s;
  animation-delay: 0.052173913s;
}

.col-41 :nth-child(2) {
  animation-duration: 2.6086956522s;
  animation-delay: 0.1043478261s;
}

.col-41 :nth-child(3) {
  animation-duration: 2.6086956522s;
  animation-delay: 0.1565217391s;
}

.col-41 :nth-child(4) {
  animation-duration: 2.6086956522s;
  animation-delay: 0.2086956522s;
}

.col-41 :nth-child(5) {
  animation-duration: 2.6086956522s;
  animation-delay: 0.2608695652s;
}

.col-41 :nth-child(6) {
  animation-duration: 2.6086956522s;
  animation-delay: 0.3130434783s;
}

.col-41 :nth-child(7) {
  animation-duration: 2.6086956522s;
  animation-delay: 0.3652173913s;
}

.col-41 :nth-child(8) {
  animation-duration: 2.6086956522s;
  animation-delay: 0.4173913043s;
}

.col-41 :nth-child(9) {
  animation-duration: 2.6086956522s;
  animation-delay: 0.4695652174s;
}

.col-41 :nth-child(10) {
  animation-duration: 2.6086956522s;
  animation-delay: 0.5217391304s;
}

.col-41 :nth-child(11) {
  animation-duration: 2.6086956522s;
  animation-delay: 0.5739130435s;
}

.col-41 :nth-child(12) {
  animation-duration: 2.6086956522s;
  animation-delay: 0.6260869565s;
}

.col-41 :nth-child(13) {
  animation-duration: 2.6086956522s;
  animation-delay: 0.6782608696s;
}

.col-41 :nth-child(14) {
  animation-duration: 2.6086956522s;
  animation-delay: 0.7304347826s;
}

.col-41 :nth-child(15) {
  animation-duration: 2.6086956522s;
  animation-delay: 0.7826086957s;
}

.col-41 :nth-child(16) {
  animation-duration: 2.6086956522s;
  animation-delay: 0.8347826087s;
}

.col-41 :nth-child(17) {
  animation-duration: 2.6086956522s;
  animation-delay: 0.8869565217s;
}

.col-41 :nth-child(18) {
  animation-duration: 2.6086956522s;
  animation-delay: 0.9391304348s;
}

.col-41 :nth-child(19) {
  animation-duration: 2.6086956522s;
  animation-delay: 0.9913043478s;
}

.col-41 :nth-child(20) {
  animation-duration: 2.6086956522s;
  animation-delay: 1.0434782609s;
}

.col-41 :nth-child(21) {
  animation-duration: 2.6086956522s;
  animation-delay: 1.0956521739s;
}

.col-41 :nth-child(22) {
  animation-duration: 2.6086956522s;
  animation-delay: 1.147826087s;
}

.col-41 :nth-child(23) {
  animation-duration: 2.6086956522s;
  animation-delay: 1.2s;
}

.col-41 :nth-child(24) {
  animation-duration: 2.6086956522s;
  animation-delay: 1.252173913s;
}

.col-41 :nth-child(25) {
  animation-duration: 2.6086956522s;
  animation-delay: 1.3043478261s;
}

.col-41 :nth-child(26) {
  animation-duration: 2.6086956522s;
  animation-delay: 1.3565217391s;
}

.col-41 :nth-child(27) {
  animation-duration: 2.6086956522s;
  animation-delay: 1.4086956522s;
}

.col-41 :nth-child(28) {
  animation-duration: 2.6086956522s;
  animation-delay: 1.4608695652s;
}

.col-41 :nth-child(29) {
  animation-duration: 2.6086956522s;
  animation-delay: 1.5130434783s;
}

.col-41 :nth-child(30) {
  animation-duration: 2.6086956522s;
  animation-delay: 1.5652173913s;
}

.col-41 :nth-child(31) {
  animation-duration: 2.6086956522s;
  animation-delay: 1.6173913043s;
}

.col-41 :nth-child(32) {
  animation-duration: 2.6086956522s;
  animation-delay: 1.6695652174s;
}

.col-41 :nth-child(33) {
  animation-duration: 2.6086956522s;
  animation-delay: 1.7217391304s;
}

.col-41 :nth-child(34) {
  animation-duration: 2.6086956522s;
  animation-delay: 1.7739130435s;
}

.col-41 :nth-child(35) {
  animation-duration: 2.6086956522s;
  animation-delay: 1.8260869565s;
}

.col-41 :nth-child(36) {
  animation-duration: 2.6086956522s;
  animation-delay: 1.8782608696s;
}

.col-41 :nth-child(37) {
  animation-duration: 2.6086956522s;
  animation-delay: 1.9304347826s;
}

.col-41 :nth-child(38) {
  animation-duration: 2.6086956522s;
  animation-delay: 1.9826086957s;
}

.col-41 :nth-child(39) {
  animation-duration: 2.6086956522s;
  animation-delay: 2.0347826087s;
}

.col-41 :nth-child(40) {
  animation-duration: 2.6086956522s;
  animation-delay: 2.0869565217s;
}

.col-41 :nth-child(41) {
  animation-duration: 2.6086956522s;
  animation-delay: 2.1391304348s;
}

.col-41 :nth-child(42) {
  animation-duration: 2.6086956522s;
  animation-delay: 2.1913043478s;
}

.col-41 :nth-child(43) {
  animation-duration: 2.6086956522s;
  animation-delay: 2.2434782609s;
}

.col-41 :nth-child(44) {
  animation-duration: 2.6086956522s;
  animation-delay: 2.2956521739s;
}

.col-41 :nth-child(45) {
  animation-duration: 2.6086956522s;
  animation-delay: 2.347826087s;
}

.col-41 :nth-child(46) {
  animation-duration: 2.6086956522s;
  animation-delay: 2.4s;
}

.col-41 :nth-child(47) {
  animation-duration: 2.6086956522s;
  animation-delay: 2.452173913s;
}

.col-41 :nth-child(48) {
  animation-duration: 2.6086956522s;
  animation-delay: 2.5043478261s;
}

.col-41 :nth-child(49) {
  animation-duration: 2.6086956522s;
  animation-delay: 2.5565217391s;
}

.col-41 :nth-child(50) {
  animation-duration: 2.6086956522s;
  animation-delay: 2.6086956522s;
}

.col-42 :nth-child(1) {
  animation-duration: 2.4782608696s;
  animation-delay: 0.0495652174s;
}

.col-42 :nth-child(2) {
  animation-duration: 2.4782608696s;
  animation-delay: 0.0991304348s;
}

.col-42 :nth-child(3) {
  animation-duration: 2.4782608696s;
  animation-delay: 0.1486956522s;
}

.col-42 :nth-child(4) {
  animation-duration: 2.4782608696s;
  animation-delay: 0.1982608696s;
}

.col-42 :nth-child(5) {
  animation-duration: 2.4782608696s;
  animation-delay: 0.247826087s;
}

.col-42 :nth-child(6) {
  animation-duration: 2.4782608696s;
  animation-delay: 0.2973913043s;
}

.col-42 :nth-child(7) {
  animation-duration: 2.4782608696s;
  animation-delay: 0.3469565217s;
}

.col-42 :nth-child(8) {
  animation-duration: 2.4782608696s;
  animation-delay: 0.3965217391s;
}

.col-42 :nth-child(9) {
  animation-duration: 2.4782608696s;
  animation-delay: 0.4460869565s;
}

.col-42 :nth-child(10) {
  animation-duration: 2.4782608696s;
  animation-delay: 0.4956521739s;
}

.col-42 :nth-child(11) {
  animation-duration: 2.4782608696s;
  animation-delay: 0.5452173913s;
}

.col-42 :nth-child(12) {
  animation-duration: 2.4782608696s;
  animation-delay: 0.5947826087s;
}

.col-42 :nth-child(13) {
  animation-duration: 2.4782608696s;
  animation-delay: 0.6443478261s;
}

.col-42 :nth-child(14) {
  animation-duration: 2.4782608696s;
  animation-delay: 0.6939130435s;
}

.col-42 :nth-child(15) {
  animation-duration: 2.4782608696s;
  animation-delay: 0.7434782609s;
}

.col-42 :nth-child(16) {
  animation-duration: 2.4782608696s;
  animation-delay: 0.7930434783s;
}

.col-42 :nth-child(17) {
  animation-duration: 2.4782608696s;
  animation-delay: 0.8426086957s;
}

.col-42 :nth-child(18) {
  animation-duration: 2.4782608696s;
  animation-delay: 0.892173913s;
}

.col-42 :nth-child(19) {
  animation-duration: 2.4782608696s;
  animation-delay: 0.9417391304s;
}

.col-42 :nth-child(20) {
  animation-duration: 2.4782608696s;
  animation-delay: 0.9913043478s;
}

.col-42 :nth-child(21) {
  animation-duration: 2.4782608696s;
  animation-delay: 1.0408695652s;
}

.col-42 :nth-child(22) {
  animation-duration: 2.4782608696s;
  animation-delay: 1.0904347826s;
}

.col-42 :nth-child(23) {
  animation-duration: 2.4782608696s;
  animation-delay: 1.14s;
}

.col-42 :nth-child(24) {
  animation-duration: 2.4782608696s;
  animation-delay: 1.1895652174s;
}

.col-42 :nth-child(25) {
  animation-duration: 2.4782608696s;
  animation-delay: 1.2391304348s;
}

.col-42 :nth-child(26) {
  animation-duration: 2.4782608696s;
  animation-delay: 1.2886956522s;
}

.col-42 :nth-child(27) {
  animation-duration: 2.4782608696s;
  animation-delay: 1.3382608696s;
}

.col-42 :nth-child(28) {
  animation-duration: 2.4782608696s;
  animation-delay: 1.387826087s;
}

.col-42 :nth-child(29) {
  animation-duration: 2.4782608696s;
  animation-delay: 1.4373913043s;
}

.col-42 :nth-child(30) {
  animation-duration: 2.4782608696s;
  animation-delay: 1.4869565217s;
}

.col-42 :nth-child(31) {
  animation-duration: 2.4782608696s;
  animation-delay: 1.5365217391s;
}

.col-42 :nth-child(32) {
  animation-duration: 2.4782608696s;
  animation-delay: 1.5860869565s;
}

.col-42 :nth-child(33) {
  animation-duration: 2.4782608696s;
  animation-delay: 1.6356521739s;
}

.col-42 :nth-child(34) {
  animation-duration: 2.4782608696s;
  animation-delay: 1.6852173913s;
}

.col-42 :nth-child(35) {
  animation-duration: 2.4782608696s;
  animation-delay: 1.7347826087s;
}

.col-42 :nth-child(36) {
  animation-duration: 2.4782608696s;
  animation-delay: 1.7843478261s;
}

.col-42 :nth-child(37) {
  animation-duration: 2.4782608696s;
  animation-delay: 1.8339130435s;
}

.col-42 :nth-child(38) {
  animation-duration: 2.4782608696s;
  animation-delay: 1.8834782609s;
}

.col-42 :nth-child(39) {
  animation-duration: 2.4782608696s;
  animation-delay: 1.9330434783s;
}

.col-42 :nth-child(40) {
  animation-duration: 2.4782608696s;
  animation-delay: 1.9826086957s;
}

.col-42 :nth-child(41) {
  animation-duration: 2.4782608696s;
  animation-delay: 2.032173913s;
}

.col-42 :nth-child(42) {
  animation-duration: 2.4782608696s;
  animation-delay: 2.0817391304s;
}

.col-42 :nth-child(43) {
  animation-duration: 2.4782608696s;
  animation-delay: 2.1313043478s;
}

.col-42 :nth-child(44) {
  animation-duration: 2.4782608696s;
  animation-delay: 2.1808695652s;
}

.col-42 :nth-child(45) {
  animation-duration: 2.4782608696s;
  animation-delay: 2.2304347826s;
}

.col-42 :nth-child(46) {
  animation-duration: 2.4782608696s;
  animation-delay: 2.28s;
}

.col-42 :nth-child(47) {
  animation-duration: 2.4782608696s;
  animation-delay: 2.3295652174s;
}

.col-42 :nth-child(48) {
  animation-duration: 2.4782608696s;
  animation-delay: 2.3791304348s;
}

.col-42 :nth-child(49) {
  animation-duration: 2.4782608696s;
  animation-delay: 2.4286956522s;
}

.col-42 :nth-child(50) {
  animation-duration: 2.4782608696s;
  animation-delay: 2.4782608696s;
}

.col-43 :nth-child(1) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.0226086957s;
}

.col-43 :nth-child(2) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.0452173913s;
}

.col-43 :nth-child(3) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.067826087s;
}

.col-43 :nth-child(4) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.0904347826s;
}

.col-43 :nth-child(5) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.1130434783s;
}

.col-43 :nth-child(6) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.1356521739s;
}

.col-43 :nth-child(7) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.1582608696s;
}

.col-43 :nth-child(8) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.1808695652s;
}

.col-43 :nth-child(9) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.2034782609s;
}

.col-43 :nth-child(10) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.2260869565s;
}

.col-43 :nth-child(11) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.2486956522s;
}

.col-43 :nth-child(12) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.2713043478s;
}

.col-43 :nth-child(13) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.2939130435s;
}

.col-43 :nth-child(14) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.3165217391s;
}

.col-43 :nth-child(15) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.3391304348s;
}

.col-43 :nth-child(16) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.3617391304s;
}

.col-43 :nth-child(17) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.3843478261s;
}

.col-43 :nth-child(18) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.4069565217s;
}

.col-43 :nth-child(19) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.4295652174s;
}

.col-43 :nth-child(20) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.452173913s;
}

.col-43 :nth-child(21) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.4747826087s;
}

.col-43 :nth-child(22) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.4973913043s;
}

.col-43 :nth-child(23) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.52s;
}

.col-43 :nth-child(24) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.5426086957s;
}

.col-43 :nth-child(25) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.5652173913s;
}

.col-43 :nth-child(26) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.587826087s;
}

.col-43 :nth-child(27) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.6104347826s;
}

.col-43 :nth-child(28) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.6330434783s;
}

.col-43 :nth-child(29) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.6556521739s;
}

.col-43 :nth-child(30) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.6782608696s;
}

.col-43 :nth-child(31) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.7008695652s;
}

.col-43 :nth-child(32) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.7234782609s;
}

.col-43 :nth-child(33) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.7460869565s;
}

.col-43 :nth-child(34) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.7686956522s;
}

.col-43 :nth-child(35) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.7913043478s;
}

.col-43 :nth-child(36) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.8139130435s;
}

.col-43 :nth-child(37) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.8365217391s;
}

.col-43 :nth-child(38) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.8591304348s;
}

.col-43 :nth-child(39) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.8817391304s;
}

.col-43 :nth-child(40) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.9043478261s;
}

.col-43 :nth-child(41) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.9269565217s;
}

.col-43 :nth-child(42) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.9495652174s;
}

.col-43 :nth-child(43) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.972173913s;
}

.col-43 :nth-child(44) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.9947826087s;
}

.col-43 :nth-child(45) {
  animation-duration: 1.1304347826s;
  animation-delay: 1.0173913043s;
}

.col-43 :nth-child(46) {
  animation-duration: 1.1304347826s;
  animation-delay: 1.04s;
}

.col-43 :nth-child(47) {
  animation-duration: 1.1304347826s;
  animation-delay: 1.0626086957s;
}

.col-43 :nth-child(48) {
  animation-duration: 1.1304347826s;
  animation-delay: 1.0852173913s;
}

.col-43 :nth-child(49) {
  animation-duration: 1.1304347826s;
  animation-delay: 1.107826087s;
}

.col-43 :nth-child(50) {
  animation-duration: 1.1304347826s;
  animation-delay: 1.1304347826s;
}

.col-44 :nth-child(1) {
  animation-duration: 5s;
  animation-delay: 0.1s;
}

.col-44 :nth-child(2) {
  animation-duration: 5s;
  animation-delay: 0.2s;
}

.col-44 :nth-child(3) {
  animation-duration: 5s;
  animation-delay: 0.3s;
}

.col-44 :nth-child(4) {
  animation-duration: 5s;
  animation-delay: 0.4s;
}

.col-44 :nth-child(5) {
  animation-duration: 5s;
  animation-delay: 0.5s;
}

.col-44 :nth-child(6) {
  animation-duration: 5s;
  animation-delay: 0.6s;
}

.col-44 :nth-child(7) {
  animation-duration: 5s;
  animation-delay: 0.7s;
}

.col-44 :nth-child(8) {
  animation-duration: 5s;
  animation-delay: 0.8s;
}

.col-44 :nth-child(9) {
  animation-duration: 5s;
  animation-delay: 0.9s;
}

.col-44 :nth-child(10) {
  animation-duration: 5s;
  animation-delay: 1s;
}

.col-44 :nth-child(11) {
  animation-duration: 5s;
  animation-delay: 1.1s;
}

.col-44 :nth-child(12) {
  animation-duration: 5s;
  animation-delay: 1.2s;
}

.col-44 :nth-child(13) {
  animation-duration: 5s;
  animation-delay: 1.3s;
}

.col-44 :nth-child(14) {
  animation-duration: 5s;
  animation-delay: 1.4s;
}

.col-44 :nth-child(15) {
  animation-duration: 5s;
  animation-delay: 1.5s;
}

.col-44 :nth-child(16) {
  animation-duration: 5s;
  animation-delay: 1.6s;
}

.col-44 :nth-child(17) {
  animation-duration: 5s;
  animation-delay: 1.7s;
}

.col-44 :nth-child(18) {
  animation-duration: 5s;
  animation-delay: 1.8s;
}

.col-44 :nth-child(19) {
  animation-duration: 5s;
  animation-delay: 1.9s;
}

.col-44 :nth-child(20) {
  animation-duration: 5s;
  animation-delay: 2s;
}

.col-44 :nth-child(21) {
  animation-duration: 5s;
  animation-delay: 2.1s;
}

.col-44 :nth-child(22) {
  animation-duration: 5s;
  animation-delay: 2.2s;
}

.col-44 :nth-child(23) {
  animation-duration: 5s;
  animation-delay: 2.3s;
}

.col-44 :nth-child(24) {
  animation-duration: 5s;
  animation-delay: 2.4s;
}

.col-44 :nth-child(25) {
  animation-duration: 5s;
  animation-delay: 2.5s;
}

.col-44 :nth-child(26) {
  animation-duration: 5s;
  animation-delay: 2.6s;
}

.col-44 :nth-child(27) {
  animation-duration: 5s;
  animation-delay: 2.7s;
}

.col-44 :nth-child(28) {
  animation-duration: 5s;
  animation-delay: 2.8s;
}

.col-44 :nth-child(29) {
  animation-duration: 5s;
  animation-delay: 2.9s;
}

.col-44 :nth-child(30) {
  animation-duration: 5s;
  animation-delay: 3s;
}

.col-44 :nth-child(31) {
  animation-duration: 5s;
  animation-delay: 3.1s;
}

.col-44 :nth-child(32) {
  animation-duration: 5s;
  animation-delay: 3.2s;
}

.col-44 :nth-child(33) {
  animation-duration: 5s;
  animation-delay: 3.3s;
}

.col-44 :nth-child(34) {
  animation-duration: 5s;
  animation-delay: 3.4s;
}

.col-44 :nth-child(35) {
  animation-duration: 5s;
  animation-delay: 3.5s;
}

.col-44 :nth-child(36) {
  animation-duration: 5s;
  animation-delay: 3.6s;
}

.col-44 :nth-child(37) {
  animation-duration: 5s;
  animation-delay: 3.7s;
}

.col-44 :nth-child(38) {
  animation-duration: 5s;
  animation-delay: 3.8s;
}

.col-44 :nth-child(39) {
  animation-duration: 5s;
  animation-delay: 3.9s;
}

.col-44 :nth-child(40) {
  animation-duration: 5s;
  animation-delay: 4s;
}

.col-44 :nth-child(41) {
  animation-duration: 5s;
  animation-delay: 4.1s;
}

.col-44 :nth-child(42) {
  animation-duration: 5s;
  animation-delay: 4.2s;
}

.col-44 :nth-child(43) {
  animation-duration: 5s;
  animation-delay: 4.3s;
}

.col-44 :nth-child(44) {
  animation-duration: 5s;
  animation-delay: 4.4s;
}

.col-44 :nth-child(45) {
  animation-duration: 5s;
  animation-delay: 4.5s;
}

.col-44 :nth-child(46) {
  animation-duration: 5s;
  animation-delay: 4.6s;
}

.col-44 :nth-child(47) {
  animation-duration: 5s;
  animation-delay: 4.7s;
}

.col-44 :nth-child(48) {
  animation-duration: 5s;
  animation-delay: 4.8s;
}

.col-44 :nth-child(49) {
  animation-duration: 5s;
  animation-delay: 4.9s;
}

.col-44 :nth-child(50) {
  animation-duration: 5s;
  animation-delay: 5s;
}

.col-45 :nth-child(1) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.0547826087s;
}

.col-45 :nth-child(2) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.1095652174s;
}

.col-45 :nth-child(3) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.1643478261s;
}

.col-45 :nth-child(4) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.2191304348s;
}

.col-45 :nth-child(5) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.2739130435s;
}

.col-45 :nth-child(6) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.3286956522s;
}

.col-45 :nth-child(7) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.3834782609s;
}

.col-45 :nth-child(8) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.4382608696s;
}

.col-45 :nth-child(9) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.4930434783s;
}

.col-45 :nth-child(10) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.547826087s;
}

.col-45 :nth-child(11) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.6026086957s;
}

.col-45 :nth-child(12) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.6573913043s;
}

.col-45 :nth-child(13) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.712173913s;
}

.col-45 :nth-child(14) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.7669565217s;
}

.col-45 :nth-child(15) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.8217391304s;
}

.col-45 :nth-child(16) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.8765217391s;
}

.col-45 :nth-child(17) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.9313043478s;
}

.col-45 :nth-child(18) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.9860869565s;
}

.col-45 :nth-child(19) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.0408695652s;
}

.col-45 :nth-child(20) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.0956521739s;
}

.col-45 :nth-child(21) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.1504347826s;
}

.col-45 :nth-child(22) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.2052173913s;
}

.col-45 :nth-child(23) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.26s;
}

.col-45 :nth-child(24) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.3147826087s;
}

.col-45 :nth-child(25) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.3695652174s;
}

.col-45 :nth-child(26) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.4243478261s;
}

.col-45 :nth-child(27) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.4791304348s;
}

.col-45 :nth-child(28) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.5339130435s;
}

.col-45 :nth-child(29) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.5886956522s;
}

.col-45 :nth-child(30) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.6434782609s;
}

.col-45 :nth-child(31) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.6982608696s;
}

.col-45 :nth-child(32) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.7530434783s;
}

.col-45 :nth-child(33) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.807826087s;
}

.col-45 :nth-child(34) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.8626086957s;
}

.col-45 :nth-child(35) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.9173913043s;
}

.col-45 :nth-child(36) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.972173913s;
}

.col-45 :nth-child(37) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.0269565217s;
}

.col-45 :nth-child(38) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.0817391304s;
}

.col-45 :nth-child(39) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.1365217391s;
}

.col-45 :nth-child(40) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.1913043478s;
}

.col-45 :nth-child(41) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.2460869565s;
}

.col-45 :nth-child(42) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.3008695652s;
}

.col-45 :nth-child(43) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.3556521739s;
}

.col-45 :nth-child(44) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.4104347826s;
}

.col-45 :nth-child(45) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.4652173913s;
}

.col-45 :nth-child(46) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.52s;
}

.col-45 :nth-child(47) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.5747826087s;
}

.col-45 :nth-child(48) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.6295652174s;
}

.col-45 :nth-child(49) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.6843478261s;
}

.col-45 :nth-child(50) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.7391304348s;
}

.col-46 :nth-child(1) {
  animation-duration: 4.6086956522s;
  animation-delay: 0.092173913s;
}

.col-46 :nth-child(2) {
  animation-duration: 4.6086956522s;
  animation-delay: 0.1843478261s;
}

.col-46 :nth-child(3) {
  animation-duration: 4.6086956522s;
  animation-delay: 0.2765217391s;
}

.col-46 :nth-child(4) {
  animation-duration: 4.6086956522s;
  animation-delay: 0.3686956522s;
}

.col-46 :nth-child(5) {
  animation-duration: 4.6086956522s;
  animation-delay: 0.4608695652s;
}

.col-46 :nth-child(6) {
  animation-duration: 4.6086956522s;
  animation-delay: 0.5530434783s;
}

.col-46 :nth-child(7) {
  animation-duration: 4.6086956522s;
  animation-delay: 0.6452173913s;
}

.col-46 :nth-child(8) {
  animation-duration: 4.6086956522s;
  animation-delay: 0.7373913043s;
}

.col-46 :nth-child(9) {
  animation-duration: 4.6086956522s;
  animation-delay: 0.8295652174s;
}

.col-46 :nth-child(10) {
  animation-duration: 4.6086956522s;
  animation-delay: 0.9217391304s;
}

.col-46 :nth-child(11) {
  animation-duration: 4.6086956522s;
  animation-delay: 1.0139130435s;
}

.col-46 :nth-child(12) {
  animation-duration: 4.6086956522s;
  animation-delay: 1.1060869565s;
}

.col-46 :nth-child(13) {
  animation-duration: 4.6086956522s;
  animation-delay: 1.1982608696s;
}

.col-46 :nth-child(14) {
  animation-duration: 4.6086956522s;
  animation-delay: 1.2904347826s;
}

.col-46 :nth-child(15) {
  animation-duration: 4.6086956522s;
  animation-delay: 1.3826086957s;
}

.col-46 :nth-child(16) {
  animation-duration: 4.6086956522s;
  animation-delay: 1.4747826087s;
}

.col-46 :nth-child(17) {
  animation-duration: 4.6086956522s;
  animation-delay: 1.5669565217s;
}

.col-46 :nth-child(18) {
  animation-duration: 4.6086956522s;
  animation-delay: 1.6591304348s;
}

.col-46 :nth-child(19) {
  animation-duration: 4.6086956522s;
  animation-delay: 1.7513043478s;
}

.col-46 :nth-child(20) {
  animation-duration: 4.6086956522s;
  animation-delay: 1.8434782609s;
}

.col-46 :nth-child(21) {
  animation-duration: 4.6086956522s;
  animation-delay: 1.9356521739s;
}

.col-46 :nth-child(22) {
  animation-duration: 4.6086956522s;
  animation-delay: 2.027826087s;
}

.col-46 :nth-child(23) {
  animation-duration: 4.6086956522s;
  animation-delay: 2.12s;
}

.col-46 :nth-child(24) {
  animation-duration: 4.6086956522s;
  animation-delay: 2.212173913s;
}

.col-46 :nth-child(25) {
  animation-duration: 4.6086956522s;
  animation-delay: 2.3043478261s;
}

.col-46 :nth-child(26) {
  animation-duration: 4.6086956522s;
  animation-delay: 2.3965217391s;
}

.col-46 :nth-child(27) {
  animation-duration: 4.6086956522s;
  animation-delay: 2.4886956522s;
}

.col-46 :nth-child(28) {
  animation-duration: 4.6086956522s;
  animation-delay: 2.5808695652s;
}

.col-46 :nth-child(29) {
  animation-duration: 4.6086956522s;
  animation-delay: 2.6730434783s;
}

.col-46 :nth-child(30) {
  animation-duration: 4.6086956522s;
  animation-delay: 2.7652173913s;
}

.col-46 :nth-child(31) {
  animation-duration: 4.6086956522s;
  animation-delay: 2.8573913043s;
}

.col-46 :nth-child(32) {
  animation-duration: 4.6086956522s;
  animation-delay: 2.9495652174s;
}

.col-46 :nth-child(33) {
  animation-duration: 4.6086956522s;
  animation-delay: 3.0417391304s;
}

.col-46 :nth-child(34) {
  animation-duration: 4.6086956522s;
  animation-delay: 3.1339130435s;
}

.col-46 :nth-child(35) {
  animation-duration: 4.6086956522s;
  animation-delay: 3.2260869565s;
}

.col-46 :nth-child(36) {
  animation-duration: 4.6086956522s;
  animation-delay: 3.3182608696s;
}

.col-46 :nth-child(37) {
  animation-duration: 4.6086956522s;
  animation-delay: 3.4104347826s;
}

.col-46 :nth-child(38) {
  animation-duration: 4.6086956522s;
  animation-delay: 3.5026086957s;
}

.col-46 :nth-child(39) {
  animation-duration: 4.6086956522s;
  animation-delay: 3.5947826087s;
}

.col-46 :nth-child(40) {
  animation-duration: 4.6086956522s;
  animation-delay: 3.6869565217s;
}

.col-46 :nth-child(41) {
  animation-duration: 4.6086956522s;
  animation-delay: 3.7791304348s;
}

.col-46 :nth-child(42) {
  animation-duration: 4.6086956522s;
  animation-delay: 3.8713043478s;
}

.col-46 :nth-child(43) {
  animation-duration: 4.6086956522s;
  animation-delay: 3.9634782609s;
}

.col-46 :nth-child(44) {
  animation-duration: 4.6086956522s;
  animation-delay: 4.0556521739s;
}

.col-46 :nth-child(45) {
  animation-duration: 4.6086956522s;
  animation-delay: 4.147826087s;
}

.col-46 :nth-child(46) {
  animation-duration: 4.6086956522s;
  animation-delay: 4.24s;
}

.col-46 :nth-child(47) {
  animation-duration: 4.6086956522s;
  animation-delay: 4.332173913s;
}

.col-46 :nth-child(48) {
  animation-duration: 4.6086956522s;
  animation-delay: 4.4243478261s;
}

.col-46 :nth-child(49) {
  animation-duration: 4.6086956522s;
  animation-delay: 4.5165217391s;
}

.col-46 :nth-child(50) {
  animation-duration: 4.6086956522s;
  animation-delay: 4.6086956522s;
}

.col-47 :nth-child(1) {
  animation-duration: 3.5217391304s;
  animation-delay: 0.0704347826s;
}

.col-47 :nth-child(2) {
  animation-duration: 3.5217391304s;
  animation-delay: 0.1408695652s;
}

.col-47 :nth-child(3) {
  animation-duration: 3.5217391304s;
  animation-delay: 0.2113043478s;
}

.col-47 :nth-child(4) {
  animation-duration: 3.5217391304s;
  animation-delay: 0.2817391304s;
}

.col-47 :nth-child(5) {
  animation-duration: 3.5217391304s;
  animation-delay: 0.352173913s;
}

.col-47 :nth-child(6) {
  animation-duration: 3.5217391304s;
  animation-delay: 0.4226086957s;
}

.col-47 :nth-child(7) {
  animation-duration: 3.5217391304s;
  animation-delay: 0.4930434783s;
}

.col-47 :nth-child(8) {
  animation-duration: 3.5217391304s;
  animation-delay: 0.5634782609s;
}

.col-47 :nth-child(9) {
  animation-duration: 3.5217391304s;
  animation-delay: 0.6339130435s;
}

.col-47 :nth-child(10) {
  animation-duration: 3.5217391304s;
  animation-delay: 0.7043478261s;
}

.col-47 :nth-child(11) {
  animation-duration: 3.5217391304s;
  animation-delay: 0.7747826087s;
}

.col-47 :nth-child(12) {
  animation-duration: 3.5217391304s;
  animation-delay: 0.8452173913s;
}

.col-47 :nth-child(13) {
  animation-duration: 3.5217391304s;
  animation-delay: 0.9156521739s;
}

.col-47 :nth-child(14) {
  animation-duration: 3.5217391304s;
  animation-delay: 0.9860869565s;
}

.col-47 :nth-child(15) {
  animation-duration: 3.5217391304s;
  animation-delay: 1.0565217391s;
}

.col-47 :nth-child(16) {
  animation-duration: 3.5217391304s;
  animation-delay: 1.1269565217s;
}

.col-47 :nth-child(17) {
  animation-duration: 3.5217391304s;
  animation-delay: 1.1973913043s;
}

.col-47 :nth-child(18) {
  animation-duration: 3.5217391304s;
  animation-delay: 1.267826087s;
}

.col-47 :nth-child(19) {
  animation-duration: 3.5217391304s;
  animation-delay: 1.3382608696s;
}

.col-47 :nth-child(20) {
  animation-duration: 3.5217391304s;
  animation-delay: 1.4086956522s;
}

.col-47 :nth-child(21) {
  animation-duration: 3.5217391304s;
  animation-delay: 1.4791304348s;
}

.col-47 :nth-child(22) {
  animation-duration: 3.5217391304s;
  animation-delay: 1.5495652174s;
}

.col-47 :nth-child(23) {
  animation-duration: 3.5217391304s;
  animation-delay: 1.62s;
}

.col-47 :nth-child(24) {
  animation-duration: 3.5217391304s;
  animation-delay: 1.6904347826s;
}

.col-47 :nth-child(25) {
  animation-duration: 3.5217391304s;
  animation-delay: 1.7608695652s;
}

.col-47 :nth-child(26) {
  animation-duration: 3.5217391304s;
  animation-delay: 1.8313043478s;
}

.col-47 :nth-child(27) {
  animation-duration: 3.5217391304s;
  animation-delay: 1.9017391304s;
}

.col-47 :nth-child(28) {
  animation-duration: 3.5217391304s;
  animation-delay: 1.972173913s;
}

.col-47 :nth-child(29) {
  animation-duration: 3.5217391304s;
  animation-delay: 2.0426086957s;
}

.col-47 :nth-child(30) {
  animation-duration: 3.5217391304s;
  animation-delay: 2.1130434783s;
}

.col-47 :nth-child(31) {
  animation-duration: 3.5217391304s;
  animation-delay: 2.1834782609s;
}

.col-47 :nth-child(32) {
  animation-duration: 3.5217391304s;
  animation-delay: 2.2539130435s;
}

.col-47 :nth-child(33) {
  animation-duration: 3.5217391304s;
  animation-delay: 2.3243478261s;
}

.col-47 :nth-child(34) {
  animation-duration: 3.5217391304s;
  animation-delay: 2.3947826087s;
}

.col-47 :nth-child(35) {
  animation-duration: 3.5217391304s;
  animation-delay: 2.4652173913s;
}

.col-47 :nth-child(36) {
  animation-duration: 3.5217391304s;
  animation-delay: 2.5356521739s;
}

.col-47 :nth-child(37) {
  animation-duration: 3.5217391304s;
  animation-delay: 2.6060869565s;
}

.col-47 :nth-child(38) {
  animation-duration: 3.5217391304s;
  animation-delay: 2.6765217391s;
}

.col-47 :nth-child(39) {
  animation-duration: 3.5217391304s;
  animation-delay: 2.7469565217s;
}

.col-47 :nth-child(40) {
  animation-duration: 3.5217391304s;
  animation-delay: 2.8173913043s;
}

.col-47 :nth-child(41) {
  animation-duration: 3.5217391304s;
  animation-delay: 2.887826087s;
}

.col-47 :nth-child(42) {
  animation-duration: 3.5217391304s;
  animation-delay: 2.9582608696s;
}

.col-47 :nth-child(43) {
  animation-duration: 3.5217391304s;
  animation-delay: 3.0286956522s;
}

.col-47 :nth-child(44) {
  animation-duration: 3.5217391304s;
  animation-delay: 3.0991304348s;
}

.col-47 :nth-child(45) {
  animation-duration: 3.5217391304s;
  animation-delay: 3.1695652174s;
}

.col-47 :nth-child(46) {
  animation-duration: 3.5217391304s;
  animation-delay: 3.24s;
}

.col-47 :nth-child(47) {
  animation-duration: 3.5217391304s;
  animation-delay: 3.3104347826s;
}

.col-47 :nth-child(48) {
  animation-duration: 3.5217391304s;
  animation-delay: 3.3808695652s;
}

.col-47 :nth-child(49) {
  animation-duration: 3.5217391304s;
  animation-delay: 3.4513043478s;
}

.col-47 :nth-child(50) {
  animation-duration: 3.5217391304s;
  animation-delay: 3.5217391304s;
}

.col-48 :nth-child(1) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.0226086957s;
}

.col-48 :nth-child(2) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.0452173913s;
}

.col-48 :nth-child(3) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.067826087s;
}

.col-48 :nth-child(4) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.0904347826s;
}

.col-48 :nth-child(5) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.1130434783s;
}

.col-48 :nth-child(6) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.1356521739s;
}

.col-48 :nth-child(7) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.1582608696s;
}

.col-48 :nth-child(8) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.1808695652s;
}

.col-48 :nth-child(9) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.2034782609s;
}

.col-48 :nth-child(10) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.2260869565s;
}

.col-48 :nth-child(11) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.2486956522s;
}

.col-48 :nth-child(12) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.2713043478s;
}

.col-48 :nth-child(13) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.2939130435s;
}

.col-48 :nth-child(14) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.3165217391s;
}

.col-48 :nth-child(15) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.3391304348s;
}

.col-48 :nth-child(16) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.3617391304s;
}

.col-48 :nth-child(17) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.3843478261s;
}

.col-48 :nth-child(18) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.4069565217s;
}

.col-48 :nth-child(19) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.4295652174s;
}

.col-48 :nth-child(20) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.452173913s;
}

.col-48 :nth-child(21) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.4747826087s;
}

.col-48 :nth-child(22) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.4973913043s;
}

.col-48 :nth-child(23) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.52s;
}

.col-48 :nth-child(24) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.5426086957s;
}

.col-48 :nth-child(25) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.5652173913s;
}

.col-48 :nth-child(26) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.587826087s;
}

.col-48 :nth-child(27) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.6104347826s;
}

.col-48 :nth-child(28) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.6330434783s;
}

.col-48 :nth-child(29) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.6556521739s;
}

.col-48 :nth-child(30) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.6782608696s;
}

.col-48 :nth-child(31) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.7008695652s;
}

.col-48 :nth-child(32) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.7234782609s;
}

.col-48 :nth-child(33) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.7460869565s;
}

.col-48 :nth-child(34) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.7686956522s;
}

.col-48 :nth-child(35) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.7913043478s;
}

.col-48 :nth-child(36) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.8139130435s;
}

.col-48 :nth-child(37) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.8365217391s;
}

.col-48 :nth-child(38) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.8591304348s;
}

.col-48 :nth-child(39) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.8817391304s;
}

.col-48 :nth-child(40) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.9043478261s;
}

.col-48 :nth-child(41) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.9269565217s;
}

.col-48 :nth-child(42) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.9495652174s;
}

.col-48 :nth-child(43) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.972173913s;
}

.col-48 :nth-child(44) {
  animation-duration: 1.1304347826s;
  animation-delay: 0.9947826087s;
}

.col-48 :nth-child(45) {
  animation-duration: 1.1304347826s;
  animation-delay: 1.0173913043s;
}

.col-48 :nth-child(46) {
  animation-duration: 1.1304347826s;
  animation-delay: 1.04s;
}

.col-48 :nth-child(47) {
  animation-duration: 1.1304347826s;
  animation-delay: 1.0626086957s;
}

.col-48 :nth-child(48) {
  animation-duration: 1.1304347826s;
  animation-delay: 1.0852173913s;
}

.col-48 :nth-child(49) {
  animation-duration: 1.1304347826s;
  animation-delay: 1.107826087s;
}

.col-48 :nth-child(50) {
  animation-duration: 1.1304347826s;
  animation-delay: 1.1304347826s;
}

.col-49 :nth-child(1) {
  animation-duration: 4.5217391304s;
  animation-delay: 0.0904347826s;
}

.col-49 :nth-child(2) {
  animation-duration: 4.5217391304s;
  animation-delay: 0.1808695652s;
}

.col-49 :nth-child(3) {
  animation-duration: 4.5217391304s;
  animation-delay: 0.2713043478s;
}

.col-49 :nth-child(4) {
  animation-duration: 4.5217391304s;
  animation-delay: 0.3617391304s;
}

.col-49 :nth-child(5) {
  animation-duration: 4.5217391304s;
  animation-delay: 0.452173913s;
}

.col-49 :nth-child(6) {
  animation-duration: 4.5217391304s;
  animation-delay: 0.5426086957s;
}

.col-49 :nth-child(7) {
  animation-duration: 4.5217391304s;
  animation-delay: 0.6330434783s;
}

.col-49 :nth-child(8) {
  animation-duration: 4.5217391304s;
  animation-delay: 0.7234782609s;
}

.col-49 :nth-child(9) {
  animation-duration: 4.5217391304s;
  animation-delay: 0.8139130435s;
}

.col-49 :nth-child(10) {
  animation-duration: 4.5217391304s;
  animation-delay: 0.9043478261s;
}

.col-49 :nth-child(11) {
  animation-duration: 4.5217391304s;
  animation-delay: 0.9947826087s;
}

.col-49 :nth-child(12) {
  animation-duration: 4.5217391304s;
  animation-delay: 1.0852173913s;
}

.col-49 :nth-child(13) {
  animation-duration: 4.5217391304s;
  animation-delay: 1.1756521739s;
}

.col-49 :nth-child(14) {
  animation-duration: 4.5217391304s;
  animation-delay: 1.2660869565s;
}

.col-49 :nth-child(15) {
  animation-duration: 4.5217391304s;
  animation-delay: 1.3565217391s;
}

.col-49 :nth-child(16) {
  animation-duration: 4.5217391304s;
  animation-delay: 1.4469565217s;
}

.col-49 :nth-child(17) {
  animation-duration: 4.5217391304s;
  animation-delay: 1.5373913043s;
}

.col-49 :nth-child(18) {
  animation-duration: 4.5217391304s;
  animation-delay: 1.627826087s;
}

.col-49 :nth-child(19) {
  animation-duration: 4.5217391304s;
  animation-delay: 1.7182608696s;
}

.col-49 :nth-child(20) {
  animation-duration: 4.5217391304s;
  animation-delay: 1.8086956522s;
}

.col-49 :nth-child(21) {
  animation-duration: 4.5217391304s;
  animation-delay: 1.8991304348s;
}

.col-49 :nth-child(22) {
  animation-duration: 4.5217391304s;
  animation-delay: 1.9895652174s;
}

.col-49 :nth-child(23) {
  animation-duration: 4.5217391304s;
  animation-delay: 2.08s;
}

.col-49 :nth-child(24) {
  animation-duration: 4.5217391304s;
  animation-delay: 2.1704347826s;
}

.col-49 :nth-child(25) {
  animation-duration: 4.5217391304s;
  animation-delay: 2.2608695652s;
}

.col-49 :nth-child(26) {
  animation-duration: 4.5217391304s;
  animation-delay: 2.3513043478s;
}

.col-49 :nth-child(27) {
  animation-duration: 4.5217391304s;
  animation-delay: 2.4417391304s;
}

.col-49 :nth-child(28) {
  animation-duration: 4.5217391304s;
  animation-delay: 2.532173913s;
}

.col-49 :nth-child(29) {
  animation-duration: 4.5217391304s;
  animation-delay: 2.6226086957s;
}

.col-49 :nth-child(30) {
  animation-duration: 4.5217391304s;
  animation-delay: 2.7130434783s;
}

.col-49 :nth-child(31) {
  animation-duration: 4.5217391304s;
  animation-delay: 2.8034782609s;
}

.col-49 :nth-child(32) {
  animation-duration: 4.5217391304s;
  animation-delay: 2.8939130435s;
}

.col-49 :nth-child(33) {
  animation-duration: 4.5217391304s;
  animation-delay: 2.9843478261s;
}

.col-49 :nth-child(34) {
  animation-duration: 4.5217391304s;
  animation-delay: 3.0747826087s;
}

.col-49 :nth-child(35) {
  animation-duration: 4.5217391304s;
  animation-delay: 3.1652173913s;
}

.col-49 :nth-child(36) {
  animation-duration: 4.5217391304s;
  animation-delay: 3.2556521739s;
}

.col-49 :nth-child(37) {
  animation-duration: 4.5217391304s;
  animation-delay: 3.3460869565s;
}

.col-49 :nth-child(38) {
  animation-duration: 4.5217391304s;
  animation-delay: 3.4365217391s;
}

.col-49 :nth-child(39) {
  animation-duration: 4.5217391304s;
  animation-delay: 3.5269565217s;
}

.col-49 :nth-child(40) {
  animation-duration: 4.5217391304s;
  animation-delay: 3.6173913043s;
}

.col-49 :nth-child(41) {
  animation-duration: 4.5217391304s;
  animation-delay: 3.707826087s;
}

.col-49 :nth-child(42) {
  animation-duration: 4.5217391304s;
  animation-delay: 3.7982608696s;
}

.col-49 :nth-child(43) {
  animation-duration: 4.5217391304s;
  animation-delay: 3.8886956522s;
}

.col-49 :nth-child(44) {
  animation-duration: 4.5217391304s;
  animation-delay: 3.9791304348s;
}

.col-49 :nth-child(45) {
  animation-duration: 4.5217391304s;
  animation-delay: 4.0695652174s;
}

.col-49 :nth-child(46) {
  animation-duration: 4.5217391304s;
  animation-delay: 4.16s;
}

.col-49 :nth-child(47) {
  animation-duration: 4.5217391304s;
  animation-delay: 4.2504347826s;
}

.col-49 :nth-child(48) {
  animation-duration: 4.5217391304s;
  animation-delay: 4.3408695652s;
}

.col-49 :nth-child(49) {
  animation-duration: 4.5217391304s;
  animation-delay: 4.4313043478s;
}

.col-49 :nth-child(50) {
  animation-duration: 4.5217391304s;
  animation-delay: 4.5217391304s;
}

.col-50 :nth-child(1) {
  animation-duration: 4.6956521739s;
  animation-delay: 0.0939130435s;
}

.col-50 :nth-child(2) {
  animation-duration: 4.6956521739s;
  animation-delay: 0.187826087s;
}

.col-50 :nth-child(3) {
  animation-duration: 4.6956521739s;
  animation-delay: 0.2817391304s;
}

.col-50 :nth-child(4) {
  animation-duration: 4.6956521739s;
  animation-delay: 0.3756521739s;
}

.col-50 :nth-child(5) {
  animation-duration: 4.6956521739s;
  animation-delay: 0.4695652174s;
}

.col-50 :nth-child(6) {
  animation-duration: 4.6956521739s;
  animation-delay: 0.5634782609s;
}

.col-50 :nth-child(7) {
  animation-duration: 4.6956521739s;
  animation-delay: 0.6573913043s;
}

.col-50 :nth-child(8) {
  animation-duration: 4.6956521739s;
  animation-delay: 0.7513043478s;
}

.col-50 :nth-child(9) {
  animation-duration: 4.6956521739s;
  animation-delay: 0.8452173913s;
}

.col-50 :nth-child(10) {
  animation-duration: 4.6956521739s;
  animation-delay: 0.9391304348s;
}

.col-50 :nth-child(11) {
  animation-duration: 4.6956521739s;
  animation-delay: 1.0330434783s;
}

.col-50 :nth-child(12) {
  animation-duration: 4.6956521739s;
  animation-delay: 1.1269565217s;
}

.col-50 :nth-child(13) {
  animation-duration: 4.6956521739s;
  animation-delay: 1.2208695652s;
}

.col-50 :nth-child(14) {
  animation-duration: 4.6956521739s;
  animation-delay: 1.3147826087s;
}

.col-50 :nth-child(15) {
  animation-duration: 4.6956521739s;
  animation-delay: 1.4086956522s;
}

.col-50 :nth-child(16) {
  animation-duration: 4.6956521739s;
  animation-delay: 1.5026086957s;
}

.col-50 :nth-child(17) {
  animation-duration: 4.6956521739s;
  animation-delay: 1.5965217391s;
}

.col-50 :nth-child(18) {
  animation-duration: 4.6956521739s;
  animation-delay: 1.6904347826s;
}

.col-50 :nth-child(19) {
  animation-duration: 4.6956521739s;
  animation-delay: 1.7843478261s;
}

.col-50 :nth-child(20) {
  animation-duration: 4.6956521739s;
  animation-delay: 1.8782608696s;
}

.col-50 :nth-child(21) {
  animation-duration: 4.6956521739s;
  animation-delay: 1.972173913s;
}

.col-50 :nth-child(22) {
  animation-duration: 4.6956521739s;
  animation-delay: 2.0660869565s;
}

.col-50 :nth-child(23) {
  animation-duration: 4.6956521739s;
  animation-delay: 2.16s;
}

.col-50 :nth-child(24) {
  animation-duration: 4.6956521739s;
  animation-delay: 2.2539130435s;
}

.col-50 :nth-child(25) {
  animation-duration: 4.6956521739s;
  animation-delay: 2.347826087s;
}

.col-50 :nth-child(26) {
  animation-duration: 4.6956521739s;
  animation-delay: 2.4417391304s;
}

.col-50 :nth-child(27) {
  animation-duration: 4.6956521739s;
  animation-delay: 2.5356521739s;
}

.col-50 :nth-child(28) {
  animation-duration: 4.6956521739s;
  animation-delay: 2.6295652174s;
}

.col-50 :nth-child(29) {
  animation-duration: 4.6956521739s;
  animation-delay: 2.7234782609s;
}

.col-50 :nth-child(30) {
  animation-duration: 4.6956521739s;
  animation-delay: 2.8173913043s;
}

.col-50 :nth-child(31) {
  animation-duration: 4.6956521739s;
  animation-delay: 2.9113043478s;
}

.col-50 :nth-child(32) {
  animation-duration: 4.6956521739s;
  animation-delay: 3.0052173913s;
}

.col-50 :nth-child(33) {
  animation-duration: 4.6956521739s;
  animation-delay: 3.0991304348s;
}

.col-50 :nth-child(34) {
  animation-duration: 4.6956521739s;
  animation-delay: 3.1930434783s;
}

.col-50 :nth-child(35) {
  animation-duration: 4.6956521739s;
  animation-delay: 3.2869565217s;
}

.col-50 :nth-child(36) {
  animation-duration: 4.6956521739s;
  animation-delay: 3.3808695652s;
}

.col-50 :nth-child(37) {
  animation-duration: 4.6956521739s;
  animation-delay: 3.4747826087s;
}

.col-50 :nth-child(38) {
  animation-duration: 4.6956521739s;
  animation-delay: 3.5686956522s;
}

.col-50 :nth-child(39) {
  animation-duration: 4.6956521739s;
  animation-delay: 3.6626086957s;
}

.col-50 :nth-child(40) {
  animation-duration: 4.6956521739s;
  animation-delay: 3.7565217391s;
}

.col-50 :nth-child(41) {
  animation-duration: 4.6956521739s;
  animation-delay: 3.8504347826s;
}

.col-50 :nth-child(42) {
  animation-duration: 4.6956521739s;
  animation-delay: 3.9443478261s;
}

.col-50 :nth-child(43) {
  animation-duration: 4.6956521739s;
  animation-delay: 4.0382608696s;
}

.col-50 :nth-child(44) {
  animation-duration: 4.6956521739s;
  animation-delay: 4.132173913s;
}

.col-50 :nth-child(45) {
  animation-duration: 4.6956521739s;
  animation-delay: 4.2260869565s;
}

.col-50 :nth-child(46) {
  animation-duration: 4.6956521739s;
  animation-delay: 4.32s;
}

.col-50 :nth-child(47) {
  animation-duration: 4.6956521739s;
  animation-delay: 4.4139130435s;
}

.col-50 :nth-child(48) {
  animation-duration: 4.6956521739s;
  animation-delay: 4.507826087s;
}

.col-50 :nth-child(49) {
  animation-duration: 4.6956521739s;
  animation-delay: 4.6017391304s;
}

.col-50 :nth-child(50) {
  animation-duration: 4.6956521739s;
  animation-delay: 4.6956521739s;
}

.col-51 :nth-child(1) {
  animation-duration: 1.2173913043s;
  animation-delay: 0.0243478261s;
}

.col-51 :nth-child(2) {
  animation-duration: 1.2173913043s;
  animation-delay: 0.0486956522s;
}

.col-51 :nth-child(3) {
  animation-duration: 1.2173913043s;
  animation-delay: 0.0730434783s;
}

.col-51 :nth-child(4) {
  animation-duration: 1.2173913043s;
  animation-delay: 0.0973913043s;
}

.col-51 :nth-child(5) {
  animation-duration: 1.2173913043s;
  animation-delay: 0.1217391304s;
}

.col-51 :nth-child(6) {
  animation-duration: 1.2173913043s;
  animation-delay: 0.1460869565s;
}

.col-51 :nth-child(7) {
  animation-duration: 1.2173913043s;
  animation-delay: 0.1704347826s;
}

.col-51 :nth-child(8) {
  animation-duration: 1.2173913043s;
  animation-delay: 0.1947826087s;
}

.col-51 :nth-child(9) {
  animation-duration: 1.2173913043s;
  animation-delay: 0.2191304348s;
}

.col-51 :nth-child(10) {
  animation-duration: 1.2173913043s;
  animation-delay: 0.2434782609s;
}

.col-51 :nth-child(11) {
  animation-duration: 1.2173913043s;
  animation-delay: 0.267826087s;
}

.col-51 :nth-child(12) {
  animation-duration: 1.2173913043s;
  animation-delay: 0.292173913s;
}

.col-51 :nth-child(13) {
  animation-duration: 1.2173913043s;
  animation-delay: 0.3165217391s;
}

.col-51 :nth-child(14) {
  animation-duration: 1.2173913043s;
  animation-delay: 0.3408695652s;
}

.col-51 :nth-child(15) {
  animation-duration: 1.2173913043s;
  animation-delay: 0.3652173913s;
}

.col-51 :nth-child(16) {
  animation-duration: 1.2173913043s;
  animation-delay: 0.3895652174s;
}

.col-51 :nth-child(17) {
  animation-duration: 1.2173913043s;
  animation-delay: 0.4139130435s;
}

.col-51 :nth-child(18) {
  animation-duration: 1.2173913043s;
  animation-delay: 0.4382608696s;
}

.col-51 :nth-child(19) {
  animation-duration: 1.2173913043s;
  animation-delay: 0.4626086957s;
}

.col-51 :nth-child(20) {
  animation-duration: 1.2173913043s;
  animation-delay: 0.4869565217s;
}

.col-51 :nth-child(21) {
  animation-duration: 1.2173913043s;
  animation-delay: 0.5113043478s;
}

.col-51 :nth-child(22) {
  animation-duration: 1.2173913043s;
  animation-delay: 0.5356521739s;
}

.col-51 :nth-child(23) {
  animation-duration: 1.2173913043s;
  animation-delay: 0.56s;
}

.col-51 :nth-child(24) {
  animation-duration: 1.2173913043s;
  animation-delay: 0.5843478261s;
}

.col-51 :nth-child(25) {
  animation-duration: 1.2173913043s;
  animation-delay: 0.6086956522s;
}

.col-51 :nth-child(26) {
  animation-duration: 1.2173913043s;
  animation-delay: 0.6330434783s;
}

.col-51 :nth-child(27) {
  animation-duration: 1.2173913043s;
  animation-delay: 0.6573913043s;
}

.col-51 :nth-child(28) {
  animation-duration: 1.2173913043s;
  animation-delay: 0.6817391304s;
}

.col-51 :nth-child(29) {
  animation-duration: 1.2173913043s;
  animation-delay: 0.7060869565s;
}

.col-51 :nth-child(30) {
  animation-duration: 1.2173913043s;
  animation-delay: 0.7304347826s;
}

.col-51 :nth-child(31) {
  animation-duration: 1.2173913043s;
  animation-delay: 0.7547826087s;
}

.col-51 :nth-child(32) {
  animation-duration: 1.2173913043s;
  animation-delay: 0.7791304348s;
}

.col-51 :nth-child(33) {
  animation-duration: 1.2173913043s;
  animation-delay: 0.8034782609s;
}

.col-51 :nth-child(34) {
  animation-duration: 1.2173913043s;
  animation-delay: 0.827826087s;
}

.col-51 :nth-child(35) {
  animation-duration: 1.2173913043s;
  animation-delay: 0.852173913s;
}

.col-51 :nth-child(36) {
  animation-duration: 1.2173913043s;
  animation-delay: 0.8765217391s;
}

.col-51 :nth-child(37) {
  animation-duration: 1.2173913043s;
  animation-delay: 0.9008695652s;
}

.col-51 :nth-child(38) {
  animation-duration: 1.2173913043s;
  animation-delay: 0.9252173913s;
}

.col-51 :nth-child(39) {
  animation-duration: 1.2173913043s;
  animation-delay: 0.9495652174s;
}

.col-51 :nth-child(40) {
  animation-duration: 1.2173913043s;
  animation-delay: 0.9739130435s;
}

.col-51 :nth-child(41) {
  animation-duration: 1.2173913043s;
  animation-delay: 0.9982608696s;
}

.col-51 :nth-child(42) {
  animation-duration: 1.2173913043s;
  animation-delay: 1.0226086957s;
}

.col-51 :nth-child(43) {
  animation-duration: 1.2173913043s;
  animation-delay: 1.0469565217s;
}

.col-51 :nth-child(44) {
  animation-duration: 1.2173913043s;
  animation-delay: 1.0713043478s;
}

.col-51 :nth-child(45) {
  animation-duration: 1.2173913043s;
  animation-delay: 1.0956521739s;
}

.col-51 :nth-child(46) {
  animation-duration: 1.2173913043s;
  animation-delay: 1.12s;
}

.col-51 :nth-child(47) {
  animation-duration: 1.2173913043s;
  animation-delay: 1.1443478261s;
}

.col-51 :nth-child(48) {
  animation-duration: 1.2173913043s;
  animation-delay: 1.1686956522s;
}

.col-51 :nth-child(49) {
  animation-duration: 1.2173913043s;
  animation-delay: 1.1930434783s;
}

.col-51 :nth-child(50) {
  animation-duration: 1.2173913043s;
  animation-delay: 1.2173913043s;
}

.col-52 :nth-child(1) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.0408695652s;
}

.col-52 :nth-child(2) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.0817391304s;
}

.col-52 :nth-child(3) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.1226086957s;
}

.col-52 :nth-child(4) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.1634782609s;
}

.col-52 :nth-child(5) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.2043478261s;
}

.col-52 :nth-child(6) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.2452173913s;
}

.col-52 :nth-child(7) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.2860869565s;
}

.col-52 :nth-child(8) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.3269565217s;
}

.col-52 :nth-child(9) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.367826087s;
}

.col-52 :nth-child(10) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.4086956522s;
}

.col-52 :nth-child(11) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.4495652174s;
}

.col-52 :nth-child(12) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.4904347826s;
}

.col-52 :nth-child(13) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.5313043478s;
}

.col-52 :nth-child(14) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.572173913s;
}

.col-52 :nth-child(15) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.6130434783s;
}

.col-52 :nth-child(16) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.6539130435s;
}

.col-52 :nth-child(17) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.6947826087s;
}

.col-52 :nth-child(18) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.7356521739s;
}

.col-52 :nth-child(19) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.7765217391s;
}

.col-52 :nth-child(20) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.8173913043s;
}

.col-52 :nth-child(21) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.8582608696s;
}

.col-52 :nth-child(22) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.8991304348s;
}

.col-52 :nth-child(23) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.94s;
}

.col-52 :nth-child(24) {
  animation-duration: 2.0434782609s;
  animation-delay: 0.9808695652s;
}

.col-52 :nth-child(25) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.0217391304s;
}

.col-52 :nth-child(26) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.0626086957s;
}

.col-52 :nth-child(27) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.1034782609s;
}

.col-52 :nth-child(28) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.1443478261s;
}

.col-52 :nth-child(29) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.1852173913s;
}

.col-52 :nth-child(30) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.2260869565s;
}

.col-52 :nth-child(31) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.2669565217s;
}

.col-52 :nth-child(32) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.307826087s;
}

.col-52 :nth-child(33) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.3486956522s;
}

.col-52 :nth-child(34) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.3895652174s;
}

.col-52 :nth-child(35) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.4304347826s;
}

.col-52 :nth-child(36) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.4713043478s;
}

.col-52 :nth-child(37) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.512173913s;
}

.col-52 :nth-child(38) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.5530434783s;
}

.col-52 :nth-child(39) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.5939130435s;
}

.col-52 :nth-child(40) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.6347826087s;
}

.col-52 :nth-child(41) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.6756521739s;
}

.col-52 :nth-child(42) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.7165217391s;
}

.col-52 :nth-child(43) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.7573913043s;
}

.col-52 :nth-child(44) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.7982608696s;
}

.col-52 :nth-child(45) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.8391304348s;
}

.col-52 :nth-child(46) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.88s;
}

.col-52 :nth-child(47) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.9208695652s;
}

.col-52 :nth-child(48) {
  animation-duration: 2.0434782609s;
  animation-delay: 1.9617391304s;
}

.col-52 :nth-child(49) {
  animation-duration: 2.0434782609s;
  animation-delay: 2.0026086957s;
}

.col-52 :nth-child(50) {
  animation-duration: 2.0434782609s;
  animation-delay: 2.0434782609s;
}

.col-53 :nth-child(1) {
  animation-duration: 4.3043478261s;
  animation-delay: 0.0860869565s;
}

.col-53 :nth-child(2) {
  animation-duration: 4.3043478261s;
  animation-delay: 0.172173913s;
}

.col-53 :nth-child(3) {
  animation-duration: 4.3043478261s;
  animation-delay: 0.2582608696s;
}

.col-53 :nth-child(4) {
  animation-duration: 4.3043478261s;
  animation-delay: 0.3443478261s;
}

.col-53 :nth-child(5) {
  animation-duration: 4.3043478261s;
  animation-delay: 0.4304347826s;
}

.col-53 :nth-child(6) {
  animation-duration: 4.3043478261s;
  animation-delay: 0.5165217391s;
}

.col-53 :nth-child(7) {
  animation-duration: 4.3043478261s;
  animation-delay: 0.6026086957s;
}

.col-53 :nth-child(8) {
  animation-duration: 4.3043478261s;
  animation-delay: 0.6886956522s;
}

.col-53 :nth-child(9) {
  animation-duration: 4.3043478261s;
  animation-delay: 0.7747826087s;
}

.col-53 :nth-child(10) {
  animation-duration: 4.3043478261s;
  animation-delay: 0.8608695652s;
}

.col-53 :nth-child(11) {
  animation-duration: 4.3043478261s;
  animation-delay: 0.9469565217s;
}

.col-53 :nth-child(12) {
  animation-duration: 4.3043478261s;
  animation-delay: 1.0330434783s;
}

.col-53 :nth-child(13) {
  animation-duration: 4.3043478261s;
  animation-delay: 1.1191304348s;
}

.col-53 :nth-child(14) {
  animation-duration: 4.3043478261s;
  animation-delay: 1.2052173913s;
}

.col-53 :nth-child(15) {
  animation-duration: 4.3043478261s;
  animation-delay: 1.2913043478s;
}

.col-53 :nth-child(16) {
  animation-duration: 4.3043478261s;
  animation-delay: 1.3773913043s;
}

.col-53 :nth-child(17) {
  animation-duration: 4.3043478261s;
  animation-delay: 1.4634782609s;
}

.col-53 :nth-child(18) {
  animation-duration: 4.3043478261s;
  animation-delay: 1.5495652174s;
}

.col-53 :nth-child(19) {
  animation-duration: 4.3043478261s;
  animation-delay: 1.6356521739s;
}

.col-53 :nth-child(20) {
  animation-duration: 4.3043478261s;
  animation-delay: 1.7217391304s;
}

.col-53 :nth-child(21) {
  animation-duration: 4.3043478261s;
  animation-delay: 1.807826087s;
}

.col-53 :nth-child(22) {
  animation-duration: 4.3043478261s;
  animation-delay: 1.8939130435s;
}

.col-53 :nth-child(23) {
  animation-duration: 4.3043478261s;
  animation-delay: 1.98s;
}

.col-53 :nth-child(24) {
  animation-duration: 4.3043478261s;
  animation-delay: 2.0660869565s;
}

.col-53 :nth-child(25) {
  animation-duration: 4.3043478261s;
  animation-delay: 2.152173913s;
}

.col-53 :nth-child(26) {
  animation-duration: 4.3043478261s;
  animation-delay: 2.2382608696s;
}

.col-53 :nth-child(27) {
  animation-duration: 4.3043478261s;
  animation-delay: 2.3243478261s;
}

.col-53 :nth-child(28) {
  animation-duration: 4.3043478261s;
  animation-delay: 2.4104347826s;
}

.col-53 :nth-child(29) {
  animation-duration: 4.3043478261s;
  animation-delay: 2.4965217391s;
}

.col-53 :nth-child(30) {
  animation-duration: 4.3043478261s;
  animation-delay: 2.5826086957s;
}

.col-53 :nth-child(31) {
  animation-duration: 4.3043478261s;
  animation-delay: 2.6686956522s;
}

.col-53 :nth-child(32) {
  animation-duration: 4.3043478261s;
  animation-delay: 2.7547826087s;
}

.col-53 :nth-child(33) {
  animation-duration: 4.3043478261s;
  animation-delay: 2.8408695652s;
}

.col-53 :nth-child(34) {
  animation-duration: 4.3043478261s;
  animation-delay: 2.9269565217s;
}

.col-53 :nth-child(35) {
  animation-duration: 4.3043478261s;
  animation-delay: 3.0130434783s;
}

.col-53 :nth-child(36) {
  animation-duration: 4.3043478261s;
  animation-delay: 3.0991304348s;
}

.col-53 :nth-child(37) {
  animation-duration: 4.3043478261s;
  animation-delay: 3.1852173913s;
}

.col-53 :nth-child(38) {
  animation-duration: 4.3043478261s;
  animation-delay: 3.2713043478s;
}

.col-53 :nth-child(39) {
  animation-duration: 4.3043478261s;
  animation-delay: 3.3573913043s;
}

.col-53 :nth-child(40) {
  animation-duration: 4.3043478261s;
  animation-delay: 3.4434782609s;
}

.col-53 :nth-child(41) {
  animation-duration: 4.3043478261s;
  animation-delay: 3.5295652174s;
}

.col-53 :nth-child(42) {
  animation-duration: 4.3043478261s;
  animation-delay: 3.6156521739s;
}

.col-53 :nth-child(43) {
  animation-duration: 4.3043478261s;
  animation-delay: 3.7017391304s;
}

.col-53 :nth-child(44) {
  animation-duration: 4.3043478261s;
  animation-delay: 3.787826087s;
}

.col-53 :nth-child(45) {
  animation-duration: 4.3043478261s;
  animation-delay: 3.8739130435s;
}

.col-53 :nth-child(46) {
  animation-duration: 4.3043478261s;
  animation-delay: 3.96s;
}

.col-53 :nth-child(47) {
  animation-duration: 4.3043478261s;
  animation-delay: 4.0460869565s;
}

.col-53 :nth-child(48) {
  animation-duration: 4.3043478261s;
  animation-delay: 4.132173913s;
}

.col-53 :nth-child(49) {
  animation-duration: 4.3043478261s;
  animation-delay: 4.2182608696s;
}

.col-53 :nth-child(50) {
  animation-duration: 4.3043478261s;
  animation-delay: 4.3043478261s;
}

.col-54 :nth-child(1) {
  animation-duration: 2.5217391304s;
  animation-delay: 0.0504347826s;
}

.col-54 :nth-child(2) {
  animation-duration: 2.5217391304s;
  animation-delay: 0.1008695652s;
}

.col-54 :nth-child(3) {
  animation-duration: 2.5217391304s;
  animation-delay: 0.1513043478s;
}

.col-54 :nth-child(4) {
  animation-duration: 2.5217391304s;
  animation-delay: 0.2017391304s;
}

.col-54 :nth-child(5) {
  animation-duration: 2.5217391304s;
  animation-delay: 0.252173913s;
}

.col-54 :nth-child(6) {
  animation-duration: 2.5217391304s;
  animation-delay: 0.3026086957s;
}

.col-54 :nth-child(7) {
  animation-duration: 2.5217391304s;
  animation-delay: 0.3530434783s;
}

.col-54 :nth-child(8) {
  animation-duration: 2.5217391304s;
  animation-delay: 0.4034782609s;
}

.col-54 :nth-child(9) {
  animation-duration: 2.5217391304s;
  animation-delay: 0.4539130435s;
}

.col-54 :nth-child(10) {
  animation-duration: 2.5217391304s;
  animation-delay: 0.5043478261s;
}

.col-54 :nth-child(11) {
  animation-duration: 2.5217391304s;
  animation-delay: 0.5547826087s;
}

.col-54 :nth-child(12) {
  animation-duration: 2.5217391304s;
  animation-delay: 0.6052173913s;
}

.col-54 :nth-child(13) {
  animation-duration: 2.5217391304s;
  animation-delay: 0.6556521739s;
}

.col-54 :nth-child(14) {
  animation-duration: 2.5217391304s;
  animation-delay: 0.7060869565s;
}

.col-54 :nth-child(15) {
  animation-duration: 2.5217391304s;
  animation-delay: 0.7565217391s;
}

.col-54 :nth-child(16) {
  animation-duration: 2.5217391304s;
  animation-delay: 0.8069565217s;
}

.col-54 :nth-child(17) {
  animation-duration: 2.5217391304s;
  animation-delay: 0.8573913043s;
}

.col-54 :nth-child(18) {
  animation-duration: 2.5217391304s;
  animation-delay: 0.907826087s;
}

.col-54 :nth-child(19) {
  animation-duration: 2.5217391304s;
  animation-delay: 0.9582608696s;
}

.col-54 :nth-child(20) {
  animation-duration: 2.5217391304s;
  animation-delay: 1.0086956522s;
}

.col-54 :nth-child(21) {
  animation-duration: 2.5217391304s;
  animation-delay: 1.0591304348s;
}

.col-54 :nth-child(22) {
  animation-duration: 2.5217391304s;
  animation-delay: 1.1095652174s;
}

.col-54 :nth-child(23) {
  animation-duration: 2.5217391304s;
  animation-delay: 1.16s;
}

.col-54 :nth-child(24) {
  animation-duration: 2.5217391304s;
  animation-delay: 1.2104347826s;
}

.col-54 :nth-child(25) {
  animation-duration: 2.5217391304s;
  animation-delay: 1.2608695652s;
}

.col-54 :nth-child(26) {
  animation-duration: 2.5217391304s;
  animation-delay: 1.3113043478s;
}

.col-54 :nth-child(27) {
  animation-duration: 2.5217391304s;
  animation-delay: 1.3617391304s;
}

.col-54 :nth-child(28) {
  animation-duration: 2.5217391304s;
  animation-delay: 1.412173913s;
}

.col-54 :nth-child(29) {
  animation-duration: 2.5217391304s;
  animation-delay: 1.4626086957s;
}

.col-54 :nth-child(30) {
  animation-duration: 2.5217391304s;
  animation-delay: 1.5130434783s;
}

.col-54 :nth-child(31) {
  animation-duration: 2.5217391304s;
  animation-delay: 1.5634782609s;
}

.col-54 :nth-child(32) {
  animation-duration: 2.5217391304s;
  animation-delay: 1.6139130435s;
}

.col-54 :nth-child(33) {
  animation-duration: 2.5217391304s;
  animation-delay: 1.6643478261s;
}

.col-54 :nth-child(34) {
  animation-duration: 2.5217391304s;
  animation-delay: 1.7147826087s;
}

.col-54 :nth-child(35) {
  animation-duration: 2.5217391304s;
  animation-delay: 1.7652173913s;
}

.col-54 :nth-child(36) {
  animation-duration: 2.5217391304s;
  animation-delay: 1.8156521739s;
}

.col-54 :nth-child(37) {
  animation-duration: 2.5217391304s;
  animation-delay: 1.8660869565s;
}

.col-54 :nth-child(38) {
  animation-duration: 2.5217391304s;
  animation-delay: 1.9165217391s;
}

.col-54 :nth-child(39) {
  animation-duration: 2.5217391304s;
  animation-delay: 1.9669565217s;
}

.col-54 :nth-child(40) {
  animation-duration: 2.5217391304s;
  animation-delay: 2.0173913043s;
}

.col-54 :nth-child(41) {
  animation-duration: 2.5217391304s;
  animation-delay: 2.067826087s;
}

.col-54 :nth-child(42) {
  animation-duration: 2.5217391304s;
  animation-delay: 2.1182608696s;
}

.col-54 :nth-child(43) {
  animation-duration: 2.5217391304s;
  animation-delay: 2.1686956522s;
}

.col-54 :nth-child(44) {
  animation-duration: 2.5217391304s;
  animation-delay: 2.2191304348s;
}

.col-54 :nth-child(45) {
  animation-duration: 2.5217391304s;
  animation-delay: 2.2695652174s;
}

.col-54 :nth-child(46) {
  animation-duration: 2.5217391304s;
  animation-delay: 2.32s;
}

.col-54 :nth-child(47) {
  animation-duration: 2.5217391304s;
  animation-delay: 2.3704347826s;
}

.col-54 :nth-child(48) {
  animation-duration: 2.5217391304s;
  animation-delay: 2.4208695652s;
}

.col-54 :nth-child(49) {
  animation-duration: 2.5217391304s;
  animation-delay: 2.4713043478s;
}

.col-54 :nth-child(50) {
  animation-duration: 2.5217391304s;
  animation-delay: 2.5217391304s;
}

.col-55 :nth-child(1) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.0434782609s;
}

.col-55 :nth-child(2) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.0869565217s;
}

.col-55 :nth-child(3) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.1304347826s;
}

.col-55 :nth-child(4) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.1739130435s;
}

.col-55 :nth-child(5) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.2173913043s;
}

.col-55 :nth-child(6) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.2608695652s;
}

.col-55 :nth-child(7) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.3043478261s;
}

.col-55 :nth-child(8) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.347826087s;
}

.col-55 :nth-child(9) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.3913043478s;
}

.col-55 :nth-child(10) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.4347826087s;
}

.col-55 :nth-child(11) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.4782608696s;
}

.col-55 :nth-child(12) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.5217391304s;
}

.col-55 :nth-child(13) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.5652173913s;
}

.col-55 :nth-child(14) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.6086956522s;
}

.col-55 :nth-child(15) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.652173913s;
}

.col-55 :nth-child(16) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.6956521739s;
}

.col-55 :nth-child(17) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.7391304348s;
}

.col-55 :nth-child(18) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.7826086957s;
}

.col-55 :nth-child(19) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.8260869565s;
}

.col-55 :nth-child(20) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.8695652174s;
}

.col-55 :nth-child(21) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.9130434783s;
}

.col-55 :nth-child(22) {
  animation-duration: 2.1739130435s;
  animation-delay: 0.9565217391s;
}

.col-55 :nth-child(23) {
  animation-duration: 2.1739130435s;
  animation-delay: 1s;
}

.col-55 :nth-child(24) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.0434782609s;
}

.col-55 :nth-child(25) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.0869565217s;
}

.col-55 :nth-child(26) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.1304347826s;
}

.col-55 :nth-child(27) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.1739130435s;
}

.col-55 :nth-child(28) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.2173913043s;
}

.col-55 :nth-child(29) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.2608695652s;
}

.col-55 :nth-child(30) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.3043478261s;
}

.col-55 :nth-child(31) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.347826087s;
}

.col-55 :nth-child(32) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.3913043478s;
}

.col-55 :nth-child(33) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.4347826087s;
}

.col-55 :nth-child(34) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.4782608696s;
}

.col-55 :nth-child(35) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.5217391304s;
}

.col-55 :nth-child(36) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.5652173913s;
}

.col-55 :nth-child(37) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.6086956522s;
}

.col-55 :nth-child(38) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.652173913s;
}

.col-55 :nth-child(39) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.6956521739s;
}

.col-55 :nth-child(40) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.7391304348s;
}

.col-55 :nth-child(41) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.7826086957s;
}

.col-55 :nth-child(42) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.8260869565s;
}

.col-55 :nth-child(43) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.8695652174s;
}

.col-55 :nth-child(44) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.9130434783s;
}

.col-55 :nth-child(45) {
  animation-duration: 2.1739130435s;
  animation-delay: 1.9565217391s;
}

.col-55 :nth-child(46) {
  animation-duration: 2.1739130435s;
  animation-delay: 2s;
}

.col-55 :nth-child(47) {
  animation-duration: 2.1739130435s;
  animation-delay: 2.0434782609s;
}

.col-55 :nth-child(48) {
  animation-duration: 2.1739130435s;
  animation-delay: 2.0869565217s;
}

.col-55 :nth-child(49) {
  animation-duration: 2.1739130435s;
  animation-delay: 2.1304347826s;
}

.col-55 :nth-child(50) {
  animation-duration: 2.1739130435s;
  animation-delay: 2.1739130435s;
}

.col-56 :nth-child(1) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.0208695652s;
}

.col-56 :nth-child(2) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.0417391304s;
}

.col-56 :nth-child(3) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.0626086957s;
}

.col-56 :nth-child(4) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.0834782609s;
}

.col-56 :nth-child(5) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.1043478261s;
}

.col-56 :nth-child(6) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.1252173913s;
}

.col-56 :nth-child(7) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.1460869565s;
}

.col-56 :nth-child(8) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.1669565217s;
}

.col-56 :nth-child(9) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.187826087s;
}

.col-56 :nth-child(10) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.2086956522s;
}

.col-56 :nth-child(11) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.2295652174s;
}

.col-56 :nth-child(12) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.2504347826s;
}

.col-56 :nth-child(13) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.2713043478s;
}

.col-56 :nth-child(14) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.292173913s;
}

.col-56 :nth-child(15) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.3130434783s;
}

.col-56 :nth-child(16) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.3339130435s;
}

.col-56 :nth-child(17) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.3547826087s;
}

.col-56 :nth-child(18) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.3756521739s;
}

.col-56 :nth-child(19) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.3965217391s;
}

.col-56 :nth-child(20) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.4173913043s;
}

.col-56 :nth-child(21) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.4382608696s;
}

.col-56 :nth-child(22) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.4591304348s;
}

.col-56 :nth-child(23) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.48s;
}

.col-56 :nth-child(24) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.5008695652s;
}

.col-56 :nth-child(25) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.5217391304s;
}

.col-56 :nth-child(26) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.5426086957s;
}

.col-56 :nth-child(27) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.5634782609s;
}

.col-56 :nth-child(28) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.5843478261s;
}

.col-56 :nth-child(29) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.6052173913s;
}

.col-56 :nth-child(30) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.6260869565s;
}

.col-56 :nth-child(31) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.6469565217s;
}

.col-56 :nth-child(32) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.667826087s;
}

.col-56 :nth-child(33) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.6886956522s;
}

.col-56 :nth-child(34) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.7095652174s;
}

.col-56 :nth-child(35) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.7304347826s;
}

.col-56 :nth-child(36) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.7513043478s;
}

.col-56 :nth-child(37) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.772173913s;
}

.col-56 :nth-child(38) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.7930434783s;
}

.col-56 :nth-child(39) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.8139130435s;
}

.col-56 :nth-child(40) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.8347826087s;
}

.col-56 :nth-child(41) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.8556521739s;
}

.col-56 :nth-child(42) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.8765217391s;
}

.col-56 :nth-child(43) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.8973913043s;
}

.col-56 :nth-child(44) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.9182608696s;
}

.col-56 :nth-child(45) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.9391304348s;
}

.col-56 :nth-child(46) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.96s;
}

.col-56 :nth-child(47) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.9808695652s;
}

.col-56 :nth-child(48) {
  animation-duration: 1.0434782609s;
  animation-delay: 1.0017391304s;
}

.col-56 :nth-child(49) {
  animation-duration: 1.0434782609s;
  animation-delay: 1.0226086957s;
}

.col-56 :nth-child(50) {
  animation-duration: 1.0434782609s;
  animation-delay: 1.0434782609s;
}

.col-57 :nth-child(1) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.0286956522s;
}

.col-57 :nth-child(2) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.0573913043s;
}

.col-57 :nth-child(3) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.0860869565s;
}

.col-57 :nth-child(4) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.1147826087s;
}

.col-57 :nth-child(5) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.1434782609s;
}

.col-57 :nth-child(6) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.172173913s;
}

.col-57 :nth-child(7) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.2008695652s;
}

.col-57 :nth-child(8) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.2295652174s;
}

.col-57 :nth-child(9) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.2582608696s;
}

.col-57 :nth-child(10) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.2869565217s;
}

.col-57 :nth-child(11) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.3156521739s;
}

.col-57 :nth-child(12) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.3443478261s;
}

.col-57 :nth-child(13) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.3730434783s;
}

.col-57 :nth-child(14) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.4017391304s;
}

.col-57 :nth-child(15) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.4304347826s;
}

.col-57 :nth-child(16) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.4591304348s;
}

.col-57 :nth-child(17) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.487826087s;
}

.col-57 :nth-child(18) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.5165217391s;
}

.col-57 :nth-child(19) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.5452173913s;
}

.col-57 :nth-child(20) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.5739130435s;
}

.col-57 :nth-child(21) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.6026086957s;
}

.col-57 :nth-child(22) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.6313043478s;
}

.col-57 :nth-child(23) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.66s;
}

.col-57 :nth-child(24) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.6886956522s;
}

.col-57 :nth-child(25) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.7173913043s;
}

.col-57 :nth-child(26) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.7460869565s;
}

.col-57 :nth-child(27) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.7747826087s;
}

.col-57 :nth-child(28) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.8034782609s;
}

.col-57 :nth-child(29) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.832173913s;
}

.col-57 :nth-child(30) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.8608695652s;
}

.col-57 :nth-child(31) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.8895652174s;
}

.col-57 :nth-child(32) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.9182608696s;
}

.col-57 :nth-child(33) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.9469565217s;
}

.col-57 :nth-child(34) {
  animation-duration: 1.4347826087s;
  animation-delay: 0.9756521739s;
}

.col-57 :nth-child(35) {
  animation-duration: 1.4347826087s;
  animation-delay: 1.0043478261s;
}

.col-57 :nth-child(36) {
  animation-duration: 1.4347826087s;
  animation-delay: 1.0330434783s;
}

.col-57 :nth-child(37) {
  animation-duration: 1.4347826087s;
  animation-delay: 1.0617391304s;
}

.col-57 :nth-child(38) {
  animation-duration: 1.4347826087s;
  animation-delay: 1.0904347826s;
}

.col-57 :nth-child(39) {
  animation-duration: 1.4347826087s;
  animation-delay: 1.1191304348s;
}

.col-57 :nth-child(40) {
  animation-duration: 1.4347826087s;
  animation-delay: 1.147826087s;
}

.col-57 :nth-child(41) {
  animation-duration: 1.4347826087s;
  animation-delay: 1.1765217391s;
}

.col-57 :nth-child(42) {
  animation-duration: 1.4347826087s;
  animation-delay: 1.2052173913s;
}

.col-57 :nth-child(43) {
  animation-duration: 1.4347826087s;
  animation-delay: 1.2339130435s;
}

.col-57 :nth-child(44) {
  animation-duration: 1.4347826087s;
  animation-delay: 1.2626086957s;
}

.col-57 :nth-child(45) {
  animation-duration: 1.4347826087s;
  animation-delay: 1.2913043478s;
}

.col-57 :nth-child(46) {
  animation-duration: 1.4347826087s;
  animation-delay: 1.32s;
}

.col-57 :nth-child(47) {
  animation-duration: 1.4347826087s;
  animation-delay: 1.3486956522s;
}

.col-57 :nth-child(48) {
  animation-duration: 1.4347826087s;
  animation-delay: 1.3773913043s;
}

.col-57 :nth-child(49) {
  animation-duration: 1.4347826087s;
  animation-delay: 1.4060869565s;
}

.col-57 :nth-child(50) {
  animation-duration: 1.4347826087s;
  animation-delay: 1.4347826087s;
}

.col-58 :nth-child(1) {
  animation-duration: 3.4782608696s;
  animation-delay: 0.0695652174s;
}

.col-58 :nth-child(2) {
  animation-duration: 3.4782608696s;
  animation-delay: 0.1391304348s;
}

.col-58 :nth-child(3) {
  animation-duration: 3.4782608696s;
  animation-delay: 0.2086956522s;
}

.col-58 :nth-child(4) {
  animation-duration: 3.4782608696s;
  animation-delay: 0.2782608696s;
}

.col-58 :nth-child(5) {
  animation-duration: 3.4782608696s;
  animation-delay: 0.347826087s;
}

.col-58 :nth-child(6) {
  animation-duration: 3.4782608696s;
  animation-delay: 0.4173913043s;
}

.col-58 :nth-child(7) {
  animation-duration: 3.4782608696s;
  animation-delay: 0.4869565217s;
}

.col-58 :nth-child(8) {
  animation-duration: 3.4782608696s;
  animation-delay: 0.5565217391s;
}

.col-58 :nth-child(9) {
  animation-duration: 3.4782608696s;
  animation-delay: 0.6260869565s;
}

.col-58 :nth-child(10) {
  animation-duration: 3.4782608696s;
  animation-delay: 0.6956521739s;
}

.col-58 :nth-child(11) {
  animation-duration: 3.4782608696s;
  animation-delay: 0.7652173913s;
}

.col-58 :nth-child(12) {
  animation-duration: 3.4782608696s;
  animation-delay: 0.8347826087s;
}

.col-58 :nth-child(13) {
  animation-duration: 3.4782608696s;
  animation-delay: 0.9043478261s;
}

.col-58 :nth-child(14) {
  animation-duration: 3.4782608696s;
  animation-delay: 0.9739130435s;
}

.col-58 :nth-child(15) {
  animation-duration: 3.4782608696s;
  animation-delay: 1.0434782609s;
}

.col-58 :nth-child(16) {
  animation-duration: 3.4782608696s;
  animation-delay: 1.1130434783s;
}

.col-58 :nth-child(17) {
  animation-duration: 3.4782608696s;
  animation-delay: 1.1826086957s;
}

.col-58 :nth-child(18) {
  animation-duration: 3.4782608696s;
  animation-delay: 1.252173913s;
}

.col-58 :nth-child(19) {
  animation-duration: 3.4782608696s;
  animation-delay: 1.3217391304s;
}

.col-58 :nth-child(20) {
  animation-duration: 3.4782608696s;
  animation-delay: 1.3913043478s;
}

.col-58 :nth-child(21) {
  animation-duration: 3.4782608696s;
  animation-delay: 1.4608695652s;
}

.col-58 :nth-child(22) {
  animation-duration: 3.4782608696s;
  animation-delay: 1.5304347826s;
}

.col-58 :nth-child(23) {
  animation-duration: 3.4782608696s;
  animation-delay: 1.6s;
}

.col-58 :nth-child(24) {
  animation-duration: 3.4782608696s;
  animation-delay: 1.6695652174s;
}

.col-58 :nth-child(25) {
  animation-duration: 3.4782608696s;
  animation-delay: 1.7391304348s;
}

.col-58 :nth-child(26) {
  animation-duration: 3.4782608696s;
  animation-delay: 1.8086956522s;
}

.col-58 :nth-child(27) {
  animation-duration: 3.4782608696s;
  animation-delay: 1.8782608696s;
}

.col-58 :nth-child(28) {
  animation-duration: 3.4782608696s;
  animation-delay: 1.947826087s;
}

.col-58 :nth-child(29) {
  animation-duration: 3.4782608696s;
  animation-delay: 2.0173913043s;
}

.col-58 :nth-child(30) {
  animation-duration: 3.4782608696s;
  animation-delay: 2.0869565217s;
}

.col-58 :nth-child(31) {
  animation-duration: 3.4782608696s;
  animation-delay: 2.1565217391s;
}

.col-58 :nth-child(32) {
  animation-duration: 3.4782608696s;
  animation-delay: 2.2260869565s;
}

.col-58 :nth-child(33) {
  animation-duration: 3.4782608696s;
  animation-delay: 2.2956521739s;
}

.col-58 :nth-child(34) {
  animation-duration: 3.4782608696s;
  animation-delay: 2.3652173913s;
}

.col-58 :nth-child(35) {
  animation-duration: 3.4782608696s;
  animation-delay: 2.4347826087s;
}

.col-58 :nth-child(36) {
  animation-duration: 3.4782608696s;
  animation-delay: 2.5043478261s;
}

.col-58 :nth-child(37) {
  animation-duration: 3.4782608696s;
  animation-delay: 2.5739130435s;
}

.col-58 :nth-child(38) {
  animation-duration: 3.4782608696s;
  animation-delay: 2.6434782609s;
}

.col-58 :nth-child(39) {
  animation-duration: 3.4782608696s;
  animation-delay: 2.7130434783s;
}

.col-58 :nth-child(40) {
  animation-duration: 3.4782608696s;
  animation-delay: 2.7826086957s;
}

.col-58 :nth-child(41) {
  animation-duration: 3.4782608696s;
  animation-delay: 2.852173913s;
}

.col-58 :nth-child(42) {
  animation-duration: 3.4782608696s;
  animation-delay: 2.9217391304s;
}

.col-58 :nth-child(43) {
  animation-duration: 3.4782608696s;
  animation-delay: 2.9913043478s;
}

.col-58 :nth-child(44) {
  animation-duration: 3.4782608696s;
  animation-delay: 3.0608695652s;
}

.col-58 :nth-child(45) {
  animation-duration: 3.4782608696s;
  animation-delay: 3.1304347826s;
}

.col-58 :nth-child(46) {
  animation-duration: 3.4782608696s;
  animation-delay: 3.2s;
}

.col-58 :nth-child(47) {
  animation-duration: 3.4782608696s;
  animation-delay: 3.2695652174s;
}

.col-58 :nth-child(48) {
  animation-duration: 3.4782608696s;
  animation-delay: 3.3391304348s;
}

.col-58 :nth-child(49) {
  animation-duration: 3.4782608696s;
  animation-delay: 3.4086956522s;
}

.col-58 :nth-child(50) {
  animation-duration: 3.4782608696s;
  animation-delay: 3.4782608696s;
}

.col-59 :nth-child(1) {
  animation-duration: 4.1304347826s;
  animation-delay: 0.0826086957s;
}

.col-59 :nth-child(2) {
  animation-duration: 4.1304347826s;
  animation-delay: 0.1652173913s;
}

.col-59 :nth-child(3) {
  animation-duration: 4.1304347826s;
  animation-delay: 0.247826087s;
}

.col-59 :nth-child(4) {
  animation-duration: 4.1304347826s;
  animation-delay: 0.3304347826s;
}

.col-59 :nth-child(5) {
  animation-duration: 4.1304347826s;
  animation-delay: 0.4130434783s;
}

.col-59 :nth-child(6) {
  animation-duration: 4.1304347826s;
  animation-delay: 0.4956521739s;
}

.col-59 :nth-child(7) {
  animation-duration: 4.1304347826s;
  animation-delay: 0.5782608696s;
}

.col-59 :nth-child(8) {
  animation-duration: 4.1304347826s;
  animation-delay: 0.6608695652s;
}

.col-59 :nth-child(9) {
  animation-duration: 4.1304347826s;
  animation-delay: 0.7434782609s;
}

.col-59 :nth-child(10) {
  animation-duration: 4.1304347826s;
  animation-delay: 0.8260869565s;
}

.col-59 :nth-child(11) {
  animation-duration: 4.1304347826s;
  animation-delay: 0.9086956522s;
}

.col-59 :nth-child(12) {
  animation-duration: 4.1304347826s;
  animation-delay: 0.9913043478s;
}

.col-59 :nth-child(13) {
  animation-duration: 4.1304347826s;
  animation-delay: 1.0739130435s;
}

.col-59 :nth-child(14) {
  animation-duration: 4.1304347826s;
  animation-delay: 1.1565217391s;
}

.col-59 :nth-child(15) {
  animation-duration: 4.1304347826s;
  animation-delay: 1.2391304348s;
}

.col-59 :nth-child(16) {
  animation-duration: 4.1304347826s;
  animation-delay: 1.3217391304s;
}

.col-59 :nth-child(17) {
  animation-duration: 4.1304347826s;
  animation-delay: 1.4043478261s;
}

.col-59 :nth-child(18) {
  animation-duration: 4.1304347826s;
  animation-delay: 1.4869565217s;
}

.col-59 :nth-child(19) {
  animation-duration: 4.1304347826s;
  animation-delay: 1.5695652174s;
}

.col-59 :nth-child(20) {
  animation-duration: 4.1304347826s;
  animation-delay: 1.652173913s;
}

.col-59 :nth-child(21) {
  animation-duration: 4.1304347826s;
  animation-delay: 1.7347826087s;
}

.col-59 :nth-child(22) {
  animation-duration: 4.1304347826s;
  animation-delay: 1.8173913043s;
}

.col-59 :nth-child(23) {
  animation-duration: 4.1304347826s;
  animation-delay: 1.9s;
}

.col-59 :nth-child(24) {
  animation-duration: 4.1304347826s;
  animation-delay: 1.9826086957s;
}

.col-59 :nth-child(25) {
  animation-duration: 4.1304347826s;
  animation-delay: 2.0652173913s;
}

.col-59 :nth-child(26) {
  animation-duration: 4.1304347826s;
  animation-delay: 2.147826087s;
}

.col-59 :nth-child(27) {
  animation-duration: 4.1304347826s;
  animation-delay: 2.2304347826s;
}

.col-59 :nth-child(28) {
  animation-duration: 4.1304347826s;
  animation-delay: 2.3130434783s;
}

.col-59 :nth-child(29) {
  animation-duration: 4.1304347826s;
  animation-delay: 2.3956521739s;
}

.col-59 :nth-child(30) {
  animation-duration: 4.1304347826s;
  animation-delay: 2.4782608696s;
}

.col-59 :nth-child(31) {
  animation-duration: 4.1304347826s;
  animation-delay: 2.5608695652s;
}

.col-59 :nth-child(32) {
  animation-duration: 4.1304347826s;
  animation-delay: 2.6434782609s;
}

.col-59 :nth-child(33) {
  animation-duration: 4.1304347826s;
  animation-delay: 2.7260869565s;
}

.col-59 :nth-child(34) {
  animation-duration: 4.1304347826s;
  animation-delay: 2.8086956522s;
}

.col-59 :nth-child(35) {
  animation-duration: 4.1304347826s;
  animation-delay: 2.8913043478s;
}

.col-59 :nth-child(36) {
  animation-duration: 4.1304347826s;
  animation-delay: 2.9739130435s;
}

.col-59 :nth-child(37) {
  animation-duration: 4.1304347826s;
  animation-delay: 3.0565217391s;
}

.col-59 :nth-child(38) {
  animation-duration: 4.1304347826s;
  animation-delay: 3.1391304348s;
}

.col-59 :nth-child(39) {
  animation-duration: 4.1304347826s;
  animation-delay: 3.2217391304s;
}

.col-59 :nth-child(40) {
  animation-duration: 4.1304347826s;
  animation-delay: 3.3043478261s;
}

.col-59 :nth-child(41) {
  animation-duration: 4.1304347826s;
  animation-delay: 3.3869565217s;
}

.col-59 :nth-child(42) {
  animation-duration: 4.1304347826s;
  animation-delay: 3.4695652174s;
}

.col-59 :nth-child(43) {
  animation-duration: 4.1304347826s;
  animation-delay: 3.552173913s;
}

.col-59 :nth-child(44) {
  animation-duration: 4.1304347826s;
  animation-delay: 3.6347826087s;
}

.col-59 :nth-child(45) {
  animation-duration: 4.1304347826s;
  animation-delay: 3.7173913043s;
}

.col-59 :nth-child(46) {
  animation-duration: 4.1304347826s;
  animation-delay: 3.8s;
}

.col-59 :nth-child(47) {
  animation-duration: 4.1304347826s;
  animation-delay: 3.8826086957s;
}

.col-59 :nth-child(48) {
  animation-duration: 4.1304347826s;
  animation-delay: 3.9652173913s;
}

.col-59 :nth-child(49) {
  animation-duration: 4.1304347826s;
  animation-delay: 4.047826087s;
}

.col-59 :nth-child(50) {
  animation-duration: 4.1304347826s;
  animation-delay: 4.1304347826s;
}

.col-60 :nth-child(1) {
  animation-duration: 2.347826087s;
  animation-delay: 0.0469565217s;
}

.col-60 :nth-child(2) {
  animation-duration: 2.347826087s;
  animation-delay: 0.0939130435s;
}

.col-60 :nth-child(3) {
  animation-duration: 2.347826087s;
  animation-delay: 0.1408695652s;
}

.col-60 :nth-child(4) {
  animation-duration: 2.347826087s;
  animation-delay: 0.187826087s;
}

.col-60 :nth-child(5) {
  animation-duration: 2.347826087s;
  animation-delay: 0.2347826087s;
}

.col-60 :nth-child(6) {
  animation-duration: 2.347826087s;
  animation-delay: 0.2817391304s;
}

.col-60 :nth-child(7) {
  animation-duration: 2.347826087s;
  animation-delay: 0.3286956522s;
}

.col-60 :nth-child(8) {
  animation-duration: 2.347826087s;
  animation-delay: 0.3756521739s;
}

.col-60 :nth-child(9) {
  animation-duration: 2.347826087s;
  animation-delay: 0.4226086957s;
}

.col-60 :nth-child(10) {
  animation-duration: 2.347826087s;
  animation-delay: 0.4695652174s;
}

.col-60 :nth-child(11) {
  animation-duration: 2.347826087s;
  animation-delay: 0.5165217391s;
}

.col-60 :nth-child(12) {
  animation-duration: 2.347826087s;
  animation-delay: 0.5634782609s;
}

.col-60 :nth-child(13) {
  animation-duration: 2.347826087s;
  animation-delay: 0.6104347826s;
}

.col-60 :nth-child(14) {
  animation-duration: 2.347826087s;
  animation-delay: 0.6573913043s;
}

.col-60 :nth-child(15) {
  animation-duration: 2.347826087s;
  animation-delay: 0.7043478261s;
}

.col-60 :nth-child(16) {
  animation-duration: 2.347826087s;
  animation-delay: 0.7513043478s;
}

.col-60 :nth-child(17) {
  animation-duration: 2.347826087s;
  animation-delay: 0.7982608696s;
}

.col-60 :nth-child(18) {
  animation-duration: 2.347826087s;
  animation-delay: 0.8452173913s;
}

.col-60 :nth-child(19) {
  animation-duration: 2.347826087s;
  animation-delay: 0.892173913s;
}

.col-60 :nth-child(20) {
  animation-duration: 2.347826087s;
  animation-delay: 0.9391304348s;
}

.col-60 :nth-child(21) {
  animation-duration: 2.347826087s;
  animation-delay: 0.9860869565s;
}

.col-60 :nth-child(22) {
  animation-duration: 2.347826087s;
  animation-delay: 1.0330434783s;
}

.col-60 :nth-child(23) {
  animation-duration: 2.347826087s;
  animation-delay: 1.08s;
}

.col-60 :nth-child(24) {
  animation-duration: 2.347826087s;
  animation-delay: 1.1269565217s;
}

.col-60 :nth-child(25) {
  animation-duration: 2.347826087s;
  animation-delay: 1.1739130435s;
}

.col-60 :nth-child(26) {
  animation-duration: 2.347826087s;
  animation-delay: 1.2208695652s;
}

.col-60 :nth-child(27) {
  animation-duration: 2.347826087s;
  animation-delay: 1.267826087s;
}

.col-60 :nth-child(28) {
  animation-duration: 2.347826087s;
  animation-delay: 1.3147826087s;
}

.col-60 :nth-child(29) {
  animation-duration: 2.347826087s;
  animation-delay: 1.3617391304s;
}

.col-60 :nth-child(30) {
  animation-duration: 2.347826087s;
  animation-delay: 1.4086956522s;
}

.col-60 :nth-child(31) {
  animation-duration: 2.347826087s;
  animation-delay: 1.4556521739s;
}

.col-60 :nth-child(32) {
  animation-duration: 2.347826087s;
  animation-delay: 1.5026086957s;
}

.col-60 :nth-child(33) {
  animation-duration: 2.347826087s;
  animation-delay: 1.5495652174s;
}

.col-60 :nth-child(34) {
  animation-duration: 2.347826087s;
  animation-delay: 1.5965217391s;
}

.col-60 :nth-child(35) {
  animation-duration: 2.347826087s;
  animation-delay: 1.6434782609s;
}

.col-60 :nth-child(36) {
  animation-duration: 2.347826087s;
  animation-delay: 1.6904347826s;
}

.col-60 :nth-child(37) {
  animation-duration: 2.347826087s;
  animation-delay: 1.7373913043s;
}

.col-60 :nth-child(38) {
  animation-duration: 2.347826087s;
  animation-delay: 1.7843478261s;
}

.col-60 :nth-child(39) {
  animation-duration: 2.347826087s;
  animation-delay: 1.8313043478s;
}

.col-60 :nth-child(40) {
  animation-duration: 2.347826087s;
  animation-delay: 1.8782608696s;
}

.col-60 :nth-child(41) {
  animation-duration: 2.347826087s;
  animation-delay: 1.9252173913s;
}

.col-60 :nth-child(42) {
  animation-duration: 2.347826087s;
  animation-delay: 1.972173913s;
}

.col-60 :nth-child(43) {
  animation-duration: 2.347826087s;
  animation-delay: 2.0191304348s;
}

.col-60 :nth-child(44) {
  animation-duration: 2.347826087s;
  animation-delay: 2.0660869565s;
}

.col-60 :nth-child(45) {
  animation-duration: 2.347826087s;
  animation-delay: 2.1130434783s;
}

.col-60 :nth-child(46) {
  animation-duration: 2.347826087s;
  animation-delay: 2.16s;
}

.col-60 :nth-child(47) {
  animation-duration: 2.347826087s;
  animation-delay: 2.2069565217s;
}

.col-60 :nth-child(48) {
  animation-duration: 2.347826087s;
  animation-delay: 2.2539130435s;
}

.col-60 :nth-child(49) {
  animation-duration: 2.347826087s;
  animation-delay: 2.3008695652s;
}

.col-60 :nth-child(50) {
  animation-duration: 2.347826087s;
  animation-delay: 2.347826087s;
}

.col-61 :nth-child(1) {
  animation-duration: 5.1304347826s;
  animation-delay: 0.1026086957s;
}

.col-61 :nth-child(2) {
  animation-duration: 5.1304347826s;
  animation-delay: 0.2052173913s;
}

.col-61 :nth-child(3) {
  animation-duration: 5.1304347826s;
  animation-delay: 0.307826087s;
}

.col-61 :nth-child(4) {
  animation-duration: 5.1304347826s;
  animation-delay: 0.4104347826s;
}

.col-61 :nth-child(5) {
  animation-duration: 5.1304347826s;
  animation-delay: 0.5130434783s;
}

.col-61 :nth-child(6) {
  animation-duration: 5.1304347826s;
  animation-delay: 0.6156521739s;
}

.col-61 :nth-child(7) {
  animation-duration: 5.1304347826s;
  animation-delay: 0.7182608696s;
}

.col-61 :nth-child(8) {
  animation-duration: 5.1304347826s;
  animation-delay: 0.8208695652s;
}

.col-61 :nth-child(9) {
  animation-duration: 5.1304347826s;
  animation-delay: 0.9234782609s;
}

.col-61 :nth-child(10) {
  animation-duration: 5.1304347826s;
  animation-delay: 1.0260869565s;
}

.col-61 :nth-child(11) {
  animation-duration: 5.1304347826s;
  animation-delay: 1.1286956522s;
}

.col-61 :nth-child(12) {
  animation-duration: 5.1304347826s;
  animation-delay: 1.2313043478s;
}

.col-61 :nth-child(13) {
  animation-duration: 5.1304347826s;
  animation-delay: 1.3339130435s;
}

.col-61 :nth-child(14) {
  animation-duration: 5.1304347826s;
  animation-delay: 1.4365217391s;
}

.col-61 :nth-child(15) {
  animation-duration: 5.1304347826s;
  animation-delay: 1.5391304348s;
}

.col-61 :nth-child(16) {
  animation-duration: 5.1304347826s;
  animation-delay: 1.6417391304s;
}

.col-61 :nth-child(17) {
  animation-duration: 5.1304347826s;
  animation-delay: 1.7443478261s;
}

.col-61 :nth-child(18) {
  animation-duration: 5.1304347826s;
  animation-delay: 1.8469565217s;
}

.col-61 :nth-child(19) {
  animation-duration: 5.1304347826s;
  animation-delay: 1.9495652174s;
}

.col-61 :nth-child(20) {
  animation-duration: 5.1304347826s;
  animation-delay: 2.052173913s;
}

.col-61 :nth-child(21) {
  animation-duration: 5.1304347826s;
  animation-delay: 2.1547826087s;
}

.col-61 :nth-child(22) {
  animation-duration: 5.1304347826s;
  animation-delay: 2.2573913043s;
}

.col-61 :nth-child(23) {
  animation-duration: 5.1304347826s;
  animation-delay: 2.36s;
}

.col-61 :nth-child(24) {
  animation-duration: 5.1304347826s;
  animation-delay: 2.4626086957s;
}

.col-61 :nth-child(25) {
  animation-duration: 5.1304347826s;
  animation-delay: 2.5652173913s;
}

.col-61 :nth-child(26) {
  animation-duration: 5.1304347826s;
  animation-delay: 2.667826087s;
}

.col-61 :nth-child(27) {
  animation-duration: 5.1304347826s;
  animation-delay: 2.7704347826s;
}

.col-61 :nth-child(28) {
  animation-duration: 5.1304347826s;
  animation-delay: 2.8730434783s;
}

.col-61 :nth-child(29) {
  animation-duration: 5.1304347826s;
  animation-delay: 2.9756521739s;
}

.col-61 :nth-child(30) {
  animation-duration: 5.1304347826s;
  animation-delay: 3.0782608696s;
}

.col-61 :nth-child(31) {
  animation-duration: 5.1304347826s;
  animation-delay: 3.1808695652s;
}

.col-61 :nth-child(32) {
  animation-duration: 5.1304347826s;
  animation-delay: 3.2834782609s;
}

.col-61 :nth-child(33) {
  animation-duration: 5.1304347826s;
  animation-delay: 3.3860869565s;
}

.col-61 :nth-child(34) {
  animation-duration: 5.1304347826s;
  animation-delay: 3.4886956522s;
}

.col-61 :nth-child(35) {
  animation-duration: 5.1304347826s;
  animation-delay: 3.5913043478s;
}

.col-61 :nth-child(36) {
  animation-duration: 5.1304347826s;
  animation-delay: 3.6939130435s;
}

.col-61 :nth-child(37) {
  animation-duration: 5.1304347826s;
  animation-delay: 3.7965217391s;
}

.col-61 :nth-child(38) {
  animation-duration: 5.1304347826s;
  animation-delay: 3.8991304348s;
}

.col-61 :nth-child(39) {
  animation-duration: 5.1304347826s;
  animation-delay: 4.0017391304s;
}

.col-61 :nth-child(40) {
  animation-duration: 5.1304347826s;
  animation-delay: 4.1043478261s;
}

.col-61 :nth-child(41) {
  animation-duration: 5.1304347826s;
  animation-delay: 4.2069565217s;
}

.col-61 :nth-child(42) {
  animation-duration: 5.1304347826s;
  animation-delay: 4.3095652174s;
}

.col-61 :nth-child(43) {
  animation-duration: 5.1304347826s;
  animation-delay: 4.412173913s;
}

.col-61 :nth-child(44) {
  animation-duration: 5.1304347826s;
  animation-delay: 4.5147826087s;
}

.col-61 :nth-child(45) {
  animation-duration: 5.1304347826s;
  animation-delay: 4.6173913043s;
}

.col-61 :nth-child(46) {
  animation-duration: 5.1304347826s;
  animation-delay: 4.72s;
}

.col-61 :nth-child(47) {
  animation-duration: 5.1304347826s;
  animation-delay: 4.8226086957s;
}

.col-61 :nth-child(48) {
  animation-duration: 5.1304347826s;
  animation-delay: 4.9252173913s;
}

.col-61 :nth-child(49) {
  animation-duration: 5.1304347826s;
  animation-delay: 5.027826087s;
}

.col-61 :nth-child(50) {
  animation-duration: 5.1304347826s;
  animation-delay: 5.1304347826s;
}

.col-62 :nth-child(1) {
  animation-duration: 4.5652173913s;
  animation-delay: 0.0913043478s;
}

.col-62 :nth-child(2) {
  animation-duration: 4.5652173913s;
  animation-delay: 0.1826086957s;
}

.col-62 :nth-child(3) {
  animation-duration: 4.5652173913s;
  animation-delay: 0.2739130435s;
}

.col-62 :nth-child(4) {
  animation-duration: 4.5652173913s;
  animation-delay: 0.3652173913s;
}

.col-62 :nth-child(5) {
  animation-duration: 4.5652173913s;
  animation-delay: 0.4565217391s;
}

.col-62 :nth-child(6) {
  animation-duration: 4.5652173913s;
  animation-delay: 0.547826087s;
}

.col-62 :nth-child(7) {
  animation-duration: 4.5652173913s;
  animation-delay: 0.6391304348s;
}

.col-62 :nth-child(8) {
  animation-duration: 4.5652173913s;
  animation-delay: 0.7304347826s;
}

.col-62 :nth-child(9) {
  animation-duration: 4.5652173913s;
  animation-delay: 0.8217391304s;
}

.col-62 :nth-child(10) {
  animation-duration: 4.5652173913s;
  animation-delay: 0.9130434783s;
}

.col-62 :nth-child(11) {
  animation-duration: 4.5652173913s;
  animation-delay: 1.0043478261s;
}

.col-62 :nth-child(12) {
  animation-duration: 4.5652173913s;
  animation-delay: 1.0956521739s;
}

.col-62 :nth-child(13) {
  animation-duration: 4.5652173913s;
  animation-delay: 1.1869565217s;
}

.col-62 :nth-child(14) {
  animation-duration: 4.5652173913s;
  animation-delay: 1.2782608696s;
}

.col-62 :nth-child(15) {
  animation-duration: 4.5652173913s;
  animation-delay: 1.3695652174s;
}

.col-62 :nth-child(16) {
  animation-duration: 4.5652173913s;
  animation-delay: 1.4608695652s;
}

.col-62 :nth-child(17) {
  animation-duration: 4.5652173913s;
  animation-delay: 1.552173913s;
}

.col-62 :nth-child(18) {
  animation-duration: 4.5652173913s;
  animation-delay: 1.6434782609s;
}

.col-62 :nth-child(19) {
  animation-duration: 4.5652173913s;
  animation-delay: 1.7347826087s;
}

.col-62 :nth-child(20) {
  animation-duration: 4.5652173913s;
  animation-delay: 1.8260869565s;
}

.col-62 :nth-child(21) {
  animation-duration: 4.5652173913s;
  animation-delay: 1.9173913043s;
}

.col-62 :nth-child(22) {
  animation-duration: 4.5652173913s;
  animation-delay: 2.0086956522s;
}

.col-62 :nth-child(23) {
  animation-duration: 4.5652173913s;
  animation-delay: 2.1s;
}

.col-62 :nth-child(24) {
  animation-duration: 4.5652173913s;
  animation-delay: 2.1913043478s;
}

.col-62 :nth-child(25) {
  animation-duration: 4.5652173913s;
  animation-delay: 2.2826086957s;
}

.col-62 :nth-child(26) {
  animation-duration: 4.5652173913s;
  animation-delay: 2.3739130435s;
}

.col-62 :nth-child(27) {
  animation-duration: 4.5652173913s;
  animation-delay: 2.4652173913s;
}

.col-62 :nth-child(28) {
  animation-duration: 4.5652173913s;
  animation-delay: 2.5565217391s;
}

.col-62 :nth-child(29) {
  animation-duration: 4.5652173913s;
  animation-delay: 2.647826087s;
}

.col-62 :nth-child(30) {
  animation-duration: 4.5652173913s;
  animation-delay: 2.7391304348s;
}

.col-62 :nth-child(31) {
  animation-duration: 4.5652173913s;
  animation-delay: 2.8304347826s;
}

.col-62 :nth-child(32) {
  animation-duration: 4.5652173913s;
  animation-delay: 2.9217391304s;
}

.col-62 :nth-child(33) {
  animation-duration: 4.5652173913s;
  animation-delay: 3.0130434783s;
}

.col-62 :nth-child(34) {
  animation-duration: 4.5652173913s;
  animation-delay: 3.1043478261s;
}

.col-62 :nth-child(35) {
  animation-duration: 4.5652173913s;
  animation-delay: 3.1956521739s;
}

.col-62 :nth-child(36) {
  animation-duration: 4.5652173913s;
  animation-delay: 3.2869565217s;
}

.col-62 :nth-child(37) {
  animation-duration: 4.5652173913s;
  animation-delay: 3.3782608696s;
}

.col-62 :nth-child(38) {
  animation-duration: 4.5652173913s;
  animation-delay: 3.4695652174s;
}

.col-62 :nth-child(39) {
  animation-duration: 4.5652173913s;
  animation-delay: 3.5608695652s;
}

.col-62 :nth-child(40) {
  animation-duration: 4.5652173913s;
  animation-delay: 3.652173913s;
}

.col-62 :nth-child(41) {
  animation-duration: 4.5652173913s;
  animation-delay: 3.7434782609s;
}

.col-62 :nth-child(42) {
  animation-duration: 4.5652173913s;
  animation-delay: 3.8347826087s;
}

.col-62 :nth-child(43) {
  animation-duration: 4.5652173913s;
  animation-delay: 3.9260869565s;
}

.col-62 :nth-child(44) {
  animation-duration: 4.5652173913s;
  animation-delay: 4.0173913043s;
}

.col-62 :nth-child(45) {
  animation-duration: 4.5652173913s;
  animation-delay: 4.1086956522s;
}

.col-62 :nth-child(46) {
  animation-duration: 4.5652173913s;
  animation-delay: 4.2s;
}

.col-62 :nth-child(47) {
  animation-duration: 4.5652173913s;
  animation-delay: 4.2913043478s;
}

.col-62 :nth-child(48) {
  animation-duration: 4.5652173913s;
  animation-delay: 4.3826086957s;
}

.col-62 :nth-child(49) {
  animation-duration: 4.5652173913s;
  animation-delay: 4.4739130435s;
}

.col-62 :nth-child(50) {
  animation-duration: 4.5652173913s;
  animation-delay: 4.5652173913s;
}

.col-63 :nth-child(1) {
  animation-duration: 2s;
  animation-delay: 0.04s;
}

.col-63 :nth-child(2) {
  animation-duration: 2s;
  animation-delay: 0.08s;
}

.col-63 :nth-child(3) {
  animation-duration: 2s;
  animation-delay: 0.12s;
}

.col-63 :nth-child(4) {
  animation-duration: 2s;
  animation-delay: 0.16s;
}

.col-63 :nth-child(5) {
  animation-duration: 2s;
  animation-delay: 0.2s;
}

.col-63 :nth-child(6) {
  animation-duration: 2s;
  animation-delay: 0.24s;
}

.col-63 :nth-child(7) {
  animation-duration: 2s;
  animation-delay: 0.28s;
}

.col-63 :nth-child(8) {
  animation-duration: 2s;
  animation-delay: 0.32s;
}

.col-63 :nth-child(9) {
  animation-duration: 2s;
  animation-delay: 0.36s;
}

.col-63 :nth-child(10) {
  animation-duration: 2s;
  animation-delay: 0.4s;
}

.col-63 :nth-child(11) {
  animation-duration: 2s;
  animation-delay: 0.44s;
}

.col-63 :nth-child(12) {
  animation-duration: 2s;
  animation-delay: 0.48s;
}

.col-63 :nth-child(13) {
  animation-duration: 2s;
  animation-delay: 0.52s;
}

.col-63 :nth-child(14) {
  animation-duration: 2s;
  animation-delay: 0.56s;
}

.col-63 :nth-child(15) {
  animation-duration: 2s;
  animation-delay: 0.6s;
}

.col-63 :nth-child(16) {
  animation-duration: 2s;
  animation-delay: 0.64s;
}

.col-63 :nth-child(17) {
  animation-duration: 2s;
  animation-delay: 0.68s;
}

.col-63 :nth-child(18) {
  animation-duration: 2s;
  animation-delay: 0.72s;
}

.col-63 :nth-child(19) {
  animation-duration: 2s;
  animation-delay: 0.76s;
}

.col-63 :nth-child(20) {
  animation-duration: 2s;
  animation-delay: 0.8s;
}

.col-63 :nth-child(21) {
  animation-duration: 2s;
  animation-delay: 0.84s;
}

.col-63 :nth-child(22) {
  animation-duration: 2s;
  animation-delay: 0.88s;
}

.col-63 :nth-child(23) {
  animation-duration: 2s;
  animation-delay: 0.92s;
}

.col-63 :nth-child(24) {
  animation-duration: 2s;
  animation-delay: 0.96s;
}

.col-63 :nth-child(25) {
  animation-duration: 2s;
  animation-delay: 1s;
}

.col-63 :nth-child(26) {
  animation-duration: 2s;
  animation-delay: 1.04s;
}

.col-63 :nth-child(27) {
  animation-duration: 2s;
  animation-delay: 1.08s;
}

.col-63 :nth-child(28) {
  animation-duration: 2s;
  animation-delay: 1.12s;
}

.col-63 :nth-child(29) {
  animation-duration: 2s;
  animation-delay: 1.16s;
}

.col-63 :nth-child(30) {
  animation-duration: 2s;
  animation-delay: 1.2s;
}

.col-63 :nth-child(31) {
  animation-duration: 2s;
  animation-delay: 1.24s;
}

.col-63 :nth-child(32) {
  animation-duration: 2s;
  animation-delay: 1.28s;
}

.col-63 :nth-child(33) {
  animation-duration: 2s;
  animation-delay: 1.32s;
}

.col-63 :nth-child(34) {
  animation-duration: 2s;
  animation-delay: 1.36s;
}

.col-63 :nth-child(35) {
  animation-duration: 2s;
  animation-delay: 1.4s;
}

.col-63 :nth-child(36) {
  animation-duration: 2s;
  animation-delay: 1.44s;
}

.col-63 :nth-child(37) {
  animation-duration: 2s;
  animation-delay: 1.48s;
}

.col-63 :nth-child(38) {
  animation-duration: 2s;
  animation-delay: 1.52s;
}

.col-63 :nth-child(39) {
  animation-duration: 2s;
  animation-delay: 1.56s;
}

.col-63 :nth-child(40) {
  animation-duration: 2s;
  animation-delay: 1.6s;
}

.col-63 :nth-child(41) {
  animation-duration: 2s;
  animation-delay: 1.64s;
}

.col-63 :nth-child(42) {
  animation-duration: 2s;
  animation-delay: 1.68s;
}

.col-63 :nth-child(43) {
  animation-duration: 2s;
  animation-delay: 1.72s;
}

.col-63 :nth-child(44) {
  animation-duration: 2s;
  animation-delay: 1.76s;
}

.col-63 :nth-child(45) {
  animation-duration: 2s;
  animation-delay: 1.8s;
}

.col-63 :nth-child(46) {
  animation-duration: 2s;
  animation-delay: 1.84s;
}

.col-63 :nth-child(47) {
  animation-duration: 2s;
  animation-delay: 1.88s;
}

.col-63 :nth-child(48) {
  animation-duration: 2s;
  animation-delay: 1.92s;
}

.col-63 :nth-child(49) {
  animation-duration: 2s;
  animation-delay: 1.96s;
}

.col-63 :nth-child(50) {
  animation-duration: 2s;
  animation-delay: 2s;
}

.col-64 :nth-child(1) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.0208695652s;
}

.col-64 :nth-child(2) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.0417391304s;
}

.col-64 :nth-child(3) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.0626086957s;
}

.col-64 :nth-child(4) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.0834782609s;
}

.col-64 :nth-child(5) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.1043478261s;
}

.col-64 :nth-child(6) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.1252173913s;
}

.col-64 :nth-child(7) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.1460869565s;
}

.col-64 :nth-child(8) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.1669565217s;
}

.col-64 :nth-child(9) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.187826087s;
}

.col-64 :nth-child(10) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.2086956522s;
}

.col-64 :nth-child(11) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.2295652174s;
}

.col-64 :nth-child(12) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.2504347826s;
}

.col-64 :nth-child(13) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.2713043478s;
}

.col-64 :nth-child(14) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.292173913s;
}

.col-64 :nth-child(15) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.3130434783s;
}

.col-64 :nth-child(16) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.3339130435s;
}

.col-64 :nth-child(17) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.3547826087s;
}

.col-64 :nth-child(18) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.3756521739s;
}

.col-64 :nth-child(19) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.3965217391s;
}

.col-64 :nth-child(20) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.4173913043s;
}

.col-64 :nth-child(21) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.4382608696s;
}

.col-64 :nth-child(22) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.4591304348s;
}

.col-64 :nth-child(23) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.48s;
}

.col-64 :nth-child(24) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.5008695652s;
}

.col-64 :nth-child(25) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.5217391304s;
}

.col-64 :nth-child(26) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.5426086957s;
}

.col-64 :nth-child(27) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.5634782609s;
}

.col-64 :nth-child(28) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.5843478261s;
}

.col-64 :nth-child(29) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.6052173913s;
}

.col-64 :nth-child(30) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.6260869565s;
}

.col-64 :nth-child(31) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.6469565217s;
}

.col-64 :nth-child(32) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.667826087s;
}

.col-64 :nth-child(33) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.6886956522s;
}

.col-64 :nth-child(34) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.7095652174s;
}

.col-64 :nth-child(35) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.7304347826s;
}

.col-64 :nth-child(36) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.7513043478s;
}

.col-64 :nth-child(37) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.772173913s;
}

.col-64 :nth-child(38) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.7930434783s;
}

.col-64 :nth-child(39) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.8139130435s;
}

.col-64 :nth-child(40) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.8347826087s;
}

.col-64 :nth-child(41) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.8556521739s;
}

.col-64 :nth-child(42) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.8765217391s;
}

.col-64 :nth-child(43) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.8973913043s;
}

.col-64 :nth-child(44) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.9182608696s;
}

.col-64 :nth-child(45) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.9391304348s;
}

.col-64 :nth-child(46) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.96s;
}

.col-64 :nth-child(47) {
  animation-duration: 1.0434782609s;
  animation-delay: 0.9808695652s;
}

.col-64 :nth-child(48) {
  animation-duration: 1.0434782609s;
  animation-delay: 1.0017391304s;
}

.col-64 :nth-child(49) {
  animation-duration: 1.0434782609s;
  animation-delay: 1.0226086957s;
}

.col-64 :nth-child(50) {
  animation-duration: 1.0434782609s;
  animation-delay: 1.0434782609s;
}

.col-65 :nth-child(1) {
  animation-duration: 1.7826086957s;
  animation-delay: 0.0356521739s;
}

.col-65 :nth-child(2) {
  animation-duration: 1.7826086957s;
  animation-delay: 0.0713043478s;
}

.col-65 :nth-child(3) {
  animation-duration: 1.7826086957s;
  animation-delay: 0.1069565217s;
}

.col-65 :nth-child(4) {
  animation-duration: 1.7826086957s;
  animation-delay: 0.1426086957s;
}

.col-65 :nth-child(5) {
  animation-duration: 1.7826086957s;
  animation-delay: 0.1782608696s;
}

.col-65 :nth-child(6) {
  animation-duration: 1.7826086957s;
  animation-delay: 0.2139130435s;
}

.col-65 :nth-child(7) {
  animation-duration: 1.7826086957s;
  animation-delay: 0.2495652174s;
}

.col-65 :nth-child(8) {
  animation-duration: 1.7826086957s;
  animation-delay: 0.2852173913s;
}

.col-65 :nth-child(9) {
  animation-duration: 1.7826086957s;
  animation-delay: 0.3208695652s;
}

.col-65 :nth-child(10) {
  animation-duration: 1.7826086957s;
  animation-delay: 0.3565217391s;
}

.col-65 :nth-child(11) {
  animation-duration: 1.7826086957s;
  animation-delay: 0.392173913s;
}

.col-65 :nth-child(12) {
  animation-duration: 1.7826086957s;
  animation-delay: 0.427826087s;
}

.col-65 :nth-child(13) {
  animation-duration: 1.7826086957s;
  animation-delay: 0.4634782609s;
}

.col-65 :nth-child(14) {
  animation-duration: 1.7826086957s;
  animation-delay: 0.4991304348s;
}

.col-65 :nth-child(15) {
  animation-duration: 1.7826086957s;
  animation-delay: 0.5347826087s;
}

.col-65 :nth-child(16) {
  animation-duration: 1.7826086957s;
  animation-delay: 0.5704347826s;
}

.col-65 :nth-child(17) {
  animation-duration: 1.7826086957s;
  animation-delay: 0.6060869565s;
}

.col-65 :nth-child(18) {
  animation-duration: 1.7826086957s;
  animation-delay: 0.6417391304s;
}

.col-65 :nth-child(19) {
  animation-duration: 1.7826086957s;
  animation-delay: 0.6773913043s;
}

.col-65 :nth-child(20) {
  animation-duration: 1.7826086957s;
  animation-delay: 0.7130434783s;
}

.col-65 :nth-child(21) {
  animation-duration: 1.7826086957s;
  animation-delay: 0.7486956522s;
}

.col-65 :nth-child(22) {
  animation-duration: 1.7826086957s;
  animation-delay: 0.7843478261s;
}

.col-65 :nth-child(23) {
  animation-duration: 1.7826086957s;
  animation-delay: 0.82s;
}

.col-65 :nth-child(24) {
  animation-duration: 1.7826086957s;
  animation-delay: 0.8556521739s;
}

.col-65 :nth-child(25) {
  animation-duration: 1.7826086957s;
  animation-delay: 0.8913043478s;
}

.col-65 :nth-child(26) {
  animation-duration: 1.7826086957s;
  animation-delay: 0.9269565217s;
}

.col-65 :nth-child(27) {
  animation-duration: 1.7826086957s;
  animation-delay: 0.9626086957s;
}

.col-65 :nth-child(28) {
  animation-duration: 1.7826086957s;
  animation-delay: 0.9982608696s;
}

.col-65 :nth-child(29) {
  animation-duration: 1.7826086957s;
  animation-delay: 1.0339130435s;
}

.col-65 :nth-child(30) {
  animation-duration: 1.7826086957s;
  animation-delay: 1.0695652174s;
}

.col-65 :nth-child(31) {
  animation-duration: 1.7826086957s;
  animation-delay: 1.1052173913s;
}

.col-65 :nth-child(32) {
  animation-duration: 1.7826086957s;
  animation-delay: 1.1408695652s;
}

.col-65 :nth-child(33) {
  animation-duration: 1.7826086957s;
  animation-delay: 1.1765217391s;
}

.col-65 :nth-child(34) {
  animation-duration: 1.7826086957s;
  animation-delay: 1.212173913s;
}

.col-65 :nth-child(35) {
  animation-duration: 1.7826086957s;
  animation-delay: 1.247826087s;
}

.col-65 :nth-child(36) {
  animation-duration: 1.7826086957s;
  animation-delay: 1.2834782609s;
}

.col-65 :nth-child(37) {
  animation-duration: 1.7826086957s;
  animation-delay: 1.3191304348s;
}

.col-65 :nth-child(38) {
  animation-duration: 1.7826086957s;
  animation-delay: 1.3547826087s;
}

.col-65 :nth-child(39) {
  animation-duration: 1.7826086957s;
  animation-delay: 1.3904347826s;
}

.col-65 :nth-child(40) {
  animation-duration: 1.7826086957s;
  animation-delay: 1.4260869565s;
}

.col-65 :nth-child(41) {
  animation-duration: 1.7826086957s;
  animation-delay: 1.4617391304s;
}

.col-65 :nth-child(42) {
  animation-duration: 1.7826086957s;
  animation-delay: 1.4973913043s;
}

.col-65 :nth-child(43) {
  animation-duration: 1.7826086957s;
  animation-delay: 1.5330434783s;
}

.col-65 :nth-child(44) {
  animation-duration: 1.7826086957s;
  animation-delay: 1.5686956522s;
}

.col-65 :nth-child(45) {
  animation-duration: 1.7826086957s;
  animation-delay: 1.6043478261s;
}

.col-65 :nth-child(46) {
  animation-duration: 1.7826086957s;
  animation-delay: 1.64s;
}

.col-65 :nth-child(47) {
  animation-duration: 1.7826086957s;
  animation-delay: 1.6756521739s;
}

.col-65 :nth-child(48) {
  animation-duration: 1.7826086957s;
  animation-delay: 1.7113043478s;
}

.col-65 :nth-child(49) {
  animation-duration: 1.7826086957s;
  animation-delay: 1.7469565217s;
}

.col-65 :nth-child(50) {
  animation-duration: 1.7826086957s;
  animation-delay: 1.7826086957s;
}

.col-66 :nth-child(1) {
  animation-duration: 5.0869565217s;
  animation-delay: 0.1017391304s;
}

.col-66 :nth-child(2) {
  animation-duration: 5.0869565217s;
  animation-delay: 0.2034782609s;
}

.col-66 :nth-child(3) {
  animation-duration: 5.0869565217s;
  animation-delay: 0.3052173913s;
}

.col-66 :nth-child(4) {
  animation-duration: 5.0869565217s;
  animation-delay: 0.4069565217s;
}

.col-66 :nth-child(5) {
  animation-duration: 5.0869565217s;
  animation-delay: 0.5086956522s;
}

.col-66 :nth-child(6) {
  animation-duration: 5.0869565217s;
  animation-delay: 0.6104347826s;
}

.col-66 :nth-child(7) {
  animation-duration: 5.0869565217s;
  animation-delay: 0.712173913s;
}

.col-66 :nth-child(8) {
  animation-duration: 5.0869565217s;
  animation-delay: 0.8139130435s;
}

.col-66 :nth-child(9) {
  animation-duration: 5.0869565217s;
  animation-delay: 0.9156521739s;
}

.col-66 :nth-child(10) {
  animation-duration: 5.0869565217s;
  animation-delay: 1.0173913043s;
}

.col-66 :nth-child(11) {
  animation-duration: 5.0869565217s;
  animation-delay: 1.1191304348s;
}

.col-66 :nth-child(12) {
  animation-duration: 5.0869565217s;
  animation-delay: 1.2208695652s;
}

.col-66 :nth-child(13) {
  animation-duration: 5.0869565217s;
  animation-delay: 1.3226086957s;
}

.col-66 :nth-child(14) {
  animation-duration: 5.0869565217s;
  animation-delay: 1.4243478261s;
}

.col-66 :nth-child(15) {
  animation-duration: 5.0869565217s;
  animation-delay: 1.5260869565s;
}

.col-66 :nth-child(16) {
  animation-duration: 5.0869565217s;
  animation-delay: 1.627826087s;
}

.col-66 :nth-child(17) {
  animation-duration: 5.0869565217s;
  animation-delay: 1.7295652174s;
}

.col-66 :nth-child(18) {
  animation-duration: 5.0869565217s;
  animation-delay: 1.8313043478s;
}

.col-66 :nth-child(19) {
  animation-duration: 5.0869565217s;
  animation-delay: 1.9330434783s;
}

.col-66 :nth-child(20) {
  animation-duration: 5.0869565217s;
  animation-delay: 2.0347826087s;
}

.col-66 :nth-child(21) {
  animation-duration: 5.0869565217s;
  animation-delay: 2.1365217391s;
}

.col-66 :nth-child(22) {
  animation-duration: 5.0869565217s;
  animation-delay: 2.2382608696s;
}

.col-66 :nth-child(23) {
  animation-duration: 5.0869565217s;
  animation-delay: 2.34s;
}

.col-66 :nth-child(24) {
  animation-duration: 5.0869565217s;
  animation-delay: 2.4417391304s;
}

.col-66 :nth-child(25) {
  animation-duration: 5.0869565217s;
  animation-delay: 2.5434782609s;
}

.col-66 :nth-child(26) {
  animation-duration: 5.0869565217s;
  animation-delay: 2.6452173913s;
}

.col-66 :nth-child(27) {
  animation-duration: 5.0869565217s;
  animation-delay: 2.7469565217s;
}

.col-66 :nth-child(28) {
  animation-duration: 5.0869565217s;
  animation-delay: 2.8486956522s;
}

.col-66 :nth-child(29) {
  animation-duration: 5.0869565217s;
  animation-delay: 2.9504347826s;
}

.col-66 :nth-child(30) {
  animation-duration: 5.0869565217s;
  animation-delay: 3.052173913s;
}

.col-66 :nth-child(31) {
  animation-duration: 5.0869565217s;
  animation-delay: 3.1539130435s;
}

.col-66 :nth-child(32) {
  animation-duration: 5.0869565217s;
  animation-delay: 3.2556521739s;
}

.col-66 :nth-child(33) {
  animation-duration: 5.0869565217s;
  animation-delay: 3.3573913043s;
}

.col-66 :nth-child(34) {
  animation-duration: 5.0869565217s;
  animation-delay: 3.4591304348s;
}

.col-66 :nth-child(35) {
  animation-duration: 5.0869565217s;
  animation-delay: 3.5608695652s;
}

.col-66 :nth-child(36) {
  animation-duration: 5.0869565217s;
  animation-delay: 3.6626086957s;
}

.col-66 :nth-child(37) {
  animation-duration: 5.0869565217s;
  animation-delay: 3.7643478261s;
}

.col-66 :nth-child(38) {
  animation-duration: 5.0869565217s;
  animation-delay: 3.8660869565s;
}

.col-66 :nth-child(39) {
  animation-duration: 5.0869565217s;
  animation-delay: 3.967826087s;
}

.col-66 :nth-child(40) {
  animation-duration: 5.0869565217s;
  animation-delay: 4.0695652174s;
}

.col-66 :nth-child(41) {
  animation-duration: 5.0869565217s;
  animation-delay: 4.1713043478s;
}

.col-66 :nth-child(42) {
  animation-duration: 5.0869565217s;
  animation-delay: 4.2730434783s;
}

.col-66 :nth-child(43) {
  animation-duration: 5.0869565217s;
  animation-delay: 4.3747826087s;
}

.col-66 :nth-child(44) {
  animation-duration: 5.0869565217s;
  animation-delay: 4.4765217391s;
}

.col-66 :nth-child(45) {
  animation-duration: 5.0869565217s;
  animation-delay: 4.5782608696s;
}

.col-66 :nth-child(46) {
  animation-duration: 5.0869565217s;
  animation-delay: 4.68s;
}

.col-66 :nth-child(47) {
  animation-duration: 5.0869565217s;
  animation-delay: 4.7817391304s;
}

.col-66 :nth-child(48) {
  animation-duration: 5.0869565217s;
  animation-delay: 4.8834782609s;
}

.col-66 :nth-child(49) {
  animation-duration: 5.0869565217s;
  animation-delay: 4.9852173913s;
}

.col-66 :nth-child(50) {
  animation-duration: 5.0869565217s;
  animation-delay: 5.0869565217s;
}

.col-67 :nth-child(1) {
  animation-duration: 2.0869565217s;
  animation-delay: 0.0417391304s;
}

.col-67 :nth-child(2) {
  animation-duration: 2.0869565217s;
  animation-delay: 0.0834782609s;
}

.col-67 :nth-child(3) {
  animation-duration: 2.0869565217s;
  animation-delay: 0.1252173913s;
}

.col-67 :nth-child(4) {
  animation-duration: 2.0869565217s;
  animation-delay: 0.1669565217s;
}

.col-67 :nth-child(5) {
  animation-duration: 2.0869565217s;
  animation-delay: 0.2086956522s;
}

.col-67 :nth-child(6) {
  animation-duration: 2.0869565217s;
  animation-delay: 0.2504347826s;
}

.col-67 :nth-child(7) {
  animation-duration: 2.0869565217s;
  animation-delay: 0.292173913s;
}

.col-67 :nth-child(8) {
  animation-duration: 2.0869565217s;
  animation-delay: 0.3339130435s;
}

.col-67 :nth-child(9) {
  animation-duration: 2.0869565217s;
  animation-delay: 0.3756521739s;
}

.col-67 :nth-child(10) {
  animation-duration: 2.0869565217s;
  animation-delay: 0.4173913043s;
}

.col-67 :nth-child(11) {
  animation-duration: 2.0869565217s;
  animation-delay: 0.4591304348s;
}

.col-67 :nth-child(12) {
  animation-duration: 2.0869565217s;
  animation-delay: 0.5008695652s;
}

.col-67 :nth-child(13) {
  animation-duration: 2.0869565217s;
  animation-delay: 0.5426086957s;
}

.col-67 :nth-child(14) {
  animation-duration: 2.0869565217s;
  animation-delay: 0.5843478261s;
}

.col-67 :nth-child(15) {
  animation-duration: 2.0869565217s;
  animation-delay: 0.6260869565s;
}

.col-67 :nth-child(16) {
  animation-duration: 2.0869565217s;
  animation-delay: 0.667826087s;
}

.col-67 :nth-child(17) {
  animation-duration: 2.0869565217s;
  animation-delay: 0.7095652174s;
}

.col-67 :nth-child(18) {
  animation-duration: 2.0869565217s;
  animation-delay: 0.7513043478s;
}

.col-67 :nth-child(19) {
  animation-duration: 2.0869565217s;
  animation-delay: 0.7930434783s;
}

.col-67 :nth-child(20) {
  animation-duration: 2.0869565217s;
  animation-delay: 0.8347826087s;
}

.col-67 :nth-child(21) {
  animation-duration: 2.0869565217s;
  animation-delay: 0.8765217391s;
}

.col-67 :nth-child(22) {
  animation-duration: 2.0869565217s;
  animation-delay: 0.9182608696s;
}

.col-67 :nth-child(23) {
  animation-duration: 2.0869565217s;
  animation-delay: 0.96s;
}

.col-67 :nth-child(24) {
  animation-duration: 2.0869565217s;
  animation-delay: 1.0017391304s;
}

.col-67 :nth-child(25) {
  animation-duration: 2.0869565217s;
  animation-delay: 1.0434782609s;
}

.col-67 :nth-child(26) {
  animation-duration: 2.0869565217s;
  animation-delay: 1.0852173913s;
}

.col-67 :nth-child(27) {
  animation-duration: 2.0869565217s;
  animation-delay: 1.1269565217s;
}

.col-67 :nth-child(28) {
  animation-duration: 2.0869565217s;
  animation-delay: 1.1686956522s;
}

.col-67 :nth-child(29) {
  animation-duration: 2.0869565217s;
  animation-delay: 1.2104347826s;
}

.col-67 :nth-child(30) {
  animation-duration: 2.0869565217s;
  animation-delay: 1.252173913s;
}

.col-67 :nth-child(31) {
  animation-duration: 2.0869565217s;
  animation-delay: 1.2939130435s;
}

.col-67 :nth-child(32) {
  animation-duration: 2.0869565217s;
  animation-delay: 1.3356521739s;
}

.col-67 :nth-child(33) {
  animation-duration: 2.0869565217s;
  animation-delay: 1.3773913043s;
}

.col-67 :nth-child(34) {
  animation-duration: 2.0869565217s;
  animation-delay: 1.4191304348s;
}

.col-67 :nth-child(35) {
  animation-duration: 2.0869565217s;
  animation-delay: 1.4608695652s;
}

.col-67 :nth-child(36) {
  animation-duration: 2.0869565217s;
  animation-delay: 1.5026086957s;
}

.col-67 :nth-child(37) {
  animation-duration: 2.0869565217s;
  animation-delay: 1.5443478261s;
}

.col-67 :nth-child(38) {
  animation-duration: 2.0869565217s;
  animation-delay: 1.5860869565s;
}

.col-67 :nth-child(39) {
  animation-duration: 2.0869565217s;
  animation-delay: 1.627826087s;
}

.col-67 :nth-child(40) {
  animation-duration: 2.0869565217s;
  animation-delay: 1.6695652174s;
}

.col-67 :nth-child(41) {
  animation-duration: 2.0869565217s;
  animation-delay: 1.7113043478s;
}

.col-67 :nth-child(42) {
  animation-duration: 2.0869565217s;
  animation-delay: 1.7530434783s;
}

.col-67 :nth-child(43) {
  animation-duration: 2.0869565217s;
  animation-delay: 1.7947826087s;
}

.col-67 :nth-child(44) {
  animation-duration: 2.0869565217s;
  animation-delay: 1.8365217391s;
}

.col-67 :nth-child(45) {
  animation-duration: 2.0869565217s;
  animation-delay: 1.8782608696s;
}

.col-67 :nth-child(46) {
  animation-duration: 2.0869565217s;
  animation-delay: 1.92s;
}

.col-67 :nth-child(47) {
  animation-duration: 2.0869565217s;
  animation-delay: 1.9617391304s;
}

.col-67 :nth-child(48) {
  animation-duration: 2.0869565217s;
  animation-delay: 2.0034782609s;
}

.col-67 :nth-child(49) {
  animation-duration: 2.0869565217s;
  animation-delay: 2.0452173913s;
}

.col-67 :nth-child(50) {
  animation-duration: 2.0869565217s;
  animation-delay: 2.0869565217s;
}

.col-68 :nth-child(1) {
  animation-duration: 5s;
  animation-delay: 0.1s;
}

.col-68 :nth-child(2) {
  animation-duration: 5s;
  animation-delay: 0.2s;
}

.col-68 :nth-child(3) {
  animation-duration: 5s;
  animation-delay: 0.3s;
}

.col-68 :nth-child(4) {
  animation-duration: 5s;
  animation-delay: 0.4s;
}

.col-68 :nth-child(5) {
  animation-duration: 5s;
  animation-delay: 0.5s;
}

.col-68 :nth-child(6) {
  animation-duration: 5s;
  animation-delay: 0.6s;
}

.col-68 :nth-child(7) {
  animation-duration: 5s;
  animation-delay: 0.7s;
}

.col-68 :nth-child(8) {
  animation-duration: 5s;
  animation-delay: 0.8s;
}

.col-68 :nth-child(9) {
  animation-duration: 5s;
  animation-delay: 0.9s;
}

.col-68 :nth-child(10) {
  animation-duration: 5s;
  animation-delay: 1s;
}

.col-68 :nth-child(11) {
  animation-duration: 5s;
  animation-delay: 1.1s;
}

.col-68 :nth-child(12) {
  animation-duration: 5s;
  animation-delay: 1.2s;
}

.col-68 :nth-child(13) {
  animation-duration: 5s;
  animation-delay: 1.3s;
}

.col-68 :nth-child(14) {
  animation-duration: 5s;
  animation-delay: 1.4s;
}

.col-68 :nth-child(15) {
  animation-duration: 5s;
  animation-delay: 1.5s;
}

.col-68 :nth-child(16) {
  animation-duration: 5s;
  animation-delay: 1.6s;
}

.col-68 :nth-child(17) {
  animation-duration: 5s;
  animation-delay: 1.7s;
}

.col-68 :nth-child(18) {
  animation-duration: 5s;
  animation-delay: 1.8s;
}

.col-68 :nth-child(19) {
  animation-duration: 5s;
  animation-delay: 1.9s;
}

.col-68 :nth-child(20) {
  animation-duration: 5s;
  animation-delay: 2s;
}

.col-68 :nth-child(21) {
  animation-duration: 5s;
  animation-delay: 2.1s;
}

.col-68 :nth-child(22) {
  animation-duration: 5s;
  animation-delay: 2.2s;
}

.col-68 :nth-child(23) {
  animation-duration: 5s;
  animation-delay: 2.3s;
}

.col-68 :nth-child(24) {
  animation-duration: 5s;
  animation-delay: 2.4s;
}

.col-68 :nth-child(25) {
  animation-duration: 5s;
  animation-delay: 2.5s;
}

.col-68 :nth-child(26) {
  animation-duration: 5s;
  animation-delay: 2.6s;
}

.col-68 :nth-child(27) {
  animation-duration: 5s;
  animation-delay: 2.7s;
}

.col-68 :nth-child(28) {
  animation-duration: 5s;
  animation-delay: 2.8s;
}

.col-68 :nth-child(29) {
  animation-duration: 5s;
  animation-delay: 2.9s;
}

.col-68 :nth-child(30) {
  animation-duration: 5s;
  animation-delay: 3s;
}

.col-68 :nth-child(31) {
  animation-duration: 5s;
  animation-delay: 3.1s;
}

.col-68 :nth-child(32) {
  animation-duration: 5s;
  animation-delay: 3.2s;
}

.col-68 :nth-child(33) {
  animation-duration: 5s;
  animation-delay: 3.3s;
}

.col-68 :nth-child(34) {
  animation-duration: 5s;
  animation-delay: 3.4s;
}

.col-68 :nth-child(35) {
  animation-duration: 5s;
  animation-delay: 3.5s;
}

.col-68 :nth-child(36) {
  animation-duration: 5s;
  animation-delay: 3.6s;
}

.col-68 :nth-child(37) {
  animation-duration: 5s;
  animation-delay: 3.7s;
}

.col-68 :nth-child(38) {
  animation-duration: 5s;
  animation-delay: 3.8s;
}

.col-68 :nth-child(39) {
  animation-duration: 5s;
  animation-delay: 3.9s;
}

.col-68 :nth-child(40) {
  animation-duration: 5s;
  animation-delay: 4s;
}

.col-68 :nth-child(41) {
  animation-duration: 5s;
  animation-delay: 4.1s;
}

.col-68 :nth-child(42) {
  animation-duration: 5s;
  animation-delay: 4.2s;
}

.col-68 :nth-child(43) {
  animation-duration: 5s;
  animation-delay: 4.3s;
}

.col-68 :nth-child(44) {
  animation-duration: 5s;
  animation-delay: 4.4s;
}

.col-68 :nth-child(45) {
  animation-duration: 5s;
  animation-delay: 4.5s;
}

.col-68 :nth-child(46) {
  animation-duration: 5s;
  animation-delay: 4.6s;
}

.col-68 :nth-child(47) {
  animation-duration: 5s;
  animation-delay: 4.7s;
}

.col-68 :nth-child(48) {
  animation-duration: 5s;
  animation-delay: 4.8s;
}

.col-68 :nth-child(49) {
  animation-duration: 5s;
  animation-delay: 4.9s;
}

.col-68 :nth-child(50) {
  animation-duration: 5s;
  animation-delay: 5s;
}

.col-69 :nth-child(1) {
  animation-duration: 5s;
  animation-delay: 0.1s;
}

.col-69 :nth-child(2) {
  animation-duration: 5s;
  animation-delay: 0.2s;
}

.col-69 :nth-child(3) {
  animation-duration: 5s;
  animation-delay: 0.3s;
}

.col-69 :nth-child(4) {
  animation-duration: 5s;
  animation-delay: 0.4s;
}

.col-69 :nth-child(5) {
  animation-duration: 5s;
  animation-delay: 0.5s;
}

.col-69 :nth-child(6) {
  animation-duration: 5s;
  animation-delay: 0.6s;
}

.col-69 :nth-child(7) {
  animation-duration: 5s;
  animation-delay: 0.7s;
}

.col-69 :nth-child(8) {
  animation-duration: 5s;
  animation-delay: 0.8s;
}

.col-69 :nth-child(9) {
  animation-duration: 5s;
  animation-delay: 0.9s;
}

.col-69 :nth-child(10) {
  animation-duration: 5s;
  animation-delay: 1s;
}

.col-69 :nth-child(11) {
  animation-duration: 5s;
  animation-delay: 1.1s;
}

.col-69 :nth-child(12) {
  animation-duration: 5s;
  animation-delay: 1.2s;
}

.col-69 :nth-child(13) {
  animation-duration: 5s;
  animation-delay: 1.3s;
}

.col-69 :nth-child(14) {
  animation-duration: 5s;
  animation-delay: 1.4s;
}

.col-69 :nth-child(15) {
  animation-duration: 5s;
  animation-delay: 1.5s;
}

.col-69 :nth-child(16) {
  animation-duration: 5s;
  animation-delay: 1.6s;
}

.col-69 :nth-child(17) {
  animation-duration: 5s;
  animation-delay: 1.7s;
}

.col-69 :nth-child(18) {
  animation-duration: 5s;
  animation-delay: 1.8s;
}

.col-69 :nth-child(19) {
  animation-duration: 5s;
  animation-delay: 1.9s;
}

.col-69 :nth-child(20) {
  animation-duration: 5s;
  animation-delay: 2s;
}

.col-69 :nth-child(21) {
  animation-duration: 5s;
  animation-delay: 2.1s;
}

.col-69 :nth-child(22) {
  animation-duration: 5s;
  animation-delay: 2.2s;
}

.col-69 :nth-child(23) {
  animation-duration: 5s;
  animation-delay: 2.3s;
}

.col-69 :nth-child(24) {
  animation-duration: 5s;
  animation-delay: 2.4s;
}

.col-69 :nth-child(25) {
  animation-duration: 5s;
  animation-delay: 2.5s;
}

.col-69 :nth-child(26) {
  animation-duration: 5s;
  animation-delay: 2.6s;
}

.col-69 :nth-child(27) {
  animation-duration: 5s;
  animation-delay: 2.7s;
}

.col-69 :nth-child(28) {
  animation-duration: 5s;
  animation-delay: 2.8s;
}

.col-69 :nth-child(29) {
  animation-duration: 5s;
  animation-delay: 2.9s;
}

.col-69 :nth-child(30) {
  animation-duration: 5s;
  animation-delay: 3s;
}

.col-69 :nth-child(31) {
  animation-duration: 5s;
  animation-delay: 3.1s;
}

.col-69 :nth-child(32) {
  animation-duration: 5s;
  animation-delay: 3.2s;
}

.col-69 :nth-child(33) {
  animation-duration: 5s;
  animation-delay: 3.3s;
}

.col-69 :nth-child(34) {
  animation-duration: 5s;
  animation-delay: 3.4s;
}

.col-69 :nth-child(35) {
  animation-duration: 5s;
  animation-delay: 3.5s;
}

.col-69 :nth-child(36) {
  animation-duration: 5s;
  animation-delay: 3.6s;
}

.col-69 :nth-child(37) {
  animation-duration: 5s;
  animation-delay: 3.7s;
}

.col-69 :nth-child(38) {
  animation-duration: 5s;
  animation-delay: 3.8s;
}

.col-69 :nth-child(39) {
  animation-duration: 5s;
  animation-delay: 3.9s;
}

.col-69 :nth-child(40) {
  animation-duration: 5s;
  animation-delay: 4s;
}

.col-69 :nth-child(41) {
  animation-duration: 5s;
  animation-delay: 4.1s;
}

.col-69 :nth-child(42) {
  animation-duration: 5s;
  animation-delay: 4.2s;
}

.col-69 :nth-child(43) {
  animation-duration: 5s;
  animation-delay: 4.3s;
}

.col-69 :nth-child(44) {
  animation-duration: 5s;
  animation-delay: 4.4s;
}

.col-69 :nth-child(45) {
  animation-duration: 5s;
  animation-delay: 4.5s;
}

.col-69 :nth-child(46) {
  animation-duration: 5s;
  animation-delay: 4.6s;
}

.col-69 :nth-child(47) {
  animation-duration: 5s;
  animation-delay: 4.7s;
}

.col-69 :nth-child(48) {
  animation-duration: 5s;
  animation-delay: 4.8s;
}

.col-69 :nth-child(49) {
  animation-duration: 5s;
  animation-delay: 4.9s;
}

.col-69 :nth-child(50) {
  animation-duration: 5s;
  animation-delay: 5s;
}

.col-70 :nth-child(1) {
  animation-duration: 3.3913043478s;
  animation-delay: 0.067826087s;
}

.col-70 :nth-child(2) {
  animation-duration: 3.3913043478s;
  animation-delay: 0.1356521739s;
}

.col-70 :nth-child(3) {
  animation-duration: 3.3913043478s;
  animation-delay: 0.2034782609s;
}

.col-70 :nth-child(4) {
  animation-duration: 3.3913043478s;
  animation-delay: 0.2713043478s;
}

.col-70 :nth-child(5) {
  animation-duration: 3.3913043478s;
  animation-delay: 0.3391304348s;
}

.col-70 :nth-child(6) {
  animation-duration: 3.3913043478s;
  animation-delay: 0.4069565217s;
}

.col-70 :nth-child(7) {
  animation-duration: 3.3913043478s;
  animation-delay: 0.4747826087s;
}

.col-70 :nth-child(8) {
  animation-duration: 3.3913043478s;
  animation-delay: 0.5426086957s;
}

.col-70 :nth-child(9) {
  animation-duration: 3.3913043478s;
  animation-delay: 0.6104347826s;
}

.col-70 :nth-child(10) {
  animation-duration: 3.3913043478s;
  animation-delay: 0.6782608696s;
}

.col-70 :nth-child(11) {
  animation-duration: 3.3913043478s;
  animation-delay: 0.7460869565s;
}

.col-70 :nth-child(12) {
  animation-duration: 3.3913043478s;
  animation-delay: 0.8139130435s;
}

.col-70 :nth-child(13) {
  animation-duration: 3.3913043478s;
  animation-delay: 0.8817391304s;
}

.col-70 :nth-child(14) {
  animation-duration: 3.3913043478s;
  animation-delay: 0.9495652174s;
}

.col-70 :nth-child(15) {
  animation-duration: 3.3913043478s;
  animation-delay: 1.0173913043s;
}

.col-70 :nth-child(16) {
  animation-duration: 3.3913043478s;
  animation-delay: 1.0852173913s;
}

.col-70 :nth-child(17) {
  animation-duration: 3.3913043478s;
  animation-delay: 1.1530434783s;
}

.col-70 :nth-child(18) {
  animation-duration: 3.3913043478s;
  animation-delay: 1.2208695652s;
}

.col-70 :nth-child(19) {
  animation-duration: 3.3913043478s;
  animation-delay: 1.2886956522s;
}

.col-70 :nth-child(20) {
  animation-duration: 3.3913043478s;
  animation-delay: 1.3565217391s;
}

.col-70 :nth-child(21) {
  animation-duration: 3.3913043478s;
  animation-delay: 1.4243478261s;
}

.col-70 :nth-child(22) {
  animation-duration: 3.3913043478s;
  animation-delay: 1.492173913s;
}

.col-70 :nth-child(23) {
  animation-duration: 3.3913043478s;
  animation-delay: 1.56s;
}

.col-70 :nth-child(24) {
  animation-duration: 3.3913043478s;
  animation-delay: 1.627826087s;
}

.col-70 :nth-child(25) {
  animation-duration: 3.3913043478s;
  animation-delay: 1.6956521739s;
}

.col-70 :nth-child(26) {
  animation-duration: 3.3913043478s;
  animation-delay: 1.7634782609s;
}

.col-70 :nth-child(27) {
  animation-duration: 3.3913043478s;
  animation-delay: 1.8313043478s;
}

.col-70 :nth-child(28) {
  animation-duration: 3.3913043478s;
  animation-delay: 1.8991304348s;
}

.col-70 :nth-child(29) {
  animation-duration: 3.3913043478s;
  animation-delay: 1.9669565217s;
}

.col-70 :nth-child(30) {
  animation-duration: 3.3913043478s;
  animation-delay: 2.0347826087s;
}

.col-70 :nth-child(31) {
  animation-duration: 3.3913043478s;
  animation-delay: 2.1026086957s;
}

.col-70 :nth-child(32) {
  animation-duration: 3.3913043478s;
  animation-delay: 2.1704347826s;
}

.col-70 :nth-child(33) {
  animation-duration: 3.3913043478s;
  animation-delay: 2.2382608696s;
}

.col-70 :nth-child(34) {
  animation-duration: 3.3913043478s;
  animation-delay: 2.3060869565s;
}

.col-70 :nth-child(35) {
  animation-duration: 3.3913043478s;
  animation-delay: 2.3739130435s;
}

.col-70 :nth-child(36) {
  animation-duration: 3.3913043478s;
  animation-delay: 2.4417391304s;
}

.col-70 :nth-child(37) {
  animation-duration: 3.3913043478s;
  animation-delay: 2.5095652174s;
}

.col-70 :nth-child(38) {
  animation-duration: 3.3913043478s;
  animation-delay: 2.5773913043s;
}

.col-70 :nth-child(39) {
  animation-duration: 3.3913043478s;
  animation-delay: 2.6452173913s;
}

.col-70 :nth-child(40) {
  animation-duration: 3.3913043478s;
  animation-delay: 2.7130434783s;
}

.col-70 :nth-child(41) {
  animation-duration: 3.3913043478s;
  animation-delay: 2.7808695652s;
}

.col-70 :nth-child(42) {
  animation-duration: 3.3913043478s;
  animation-delay: 2.8486956522s;
}

.col-70 :nth-child(43) {
  animation-duration: 3.3913043478s;
  animation-delay: 2.9165217391s;
}

.col-70 :nth-child(44) {
  animation-duration: 3.3913043478s;
  animation-delay: 2.9843478261s;
}

.col-70 :nth-child(45) {
  animation-duration: 3.3913043478s;
  animation-delay: 3.052173913s;
}

.col-70 :nth-child(46) {
  animation-duration: 3.3913043478s;
  animation-delay: 3.12s;
}

.col-70 :nth-child(47) {
  animation-duration: 3.3913043478s;
  animation-delay: 3.187826087s;
}

.col-70 :nth-child(48) {
  animation-duration: 3.3913043478s;
  animation-delay: 3.2556521739s;
}

.col-70 :nth-child(49) {
  animation-duration: 3.3913043478s;
  animation-delay: 3.3234782609s;
}

.col-70 :nth-child(50) {
  animation-duration: 3.3913043478s;
  animation-delay: 3.3913043478s;
}

.col-71 :nth-child(1) {
  animation-duration: 5.1739130435s;
  animation-delay: 0.1034782609s;
}

.col-71 :nth-child(2) {
  animation-duration: 5.1739130435s;
  animation-delay: 0.2069565217s;
}

.col-71 :nth-child(3) {
  animation-duration: 5.1739130435s;
  animation-delay: 0.3104347826s;
}

.col-71 :nth-child(4) {
  animation-duration: 5.1739130435s;
  animation-delay: 0.4139130435s;
}

.col-71 :nth-child(5) {
  animation-duration: 5.1739130435s;
  animation-delay: 0.5173913043s;
}

.col-71 :nth-child(6) {
  animation-duration: 5.1739130435s;
  animation-delay: 0.6208695652s;
}

.col-71 :nth-child(7) {
  animation-duration: 5.1739130435s;
  animation-delay: 0.7243478261s;
}

.col-71 :nth-child(8) {
  animation-duration: 5.1739130435s;
  animation-delay: 0.827826087s;
}

.col-71 :nth-child(9) {
  animation-duration: 5.1739130435s;
  animation-delay: 0.9313043478s;
}

.col-71 :nth-child(10) {
  animation-duration: 5.1739130435s;
  animation-delay: 1.0347826087s;
}

.col-71 :nth-child(11) {
  animation-duration: 5.1739130435s;
  animation-delay: 1.1382608696s;
}

.col-71 :nth-child(12) {
  animation-duration: 5.1739130435s;
  animation-delay: 1.2417391304s;
}

.col-71 :nth-child(13) {
  animation-duration: 5.1739130435s;
  animation-delay: 1.3452173913s;
}

.col-71 :nth-child(14) {
  animation-duration: 5.1739130435s;
  animation-delay: 1.4486956522s;
}

.col-71 :nth-child(15) {
  animation-duration: 5.1739130435s;
  animation-delay: 1.552173913s;
}

.col-71 :nth-child(16) {
  animation-duration: 5.1739130435s;
  animation-delay: 1.6556521739s;
}

.col-71 :nth-child(17) {
  animation-duration: 5.1739130435s;
  animation-delay: 1.7591304348s;
}

.col-71 :nth-child(18) {
  animation-duration: 5.1739130435s;
  animation-delay: 1.8626086957s;
}

.col-71 :nth-child(19) {
  animation-duration: 5.1739130435s;
  animation-delay: 1.9660869565s;
}

.col-71 :nth-child(20) {
  animation-duration: 5.1739130435s;
  animation-delay: 2.0695652174s;
}

.col-71 :nth-child(21) {
  animation-duration: 5.1739130435s;
  animation-delay: 2.1730434783s;
}

.col-71 :nth-child(22) {
  animation-duration: 5.1739130435s;
  animation-delay: 2.2765217391s;
}

.col-71 :nth-child(23) {
  animation-duration: 5.1739130435s;
  animation-delay: 2.38s;
}

.col-71 :nth-child(24) {
  animation-duration: 5.1739130435s;
  animation-delay: 2.4834782609s;
}

.col-71 :nth-child(25) {
  animation-duration: 5.1739130435s;
  animation-delay: 2.5869565217s;
}

.col-71 :nth-child(26) {
  animation-duration: 5.1739130435s;
  animation-delay: 2.6904347826s;
}

.col-71 :nth-child(27) {
  animation-duration: 5.1739130435s;
  animation-delay: 2.7939130435s;
}

.col-71 :nth-child(28) {
  animation-duration: 5.1739130435s;
  animation-delay: 2.8973913043s;
}

.col-71 :nth-child(29) {
  animation-duration: 5.1739130435s;
  animation-delay: 3.0008695652s;
}

.col-71 :nth-child(30) {
  animation-duration: 5.1739130435s;
  animation-delay: 3.1043478261s;
}

.col-71 :nth-child(31) {
  animation-duration: 5.1739130435s;
  animation-delay: 3.207826087s;
}

.col-71 :nth-child(32) {
  animation-duration: 5.1739130435s;
  animation-delay: 3.3113043478s;
}

.col-71 :nth-child(33) {
  animation-duration: 5.1739130435s;
  animation-delay: 3.4147826087s;
}

.col-71 :nth-child(34) {
  animation-duration: 5.1739130435s;
  animation-delay: 3.5182608696s;
}

.col-71 :nth-child(35) {
  animation-duration: 5.1739130435s;
  animation-delay: 3.6217391304s;
}

.col-71 :nth-child(36) {
  animation-duration: 5.1739130435s;
  animation-delay: 3.7252173913s;
}

.col-71 :nth-child(37) {
  animation-duration: 5.1739130435s;
  animation-delay: 3.8286956522s;
}

.col-71 :nth-child(38) {
  animation-duration: 5.1739130435s;
  animation-delay: 3.932173913s;
}

.col-71 :nth-child(39) {
  animation-duration: 5.1739130435s;
  animation-delay: 4.0356521739s;
}

.col-71 :nth-child(40) {
  animation-duration: 5.1739130435s;
  animation-delay: 4.1391304348s;
}

.col-71 :nth-child(41) {
  animation-duration: 5.1739130435s;
  animation-delay: 4.2426086957s;
}

.col-71 :nth-child(42) {
  animation-duration: 5.1739130435s;
  animation-delay: 4.3460869565s;
}

.col-71 :nth-child(43) {
  animation-duration: 5.1739130435s;
  animation-delay: 4.4495652174s;
}

.col-71 :nth-child(44) {
  animation-duration: 5.1739130435s;
  animation-delay: 4.5530434783s;
}

.col-71 :nth-child(45) {
  animation-duration: 5.1739130435s;
  animation-delay: 4.6565217391s;
}

.col-71 :nth-child(46) {
  animation-duration: 5.1739130435s;
  animation-delay: 4.76s;
}

.col-71 :nth-child(47) {
  animation-duration: 5.1739130435s;
  animation-delay: 4.8634782609s;
}

.col-71 :nth-child(48) {
  animation-duration: 5.1739130435s;
  animation-delay: 4.9669565217s;
}

.col-71 :nth-child(49) {
  animation-duration: 5.1739130435s;
  animation-delay: 5.0704347826s;
}

.col-71 :nth-child(50) {
  animation-duration: 5.1739130435s;
  animation-delay: 5.1739130435s;
}

.col-72 :nth-child(1) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.0382608696s;
}

.col-72 :nth-child(2) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.0765217391s;
}

.col-72 :nth-child(3) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.1147826087s;
}

.col-72 :nth-child(4) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.1530434783s;
}

.col-72 :nth-child(5) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.1913043478s;
}

.col-72 :nth-child(6) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.2295652174s;
}

.col-72 :nth-child(7) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.267826087s;
}

.col-72 :nth-child(8) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.3060869565s;
}

.col-72 :nth-child(9) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.3443478261s;
}

.col-72 :nth-child(10) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.3826086957s;
}

.col-72 :nth-child(11) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.4208695652s;
}

.col-72 :nth-child(12) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.4591304348s;
}

.col-72 :nth-child(13) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.4973913043s;
}

.col-72 :nth-child(14) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.5356521739s;
}

.col-72 :nth-child(15) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.5739130435s;
}

.col-72 :nth-child(16) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.612173913s;
}

.col-72 :nth-child(17) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.6504347826s;
}

.col-72 :nth-child(18) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.6886956522s;
}

.col-72 :nth-child(19) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.7269565217s;
}

.col-72 :nth-child(20) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.7652173913s;
}

.col-72 :nth-child(21) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.8034782609s;
}

.col-72 :nth-child(22) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.8417391304s;
}

.col-72 :nth-child(23) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.88s;
}

.col-72 :nth-child(24) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.9182608696s;
}

.col-72 :nth-child(25) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.9565217391s;
}

.col-72 :nth-child(26) {
  animation-duration: 1.9130434783s;
  animation-delay: 0.9947826087s;
}

.col-72 :nth-child(27) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.0330434783s;
}

.col-72 :nth-child(28) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.0713043478s;
}

.col-72 :nth-child(29) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.1095652174s;
}

.col-72 :nth-child(30) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.147826087s;
}

.col-72 :nth-child(31) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.1860869565s;
}

.col-72 :nth-child(32) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.2243478261s;
}

.col-72 :nth-child(33) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.2626086957s;
}

.col-72 :nth-child(34) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.3008695652s;
}

.col-72 :nth-child(35) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.3391304348s;
}

.col-72 :nth-child(36) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.3773913043s;
}

.col-72 :nth-child(37) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.4156521739s;
}

.col-72 :nth-child(38) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.4539130435s;
}

.col-72 :nth-child(39) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.492173913s;
}

.col-72 :nth-child(40) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.5304347826s;
}

.col-72 :nth-child(41) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.5686956522s;
}

.col-72 :nth-child(42) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.6069565217s;
}

.col-72 :nth-child(43) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.6452173913s;
}

.col-72 :nth-child(44) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.6834782609s;
}

.col-72 :nth-child(45) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.7217391304s;
}

.col-72 :nth-child(46) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.76s;
}

.col-72 :nth-child(47) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.7982608696s;
}

.col-72 :nth-child(48) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.8365217391s;
}

.col-72 :nth-child(49) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.8747826087s;
}

.col-72 :nth-child(50) {
  animation-duration: 1.9130434783s;
  animation-delay: 1.9130434783s;
}

.col-73 :nth-child(1) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.0547826087s;
}

.col-73 :nth-child(2) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.1095652174s;
}

.col-73 :nth-child(3) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.1643478261s;
}

.col-73 :nth-child(4) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.2191304348s;
}

.col-73 :nth-child(5) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.2739130435s;
}

.col-73 :nth-child(6) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.3286956522s;
}

.col-73 :nth-child(7) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.3834782609s;
}

.col-73 :nth-child(8) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.4382608696s;
}

.col-73 :nth-child(9) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.4930434783s;
}

.col-73 :nth-child(10) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.547826087s;
}

.col-73 :nth-child(11) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.6026086957s;
}

.col-73 :nth-child(12) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.6573913043s;
}

.col-73 :nth-child(13) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.712173913s;
}

.col-73 :nth-child(14) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.7669565217s;
}

.col-73 :nth-child(15) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.8217391304s;
}

.col-73 :nth-child(16) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.8765217391s;
}

.col-73 :nth-child(17) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.9313043478s;
}

.col-73 :nth-child(18) {
  animation-duration: 2.7391304348s;
  animation-delay: 0.9860869565s;
}

.col-73 :nth-child(19) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.0408695652s;
}

.col-73 :nth-child(20) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.0956521739s;
}

.col-73 :nth-child(21) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.1504347826s;
}

.col-73 :nth-child(22) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.2052173913s;
}

.col-73 :nth-child(23) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.26s;
}

.col-73 :nth-child(24) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.3147826087s;
}

.col-73 :nth-child(25) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.3695652174s;
}

.col-73 :nth-child(26) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.4243478261s;
}

.col-73 :nth-child(27) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.4791304348s;
}

.col-73 :nth-child(28) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.5339130435s;
}

.col-73 :nth-child(29) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.5886956522s;
}

.col-73 :nth-child(30) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.6434782609s;
}

.col-73 :nth-child(31) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.6982608696s;
}

.col-73 :nth-child(32) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.7530434783s;
}

.col-73 :nth-child(33) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.807826087s;
}

.col-73 :nth-child(34) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.8626086957s;
}

.col-73 :nth-child(35) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.9173913043s;
}

.col-73 :nth-child(36) {
  animation-duration: 2.7391304348s;
  animation-delay: 1.972173913s;
}

.col-73 :nth-child(37) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.0269565217s;
}

.col-73 :nth-child(38) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.0817391304s;
}

.col-73 :nth-child(39) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.1365217391s;
}

.col-73 :nth-child(40) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.1913043478s;
}

.col-73 :nth-child(41) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.2460869565s;
}

.col-73 :nth-child(42) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.3008695652s;
}

.col-73 :nth-child(43) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.3556521739s;
}

.col-73 :nth-child(44) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.4104347826s;
}

.col-73 :nth-child(45) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.4652173913s;
}

.col-73 :nth-child(46) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.52s;
}

.col-73 :nth-child(47) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.5747826087s;
}

.col-73 :nth-child(48) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.6295652174s;
}

.col-73 :nth-child(49) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.6843478261s;
}

.col-73 :nth-child(50) {
  animation-duration: 2.7391304348s;
  animation-delay: 2.7391304348s;
}

.col-74 :nth-child(1) {
  animation-duration: 3.4347826087s;
  animation-delay: 0.0686956522s;
}

.col-74 :nth-child(2) {
  animation-duration: 3.4347826087s;
  animation-delay: 0.1373913043s;
}

.col-74 :nth-child(3) {
  animation-duration: 3.4347826087s;
  animation-delay: 0.2060869565s;
}

.col-74 :nth-child(4) {
  animation-duration: 3.4347826087s;
  animation-delay: 0.2747826087s;
}

.col-74 :nth-child(5) {
  animation-duration: 3.4347826087s;
  animation-delay: 0.3434782609s;
}

.col-74 :nth-child(6) {
  animation-duration: 3.4347826087s;
  animation-delay: 0.412173913s;
}

.col-74 :nth-child(7) {
  animation-duration: 3.4347826087s;
  animation-delay: 0.4808695652s;
}

.col-74 :nth-child(8) {
  animation-duration: 3.4347826087s;
  animation-delay: 0.5495652174s;
}

.col-74 :nth-child(9) {
  animation-duration: 3.4347826087s;
  animation-delay: 0.6182608696s;
}

.col-74 :nth-child(10) {
  animation-duration: 3.4347826087s;
  animation-delay: 0.6869565217s;
}

.col-74 :nth-child(11) {
  animation-duration: 3.4347826087s;
  animation-delay: 0.7556521739s;
}

.col-74 :nth-child(12) {
  animation-duration: 3.4347826087s;
  animation-delay: 0.8243478261s;
}

.col-74 :nth-child(13) {
  animation-duration: 3.4347826087s;
  animation-delay: 0.8930434783s;
}

.col-74 :nth-child(14) {
  animation-duration: 3.4347826087s;
  animation-delay: 0.9617391304s;
}

.col-74 :nth-child(15) {
  animation-duration: 3.4347826087s;
  animation-delay: 1.0304347826s;
}

.col-74 :nth-child(16) {
  animation-duration: 3.4347826087s;
  animation-delay: 1.0991304348s;
}

.col-74 :nth-child(17) {
  animation-duration: 3.4347826087s;
  animation-delay: 1.167826087s;
}

.col-74 :nth-child(18) {
  animation-duration: 3.4347826087s;
  animation-delay: 1.2365217391s;
}

.col-74 :nth-child(19) {
  animation-duration: 3.4347826087s;
  animation-delay: 1.3052173913s;
}

.col-74 :nth-child(20) {
  animation-duration: 3.4347826087s;
  animation-delay: 1.3739130435s;
}

.col-74 :nth-child(21) {
  animation-duration: 3.4347826087s;
  animation-delay: 1.4426086957s;
}

.col-74 :nth-child(22) {
  animation-duration: 3.4347826087s;
  animation-delay: 1.5113043478s;
}

.col-74 :nth-child(23) {
  animation-duration: 3.4347826087s;
  animation-delay: 1.58s;
}

.col-74 :nth-child(24) {
  animation-duration: 3.4347826087s;
  animation-delay: 1.6486956522s;
}

.col-74 :nth-child(25) {
  animation-duration: 3.4347826087s;
  animation-delay: 1.7173913043s;
}

.col-74 :nth-child(26) {
  animation-duration: 3.4347826087s;
  animation-delay: 1.7860869565s;
}

.col-74 :nth-child(27) {
  animation-duration: 3.4347826087s;
  animation-delay: 1.8547826087s;
}

.col-74 :nth-child(28) {
  animation-duration: 3.4347826087s;
  animation-delay: 1.9234782609s;
}

.col-74 :nth-child(29) {
  animation-duration: 3.4347826087s;
  animation-delay: 1.992173913s;
}

.col-74 :nth-child(30) {
  animation-duration: 3.4347826087s;
  animation-delay: 2.0608695652s;
}

.col-74 :nth-child(31) {
  animation-duration: 3.4347826087s;
  animation-delay: 2.1295652174s;
}

.col-74 :nth-child(32) {
  animation-duration: 3.4347826087s;
  animation-delay: 2.1982608696s;
}

.col-74 :nth-child(33) {
  animation-duration: 3.4347826087s;
  animation-delay: 2.2669565217s;
}

.col-74 :nth-child(34) {
  animation-duration: 3.4347826087s;
  animation-delay: 2.3356521739s;
}

.col-74 :nth-child(35) {
  animation-duration: 3.4347826087s;
  animation-delay: 2.4043478261s;
}

.col-74 :nth-child(36) {
  animation-duration: 3.4347826087s;
  animation-delay: 2.4730434783s;
}

.col-74 :nth-child(37) {
  animation-duration: 3.4347826087s;
  animation-delay: 2.5417391304s;
}

.col-74 :nth-child(38) {
  animation-duration: 3.4347826087s;
  animation-delay: 2.6104347826s;
}

.col-74 :nth-child(39) {
  animation-duration: 3.4347826087s;
  animation-delay: 2.6791304348s;
}

.col-74 :nth-child(40) {
  animation-duration: 3.4347826087s;
  animation-delay: 2.747826087s;
}

.col-74 :nth-child(41) {
  animation-duration: 3.4347826087s;
  animation-delay: 2.8165217391s;
}

.col-74 :nth-child(42) {
  animation-duration: 3.4347826087s;
  animation-delay: 2.8852173913s;
}

.col-74 :nth-child(43) {
  animation-duration: 3.4347826087s;
  animation-delay: 2.9539130435s;
}

.col-74 :nth-child(44) {
  animation-duration: 3.4347826087s;
  animation-delay: 3.0226086957s;
}

.col-74 :nth-child(45) {
  animation-duration: 3.4347826087s;
  animation-delay: 3.0913043478s;
}

.col-74 :nth-child(46) {
  animation-duration: 3.4347826087s;
  animation-delay: 3.16s;
}

.col-74 :nth-child(47) {
  animation-duration: 3.4347826087s;
  animation-delay: 3.2286956522s;
}

.col-74 :nth-child(48) {
  animation-duration: 3.4347826087s;
  animation-delay: 3.2973913043s;
}

.col-74 :nth-child(49) {
  animation-duration: 3.4347826087s;
  animation-delay: 3.3660869565s;
}

.col-74 :nth-child(50) {
  animation-duration: 3.4347826087s;
  animation-delay: 3.4347826087s;
}

.col-75 :nth-child(1) {
  animation-duration: 5.2173913043s;
  animation-delay: 0.1043478261s;
}

.col-75 :nth-child(2) {
  animation-duration: 5.2173913043s;
  animation-delay: 0.2086956522s;
}

.col-75 :nth-child(3) {
  animation-duration: 5.2173913043s;
  animation-delay: 0.3130434783s;
}

.col-75 :nth-child(4) {
  animation-duration: 5.2173913043s;
  animation-delay: 0.4173913043s;
}

.col-75 :nth-child(5) {
  animation-duration: 5.2173913043s;
  animation-delay: 0.5217391304s;
}

.col-75 :nth-child(6) {
  animation-duration: 5.2173913043s;
  animation-delay: 0.6260869565s;
}

.col-75 :nth-child(7) {
  animation-duration: 5.2173913043s;
  animation-delay: 0.7304347826s;
}

.col-75 :nth-child(8) {
  animation-duration: 5.2173913043s;
  animation-delay: 0.8347826087s;
}

.col-75 :nth-child(9) {
  animation-duration: 5.2173913043s;
  animation-delay: 0.9391304348s;
}

.col-75 :nth-child(10) {
  animation-duration: 5.2173913043s;
  animation-delay: 1.0434782609s;
}

.col-75 :nth-child(11) {
  animation-duration: 5.2173913043s;
  animation-delay: 1.147826087s;
}

.col-75 :nth-child(12) {
  animation-duration: 5.2173913043s;
  animation-delay: 1.252173913s;
}

.col-75 :nth-child(13) {
  animation-duration: 5.2173913043s;
  animation-delay: 1.3565217391s;
}

.col-75 :nth-child(14) {
  animation-duration: 5.2173913043s;
  animation-delay: 1.4608695652s;
}

.col-75 :nth-child(15) {
  animation-duration: 5.2173913043s;
  animation-delay: 1.5652173913s;
}

.col-75 :nth-child(16) {
  animation-duration: 5.2173913043s;
  animation-delay: 1.6695652174s;
}

.col-75 :nth-child(17) {
  animation-duration: 5.2173913043s;
  animation-delay: 1.7739130435s;
}

.col-75 :nth-child(18) {
  animation-duration: 5.2173913043s;
  animation-delay: 1.8782608696s;
}

.col-75 :nth-child(19) {
  animation-duration: 5.2173913043s;
  animation-delay: 1.9826086957s;
}

.col-75 :nth-child(20) {
  animation-duration: 5.2173913043s;
  animation-delay: 2.0869565217s;
}

.col-75 :nth-child(21) {
  animation-duration: 5.2173913043s;
  animation-delay: 2.1913043478s;
}

.col-75 :nth-child(22) {
  animation-duration: 5.2173913043s;
  animation-delay: 2.2956521739s;
}

.col-75 :nth-child(23) {
  animation-duration: 5.2173913043s;
  animation-delay: 2.4s;
}

.col-75 :nth-child(24) {
  animation-duration: 5.2173913043s;
  animation-delay: 2.5043478261s;
}

.col-75 :nth-child(25) {
  animation-duration: 5.2173913043s;
  animation-delay: 2.6086956522s;
}

.col-75 :nth-child(26) {
  animation-duration: 5.2173913043s;
  animation-delay: 2.7130434783s;
}

.col-75 :nth-child(27) {
  animation-duration: 5.2173913043s;
  animation-delay: 2.8173913043s;
}

.col-75 :nth-child(28) {
  animation-duration: 5.2173913043s;
  animation-delay: 2.9217391304s;
}

.col-75 :nth-child(29) {
  animation-duration: 5.2173913043s;
  animation-delay: 3.0260869565s;
}

.col-75 :nth-child(30) {
  animation-duration: 5.2173913043s;
  animation-delay: 3.1304347826s;
}

.col-75 :nth-child(31) {
  animation-duration: 5.2173913043s;
  animation-delay: 3.2347826087s;
}

.col-75 :nth-child(32) {
  animation-duration: 5.2173913043s;
  animation-delay: 3.3391304348s;
}

.col-75 :nth-child(33) {
  animation-duration: 5.2173913043s;
  animation-delay: 3.4434782609s;
}

.col-75 :nth-child(34) {
  animation-duration: 5.2173913043s;
  animation-delay: 3.547826087s;
}

.col-75 :nth-child(35) {
  animation-duration: 5.2173913043s;
  animation-delay: 3.652173913s;
}

.col-75 :nth-child(36) {
  animation-duration: 5.2173913043s;
  animation-delay: 3.7565217391s;
}

.col-75 :nth-child(37) {
  animation-duration: 5.2173913043s;
  animation-delay: 3.8608695652s;
}

.col-75 :nth-child(38) {
  animation-duration: 5.2173913043s;
  animation-delay: 3.9652173913s;
}

.col-75 :nth-child(39) {
  animation-duration: 5.2173913043s;
  animation-delay: 4.0695652174s;
}

.col-75 :nth-child(40) {
  animation-duration: 5.2173913043s;
  animation-delay: 4.1739130435s;
}

.col-75 :nth-child(41) {
  animation-duration: 5.2173913043s;
  animation-delay: 4.2782608696s;
}

.col-75 :nth-child(42) {
  animation-duration: 5.2173913043s;
  animation-delay: 4.3826086957s;
}

.col-75 :nth-child(43) {
  animation-duration: 5.2173913043s;
  animation-delay: 4.4869565217s;
}

.col-75 :nth-child(44) {
  animation-duration: 5.2173913043s;
  animation-delay: 4.5913043478s;
}

.col-75 :nth-child(45) {
  animation-duration: 5.2173913043s;
  animation-delay: 4.6956521739s;
}

.col-75 :nth-child(46) {
  animation-duration: 5.2173913043s;
  animation-delay: 4.8s;
}

.col-75 :nth-child(47) {
  animation-duration: 5.2173913043s;
  animation-delay: 4.9043478261s;
}

.col-75 :nth-child(48) {
  animation-duration: 5.2173913043s;
  animation-delay: 5.0086956522s;
}

.col-75 :nth-child(49) {
  animation-duration: 5.2173913043s;
  animation-delay: 5.1130434783s;
}

.col-75 :nth-child(50) {
  animation-duration: 5.2173913043s;
  animation-delay: 5.2173913043s;
}

.col-76 :nth-child(1) {
  animation-duration: 2.347826087s;
  animation-delay: 0.0469565217s;
}

.col-76 :nth-child(2) {
  animation-duration: 2.347826087s;
  animation-delay: 0.0939130435s;
}

.col-76 :nth-child(3) {
  animation-duration: 2.347826087s;
  animation-delay: 0.1408695652s;
}

.col-76 :nth-child(4) {
  animation-duration: 2.347826087s;
  animation-delay: 0.187826087s;
}

.col-76 :nth-child(5) {
  animation-duration: 2.347826087s;
  animation-delay: 0.2347826087s;
}

.col-76 :nth-child(6) {
  animation-duration: 2.347826087s;
  animation-delay: 0.2817391304s;
}

.col-76 :nth-child(7) {
  animation-duration: 2.347826087s;
  animation-delay: 0.3286956522s;
}

.col-76 :nth-child(8) {
  animation-duration: 2.347826087s;
  animation-delay: 0.3756521739s;
}

.col-76 :nth-child(9) {
  animation-duration: 2.347826087s;
  animation-delay: 0.4226086957s;
}

.col-76 :nth-child(10) {
  animation-duration: 2.347826087s;
  animation-delay: 0.4695652174s;
}

.col-76 :nth-child(11) {
  animation-duration: 2.347826087s;
  animation-delay: 0.5165217391s;
}

.col-76 :nth-child(12) {
  animation-duration: 2.347826087s;
  animation-delay: 0.5634782609s;
}

.col-76 :nth-child(13) {
  animation-duration: 2.347826087s;
  animation-delay: 0.6104347826s;
}

.col-76 :nth-child(14) {
  animation-duration: 2.347826087s;
  animation-delay: 0.6573913043s;
}

.col-76 :nth-child(15) {
  animation-duration: 2.347826087s;
  animation-delay: 0.7043478261s;
}

.col-76 :nth-child(16) {
  animation-duration: 2.347826087s;
  animation-delay: 0.7513043478s;
}

.col-76 :nth-child(17) {
  animation-duration: 2.347826087s;
  animation-delay: 0.7982608696s;
}

.col-76 :nth-child(18) {
  animation-duration: 2.347826087s;
  animation-delay: 0.8452173913s;
}

.col-76 :nth-child(19) {
  animation-duration: 2.347826087s;
  animation-delay: 0.892173913s;
}

.col-76 :nth-child(20) {
  animation-duration: 2.347826087s;
  animation-delay: 0.9391304348s;
}

.col-76 :nth-child(21) {
  animation-duration: 2.347826087s;
  animation-delay: 0.9860869565s;
}

.col-76 :nth-child(22) {
  animation-duration: 2.347826087s;
  animation-delay: 1.0330434783s;
}

.col-76 :nth-child(23) {
  animation-duration: 2.347826087s;
  animation-delay: 1.08s;
}

.col-76 :nth-child(24) {
  animation-duration: 2.347826087s;
  animation-delay: 1.1269565217s;
}

.col-76 :nth-child(25) {
  animation-duration: 2.347826087s;
  animation-delay: 1.1739130435s;
}

.col-76 :nth-child(26) {
  animation-duration: 2.347826087s;
  animation-delay: 1.2208695652s;
}

.col-76 :nth-child(27) {
  animation-duration: 2.347826087s;
  animation-delay: 1.267826087s;
}

.col-76 :nth-child(28) {
  animation-duration: 2.347826087s;
  animation-delay: 1.3147826087s;
}

.col-76 :nth-child(29) {
  animation-duration: 2.347826087s;
  animation-delay: 1.3617391304s;
}

.col-76 :nth-child(30) {
  animation-duration: 2.347826087s;
  animation-delay: 1.4086956522s;
}

.col-76 :nth-child(31) {
  animation-duration: 2.347826087s;
  animation-delay: 1.4556521739s;
}

.col-76 :nth-child(32) {
  animation-duration: 2.347826087s;
  animation-delay: 1.5026086957s;
}

.col-76 :nth-child(33) {
  animation-duration: 2.347826087s;
  animation-delay: 1.5495652174s;
}

.col-76 :nth-child(34) {
  animation-duration: 2.347826087s;
  animation-delay: 1.5965217391s;
}

.col-76 :nth-child(35) {
  animation-duration: 2.347826087s;
  animation-delay: 1.6434782609s;
}

.col-76 :nth-child(36) {
  animation-duration: 2.347826087s;
  animation-delay: 1.6904347826s;
}

.col-76 :nth-child(37) {
  animation-duration: 2.347826087s;
  animation-delay: 1.7373913043s;
}

.col-76 :nth-child(38) {
  animation-duration: 2.347826087s;
  animation-delay: 1.7843478261s;
}

.col-76 :nth-child(39) {
  animation-duration: 2.347826087s;
  animation-delay: 1.8313043478s;
}

.col-76 :nth-child(40) {
  animation-duration: 2.347826087s;
  animation-delay: 1.8782608696s;
}

.col-76 :nth-child(41) {
  animation-duration: 2.347826087s;
  animation-delay: 1.9252173913s;
}

.col-76 :nth-child(42) {
  animation-duration: 2.347826087s;
  animation-delay: 1.972173913s;
}

.col-76 :nth-child(43) {
  animation-duration: 2.347826087s;
  animation-delay: 2.0191304348s;
}

.col-76 :nth-child(44) {
  animation-duration: 2.347826087s;
  animation-delay: 2.0660869565s;
}

.col-76 :nth-child(45) {
  animation-duration: 2.347826087s;
  animation-delay: 2.1130434783s;
}

.col-76 :nth-child(46) {
  animation-duration: 2.347826087s;
  animation-delay: 2.16s;
}

.col-76 :nth-child(47) {
  animation-duration: 2.347826087s;
  animation-delay: 2.2069565217s;
}

.col-76 :nth-child(48) {
  animation-duration: 2.347826087s;
  animation-delay: 2.2539130435s;
}

.col-76 :nth-child(49) {
  animation-duration: 2.347826087s;
  animation-delay: 2.3008695652s;
}

.col-76 :nth-child(50) {
  animation-duration: 2.347826087s;
  animation-delay: 2.347826087s;
}

.col-77 :nth-child(1) {
  animation-duration: 5.347826087s;
  animation-delay: 0.1069565217s;
}

.col-77 :nth-child(2) {
  animation-duration: 5.347826087s;
  animation-delay: 0.2139130435s;
}

.col-77 :nth-child(3) {
  animation-duration: 5.347826087s;
  animation-delay: 0.3208695652s;
}

.col-77 :nth-child(4) {
  animation-duration: 5.347826087s;
  animation-delay: 0.427826087s;
}

.col-77 :nth-child(5) {
  animation-duration: 5.347826087s;
  animation-delay: 0.5347826087s;
}

.col-77 :nth-child(6) {
  animation-duration: 5.347826087s;
  animation-delay: 0.6417391304s;
}

.col-77 :nth-child(7) {
  animation-duration: 5.347826087s;
  animation-delay: 0.7486956522s;
}

.col-77 :nth-child(8) {
  animation-duration: 5.347826087s;
  animation-delay: 0.8556521739s;
}

.col-77 :nth-child(9) {
  animation-duration: 5.347826087s;
  animation-delay: 0.9626086957s;
}

.col-77 :nth-child(10) {
  animation-duration: 5.347826087s;
  animation-delay: 1.0695652174s;
}

.col-77 :nth-child(11) {
  animation-duration: 5.347826087s;
  animation-delay: 1.1765217391s;
}

.col-77 :nth-child(12) {
  animation-duration: 5.347826087s;
  animation-delay: 1.2834782609s;
}

.col-77 :nth-child(13) {
  animation-duration: 5.347826087s;
  animation-delay: 1.3904347826s;
}

.col-77 :nth-child(14) {
  animation-duration: 5.347826087s;
  animation-delay: 1.4973913043s;
}

.col-77 :nth-child(15) {
  animation-duration: 5.347826087s;
  animation-delay: 1.6043478261s;
}

.col-77 :nth-child(16) {
  animation-duration: 5.347826087s;
  animation-delay: 1.7113043478s;
}

.col-77 :nth-child(17) {
  animation-duration: 5.347826087s;
  animation-delay: 1.8182608696s;
}

.col-77 :nth-child(18) {
  animation-duration: 5.347826087s;
  animation-delay: 1.9252173913s;
}

.col-77 :nth-child(19) {
  animation-duration: 5.347826087s;
  animation-delay: 2.032173913s;
}

.col-77 :nth-child(20) {
  animation-duration: 5.347826087s;
  animation-delay: 2.1391304348s;
}

.col-77 :nth-child(21) {
  animation-duration: 5.347826087s;
  animation-delay: 2.2460869565s;
}

.col-77 :nth-child(22) {
  animation-duration: 5.347826087s;
  animation-delay: 2.3530434783s;
}

.col-77 :nth-child(23) {
  animation-duration: 5.347826087s;
  animation-delay: 2.46s;
}

.col-77 :nth-child(24) {
  animation-duration: 5.347826087s;
  animation-delay: 2.5669565217s;
}

.col-77 :nth-child(25) {
  animation-duration: 5.347826087s;
  animation-delay: 2.6739130435s;
}

.col-77 :nth-child(26) {
  animation-duration: 5.347826087s;
  animation-delay: 2.7808695652s;
}

.col-77 :nth-child(27) {
  animation-duration: 5.347826087s;
  animation-delay: 2.887826087s;
}

.col-77 :nth-child(28) {
  animation-duration: 5.347826087s;
  animation-delay: 2.9947826087s;
}

.col-77 :nth-child(29) {
  animation-duration: 5.347826087s;
  animation-delay: 3.1017391304s;
}

.col-77 :nth-child(30) {
  animation-duration: 5.347826087s;
  animation-delay: 3.2086956522s;
}

.col-77 :nth-child(31) {
  animation-duration: 5.347826087s;
  animation-delay: 3.3156521739s;
}

.col-77 :nth-child(32) {
  animation-duration: 5.347826087s;
  animation-delay: 3.4226086957s;
}

.col-77 :nth-child(33) {
  animation-duration: 5.347826087s;
  animation-delay: 3.5295652174s;
}

.col-77 :nth-child(34) {
  animation-duration: 5.347826087s;
  animation-delay: 3.6365217391s;
}

.col-77 :nth-child(35) {
  animation-duration: 5.347826087s;
  animation-delay: 3.7434782609s;
}

.col-77 :nth-child(36) {
  animation-duration: 5.347826087s;
  animation-delay: 3.8504347826s;
}

.col-77 :nth-child(37) {
  animation-duration: 5.347826087s;
  animation-delay: 3.9573913043s;
}

.col-77 :nth-child(38) {
  animation-duration: 5.347826087s;
  animation-delay: 4.0643478261s;
}

.col-77 :nth-child(39) {
  animation-duration: 5.347826087s;
  animation-delay: 4.1713043478s;
}

.col-77 :nth-child(40) {
  animation-duration: 5.347826087s;
  animation-delay: 4.2782608696s;
}

.col-77 :nth-child(41) {
  animation-duration: 5.347826087s;
  animation-delay: 4.3852173913s;
}

.col-77 :nth-child(42) {
  animation-duration: 5.347826087s;
  animation-delay: 4.492173913s;
}

.col-77 :nth-child(43) {
  animation-duration: 5.347826087s;
  animation-delay: 4.5991304348s;
}

.col-77 :nth-child(44) {
  animation-duration: 5.347826087s;
  animation-delay: 4.7060869565s;
}

.col-77 :nth-child(45) {
  animation-duration: 5.347826087s;
  animation-delay: 4.8130434783s;
}

.col-77 :nth-child(46) {
  animation-duration: 5.347826087s;
  animation-delay: 4.92s;
}

.col-77 :nth-child(47) {
  animation-duration: 5.347826087s;
  animation-delay: 5.0269565217s;
}

.col-77 :nth-child(48) {
  animation-duration: 5.347826087s;
  animation-delay: 5.1339130435s;
}

.col-77 :nth-child(49) {
  animation-duration: 5.347826087s;
  animation-delay: 5.2408695652s;
}

.col-77 :nth-child(50) {
  animation-duration: 5.347826087s;
  animation-delay: 5.347826087s;
}

.col-78 :nth-child(1) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.0643478261s;
}

.col-78 :nth-child(2) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.1286956522s;
}

.col-78 :nth-child(3) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.1930434783s;
}

.col-78 :nth-child(4) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.2573913043s;
}

.col-78 :nth-child(5) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.3217391304s;
}

.col-78 :nth-child(6) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.3860869565s;
}

.col-78 :nth-child(7) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.4504347826s;
}

.col-78 :nth-child(8) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.5147826087s;
}

.col-78 :nth-child(9) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.5791304348s;
}

.col-78 :nth-child(10) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.6434782609s;
}

.col-78 :nth-child(11) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.707826087s;
}

.col-78 :nth-child(12) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.772173913s;
}

.col-78 :nth-child(13) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.8365217391s;
}

.col-78 :nth-child(14) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.9008695652s;
}

.col-78 :nth-child(15) {
  animation-duration: 3.2173913043s;
  animation-delay: 0.9652173913s;
}

.col-78 :nth-child(16) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.0295652174s;
}

.col-78 :nth-child(17) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.0939130435s;
}

.col-78 :nth-child(18) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.1582608696s;
}

.col-78 :nth-child(19) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.2226086957s;
}

.col-78 :nth-child(20) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.2869565217s;
}

.col-78 :nth-child(21) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.3513043478s;
}

.col-78 :nth-child(22) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.4156521739s;
}

.col-78 :nth-child(23) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.48s;
}

.col-78 :nth-child(24) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.5443478261s;
}

.col-78 :nth-child(25) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.6086956522s;
}

.col-78 :nth-child(26) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.6730434783s;
}

.col-78 :nth-child(27) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.7373913043s;
}

.col-78 :nth-child(28) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.8017391304s;
}

.col-78 :nth-child(29) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.8660869565s;
}

.col-78 :nth-child(30) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.9304347826s;
}

.col-78 :nth-child(31) {
  animation-duration: 3.2173913043s;
  animation-delay: 1.9947826087s;
}

.col-78 :nth-child(32) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.0591304348s;
}

.col-78 :nth-child(33) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.1234782609s;
}

.col-78 :nth-child(34) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.187826087s;
}

.col-78 :nth-child(35) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.252173913s;
}

.col-78 :nth-child(36) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.3165217391s;
}

.col-78 :nth-child(37) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.3808695652s;
}

.col-78 :nth-child(38) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.4452173913s;
}

.col-78 :nth-child(39) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.5095652174s;
}

.col-78 :nth-child(40) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.5739130435s;
}

.col-78 :nth-child(41) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.6382608696s;
}

.col-78 :nth-child(42) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.7026086957s;
}

.col-78 :nth-child(43) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.7669565217s;
}

.col-78 :nth-child(44) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.8313043478s;
}

.col-78 :nth-child(45) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.8956521739s;
}

.col-78 :nth-child(46) {
  animation-duration: 3.2173913043s;
  animation-delay: 2.96s;
}

.col-78 :nth-child(47) {
  animation-duration: 3.2173913043s;
  animation-delay: 3.0243478261s;
}

.col-78 :nth-child(48) {
  animation-duration: 3.2173913043s;
  animation-delay: 3.0886956522s;
}

.col-78 :nth-child(49) {
  animation-duration: 3.2173913043s;
  animation-delay: 3.1530434783s;
}

.col-78 :nth-child(50) {
  animation-duration: 3.2173913043s;
  animation-delay: 3.2173913043s;
}

.col-79 :nth-child(1) {
  animation-duration: 4.9130434783s;
  animation-delay: 0.0982608696s;
}

.col-79 :nth-child(2) {
  animation-duration: 4.9130434783s;
  animation-delay: 0.1965217391s;
}

.col-79 :nth-child(3) {
  animation-duration: 4.9130434783s;
  animation-delay: 0.2947826087s;
}

.col-79 :nth-child(4) {
  animation-duration: 4.9130434783s;
  animation-delay: 0.3930434783s;
}

.col-79 :nth-child(5) {
  animation-duration: 4.9130434783s;
  animation-delay: 0.4913043478s;
}

.col-79 :nth-child(6) {
  animation-duration: 4.9130434783s;
  animation-delay: 0.5895652174s;
}

.col-79 :nth-child(7) {
  animation-duration: 4.9130434783s;
  animation-delay: 0.687826087s;
}

.col-79 :nth-child(8) {
  animation-duration: 4.9130434783s;
  animation-delay: 0.7860869565s;
}

.col-79 :nth-child(9) {
  animation-duration: 4.9130434783s;
  animation-delay: 0.8843478261s;
}

.col-79 :nth-child(10) {
  animation-duration: 4.9130434783s;
  animation-delay: 0.9826086957s;
}

.col-79 :nth-child(11) {
  animation-duration: 4.9130434783s;
  animation-delay: 1.0808695652s;
}

.col-79 :nth-child(12) {
  animation-duration: 4.9130434783s;
  animation-delay: 1.1791304348s;
}

.col-79 :nth-child(13) {
  animation-duration: 4.9130434783s;
  animation-delay: 1.2773913043s;
}

.col-79 :nth-child(14) {
  animation-duration: 4.9130434783s;
  animation-delay: 1.3756521739s;
}

.col-79 :nth-child(15) {
  animation-duration: 4.9130434783s;
  animation-delay: 1.4739130435s;
}

.col-79 :nth-child(16) {
  animation-duration: 4.9130434783s;
  animation-delay: 1.572173913s;
}

.col-79 :nth-child(17) {
  animation-duration: 4.9130434783s;
  animation-delay: 1.6704347826s;
}

.col-79 :nth-child(18) {
  animation-duration: 4.9130434783s;
  animation-delay: 1.7686956522s;
}

.col-79 :nth-child(19) {
  animation-duration: 4.9130434783s;
  animation-delay: 1.8669565217s;
}

.col-79 :nth-child(20) {
  animation-duration: 4.9130434783s;
  animation-delay: 1.9652173913s;
}

.col-79 :nth-child(21) {
  animation-duration: 4.9130434783s;
  animation-delay: 2.0634782609s;
}

.col-79 :nth-child(22) {
  animation-duration: 4.9130434783s;
  animation-delay: 2.1617391304s;
}

.col-79 :nth-child(23) {
  animation-duration: 4.9130434783s;
  animation-delay: 2.26s;
}

.col-79 :nth-child(24) {
  animation-duration: 4.9130434783s;
  animation-delay: 2.3582608696s;
}

.col-79 :nth-child(25) {
  animation-duration: 4.9130434783s;
  animation-delay: 2.4565217391s;
}

.col-79 :nth-child(26) {
  animation-duration: 4.9130434783s;
  animation-delay: 2.5547826087s;
}

.col-79 :nth-child(27) {
  animation-duration: 4.9130434783s;
  animation-delay: 2.6530434783s;
}

.col-79 :nth-child(28) {
  animation-duration: 4.9130434783s;
  animation-delay: 2.7513043478s;
}

.col-79 :nth-child(29) {
  animation-duration: 4.9130434783s;
  animation-delay: 2.8495652174s;
}

.col-79 :nth-child(30) {
  animation-duration: 4.9130434783s;
  animation-delay: 2.947826087s;
}

.col-79 :nth-child(31) {
  animation-duration: 4.9130434783s;
  animation-delay: 3.0460869565s;
}

.col-79 :nth-child(32) {
  animation-duration: 4.9130434783s;
  animation-delay: 3.1443478261s;
}

.col-79 :nth-child(33) {
  animation-duration: 4.9130434783s;
  animation-delay: 3.2426086957s;
}

.col-79 :nth-child(34) {
  animation-duration: 4.9130434783s;
  animation-delay: 3.3408695652s;
}

.col-79 :nth-child(35) {
  animation-duration: 4.9130434783s;
  animation-delay: 3.4391304348s;
}

.col-79 :nth-child(36) {
  animation-duration: 4.9130434783s;
  animation-delay: 3.5373913043s;
}

.col-79 :nth-child(37) {
  animation-duration: 4.9130434783s;
  animation-delay: 3.6356521739s;
}

.col-79 :nth-child(38) {
  animation-duration: 4.9130434783s;
  animation-delay: 3.7339130435s;
}

.col-79 :nth-child(39) {
  animation-duration: 4.9130434783s;
  animation-delay: 3.832173913s;
}

.col-79 :nth-child(40) {
  animation-duration: 4.9130434783s;
  animation-delay: 3.9304347826s;
}

.col-79 :nth-child(41) {
  animation-duration: 4.9130434783s;
  animation-delay: 4.0286956522s;
}

.col-79 :nth-child(42) {
  animation-duration: 4.9130434783s;
  animation-delay: 4.1269565217s;
}

.col-79 :nth-child(43) {
  animation-duration: 4.9130434783s;
  animation-delay: 4.2252173913s;
}

.col-79 :nth-child(44) {
  animation-duration: 4.9130434783s;
  animation-delay: 4.3234782609s;
}

.col-79 :nth-child(45) {
  animation-duration: 4.9130434783s;
  animation-delay: 4.4217391304s;
}

.col-79 :nth-child(46) {
  animation-duration: 4.9130434783s;
  animation-delay: 4.52s;
}

.col-79 :nth-child(47) {
  animation-duration: 4.9130434783s;
  animation-delay: 4.6182608696s;
}

.col-79 :nth-child(48) {
  animation-duration: 4.9130434783s;
  animation-delay: 4.7165217391s;
}

.col-79 :nth-child(49) {
  animation-duration: 4.9130434783s;
  animation-delay: 4.8147826087s;
}

.col-79 :nth-child(50) {
  animation-duration: 4.9130434783s;
  animation-delay: 4.9130434783s;
}

.col-80 :nth-child(1) {
  animation-duration: 2.652173913s;
  animation-delay: 0.0530434783s;
}

.col-80 :nth-child(2) {
  animation-duration: 2.652173913s;
  animation-delay: 0.1060869565s;
}

.col-80 :nth-child(3) {
  animation-duration: 2.652173913s;
  animation-delay: 0.1591304348s;
}

.col-80 :nth-child(4) {
  animation-duration: 2.652173913s;
  animation-delay: 0.212173913s;
}

.col-80 :nth-child(5) {
  animation-duration: 2.652173913s;
  animation-delay: 0.2652173913s;
}

.col-80 :nth-child(6) {
  animation-duration: 2.652173913s;
  animation-delay: 0.3182608696s;
}

.col-80 :nth-child(7) {
  animation-duration: 2.652173913s;
  animation-delay: 0.3713043478s;
}

.col-80 :nth-child(8) {
  animation-duration: 2.652173913s;
  animation-delay: 0.4243478261s;
}

.col-80 :nth-child(9) {
  animation-duration: 2.652173913s;
  animation-delay: 0.4773913043s;
}

.col-80 :nth-child(10) {
  animation-duration: 2.652173913s;
  animation-delay: 0.5304347826s;
}

.col-80 :nth-child(11) {
  animation-duration: 2.652173913s;
  animation-delay: 0.5834782609s;
}

.col-80 :nth-child(12) {
  animation-duration: 2.652173913s;
  animation-delay: 0.6365217391s;
}

.col-80 :nth-child(13) {
  animation-duration: 2.652173913s;
  animation-delay: 0.6895652174s;
}

.col-80 :nth-child(14) {
  animation-duration: 2.652173913s;
  animation-delay: 0.7426086957s;
}

.col-80 :nth-child(15) {
  animation-duration: 2.652173913s;
  animation-delay: 0.7956521739s;
}

.col-80 :nth-child(16) {
  animation-duration: 2.652173913s;
  animation-delay: 0.8486956522s;
}

.col-80 :nth-child(17) {
  animation-duration: 2.652173913s;
  animation-delay: 0.9017391304s;
}

.col-80 :nth-child(18) {
  animation-duration: 2.652173913s;
  animation-delay: 0.9547826087s;
}

.col-80 :nth-child(19) {
  animation-duration: 2.652173913s;
  animation-delay: 1.007826087s;
}

.col-80 :nth-child(20) {
  animation-duration: 2.652173913s;
  animation-delay: 1.0608695652s;
}

.col-80 :nth-child(21) {
  animation-duration: 2.652173913s;
  animation-delay: 1.1139130435s;
}

.col-80 :nth-child(22) {
  animation-duration: 2.652173913s;
  animation-delay: 1.1669565217s;
}

.col-80 :nth-child(23) {
  animation-duration: 2.652173913s;
  animation-delay: 1.22s;
}

.col-80 :nth-child(24) {
  animation-duration: 2.652173913s;
  animation-delay: 1.2730434783s;
}

.col-80 :nth-child(25) {
  animation-duration: 2.652173913s;
  animation-delay: 1.3260869565s;
}

.col-80 :nth-child(26) {
  animation-duration: 2.652173913s;
  animation-delay: 1.3791304348s;
}

.col-80 :nth-child(27) {
  animation-duration: 2.652173913s;
  animation-delay: 1.432173913s;
}

.col-80 :nth-child(28) {
  animation-duration: 2.652173913s;
  animation-delay: 1.4852173913s;
}

.col-80 :nth-child(29) {
  animation-duration: 2.652173913s;
  animation-delay: 1.5382608696s;
}

.col-80 :nth-child(30) {
  animation-duration: 2.652173913s;
  animation-delay: 1.5913043478s;
}

.col-80 :nth-child(31) {
  animation-duration: 2.652173913s;
  animation-delay: 1.6443478261s;
}

.col-80 :nth-child(32) {
  animation-duration: 2.652173913s;
  animation-delay: 1.6973913043s;
}

.col-80 :nth-child(33) {
  animation-duration: 2.652173913s;
  animation-delay: 1.7504347826s;
}

.col-80 :nth-child(34) {
  animation-duration: 2.652173913s;
  animation-delay: 1.8034782609s;
}

.col-80 :nth-child(35) {
  animation-duration: 2.652173913s;
  animation-delay: 1.8565217391s;
}

.col-80 :nth-child(36) {
  animation-duration: 2.652173913s;
  animation-delay: 1.9095652174s;
}

.col-80 :nth-child(37) {
  animation-duration: 2.652173913s;
  animation-delay: 1.9626086957s;
}

.col-80 :nth-child(38) {
  animation-duration: 2.652173913s;
  animation-delay: 2.0156521739s;
}

.col-80 :nth-child(39) {
  animation-duration: 2.652173913s;
  animation-delay: 2.0686956522s;
}

.col-80 :nth-child(40) {
  animation-duration: 2.652173913s;
  animation-delay: 2.1217391304s;
}

.col-80 :nth-child(41) {
  animation-duration: 2.652173913s;
  animation-delay: 2.1747826087s;
}

.col-80 :nth-child(42) {
  animation-duration: 2.652173913s;
  animation-delay: 2.227826087s;
}

.col-80 :nth-child(43) {
  animation-duration: 2.652173913s;
  animation-delay: 2.2808695652s;
}

.col-80 :nth-child(44) {
  animation-duration: 2.652173913s;
  animation-delay: 2.3339130435s;
}

.col-80 :nth-child(45) {
  animation-duration: 2.652173913s;
  animation-delay: 2.3869565217s;
}

.col-80 :nth-child(46) {
  animation-duration: 2.652173913s;
  animation-delay: 2.44s;
}

.col-80 :nth-child(47) {
  animation-duration: 2.652173913s;
  animation-delay: 2.4930434783s;
}

.col-80 :nth-child(48) {
  animation-duration: 2.652173913s;
  animation-delay: 2.5460869565s;
}

.col-80 :nth-child(49) {
  animation-duration: 2.652173913s;
  animation-delay: 2.5991304348s;
}

.col-80 :nth-child(50) {
  animation-duration: 2.652173913s;
  animation-delay: 2.652173913s;
}
`;
