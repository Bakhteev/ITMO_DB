import { DATA_TYPES, GENERATE_TYPES } from '../utils/index.js'
import { Model } from './Model.js'
import { faker } from '@faker-js/faker/locale/ru'

let id = 1

export class Event extends Model {
  event_id = {
    generated: GENERATE_TYPES.AUTO,
    value: '',
    type: DATA_TYPES.STRING,
  }
  event_name = {
    generated: GENERATE_TYPES.MANUAL,
    value: '',
    type: DATA_TYPES.STRING,
  }

  constructor() {
    super()
    this.event_id.value = id
    this.event_name.value = faker.string.nanoid({ min: 5, max: 20 })
    id++
  }
}
