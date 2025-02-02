# TypeScript Closure Issue with setTimeout

This repository demonstrates a common closure-related issue in JavaScript (and TypeScript) when using `setTimeout` within a loop.  The problem arises because the closure created by `setTimeout` captures the value of `i` from the loop's scope, not the value at the time the callback is executed.

## Bug Description

The `printNumbers2` function aims to print numbers from 1 to n with a small delay using `setTimeout`. However, due to the asynchronous nature of `setTimeout` and the loop's completion before the callbacks fire, the value of `i` will be the final value (n+1) for all callbacks.

## How to Reproduce

1. Clone this repository.
2. Compile and run `bug.ts`.  Observe that the output is incorrect.
3. Now run `bugSolution.ts`, which demonstrates the corrected code.

## Solution

The solution involves using an immediately invoked function expression (IIFE) or `let` within the loop to create a new scope for each iteration, ensuring each callback captures the correct value of `i` at the time of its creation.  This approach avoids the closure issue.

