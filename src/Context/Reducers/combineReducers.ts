import { Action } from '../../Theme/types';
import { InputStoreState } from './index';

// Function that combines our reducers into one
const combineReducers = (reducers: any): ((state: any, action: Action) => InputStoreState) => {
  // First get an array with all the keys of the reducers (the reducer names)
  const reducerKeys = Object.keys(reducers);

  // Combines our reducer states
  return function combination(state: any = {}, action: Action): InputStoreState {
    // This is the object we are going to return.
    const nextState = {} as InputStoreState;

    // Loop through all the reducer keys
    for (let i = 0; i < reducerKeys.length; i += 1) {
      // Get the current key name
      const key = reducerKeys[i];
      // Get the current reducer
      const reducer = reducers[key];
      // Get the the previous state
      const previousStateForKey = state[key];
      // Get the next state by running the reducer
      const nextStateForKey = reducer(previousStateForKey, action);
      // Update the new state for the current reducer
      // @ts-ignore
      nextState[key] = nextStateForKey;
    }
    return nextState;
  };
};

export default combineReducers;
