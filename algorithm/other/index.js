class Scheduler {
  constructor() {
    this.max = 2
    this.workList = []
    this.queue = []
  }
  add(promiseCreator, name) {
    let p = new Promise((resolve) => {
      promiseCreator.resolve = resolve
      promiseCreator.funcname = name
    })
    this.queue.push(promiseCreator)
    this.flush()
    return p
  }
  flush() {
    while (this.workList.length < this.max && this.queue.length > 0) {
      let a = this.queue.shift()
      this.workList.push({
        type: 'wait',
        func: a,
      })
    }
    this.startWork()
  }
  startWork() {
    let fakeList = [...this.workList].filter((item) => item.type === 'wait')
    fakeList.forEach((obj) => {
      try {
        obj.type = 'begin'
        let func = obj.func
        console.log('执行' + func.funcname)
        func().then((res) => {
          func.resolve(res)
          // 移除任务
          console.log('移除' + func.funcname)
          this.remove(obj)
          this.flush()
        })
      } catch (error) {
        // 移除任务
        this.remove(obj)
        this.flush()
      }
    })
  }
  remove(obj) {
    let index = this.workList.indexOf(obj)
    if (index > 0) {
      this.workList.splice(index, 1)
    }
  }
}

const timeout = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time)
  })

const scheduler = new Scheduler()
const addTask = (time, order) => {
  let fake = () => timeout(time)

  scheduler.add(fake, order).then(() => {
    console.log('完成任务：' + order)
  })
}

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')
