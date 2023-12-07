import { abstractFactory } from './abstractFactory.js'
import { extractManualGeneratedData } from './extractManualGeneratedData.js'
import { extractManualGeneratedFields } from './extractManualGeneratedFields.js'
import { replacer } from './replacer.js'

/**
 *  @param {class} modelClass
 *  @param {any[][]} models
 *
 */
export const insertGenerator = (modelClass, models) => {
  const instance = abstractFactory(modelClass)
  const fields = extractManualGeneratedFields(instance)
  const data = extractManualGeneratedData(models)
  const table = instance.constructor.name.toLowerCase()
  const params = new Array(fields.length)
    .fill(0)
    .map((el, i) => `$${i + 1}`)
    .join(', ')
  const sql = `INSERT INTO "${table}" (${fields.join(', ')}) VALUES(${params});`

  return (
    data
      .map((el) => {
        if (Array.isArray(el)) {
          return replacer(sql, el)
        } else {
          return replacer(sql, [el])
        }
      })
      .join('\n') + '\n\n'
  )
}
