import { faker } from '@faker-js/faker/locale/ru'
import {
  DATA_TYPES,
  GENERATE_TYPES,
  getRandomNumberInRange,
} from '../utils/index.js'
import { fractionsValues } from './Fraction.js'
import { RoleEnum } from './RoleEnum.js'
import { Model } from './Model.js'

let id = 1

export class Person extends Model {
  person_id = {
    generated: GENERATE_TYPES.AUTO,
    value: id,
    type: DATA_TYPES.INT,
  }
  person_name = {
    generated: GENERATE_TYPES.MANUAL,
    value: '',
    type: DATA_TYPES.STRING,
  }
  person_role = {
    generated: GENERATE_TYPES.AUTO,
    value: '',
    type: DATA_TYPES.STRING,
  }
  person_fraction_id = {
    generated: GENERATE_TYPES.MANUAL,
    value: 0,
    type: DATA_TYPES.INT,
  }

  constructor() {
    super()
    this.person_name.value = faker.person.firstName()
    this.person_id.value = id
    id++
    this.person_fraction_id.value = getRandomNumberInRange(
      1,
      fractionsValues.length
    )
    this.person_role.value = RoleEnum.USER
  }
}
