import { DATA_TYPES, GENERATE_TYPES } from '../utils/index.js'
import { Model } from './Model.js'

let id = 1

export class Event_Place extends Model {
  event_place_id = {
    generated: GENERATE_TYPES.AUTO,
    type: DATA_TYPES.STRING,
    value: id,
  }
  place_arendator_id = {
    generated: GENERATE_TYPES.MANUAL,
    type: DATA_TYPES.INT,
    value: 0,
  }
  event_id = {
    generated: GENERATE_TYPES.MANUAL,
    type: DATA_TYPES.INT,
    value: 0,
  }

  constructor(place_arendator_id, event_id) {
    super()
    this.place_arendator_id.value = place_arendator_id
    this.event_id.value = event_id
    this.event_place_id.value = id
    id++
  }
}
