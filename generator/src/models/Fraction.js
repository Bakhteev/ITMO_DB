import { faker } from '@faker-js/faker/locale/ru'
import { DATA_TYPES, GENERATE_TYPES } from '../utils/index.js'
import { Model } from './Model.js'
let id = 1

export class Fraction extends Model {
  id = { generated: GENERATE_TYPES.AUTO, type: DATA_TYPES.INT, value: 0 }
  fraction_name = {
    generated: GENERATE_TYPES.MANUAL,
    type: DATA_TYPES.STRING,
    value: '',
  }

  constructor(fraction_name = '') {
    super()
    this.fraction_name.value = fraction_name
    this.id.value = id
    id++
  }
}

export const fractionsValues = [
  'Отречение',
  'Эрудиция',
  'Бесстрашие',
  'Дружелюбие',
  'Искренность',
]
