function chessBoard(number){
    console.log('<div class="chessboard">');
    for (let a = 1; a <= number; a++) {
        console.log('  <div>');
        for (let b = 1; b <= number; b++) {
            if( a % 2 != 0){
                if (b % 2 != 0) {
                    console.log('    <span class="black"></span>');
                } else {
                    console.log('    <span class="white"></span>');
                }
            } else {
                if (b % 2 != 0) {
                    console.log('    <span class="white"></span>');
                } else {
                    console.log('    <span class="black"></span>');
                }
            }
            
        }
        console.log('  </div>');
    }
    console.log('</div>');
}

chessBoard(3);
/*
<div class="chessboard">
  <div>
    <span class="black"></span>
    <span class="white"></span>
    <span class="black"></span>
  </div>
  <div>
    <span class="white"></span>
    <span class="black"></span>
    <span class="white"></span>
  </div>
  <div>
    <span class="black"></span>
    <span class="white"></span>
    <span class="black"></span>
  </div>
</div>
*/