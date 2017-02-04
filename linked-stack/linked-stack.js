import LinkNode from '../single-list/link-node'
class LinkedStack {
  constructor() {
    this.top = new LinkNode(null, null)
  }
  push(data) {
    if(data != null) {
      this.top = new LinkNode(data, this.top)
      return true
    }
    return false
  }
  pop() {
    if(this.isEmpty() === true) {
      return false
    }
    this.top = this.top.link
    return true
  }
  getTop() {
    return this.top
  }
  isEmpty() {
    if(this.top.data != null && this.top.link != null) {
      return false
    }          
    return true
  }
  size() {
    let len = 0
    let current = this.top
    while(current.link != null) {
      current = current.link
      len ++
    }
    return len
  }
  clear() {
    let current = this.top
    while(this.top.link != null) {
      this.top = this.top.link
    }
  }
  print() {
    let current = this.top
    while(current.link != null) {
      console.log(current.data)
      current = current.link
    }
  }
}

export default LinkedStack