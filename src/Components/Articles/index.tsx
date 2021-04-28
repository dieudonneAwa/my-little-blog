/* eslint-disable react-hooks/exhaustive-deps */
import { AxiosResponse } from 'axios';
import { useEffect } from 'react';
import { Action, Article } from '../../Theme/types';
import { Box } from '../Commons/Box';
import Spinner from '../Commons/Spinner';
import ArticleCard from './components/ArticleCard';

export type Props = {
  fetchArticles: () => Promise<AxiosResponse<any>>;
  articles: Article[];
  loading: boolean;
  setArticle: (article: Article) => Action;
};

const ArticlesPage = ({ fetchArticles, articles, setArticle, loading }: Props) => {
  useEffect(() => {
    (async () => {
      await fetchArticles();
    })();
  }, []);

  return (
    <Box px="1rem">
      {articles?.map((article) => (
        <ArticleCard setArticle={setArticle} key={article.id} article={article} />
      ))}
      {loading && (
        <Box display="flex" justifyContent="center" alignItems="center" height="500px">
          <Spinner />
        </Box>
      )}
    </Box>
  );
};

export default ArticlesPage;
