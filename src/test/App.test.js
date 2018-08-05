import { shallowMount } from '@vue/test-utils';
import App from '../App';

describe('App', () => {
  it('renders msg when passed', () => {
    expect(shallowMount(App).text()).toMatch('Hello World!!');
  });
});
