import combineReducers from './combineReducers';
import articleReducer, {
  initialState as articleInitialState,
  State as ArticleState,
} from './article.reducer';
import userReducer, { initialState as userInitialState, State as UserState } from './user.reducer';

export interface InputStoreState {
  users: UserState;
  articles: ArticleState;
}

export const initialStore: InputStoreState = {
  users: userInitialState,
  articles: articleInitialState,
};

// Custome combineReducers function just like in redux. Combines all our reducers into one
const rootReducer = combineReducers({
  users: userReducer,
  articles: articleReducer,
});

export default rootReducer;
