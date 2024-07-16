class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  Push(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  Pop() {
    if (!this.head) return undefined;
    let currentTail = this.tail;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = currentTail.prev;
      this.tail.next = null;
      currentTail.prev = null;
    }

    this.length--;
    return currentTail;
  }

  Shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  Unshift(val) {
    let newNode = new Node(val);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
}

let list = new DoublyLinkedList();
list.Push("hey");
list.Push("there");
list.Push("hello");
// list.Pop();
// list.Shift();
// list.Shift();
list.Unshift("I am Ron");
