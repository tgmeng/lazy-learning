import LinkedList from './index';

export function createLinkedList<T>(array: T[]) {
  return array.reduce((list, item) => {
    list.add(item);
    return list;
  }, new LinkedList<T>());
}

export function reverseLinkedList<T>(list: LinkedList<T>) {
  let { head } = list;
  let pre = null;
  while (head) {
    const { next } = head;
    head.next = pre;
    pre = head;
    head = next;
  }
  list.head = pre;
}
