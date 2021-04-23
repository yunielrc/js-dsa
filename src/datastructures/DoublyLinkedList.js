class DoubleLinkedListNode {
  /**
   * @type {object}
   */
  data

  /**
   * @type {DoubleLinkedListNode}
   */
  prev

  /**
   * @type {DoubleLinkedListNode}
   */
  next

  /**
   * 
   * @param {object} data
   * @param {DoubleLinkeListNode} prev
   * @param {DoubleLinkeListNode} next      
   */
  constructor(data, prev, next) {
    this.data = data
    this.prev = prev
    this.next = next
  }
}

module.exports = class DoubleLinkedList {

  /**
   * @type {DoubleLinkedListNode}
   */
  #head = null

  /**
   * @type {DoubleLinkedListNode}
   */
  #tail = null

  /**
   * @type {number}
   */
  #size = 0

  clear() {
    this.#head = this.#tail = null
    this.#size = 0
  }

  isEmpty = () => this.size === 0

  get size() {
    return this.#size
  }

  addFirst(data) {
    const newNode = new DoubleLinkedListNode(data, null, this.#head)
    this.isEmpty() && (this.#tail = newNode) || (this.#head.prev = newNode)
    this.#head = newNode
    this.#size++
    return this
  }

  add(data) {
    const newNode = new DoubleLinkedListNode(data, this.#tail, null)
    this.isEmpty() && (this.#head = newNode) || (this.#tail.next = newNode)
    this.#tail = newNode
    this.#size++
    return this
  }

  addAt(data, pos) {
    if (pos < 0 || pos > this.size) throw new RangeError('Illegal Index')

    if (pos === 0) return this.addFirst(data)
    if (pos === this.size) return this.add(data)

    let trav = this.#head

    for (let i = 1; i <= pos; i++) {
      trav = trav.next
    }
    const newNode = new DoubleLinkedListNode(data, trav.prev, trav)
    trav.prev.next = newNode
    trav.prev = newNode

    return this
  }

  toString() {
    let trav = this.#head
    let str = '['

    while (trav) {
      str += JSON.stringify(trav.data)
      trav = trav.next
      trav && (str += ',')
    }
    str += ']'
    return str
  }
}
