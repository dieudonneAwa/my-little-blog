/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import ArrowBack from '../../Icons/ArrowBack';

describe('ArrowBack', (): void => {
  let wrapper: ShallowWrapper<void>;
  beforeEach((): void => {
    wrapper = shallow(<ArrowBack />);
  });

  it('should render ArrowBack component', (): void => {
    expect(wrapper).toMatchSnapshot();
  });
});
