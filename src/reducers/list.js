export function list(state=[], action) {
  if(action.type === 'ITEMS') {
    return action.items;
  }

  return state;
}
