const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  head;
  length;

  lastUnderlyingList;
  lastDeletedNode;

  /**
   * Class constructor (queue head and length).
   */
  constructor () {
    this.head = null;
    this.length = 0;

    this.lastUnderlyingList = null;
    this.lastDeletedNode = null;
  }

  /**
   * Return underlying linked list.
   * @return {*}
   */
  getUnderlyingList() {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here

    if (this.length === 0) {
      /* If queue is empty: */
      /* create linked list Node using constructor from `list-node.js`. */
      this.lastUnderlyingList = new ListNode(null);
    } else {
      /* else: take pointer of the first Node to lastUnderlyingList field. */
      this.lastUnderlyingList = this.head;
    }

    return this.lastUnderlyingList;

  }

  /**
   * Add element to the queue.
   */
  enqueue(value) {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here

    /* create linked list Node using constructor from `list-node.js`. */
    let newQueueLinkedNode = new ListNode(value);

    if (this.length === 0) {
      /* If queue is empty: add new element, as first node. */
      this.head = newQueueLinkedNode;
    } else {
      /* Save current head Node into TMP variable. */
      let currentQueueLinkedNode = this.head;
      /* While currentQueueLinkedNode.next pointer is truly, take it into currentQueueLinkedNode. */
      /* So we will find the last item in the queue. */
      while (currentQueueLinkedNode.next) {
        currentQueueLinkedNode = currentQueueLinkedNode.next;
      }
      /* Change pointer of the last node for new linked Node with new value */
      currentQueueLinkedNode.next = newQueueLinkedNode;
    }

    /* After adding a node, increase the counter of queue items. */
    this.length = this.length + 1;
  }

  /**
   *  Returns the top element from queue and deletes it, returns 1.
   */
  dequeue() {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here

    /* Save current head Node to lastDeletedNode field. */
    this.lastDeletedNode = this.head;

    /* Change head Node from current last Node, to next Node. */
    this.head = this.lastDeletedNode.next;

    /* Return deleting head Node value */
    return this.lastDeletedNode.value;

  }
}

// Test scripts
// npm run test > "./logs/log_all_tests_-_$(date +%Y-%m-%d_-_%k_%M_%S).logs"
// npm run test ./test/queue.test.js  > "./logs/log_queue_test_-_$(date +%Y-%m-%d_-_%k_%M_%S).logs"

module.exports = {
  Queue
};
