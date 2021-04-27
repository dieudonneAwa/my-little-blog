import { ShallowWrapper } from 'enzyme';

export const findByTestAttr = (wrapper: ShallowWrapper<void>, val: string) =>
  wrapper.find(`[data-test="${val}"]`);
