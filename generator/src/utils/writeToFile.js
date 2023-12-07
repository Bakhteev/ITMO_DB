import { writeFileSync } from 'node:fs'

export const writeToFile = (string) => {
  writeFileSync('./generated.sql', string)
}
