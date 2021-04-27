import React, { useReducer, createContext, useMemo } from 'react';
import { Action } from '../Theme/types';
import useActions, { Actions } from './Actions';
import reducers, { initialStore, InputStoreState } from './Reducers';

export type Props = {
  children: React.ReactNode;
};

export type IStore = {
  actions: Actions;
  state: InputStoreState;
};

const Context = createContext({
  actions: {},
  state: initialStore,
} as IStore);

// The store provider
const Provider = ({ children }: Props) => {
  // Get state and dispatch from Reacts new API useReducer.
  const [reducersState, dispatch] = useReducer(reducers, initialStore);
  const state = useMemo(() => reducersState, [reducersState]);

  // Create an object of all our actions,
  // handling special cases where a simple dispatch is too primitive
  const actions = useActions(dispatch as (arg0: Action) => Action);
  const stateActions = useMemo(() => actions, [actions]);

  // Render state and special case actions
  return (
    <Context.Provider
      // @ts-ignore
      value={{ state, actions: stateActions }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
