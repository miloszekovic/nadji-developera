import {createStore} from 'redux'

const initialState = {
  loading: false,
  developers: [],
  filtered: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.loading }
    case 'SET_DEVELOPERS':
      return { ...state, developers: action.developers}
    case 'SET_FILTERED':
      return { ...state, filtered: action.filtered}
    case 'FILTER_DEVELOPERS':
      const filtered = state.developers.filter(dev => dev.skills.includes(action.skill))
      return { ...state,  filtered}
    default:
      return state
  } 
}

export const store = createStore(reducer)