const $buttonBefore = document.querySelector('.before-button');
const $buttonNext = document.querySelector('.next-button');
const $title = document.querySelector('.title');

$buttonBefore.addEventListener('click', movePrevMusic);
$buttonNext.addEventListener('click', moveNextMusic);

class Node {
  constructor (element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor () {
    this.head = new Node('head');
  }

  append (newElement) {
    const newNode = new Node(newElement);
    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }

    current.next = newNode;
	}

  insert(newElement, item) {
    const newNode = new Node(newElement);
    let current = this.find(item);

    newNode.next = current.next;
    current.next = newNode;
	}

  remove(item) {
    let prevNode = this.findPrevious(item);
    prevNode.next = prevNode.next.next;
	}

  find(item) {
    let currentNode = this.head;

    while(currentNode.element !== item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  findPrevious(item) {
    let currentNode = this.head;

    while(currentNode.next !== null && currentNode.next.element !== item) {
      currentNode = currentNode.next;
    }

    return currentNode;
	}

  toString() {
    const array = [];
    let currentNode = this.head;

    while(currentNode.next !== null){
      array.push(currentNode.next.element);
      currentNode = currentNode.next;
    }

    return array;
	}
}

const linkedList = new LinkedList();

linkedList.insert('A', 'head');

function movePrevMusic() {
  console.log('222');
}

function moveNextMusic() {
  linkedList.insert('그때 그 순간 그대로 (그그그) - WSG워너비(가야G)', 'A');
}
$title.textContent = linkedList.toString();
