const DoubleLinkedList = require('./../src/datastructures/DoublyLinkedList')

/**
 * @returns {DoubleLinkedList}
 */
const sut = () => new DoubleLinkedList()

describe('DoubleLinkedList', () => {
  describe('clear', () => {
    it('should clear the list', () => {
      const list = sut()
      list.add(1).add(2)
      list.clear()
      expect(list.size).toBe(0)
      expect(list.isEmpty()).toBe(true)
    })
  });
  describe('size', () => {
    it('should has a size of 2', () => {
      expect(sut().add(1).add(1).size).toBe(2)
    })
  });
  describe('add', () => {
    it('should add the first element', () => {
      expect(sut().add(5).toString()).toBe('[5]')
    })
    it('should add the two elements', () => {
      expect(sut().add(1).add(2).toString()).toBe('[1,2]')
    })
  })
  describe('addFirst', () => {
    it('should add the first element', () => {
      expect(sut().addFirst(5).toString()).toBe('[5]')
    })
    it('should add the two elements', () => {
      expect(sut().addFirst(1).addFirst(2).toString()).toBe('[2,1]')
    })
  })
  describe('addAt', () => {
    it('should throw range error', () => {
      expect(() => {
        sut().addAt({}, 1)
      }).toThrow('Illegal Index')
    })
    it('should add at first pos', () => {
      expect(sut().add('a').addAt('b', 0).addAt('c', 0).toString()).toBe("[\"c\",\"b\",\"a\"]")
    })
    it('should add at last pos', () => {
      expect(sut().add('a').add('b').addAt('c', 2).toString()).toBe("[\"a\",\"b\",\"c\"]")
    })
    it('should add at pos', () => {
      expect(sut().add('a').add('c').add('d').addAt('b', 1).toString()).toBe("[\"a\",\"b\",\"c\",\"d\"]")
    })
  })
  describe('toString', () => {
    it('should print array empty', () => {
      expect(sut().toString()).toBe('[]')
    })
    it('should print array', () => {
      expect(sut().add(1).add(2).toString()).toBe('[1,2]')
    })
  })
})
