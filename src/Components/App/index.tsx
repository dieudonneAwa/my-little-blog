import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ResetStyles } from '../../GlobalStyles/Reset';
import { GlobalStyles } from '../../GlobalStyles';
import { theme, darkTheme } from '../../Theme';
import ArticlesPage from '../Articles';
import { Box } from '../Commons/Box';
import { Context, Provider } from '../../Context/StoreContext';
import MoonIcon from '../Commons/Icons/Moon';
import SolarIcon from '../Commons/Icons/Solar';
import { useDarkMode } from '../../Hooks/useDarkMode';
import ArticlePage from '../Article';
import { AppHeading, ThemeToggler } from './Styled';

function App() {
  const [appTheme, toggleTheme] = useDarkMode();
  const { actions, state } = useContext(Context);

  return (
    <ThemeProvider theme={appTheme === 'light' ? theme : darkTheme}>
      <ResetStyles />
      <GlobalStyles />
      <Box position="relative" display="flex" flexDirection="column" alignItems="center">
        <ThemeToggler
          position="absolute"
          right={['1rem', '1rem', "3rem"]}
          top="3rem"
          // @ts-ignore
          onClick={() => toggleTheme()}
          data-test="theme-toggler"
        >
          {appTheme === 'light' && <MoonIcon />}
          {appTheme === 'dark' && <SolarIcon fill="white" />}
        </ThemeToggler>
        <AppHeading mt={['3rem', '3rem', '3rem']}>Awa's Little Blog</AppHeading>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <ArticlesPage
                  fetchArticles={actions.fetchArticles}
                  articles={state?.articles?.articles}
                  loading={state?.articles?.loading}
                  setArticle={actions.setArticle}
                />
              )}
            />
            <Route
              exact
              path="/:id"
              render={() => (
                <ArticlePage
                  fetchComments={actions.fetchComments}
                  comments={state.articles.comments}
                  loadingComments={state.articles.loadingComments}
                  article={state.articles.article}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

const AppPage = () => (
  <Provider>
    <App />
  </Provider>
);

export default AppPage;
