class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
  }

  //add node at the end

  append(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }

    current.next = newNode;
  }

  //add node at the start

  prepend(value) {
    let newNode = new Node(value);
    let current = this.head;
    this.head = newNode;
    newNode.next = current;
  }

  //printlist

  printList() {
    let current = this.head;
    let output = "";
    while (current) {
      output += current.value + " -> ";
      current = current.next;
    }
    console.log(output + "null");
  }

  //delete element

  delete(value) {
    if (!this.head) return;

    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }
}

let list = new linkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.prepend(100);
list.printList();
list.delete(30);
list.printList();
