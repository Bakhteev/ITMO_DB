import { faker } from '@faker-js/faker/locale/ru'
import {
  DATA_TYPES,
  GENERATE_TYPES,
  getRandomNumberInRange,
} from '../utils/index.js'
import { fractionsValues } from './Fraction.js'
import { Model } from './Model.js'

let id = 1

export class Place extends Model {
  place_id = {
    generated: GENERATE_TYPES.AUTO,
    value: id,
    type: DATA_TYPES.INT,
  }
  fraction_id = {
    generated: GENERATE_TYPES.MANUAL,
    value: 0,
    type: DATA_TYPES.INT,
  }
  place_name = {
    generated: GENERATE_TYPES.MANUAL,
    value: '',
    type: DATA_TYPES.STRING,
  }

  constructor() {
    super()
    this.place_id.value = id
    id++
    this.fraction_id.value = getRandomNumberInRange(1, fractionsValues.length)
    this.place_name.value = faker.string.nanoid({ min: 10, max: 20 })
  }
}
