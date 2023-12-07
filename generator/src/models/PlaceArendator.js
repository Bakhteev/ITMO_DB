import { faker } from '@faker-js/faker/locale/ru'
import { DATA_TYPES, GENERATE_TYPES } from '../utils/index.js'

let id = 1

export class Place_Arendator {
  place_arendator_id = {
    generated: GENERATE_TYPES.AUTO,
    value: id,
    type: DATA_TYPES.INT,
  }
  place_id = {
    generated: GENERATE_TYPES.MANUAL,
    value: 0,
    type: DATA_TYPES.INT,
  }
  arendator_id = {
    generated: GENERATE_TYPES.MANUAL,
    value: 0,
    type: DATA_TYPES.INT,
  }
  from_time = {
    generated: GENERATE_TYPES.AUTO,
    value: '',
    type: DATA_TYPES.DATE,
  }
  to_time = {
    generated: GENERATE_TYPES.AUTO,
    value: '',
    type: DATA_TYPES.DATE,
  }

  constructor(place_id, arendator_id) {
    this.place_id.value = place_id
    this.arendator_id.value = arendator_id
    this.place_arendator_id.value = id
    id++
    this.from_time.value = faker.date.past({years: 1}).toISOString()
    this.to_time.value = faker.date
      .between({
        from: this.from_time.value,
        to: faker.date.future({ years: 1 }),
      })
      .toISOString()
  }
}
