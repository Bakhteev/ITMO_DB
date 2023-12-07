import {
  GENERATE_TYPES,
  DATA_TYPES,
  getRandomNumberInRange,
} from '../utils/index.js'
import { fractionsValues } from './Fraction.js'
import { Model } from './Model.js'

let id = 1

export class Test_Result extends Model {
  test_result_id = {
    generated: GENERATE_TYPES.AUTO,
    value: 0,
    type: DATA_TYPES.INT,
  }
  person_id = {
    generated: GENERATE_TYPES.MANUAL,
    value: 0,
    type: DATA_TYPES.INT,
  }
  fraction_id = {
    generated: GENERATE_TYPES.MANUAL,
    value: 0,
    type: DATA_TYPES.INT,
  }
  constructor() {
    super()
    this.test_result_id.value = id
    this.fraction_id.value = getRandomNumberInRange(1, fractionsValues.length)
    this.person_id.value = id
    id++
  }
}
