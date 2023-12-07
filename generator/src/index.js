import { faker } from '@faker-js/faker/locale/ru'
import {
  extractManualGeneratedData,
  extractManualGeneratedFields,
  insertGenerator,
  generateData,
  writeToFile,
  getRandomNumberInRange,
} from './utils/index.js'
import {
  Characteristic,
  Event,
  Event_Person,
  Event_Place,
  Fraction,
  Person,
  Place,
  Place_Arendator,
  Place_Characteristic,
  Report,
  Task,
  Test_Result,
  fractionsValues,
} from './models/index.js'

const main = () => {
  const number = parseInt(process.argv[2]) || 10

  let res = ''

  const fractions = generateData(
    fractionsValues.length,
    Fraction,
    ...fractionsValues
  )
  res += insertGenerator(Fraction, fractions)

  const persons = generateData(number, Person)
  res += insertGenerator(Person, persons)

  const reportDeps = new Array(number)
    .fill(0)
    .map(() => getRandomNumberInRange(1, number))
  const reports = generateData(number, Report, ...reportDeps)
  res += insertGenerator(Report, reports)

  const taskDeps = new Array(number).fill(null).map(() => {
    const personFrom = getRandomNumberInRange(1, number)
    let personTo = getRandomNumberInRange(1, number)

    while (personFrom === personTo) {
      personTo = getRandomNumberInRange(1, number)
    }

    return [personFrom, personTo]
  })
  const tasks = generateData(number, Task, ...taskDeps)
  res += insertGenerator(Task, tasks)

  const testResults = generateData(number, Test_Result)
  res += insertGenerator(Test_Result, testResults)

  const events = generateData(number, Event)
  res += insertGenerator(Event, events)

  const eventPersonDeps = new Array(number)
    .fill(0)
    .map(() => [
      getRandomNumberInRange(1, number),
      getRandomNumberInRange(1, number),
    ])

  const eventPersons = generateData(number, Event_Person, ...eventPersonDeps)
  res += insertGenerator(Event_Person, eventPersons)

  const places = generateData(number, Place)
  res += insertGenerator(Place, places)

  const placeArendatorDeps = new Array(number)
    .fill(0)
    .map(() => [
      getRandomNumberInRange(1, number),
      getRandomNumberInRange(1, number),
    ])

  const placeArendators = generateData(
    number,
    Place_Arendator,
    ...placeArendatorDeps
  )
  res += insertGenerator(Place_Arendator, placeArendators)

  const characteristics = generateData(number, Characteristic)
  res += insertGenerator(Characteristic, characteristics)

  const placeCharacteristicDeps = new Array(number)
    .fill(0)
    .map(() => [
      getRandomNumberInRange(1, number),
      getRandomNumberInRange(1, number),
    ])

  const placeCharacteristics = generateData(
    number,
    Place_Characteristic,
    ...placeCharacteristicDeps
  )

  res += insertGenerator(Place_Characteristic, placeCharacteristics)

  const eventPlaceDeps = new Array(number)
    .fill(0)
    .map(() => [
      getRandomNumberInRange(1, number),
      getRandomNumberInRange(1, number),
    ])

  const eventPlaces = generateData(number, Event_Place, ...eventPlaceDeps)
  res += insertGenerator(Event_Place, eventPlaces)

  writeToFile(res)
}

main()
