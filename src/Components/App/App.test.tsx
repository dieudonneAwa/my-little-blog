/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { mount } from 'enzyme';
import App from './index';

describe('App', (): void => {
  let wrapper: any;
  beforeEach((): void => {
    wrapper = mount(<App />);
  });

  it('should render App component', (): void => {
    expect(wrapper).toMatchSnapshot();
  });
});
