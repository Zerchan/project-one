import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import sunsetTheme from '../themes/sunset.theme';

addDecorator((story) => (
  <ThemeProvider theme={ sunsetTheme }>
    {story()}
  </ThemeProvider>
))

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories () {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);