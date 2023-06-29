/*
Problem:
-input: String
-output: prints values
-explicit rules:
  -n : Place a value, n, in the register. Do not modify the stack.
  -PUSH : Push the register value onto the stack. Leave the value in the register.
  -ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
  -SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
  -MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
  -DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
  -REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
  -POP : Remove the topmost item from the stack and place it in the register.
  -PRINT : Print the register value.
  - there won't be any unknown values
  - initial register value is 0
  - initial stack value is []
-implicit rules:
-questions:
Examples:
Data structure:
Algorithm:
- create function that accepts one argument
- declare variables for register value and stack
- split string parameter into an array
- iterate from left to right in array
- perform each action as separate functions that are called from main function
*/

function minilang(instruct) {
  let stack = [];
  let register = 0;
  let instructArr = instruct.split(' ');
  let errorMessage;
  
  for(let i = 0; i < instructArr.length; i += 1) {
    if (!Number.isNaN(Number(instructArr[i]))) {
      debugger;
      register = Number(instructArr[i]);
      continue;
    }
    
    switch (instructArr[i]) {
      case 'PRINT':
        console.log(register);
        break;
      case 'PUSH':
        [stack, register] = push(stack, register);
        break;
      case 'MULT':
        if (detectEmptyStack(stack)) {
          errorMessage = detectEmptyStack(stack);
          debugger;
          break;
        }
        [stack, register] = mult(stack, register);
        break;
      case 'ADD':
        if (detectEmptyStack(stack)) {
          errorMessage = detectEmptyStack(stack);
          break;
        }
        [stack, register] = add(stack, register);
        break;
      case 'SUB':
        if (detectEmptyStack(stack)) {
          errorMessage = detectEmptyStack(stack);
          break;
        }
        [stack, register] = sub(stack, register);
        break;
      case 'POP':
        if (detectEmptyStack(stack)) {
          errorMessage = detectEmptyStack(stack);
          break;
        }
        [stack, register] = pop(stack, register);
        break;
      case 'DIV':
        if (detectEmptyStack(stack)) {
          errorMessage = detectEmptyStack(stack);
          break;
        }
        [stack, register] = div(stack, register);
        break;
      case 'REMAINDER':
        if (detectEmptyStack(stack)) {
          errorMessage = detectEmptyStack(stack);
          break;
        }
        [stack, register] = remainder(stack, register);
        break;
      default:
        errorMessage = 'Invalid token';
        break;
    }
  }
  return errorMessage;
}

function push(stack, register) {
  stack.push(register);
  return [stack, register];
}

function mult(stack, register) {
  register = register * Number(stack.pop());
  return [stack, register];
}

function add(stack, register) {
  register = register + Number(stack.pop());
  return [stack, register];
}

function sub(stack, register) {
  register = register - Number(stack.pop());
  return [stack, register];
}

function pop(stack, register) {
  register = Number(stack.pop());
  return [stack, register];
}

function div(stack, register) {
  register = parseInt(register / Number(stack.pop()));
  return [stack, register];
}

function remainder(stack, register) {
  register = register % Number(stack.pop());
  return [stack, register];
}

function detectEmptyStack(stack) {
  if (stack.length === 0) return 'Empty Stack Encountered';
}



minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// // 5
// // 3
// // 8

minilang('5 PUSH POP PRINT');
// // 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // 5
// // 10
// // 4
// // 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// // 12

minilang('-3 PUSH 5 SUB PRINT');
// // 8

minilang('6 PUSH');
// // (nothing is printed because the `program` argument has no `PRINT` commands)

minilang('MULT');
// // (nothing is printed because the `program` argument has no `PRINT` commands)