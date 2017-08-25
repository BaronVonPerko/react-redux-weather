import { FETCH_WEATHER } from '../actions/index';


export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      // return a new array that contains the old state and the new data
      return [ action.payload.data, ...state ];
  }

  return state;
}
