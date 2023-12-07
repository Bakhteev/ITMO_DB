import { faker } from '@faker-js/faker/locale/ru'
import { DATA_TYPES, GENERATE_TYPES } from '../utils/index.js'
import { Model } from './Model.js'
let id = 1
export class Report extends Model {
  report_id = {
    generated: GENERATE_TYPES.AUTO,
    value: id,
    type: DATA_TYPES.INT,
  }
  report_created_by = {
    generated: GENERATE_TYPES.MANUAL,
    value: 0,
    type: DATA_TYPES.INT,
  }
  report_title = {
    generated: GENERATE_TYPES.MANUAL,
    value: '',
    type: DATA_TYPES.STRING,
  }
  report_text = {
    generated: GENERATE_TYPES.MANUAL,
    value: '',
    type: DATA_TYPES.STRING,
  }

  constructor(report_created_by) {
    super()
    this.report_id.value = id
    id++
    this.report_created_by.value = report_created_by
    this.report_text.value = faker.string.nanoid()
    this.report_title.value = faker.string.nanoid({ min: 5, max: 20 })
  }
}
