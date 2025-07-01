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

  Get(index) {
    if (index < 0 || index >= this.length) return null;
    let current, counter;
    if (index <= this.length / 2) {
      current = this.head;
      counter = 0;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
    } else {
      current = this.tail;
      counter = this.length - 1;
      while (counter !== index) {
        current = current.prev;
        counter--;
      }
    }
    return current;
  }

  Set(index, val) {
    let getter = this.Get(index);
    if (getter != null) {
      getter.val = val;
      return true;
    }
    return false;
  }

  Insert(index, val) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) this.Unshift(val);
    if (index === this.length) this.Push(val);
    let newNode = new Node(val);
    let oldNode = this.Get(index);
    newNode.next = oldNode;
    newNode.prev = oldNode.prev;
    oldNode.prev = newNode;
    newNode.prev.next = newNode;
    this.length++;
    return true;
  }

  Remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.Shift();
    if (index === this.length - 1) return this.Pop();

    let removedNode = this.Get(index);
    let beforeNode = removedNode.prev;
    let afterNode = removedNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    removedNode.next = null;
    removedNode.prev = null;

    this.length--;
    return removedNode;
  }
}

let list = new DoublyLinkedList();
list.Push("hey");
list.Push("there");
list.Push("hello");
list.Push("Ron");
list.Push("Harry");
list.Remove(3);
console.log(list);
// list.Pop();
// list.Shift();
// list.Shift();
// list.Unshift("I am Ron");
// list.Get(3);
// list.Set(3, "hello is now hi");
// list.Get(3);
// list.Insert(3, "200");
