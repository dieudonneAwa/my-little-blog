import { asyncActionNames } from '../../Api';
import { Action, User } from '../../Theme/types';
import { UserTypes as Types } from '../Types/user.types';

export interface State {
  users: User[];
  user: User;
  error: '';
  loading: boolean;
}

export const initialState: State = {
  users: [],
  user: {} as User,
  error: '',
  loading: false,
};

const userReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case asyncActionNames(Types.FETCH_USERS).loading: {
      return { ...state, loading: action.payload, error: '' };
    }
    case asyncActionNames(Types.FETCH_USERS).success: {
      return { ...state, loading: false, users: action.payload, error: '' };
    }
    case asyncActionNames(Types.FETCH_USERS).failure: {
      return { ...state, loading: false, error: action.payload };
    }

    default:
      return state;
  }
};

export default userReducer;
