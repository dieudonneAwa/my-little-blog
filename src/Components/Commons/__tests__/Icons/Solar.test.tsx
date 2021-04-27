/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Solar from '../../Icons/Solar';

describe('Solar', (): void => {
  let wrapper: ShallowWrapper<void>;
  beforeEach((): void => {
    wrapper = shallow(<Solar />);
  });

  it('should render Solar component', (): void => {
    expect(wrapper).toMatchSnapshot();
  });
});
