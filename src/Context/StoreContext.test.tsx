/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Props, Provider } from './StoreContext';

const props: Props = {
  children: () => null,
};

describe('Context Provider', (): void => {
  let wrapper: ShallowWrapper<void>;
  beforeEach((): void => {
    wrapper = shallow(<Provider {...props} />);
  });
  it('should render Context Provider component', (): void => {
    expect(wrapper).toMatchSnapshot();
  });
});
