const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');



/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {{value: *, next: Number} | *} l  - linked list
 *                                            (from constructor '../extensions/list-node.js').
 *                                            or next value (in recursive call).
 * @param {Number}      k
 // * @param {Number}      next  - next value for analysis (used in recursive call).
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  // Recursive function!!!

  if (l === null) {
    return null;
  }

  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here

  console.log("---- Source data:", l,',', k);

  if (l.value === k) {
    return l.next ? removeKFromList(l.next, k) : null;
  } else {
    l.next = removeKFromList(l.next, k);
  }

  console.log("---- New list:", l);

  return l;

}

// Test scripts
// npm run test > "./logs/log_all_tests_-_$(date +%Y-%m-%d_-_%k_%M_%S).logs"
// npm run test ./test/remove-from-list.test.js  > "./logs/log_remove_from_list_-_$(date +%Y-%m-%d_-_%k_%M_%S).logs"

// removeKFromList();

module.exports = {
  removeKFromList
};
