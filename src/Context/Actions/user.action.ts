import { AxiosResponse } from 'axios';
import { asyncRequest } from '../../Api';
import { Action } from '../../Theme/types';
import { UserTypes as Types } from '../Types/user.types';

export interface IUseUser {
  fetchUsers: () => Promise<AxiosResponse<any>>;
}

export const useUserActions = (dispatch: (arg0: Action) => Action): IUseUser => {
  const fetchUsers = () => asyncRequest(dispatch)(Types.FETCH_USERS, 'users', 'get');

  return { fetchUsers };
};
