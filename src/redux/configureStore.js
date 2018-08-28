import { createStore } from 'redux';
import { Reducer, initialState } from './reducer';

// store part of flux architecture
// don't have to follow this parttern (with this file)
export const ConfigureStore = () => {
  const store = createStore(
    Reducer,
    initialState
  );
  return store;
};