/**
 *  @param {string} string
 *  @param {string[]} data
 *
 */
export const replacer = (string, data) => {
  return string.replace(/\$(\d+)/g, (match, i) => {
    const index = parseInt(i) - 1
    return data[index] || match
  })
}
