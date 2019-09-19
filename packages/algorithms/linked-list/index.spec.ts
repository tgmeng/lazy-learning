import LinkedList from './index';
import { reverseLinkedList, createLinkedList } from './util';

describe('LinkedList', () => {
  it('LinkedList.add', () => {
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    expect(list.toArray()).toEqual([1, 2]);
  });

  it('createLinkedList', () => {
    const list = createLinkedList([1, 2, 3]);
    expect(list.toArray()).toEqual([1, 2, 3]);
  });

  it('reverseLinkedList', () => {
    const list = createLinkedList([1, 2, 3]);
    reverseLinkedList(list);
    expect(list.toArray()).toEqual([3, 2, 1]);
  });
});
