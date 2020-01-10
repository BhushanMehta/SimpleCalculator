const initialState = {
  data:{}
}
const calcs = (state = initialState, action) => {
    switch (action.type) {
      case 'addFn':
        return {
          ...state,
          data: action.data
        }
      case 'subtractFn':
        return {
          ...state,
          data: action.data
        }
      case 'multiFn':
        return {
          ...state,
          data: action.data
        }
      case 'divisionFn':
        return {
          ...state,
          data: action.data
        }
      default:
        return state
    }
  }
  export default calcs