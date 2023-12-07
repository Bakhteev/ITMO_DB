import { faker } from '@faker-js/faker/locale/ru'
import { DATA_TYPES, GENERATE_TYPES } from '../utils/index.js'

export class Model {
  created_at = {
    generated: GENERATE_TYPES.AUTO,
    type: DATA_TYPES.DATE,
    value: faker.date.anytime().toISOString(),
  }
  updated_at = {
    generated: GENERATE_TYPES.AUTO,
    type: DATA_TYPES.DATE,
    value: faker.date.anytime().toISOString(),
  }
}
