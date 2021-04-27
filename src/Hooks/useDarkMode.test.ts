/* eslint-disable import/no-extraneous-dependencies */
import { useDarkMode } from './useDarkMode';

describe('Hooks', (): void => {
  it('should call useDarkMode hook', (): void => {
    expect(useDarkMode).toBeTruthy();
  });
});
