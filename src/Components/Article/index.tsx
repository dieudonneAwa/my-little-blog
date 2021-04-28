/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Avatar from 'react-avatar';
import { Box } from '../Commons/Box';
import ArrowBackIcon from '../Commons/Icons/ArrowBack';
import { ArticleHeading, BackButton, CommentTime, CommentName } from './Styled';
import { Article, Comment } from '../../Theme/types';
import { AxiosResponse } from 'axios';
import Spinner from '../Commons/Spinner';

export type Props = {
  article: Article;
  fetchComments: () => Promise<AxiosResponse<any>>;
  comments: Comment[];
  loadingComments: boolean;
};

const ArticlePage = ({ article, fetchComments, comments, loadingComments }: Props) => {
  const router = useHistory();

  useEffect(() => {
    if (!comments.length) {
      fetchComments();
    }
  }, []);

  const handleClick = () => {
    router?.push('/');
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" px={['1rem', '1rem']}>
      <BackButton
        position="absolute"
        top="3rem"
        left={['1rem', '1rem', '3rem']}
        data-test="go-back-btn"
        onClick={handleClick}
      >
        <ArrowBackIcon /> Back
      </BackButton>
      <Box width={['100%', '100%', '700px']} minHeight="250px">
        <ArticleHeading>{article?.title}</ArticleHeading>
        <p>{article?.content}</p>
      </Box>
      <Box
        width={['100%', '100%', '650px']}
        display="flex"
        flexDirection="column"
        alignItems="center"
        flexWrap={['wrap', 'nowrap']}
      >
        {loadingComments && (
          <Box display="flex" justifyContent="center" alignItems="center" height="300px">
            <Spinner />
          </Box>
        )}
        {comments?.map((comment) => (
          <Box
            borderTopWidth="1px"
            width="100%"
            minHeight="130px"
            borderStyle="solid"
            p="1rem"
            borderColor="cultured"
          >
            <Box display="flex" alignItems="center" flexWrap="nowrap">
              <Avatar name={comment.name} round size="35px" />
              <Box ml="0.5rem" p={0}>
                <CommentName>{comment.name}</CommentName> <br />
                <CommentTime>{new Date(comment.createdAt).toDateString()}</CommentTime>
              </Box>
            </Box>
            <p>{comment.content}</p>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ArticlePage;
