/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 class ListNode {
  constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
  }
}

// Function to add two numbers represented as linked lists
function addTwoNumbers(l1, l2) {
  let dummy = new ListNode(); // Create a dummy node as the head of the result linked list
  let curr = dummy; // Pointer to the current node

  let carry = 0; // Initialize carry as 0

  let p = l1; // Pointer to traverse l1
  let q = l2; // Pointer to traverse l2

  // Iterate through the linked lists
  while (p !== null || q !== null) {
      let x = (p !== null) ? p.val : 0; // Set x to the value of node p if p is not null, otherwise 0
      let y = (q !== null) ? q.val : 0; // Set y to the value of node q if q is not null, otherwise 0

      let sum = x + y + carry; // Compute the sum of x, y, and carry

      carry = Math.floor(sum / 10); // Update the carry

      curr.next = new ListNode(sum % 10); // Create a new ListNode with the digit sum and attach it to the result linked list

      curr = curr.next; // Move to the next node

      if (p !== null) {
          p = p.next; // Move p to the next node
      }

      if (q !== null) {
          q = q.next; // Move q to the next node
      }
  }

  // Handle the remaining carry if it is non-zero
  if (carry > 0) {
      curr.next = new ListNode(carry); // Create a new ListNode with the remaining carry and attach it to the result linked list
  }

  // Return the next node of the dummy node as the head of the resulting linked list
  return dummy.next;
}

// Helper function to create a linked list from an array of values
function createLinkedList(values) {
  let dummy = new ListNode();
  let curr = dummy;
  for (let val of values) {
      curr.next = new ListNode(val);
      curr = curr.next;
  }
  return dummy.next;
}

// Helper function to convert a linked list to an array
function linkedListToArray(head) {
  let result = [];
  let curr = head;
  while (curr !== null) {
      result.push(curr.val);
      curr = curr.next;
  }
  return result;
}

// Test case 1
let l1 = createLinkedList([2, 4, 3]);
let l2 = createLinkedList([5, 6, 4]);
let result = addTwoNumbers(l1, l2);
console.log("Test case 1:");
console.log("Input:", linkedListToArray(l1), "+", linkedListToArray(l2));
console.log("Output:", linkedListToArray(result));
console.log("--------------------------------");

// Test case 2
l1 = createLinkedList([0]);
l2 = createLinkedList([0]);
result = addTwoNumbers(l1, l2);
console.log("Test case 2:");
console.log("Input:", linkedListToArray(l1), "+", linkedListToArray(l2));
console.log("Output:", linkedListToArray(result));
console.log("--------------------------------");

// Test case 3
l1 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
l2 = createLinkedList([9, 9, 9, 9]);
result = addTwoNumbers(l1, l2);
console.log("Test case 3:");
console.log("Input:", linkedListToArray(l1), "+", linkedListToArray(l2));
console.log("Output:", linkedListToArray(result));
console.log("--------------------------------");
