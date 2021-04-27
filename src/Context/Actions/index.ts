import { Action } from '../../Theme/types';
import { IUseArticle, useArticleActions } from './article.actions';
import { IUseUser, useUserActions } from './user.action';

export type Actions = IUseArticle & IUseUser;

// Combine our actions and return them
const useActions = (dispatch: (arg0: Action) => Action): Actions => ({
  // New action go here in the same manner
  ...useArticleActions(dispatch),
  ...useUserActions(dispatch),
});

export default useActions;
