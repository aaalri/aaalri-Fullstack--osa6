const filterAtStart = ''
  
const initialState = filterAtStart

export const setFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    data: {
      filter: filter,
    }
  }
}

export const removeFilter = () => {
  return {
    type: 'REMOVE_FILTER'
  }
}

const filterReducer = (state = initialState, action) => {
  let changedFilter = ''

  switch (action.type) {

  case 'SET_FILTER':
    changedFilter = action.data.filter
    return changedFilter

  case 'REMOVE_FILTER':
    return changedFilter

  default: return state
  }
}

export default filterReducer