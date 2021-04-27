/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Spinner from '../Spinner';

describe('Spinner', (): void => {
  let wrapper: ShallowWrapper<void>;
  beforeEach((): void => {
    wrapper = shallow(<Spinner />);
  });

  it('should render Spinner component', (): void => {
    expect(wrapper).toMatchSnapshot();
  });
});
