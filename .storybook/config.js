import { configure } from '@storybook/html';

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.(js|md|mdx)$/), module);
