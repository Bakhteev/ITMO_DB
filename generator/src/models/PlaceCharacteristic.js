import { faker } from '@faker-js/faker/locale/ru'
import { DATA_TYPES, GENERATE_TYPES } from '../utils/index.js'

let id = 1

export class Place_Characteristic {
  place_characteristic_id = {
    generated: GENERATE_TYPES.AUTO,
    value: id,
    type: DATA_TYPES.INT,
  }
  characteristic_id = {
    generated: GENERATE_TYPES.MANUAL,
    value: 0,
    type: DATA_TYPES.INT,
  }
  place_id = {
    generated: GENERATE_TYPES.MANUAL,
    value: 0,
    type: DATA_TYPES.INT,
  }
  value = {
    generated: GENERATE_TYPES.MANUAL,
    value: '',
    type: DATA_TYPES.STRING,
  }

  constructor(place_id, characteristic_id) {
    this.place_id.value = place_id
    this.characteristic_id.value = characteristic_id
    this.place_characteristic_id.value = id
    id++
    this.value.value = faker.string.nanoid({ min: 10, max: 20 })
  }
}
