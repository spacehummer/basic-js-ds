const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {

  stackArr;

  /**
   * Class constructor.
   */
  constructor() {
    this.stackArr = [];
  }

  /**
   * Add element into stack
   * @param {*} element - new stack element.
   */
  push(element) {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
    this.stackArr.push(element);
  }

  /**
   * Withdraw element from stack.
   */
  pop() {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
    return this.stackArr.pop();
  }

  /**
   * Return peek element without withdrawing.
   */
  peek() {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
    return this.stackArr[this.stackArr.length - 1];
  }
}

// Test scripts
// npm run test > "./logs/log_all_tests_-_$(date +%Y-%m-%d_-_%k_%M_%S).logs"
// npm run test ./test/stack.test.js  > "./logs/log_stack_test_-_$(date +%Y-%m-%d_-_%k_%M_%S).logs"

module.exports = {
  Stack
};
