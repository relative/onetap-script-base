export function escapeString(str) {
  return str.replace(/"/gi, '\\"').replace(/'/gi, "\\'")
}
export function escapeRegex(str) {
  return escapeString(str)
    .replace(/\\/gi, '\\\\')
    .replace(/(["'\.\(\)\[\]])/gi, '\\$1')
}
