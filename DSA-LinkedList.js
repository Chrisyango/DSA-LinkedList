'use strict';

class _Node {
  constructor(value, next) {
    this.value= value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      console.log('List is empty, inserting item at beginning of list');
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while(tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(item, nextItem) {
    if (this.head === null) {
      console.log('List is empty, inserting item at beginning of list');
      this.insertFirst(item);
    } else {
      // Keep track of the nextNode so I can insert the item before nextNode
      let currNode = this.head;
      let nextNode = currNode.next;
      // Loop through the linked list and match nextNode to nextItem
      while((nextNode !== null) && (nextNode.value !== nextItem)) {
        currNode = nextNode;
      }
      // If the prevItem is not in the list, return an error
      if (currNode.next === null) {
        console.log(`${nextItem} not found`);
        return;
      }
      // After finding the nextNode, insert the item before it
      currNode.next = new _Node(item, nextNode);
    }
  }

  insertAfter(item, prevItem) {
    if (this.head === null) {
      console.log('List is empty, inserting item at beginning of list');
      this.insertFirst(item);
    } else {
      // Keep track of the prevNode so I can insert the item after prevNode
      let currNode = this.head;
      let prevNode = this.head;
      // Loop through the list and find the node I want to insert the item after
      while((currNode !== null) && (prevNode.value !== prevItem)) {
        prevNode = currNode;
        currNode = currNode.next;
      }
      // If the prevItem is not in the list, return an error
      if ((currNode === null) && (prevNode.value !== prevItem)) {
        console.log(`${prevItem} not found`);
        return;
      }
      // After finding the prevNode, insert the item after it
      prevNode.next = new _Node(item, currNode);
    }
  }

  insertAt(item, position) {
    if (this.head === null) {
      console.log('List is empty, inserting item at beginning of list');
      this.insertFirst(item);
    } else {
      let currPosition = 0;
      let currNode = this.head;
      let prevNode = this.head;
      while ((currNode !== null) && (currPosition !== position)) {
        prevNode = currNode;
        currNode = currNode.next;
        currPosition ++;
      }
      prevNode.next = new _Node(item, currNode);
    }
  }

  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let prevNode = this.head;
    while((currNode !== null) && (currNode.value !== item)) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    prevNode.next = currNode.next;
  }

  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while(currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }
}

function display(linkedList) {
  if (!linkedList.head) {
    console.log('LinkedList is empty');
  } else {
    let list = [];
    let currNode = linkedList.head;
    while(currNode.next !== null) {
      list.push(currNode);
      currNode = currNode.next;
    }
    return list;
  }
}

function size(linkedList) {
  if (!linkedList.head) {
    return 0;
  }
  let count = 0;
  let currNode = linkedList.head;
  while (currNode !== null) {
    currNode = currNode.next;
    count ++;
  }
  return count;
}

function isEmpty(linkedList) {
  return (!linkedList.head);
}

function findPrevious(linkedList, item) {
  if (!linkedList.head) {
    console.log('LinkedList is empty');
  } else {
    let currNode = linkedList.head;
    let prevNode = linkedList.head;
    while ((currNode !== null) && (currNode.value !== item)) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    if ((currNode === null) && (prevNode.value !== item)) {
      console.log('Item not found');
      return;
    }
    return prevNode;
  }
}

function findLast(linkedList) {
  if (!linkedList.head) {
    console.log('LinkedList is empty');
  } else {
    let currNode = linkedList.head;
    while(currNode.next !== null) {
      currNode = currNode.next;
    }
    return currNode;
  }
}

function main() {
  const SLL = new LinkedList;

  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  // SLL.remove('squirrel');
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat', 3);
  SLL.remove('Tauhida');

  // console.log(SLL);
  // console.log(display(SLL));
  // console.log(size(SLL));
  // console.log(isEmpty(SLL));
  // console.log(findPrevious(SLL, 'Husker'));
  // console.log(findLast(SLL));
  // console.log(reverseList(SLL));
  // console.log(thirdFromTheEnd(SLL));
}

main();


/*========== Interview Questions ==========*/
// Mystery program
/*
I believe this program is going to get rid of duplicate nodes.
So if the current value equals the value of the next node, it's going to replace the current node with the next node.
I believe this function is an exponential function O(n^2) because it loops through an array inside of a loop.
*/

// Reverse a list
function reverseList(linkedList) {
  if (!linkedList.head) {
    console.log('List is empty');
  } else {
    // Get the currNode, prevNode, and nextNode.
    let currNode = linkedList.head;
    let prevNode = null;
    let nextNode = currNode.next;
    while (nextNode !== null) {
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode;
      nextNode = currNode.next;
    }
    linkedList.head = currNode;
    currNode.next = prevNode;
    return linkedList;
  }
}

// Third from the end
function thirdFromTheEnd(linkedList) {
  if (!linkedList.head) {
    console.log('List is empty');
  } else {
    let currNode = linkedList.head;
    while(currNode !== null){
      let newNode = currNode;
      while (newNode.next !== null) {
        if (newNode.next.next.next === null) {
          return newNode;
        }
        else{
          newNode = newNode.next;
        }
      }
    }
  }
}

// Middle of a list

// Cycle in a list
function cycle() {
  const CycleList = new LinkedList;

  CycleList.insertFirst('Apollo');
  CycleList.insertLast('Boomer');
  CycleList.insertLast('Helo');
  CycleList.insertLast('Husker');
  CycleList.insertLast('Starbuck');
  listCycle('Tauhida', CycleList);
  console.log(CycleList.find('Tauhida'));
  console.log(isCycle(CycleList));
}

cycle();

function listCycle(item, linkedList) {
  if (!linkedList.head) {
    console.log('List is empty');
  } else {
    let currNode = linkedList.head;
    while(currNode.next.value !== 'Starbuck') {
      currNode = currNode.next;
    }
    currNode.next = new _Node(item, linkedList.head);
  }
}

function isCycle(linkedList) {
  if (!linkedList.head) {
    console.log('List is empty');
  } else {
    let cycleTrue = false;
    let currNode = linkedList.head;
    // Jump out of the first loop when value is true
    while(!cycleTrue) {
      let prevNode = currNode;
      currNode = currNode.next;
      let count = 0;
      console.log(count);
      if (prevNode === linkedList.head) {
        count = count + 1;
      }
      if (count > 1) {
        cycleTrue = true;
      }
    }
    return cycleTrue;
  }
}

// Doubly linked list
class _DoublyNode {
  constructor(value, next, prev) {
    this.value= value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _DoublyNode(item, this.head, null);
  }

  insertLast(item) {
    if (this.head === null) {
      console.log('List is empty, inserting item at beginning of list');
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while(tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _DoublyNode(item, null, tempNode);
    }
  }

  insertBefore(item, nextItem) {
    if (this.head === null) {
      console.log('List is empty, inserting item at beginning of list');
      this.insertFirst(item);
    } else {
      // Keep track of the nextNode so I can insert the item before nextNode
      let currNode = this.head;
      let nextNode = currNode.next;
      // Loop through the linked list and match nextNode to nextItem
      while((nextNode !== null) && (nextNode.value !== nextItem)) {
        currNode = nextNode;
      }
      // If the prevItem is not in the list, return an error
      if (currNode.next === null) {
        console.log(`${nextItem} not found`);
        return;
      }
      // After finding the nextNode, insert the item before it
      currNode.next = new _DoublyNode(item, nextNode, currNode);
    }
  }

  insertAfter(item, prevItem) {
    if (this.head === null) {
      console.log('List is empty, inserting item at beginning of list');
      this.insertFirst(item);
    } else {
      // Keep track of the prevNode so I can insert the item after prevNode
      let currNode = this.head;
      let prevNode = this.head;
      // Loop through the list and find the node I want to insert the item after
      while((currNode !== null) && (prevNode.value !== prevItem)) {
        prevNode = currNode;
        currNode = currNode.next;
      }
      // If the prevItem is not in the list, return an error
      if ((currNode === null) && (prevNode.value !== prevItem)) {
        console.log(`${prevItem} not found`);
        return;
      }
      // After finding the prevNode, insert the item after it
      prevNode.next = new _DoublyNode(item, currNode, prevNode);
    }
  }

  insertAt(item, position) {
    if (this.head === null) {
      console.log('List is empty, inserting item at beginning of list');
      this.insertFirst(item);
    } else {
      let currPosition = 0;
      let currNode = this.head;
      let prevNode = this.head;
      while ((currNode !== null) && (currPosition !== position)) {
        prevNode = currNode;
        currNode = currNode.next;
        currPosition ++;
      }
      prevNode.next = new _DoublyNode(item, currNode, prevNode);
    }
  }

  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let prevNode = this.head;
    while((currNode !== null) && (currNode.value !== item)) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    prevNode.next = currNode.next;
  }

  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while(currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }
}

function mainDLL() {
  const DLL = new DoublyLinkedList;

  DLL.insertFirst('Aquaria');
  DLL.insertLast('Caprica');
  DLL.insertBefore('Gemenon', 'Caprica');
  DLL.insertAfter('Picon', 'Gemenon');
  DLL.insertAt('Sagittaron', 4);
  DLL.insertLast('Tauron');
  DLL.remove('Picon');

  // console.log(reverseDoublyList(DLL));
}
mainDLL();

// Reverse a DLL
function reverseDoublyList(linkedList) {
  if (!linkedList.head) {
    console.log('List is empty');
  } else {
    // Get the currNode, prevNode, and nextNode.
    let currNode = linkedList.head;
    let prevNode = null;
    let nextNode = currNode.next;
    while (nextNode !== null) {
      currNode.next = prevNode;
      currNode.prev = nextNode;
      prevNode = currNode;
      currNode = nextNode;
      nextNode = currNode.next;
    }
    linkedList.head = currNode;
    currNode.next = prevNode;
    currNode.prev = null;
    return linkedList;
  }
}