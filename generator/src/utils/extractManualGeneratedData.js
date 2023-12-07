import { DATA_TYPES, GENERATE_TYPES } from './types.js'

export const extractManualGeneratedData = (models) => {
  const res = []
  models.forEach((model) => {
    const item = []
    Object.values(model).forEach((value) => {
      if (value.generated !== GENERATE_TYPES.AUTO) {
        if (value.type === DATA_TYPES.STRING) {
          item.push(`'${value.value}'`)
        } else {
          item.push(value.value)
        }
      }
    })
    res.push(item)
  })

  return res
}
