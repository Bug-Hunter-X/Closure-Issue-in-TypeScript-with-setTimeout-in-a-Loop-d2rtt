function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // Works fine

function printNumbers2(n: number): void {
  for (let i = 1; i <= n; i++) {
    // Use IIFE to capture the current value of 'i'
    (function(j) {
      setTimeout(() => {
        console.log(j);
      }, 0);
    })(i);
  }
}

printNumbers2(5); // Now prints 1 to 5 with delay

//Alternative Solution: Using let inside the loop
function printNumbers3(n: number): void {
  for (let i = 1; i <= n; i++) {
    setTimeout(() => {
      console.log(i); // let creates a new scope for each iteration
    }, 0);
  }
}

printNumbers3(5); // Now prints 1 to 5 with delay