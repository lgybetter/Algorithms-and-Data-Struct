import LinkNode from './link-node'

class SingleList {
  constructor(data) {
    this.first = new LinkNode(data, null)
  }

  //插入操作
  insert(data, args) {
    if(data != null) {
      let linkNode = new LinkNode(data, null) //新建节点
      if (args != null) {
        if (args < this.length()) {
          //当args不为null, 这时把节点插入到pos的节点之后
          let pos = this.locate(args)
          let next = pos.link
          pos.link = linkNode
          linkNode.link = next
        } else {
          throw (PositionError)
        }
      } else {
        //直接把节点插入到最后
        let current = this.first
        while (current.link != null) {
          current = current.link
        }
        current.link = linkNode
      }
      return true
    }
    return false
  }

  //删除节点操作
  remove(pos) {
    if(pos != null) {
      if (pos < this.length()) {
        if (pos === 0) {
          //如果删除的是第一个节点就直接把this.first的节点向后移动一次
          let current = this.first.link
          let next = current.link
          this.first = current
          this.first.link = next
        } else {
          //把对应的位置的节点删除
          let current = this.locate(pos - 1)
          let next = current.link
          current.link = next.link
        }
      } else {
        throw (PositionError)
      }
      return true
    }
    return false
  }

  print() {
    let current = this.first
    while (current.link != null) {
      console.log(current.data)
      current = current.link
    }
    console.log(current.data)
  }

  locate(pos) {
    if(pos != null) {
      if (pos < this.length()) {
        let index = 0
        let current = this.first
        while (index < pos && current.link != null) {
          current = current.link
          index++
        }
        return current
      } else {
        throw (PositionError)
      }
    }
    return false
  }

  set(pos, data) {
    if(pos != null && data != null) {
      this.locate(pos).data = data
      return true
    }
    return false
  }

  get(pos) {
    if(pos != null) {
      return this.locate(pos).data
    }
    return false
  }
  
  length() {
    let len = 1
    let current = this.first
    while (current.link != null) {
      current = current.link
      len++
    }
    return len
  }
}

export default SingleList