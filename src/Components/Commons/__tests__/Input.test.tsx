/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Input from '../Input';

describe('Input', (): void => {
  let wrapper: ShallowWrapper<void>;
  beforeEach((): void => {
    wrapper = shallow(<Input />);
  });

  it('should render Input component', (): void => {
    expect(wrapper).toMatchSnapshot();
  });
});
