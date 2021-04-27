/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Article, { Props } from './index';
import { findByTestAttr } from '../utils';
import { Article as IArticle } from '../../Theme/types';

const props: Props = {
  article: {} as IArticle,
  fetchComments: jest.fn(),
  comments: [
    {
      id: '1',
      name: 'name',
      content: 'Content',
      createdAt: new Date().toISOString(),
    },
  ],
  loadingComments: false,
};

describe('Article', (): void => {
  let wrapper: ShallowWrapper<void>;
  beforeEach((): void => {
    wrapper = shallow(<Article {...props} />);
  });

  it('should render Article component', (): void => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should simulate back button click', (): void => {
    const backButton = findByTestAttr(wrapper, 'go-back-btn');
    backButton.simulate('click');
  });
});
