import { DATA_TYPES, GENERATE_TYPES } from './types.js'

/**
 * @param {object} model
 */
export const extractManualGeneratedFields = (model) => {
  return Object.keys(model).filter(
    (key) => model[key].generated !== GENERATE_TYPES.AUTO
  )
}
