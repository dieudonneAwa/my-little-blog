/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import ArticleCard, { Props } from '../components/ArticleCard';
import { Article } from '../../../Theme/types';

const props: Props = {
  article: {} as Article,
  setArticle: jest.fn().mockReturnValue({
    type: 'SET_ARTICLE',
    payload: {
      id: '1',
      title: 'Test title',
      createdAt: '',
      content: 'Test content',
      createdBy: 'Awa',
    },
  }),
};

describe('ArticleCard', (): void => {
  let wrapper: ShallowWrapper<void>;

  beforeEach((): void => {
    wrapper = shallow(<ArticleCard {...props} />);
  });

  it('should render ArticleCard page component', (): void => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render article', (): void => {
    wrapper.simulate('click');
    expect(props.setArticle).toHaveBeenCalled();
  });
});
