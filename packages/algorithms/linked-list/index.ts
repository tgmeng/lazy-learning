export class LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T>;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export default class LinkedList<T> {
  head: LinkedListNode<T>;

  constructor() {
    this.head = null;
  }

  add(value: T) {
    const node = new LinkedListNode(value);

    if (this.head) {
      let cur = this.head;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = node;
    } else {
      this.head = node;
    }
  }

  toArray() {
    let cur = this.head;
    const arr = [];
    while (cur) {
      arr.push(cur.value);
      cur = cur.next;
    }
    return arr;
  }
}
