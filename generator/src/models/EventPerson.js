import { DATA_TYPES, GENERATE_TYPES } from '../utils/index.js'
import { Model } from './Model.js'

let id = 1

export class Event_Person extends Model {
  event_participant_id = {
    generated: GENERATE_TYPES.AUTO,
    value: id,
    type: DATA_TYPES.INT,
  }
  participant_id = {
    generated: GENERATE_TYPES.MANUAL,
    value: 0,
    type: DATA_TYPES.INT,
  }
  event_id = {
    generated: GENERATE_TYPES.MANUAL,
    value: 0,
    type: DATA_TYPES.INT,
  }

  constructor(participant_id, event_id) {
    super()
    this.event_participant_id.value = id
    id++
    this.participant_id.value = participant_id
    this.event_id.value = event_id
  }
}
