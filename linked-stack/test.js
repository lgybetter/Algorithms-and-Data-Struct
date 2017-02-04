import LinkedStack from './linked-stack'

let stack = new LinkedStack()
stack.push(0)
stack.push(1)
stack.push(2)
let top = stack.getTop()
console.log(top)
stack.clear()
console.log(stack.isEmpty())
stack.print()
console.log(stack.size())