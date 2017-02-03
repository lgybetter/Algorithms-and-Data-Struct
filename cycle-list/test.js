import CycleList from './cycle-list'

let cycleList = new CycleList(1)

cycleList.insert(2)
cycleList.insert(3)
cycleList.insert(4)
cycleList.remove(3)
// cycleList.set(2, 10)
// console.log(cycleList.locate(0))
console.log(cycleList.length())
cycleList.print()