const Events = {}

const on = (type, fn) => {
  if (!Events[type]) {
    Events[type] = []
  }
  Events[type].push(fn)
}

const emit = (type, ...arg) => {
  const arr = Events[type]
  if (arr) {
    arr.forEach(fn => {
      fn.apply(this, arg)
    })
  }
}

const off = (type, fn) => {
  if (fn) {
    const arr = Events[type]
    const newArr = arr.filter(itemFn => itemFn !== fn)
    Events[type] = newArr
  } else {
    delete Events[type]
  }
}

export default {
  on,
  emit,
  off
}
