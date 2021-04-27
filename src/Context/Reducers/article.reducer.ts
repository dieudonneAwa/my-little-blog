import { asyncActionNames } from '../../Api';
import { Action, Article, Comment } from '../../Theme/types';
import { ArticleTypes as Types } from '../Types/article.types';

export interface State {
  articles: Article[];
  loading: boolean;
  article: Article;
  comments: Comment[];
  loadingComments: boolean;
}

export const initialState: State = {
  articles: [],
  loading: false,
  article: {} as Article,
  comments: [],
  loadingComments: false,
};

const settingReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case asyncActionNames(Types.FETCH_ARTICLES).loading: {
      return { ...state, loading: action.payload };
    }
    case asyncActionNames(Types.FETCH_ARTICLES).success: {
      return { ...state, loading: false, articles: action.payload };
    }
    case asyncActionNames(Types.FETCH_ARTICLES).failure: {
      return { ...state, loading: false };
    }

    case asyncActionNames(Types.FETCH_COMMENTS).loading: {
      return { ...state, loadingComments: action.payload };
    }
    case asyncActionNames(Types.FETCH_COMMENTS).success: {
      return { ...state, loadingComments: false, comments: action.payload };
    }
    case asyncActionNames(Types.FETCH_COMMENTS).failure: {
      return { ...state, loadingComments: false };
    }

    case Types.SET_ARTICLE: {
      return { ...state, article: action.payload };
    }

    default:
      return state;
  }
};

export default settingReducer;
