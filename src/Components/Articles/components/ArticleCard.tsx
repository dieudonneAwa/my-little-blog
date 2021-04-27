import React from 'react';
import { useHistory } from 'react-router-dom';
import { FC } from 'react';
import { Action, Article } from '../../../Theme/types';
import { ArticleFooter, ArticleHeading, StyledArticle } from './Styled';

export type Props = {
  article: Article;
  setArticle: (article: Article) => Action;
};

const ArticleCard: FC<Props> = ({ article, setArticle }) => {
  const router = useHistory();

  const handleClick = () => {
    router?.push(`/${article.id}`);
    setArticle(article);
  };

  return (
    <StyledArticle
      borderWidth="1px"
      borderStyle="solid"
      borderColor="cultured"
      as="article"
      width={['100%', '100%', '700px']}
      p={['1.5rem 1.5rem', '2rem 3rem']}
      bg="white"
      m="0.5rem auto"
      idnumber={parseInt(article?.id, 10) / 3}
      onClick={handleClick}
    >
      <ArticleHeading>{article?.title}</ArticleHeading>
      <span>{article.content}</span>
      <br />
      <ArticleFooter>{`Posted ${new Date(
        article.createdAt
      ).toDateString()} by 484639`}</ArticleFooter>
    </StyledArticle>
  );
};

export default ArticleCard;
