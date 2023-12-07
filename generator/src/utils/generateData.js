import { abstractFactory } from './abstractFactory.js'

export const generateData = (n, model, ...data) => {
  return new Array(n).fill(null).map((_, i) => {
    if (Array.isArray(data[i])) {
      return abstractFactory(model, ...data[i])
    } else {
      return abstractFactory(model, data[i])
    }
  })
}
