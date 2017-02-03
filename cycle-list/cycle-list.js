import LinkNode from '../single-list/link-node'

class CycleList {
  constructor(firstData) {
    this.first = new LinkNode(firstData, null)
    this.last = new LinkNode(null, null)
    this.first.link = this.last
    this.last.link = this.first
  }

  //插入操作
  insert(data, args) {
    if (this.last.data != null) {
      //如果this.last的数值不为空
      let linkNode = new LinkNode(data, null)
      if (args != null) {
        //如果传入的位置不为null, 就直接把节点插入到pos之后
        if (args < this.length()) {
          let pos = this.locate(args)
          let next = pos.link
          pos.link = linkNode
          linkNode.link = next
        } else {
          throw (PositionError)
        }
      } else {
        //直接把节点插入到this.last之后, 并把this.last向后移动一次
        let current = this.last
        let next = current.link
        current.link = linkNode
        linkNode.link = next
        this.last = linkNode
      }
    } else {
      //直接把数值填进this.last中
      this.last.data = data
    }
  }

  //删除操作
  remove(pos) {
    if (pos < this.length()) {
      if (pos === 0) {
        //如果删除头结点, 就直接把this.first向后移动一次
        let current = this.first.link
        let next = current.link
        this.first = current
        this.first.link = next
      } else if(pos == this.length() - 1) {
        //如果删除尾节点, 先获取尾节点之前的节点, 然后链接新的节点, 在把尾节点移动到新节点上
        let current = this.locate(pos -1)
        let next = current.link
        current.link = next.link
        this.last = current
      } else {
        let current = this.locate(pos - 1)
        let next = current.link
        current.link = next.link
      }
    } else {
      throw (PositionError)
    }
  }

  print() {
    let current = this.first
    while (current.link !== this.last) {
      console.log(current.data)
      current = current.link
    }
    console.log(current.data)
    if (this.last.data != null) {
      console.log(this.last.data)
    }
  }

  locate(pos) {
    if (pos < this.length()) {
      let index = 0
      let current = this.first
      while (index < pos) {
        current = current.link
        index++
      }
      return current
    } else {
      throw (PositionError)
    }
  }
  
  set(pos, data) {
    this.locate(pos).data = data
  }

  get() {
    return this.locate(pos).data
  }
  
  length() {
    let len = 1
    let current = this.first
    while (current.link !== this.last) {
      current = current.link
      len++
    }
    if (this.last.data != null) {
      len++
    }
    return len
  }
}

export default CycleList