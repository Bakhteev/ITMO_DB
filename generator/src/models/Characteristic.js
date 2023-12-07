import { faker } from '@faker-js/faker/locale/ru'
import { DATA_TYPES, GENERATE_TYPES } from '../utils/index.js'
import { Model } from './Model.js'

let id = 1

export class Characteristic extends Model {
  charectiristic_id = {
    generated: GENERATE_TYPES.AUTO,
    value: id,
    type: DATA_TYPES.INT,
  }
  charectiristic_name = {
    generated: GENERATE_TYPES.MANUAL,
    value: '',
    type: DATA_TYPES.STRING,
  }

  constructor() {
    super()
    this.charectiristic_name.value = id
    id++
    this.charectiristic_name.value = faker.string.nanoid({ min: 10, max: 20 })
  }
}
