
function StateReducer(state, action) {

  if (action.type === 'increment') {
    return state + 1;
  } else if (action.type === 'decrement') {
    return state - 1;
  } else if (action.type === 'reset') {
    return state =0;
}
  else if (action.type === 'setvalue') {
    return state = 1;
  
  }
 else {
  return state; 
}
}
export default StateReducer;