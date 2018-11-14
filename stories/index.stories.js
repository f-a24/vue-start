import { storiesOf } from '@storybook/vue';
import App from '../src/App';

storiesOf('App', module).add('App', () => ({
  components: { App },
  template: '<app />'
}));
