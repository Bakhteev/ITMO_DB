import { DATA_TYPES, GENERATE_TYPES } from '../utils/index.js'
import { Model } from './Model.js'
import { StatusEnum } from './StatusEnum.js'
import { faker } from '@faker-js/faker/locale/ru'
let id = 1

export class Task extends Model {
  task_id = {
    generated: GENERATE_TYPES.AUTO,
    type: DATA_TYPES.INT,
    value: id,
  }
  task_person_to = {
    generated: GENERATE_TYPES.MANUAL,
    type: DATA_TYPES.INT,
    value: 0,
  }
  task_person_from = {
    generated: GENERATE_TYPES.MANUAL,
    type: DATA_TYPES.INT,
    value: 0,
  }
  task_text = {
    generated: GENERATE_TYPES.MANUAL,
    type: DATA_TYPES.STRING,
    value: '',
  }
  task_status = {
    generated: GENERATE_TYPES.AUTO,
    type: DATA_TYPES.STRING,
    value: '',
  }
  task_title = {
    generated: GENERATE_TYPES.MANUAL,
    type: DATA_TYPES.STRING,
    value: '',
  }

  constructor(task_person_from, task_person_to) {
    super()
    this.task_id.value = id
    id++
    this.task_person_from.value = task_person_from
    this.task_person_to.value = task_person_to
    this.task_status.value = StatusEnum.CREATED
    this.task_text.value = faker.string.nanoid()
    this.task_title.value = faker.string.nanoid({ min: 10, max: 120 })
  }
}
