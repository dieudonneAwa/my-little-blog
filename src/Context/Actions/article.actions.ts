import { AxiosResponse } from 'axios';
import { ArticleTypes as Types } from '../Types/article.types';
import { Action, Article } from '../../Theme/types';
import { asyncRequest } from '../../Api';

export interface IUseArticle {
  fetchArticles: () => Promise<AxiosResponse<any>>;
  fetchComments: () => Promise<AxiosResponse<any>>;
  setArticle: (article: Article) => Action;
}

export const useArticleActions = (dispatch: (arg0: Action) => Action): IUseArticle => {
  const fetchArticles = () => asyncRequest(dispatch)(Types.FETCH_ARTICLES, 'article', 'get');
  const fetchComments = () => asyncRequest(dispatch)(Types.FETCH_COMMENTS, 'comments', 'get');

  const setArticle = (article: Article) =>
    dispatch({
      type: Types.SET_ARTICLE,
      payload: article,
    });

  return { fetchArticles, setArticle, fetchComments };
};
