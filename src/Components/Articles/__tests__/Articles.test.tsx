/* eslint-disable import/no-extraneous-dependencies */
import { mount } from 'enzyme';
import Articles, { Props } from '../index';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../Theme';

const props: Props = {
  fetchArticles: jest.fn().mockResolvedValue([
    {
      id: '1',
      title: 'Test title',
      createdAt: '',
      content: 'Test content',
      createdBy: 'Awa',
    },
  ]),
  articles: [
    {
      id: '1',
      title: 'Test title',
      createdAt: '',
      content: 'Test content',
      createdBy: 'Awa',
    },
  ],
  loading: false,
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

describe('Articles page', (): void => {
  let wrapper: any;

  beforeEach((): void => {
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <Articles {...props} />
      </ThemeProvider>
    );
  });

  it('should render Articles page component', (): void => {
    expect(wrapper).toMatchSnapshot();
  });
});
