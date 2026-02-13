//start with the node class - we need to pass a value to it for the node's value, and two pointers for the left and right node pointing at null, because if there is a single node it won't point to anything at start.

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null; // we need a root node that points to null at the starting of the tree
  }

  //isEmpty method to check if there is no root node
  isEmpty() {
    return this.root === null;
  }

  //insert a node in the tree
  insert(value) {
    const newNode = new Node(value);

    //if there are 0 nodes in the tree then the first node inserted should become the ROOT node.
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode); //for recursive calling
    }
  }

  insertNode(root, newNode) {
    //checking if newNode's value is smaller than the root node
    if (newNode.value < root.value) {
      //checking if root node has a child on the left
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode); //recursively doing the same thing
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  //much cleaner way to search and creates separation of concerns
  search(value) {
    return this.searchNode(this.root, value);
  }

  searchNode(root, value) {
    //first check if root is present or not
    if (!root) {
      return false;
    } else {
      //check if value is === to the root value
      if (value === root.value) {
        return true;
      } else if (value < root.value) {
        return this.searchNode(root.left, value);
      } else if (value > root.value) {
        return this.searchNode(root.right, value);
      }
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  /**
   * Level Order Traversal (Breadth-First Search - BFS)
   * Visits nodes level by level, starting from the root.
   */
  levelOrder() {
    // If the tree is empty, there is nothing to traverse
    if (!this.root) return;

    // Use a queue (FIFO - First In First Out) to keep track of nodes to visit
    let queue = [];
    queue.push(this.root); // Start with the root node

    while (queue.length) {
      // 1. Remove the first node from the queue
      let curr = queue.shift();

      // 2. Process the node (e.g., print its value)
      console.log(curr.value);

      // 3. Add the children to the queue to be processed in the next "level"
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    //we return root to make sure recursion continues
    if (root === null) {
      return root;
    }
    //traversing for value if present
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      //now checking condition if no leaf node present
      if (!root.left && !root.right) {
        return null;
      }

      //if either left or right node are present
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }

      //now if above condition fails that means we have two child nodes, we will now get the least inorder value after the input value
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
}

const bst = new BinarySearchTree();
console.log("tree is empty?", bst.isEmpty());
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.levelOrder();
console.log(bst.preOrder(bst.root));
bst.delete(10);
console.log("_______");
bst.levelOrder();
