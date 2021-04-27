/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Moon from '../../Icons/Moon';

describe('Moon', (): void => {
  let wrapper: ShallowWrapper<void>;
  beforeEach((): void => {
    wrapper = shallow(<Moon />);
  });

  it('should render Moon component', (): void => {
    expect(wrapper).toMatchSnapshot();
  });
});
