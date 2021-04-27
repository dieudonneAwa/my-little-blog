/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Button from '../Button/Button';

describe('Button', (): void => {
  let wrapper: ShallowWrapper<void>;
  beforeEach((): void => {
    wrapper = shallow(<Button />);
  });

  it('should render Button component', (): void => {
    wrapper.simulate('click');
    expect(wrapper).toMatchSnapshot();
  });
});
