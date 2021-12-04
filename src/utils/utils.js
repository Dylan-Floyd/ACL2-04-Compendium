export function namifyString(string) {
  if (typeof string !== 'string') return ''
  string = string.replace(/-/gi, ' ')
  const words = string.split(' ')
  let result = ''
  for (let i = 0; i < words.length; i++) {
    let char = words[i].charAt(0)
    char = char.toUpperCase()
    result += char + words[i].slice(1) + ' '
  }
  result.trimEnd()
  return result
}