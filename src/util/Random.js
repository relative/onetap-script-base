export function randomIdentifier(scope = '_') {
  if (scope.match(/^\d/)) scope = '_' + scope
  return scope + Math.random().toString(16).slice(2)
}
