export const increment = makeAction('INCREMENT')
export const decrement = makeAction('DECREMENT')

function makeAction (type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args)
}
