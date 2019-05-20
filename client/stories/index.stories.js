import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
// import { Button, Welcome } from '@storybook/react/demo';
import { Button } from '../components/styles/buttons';
import { StyledNavItem } from '../components/styles/nav';
// Font styles
import '../static/icofont.css';

// storiesOf('Welcome', module).add('to Storybook', () => (
//   <Welcome showApp={linkTo('Button')} />
// ));

// storiesOf('Button', module)
//   .add('with text', () => (
//     <Button onClick={action('clicked')}>Hello Button</Button>
//   ))
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role='img' aria-label='so cool'>
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));

storiesOf('Button', module)
    .add('standard', () => <Button onClick={action('clicked')}>Submit</Button>)
    .add('cancel', () => <Button danger onClick={action('clicked')}>Cancel</Button>);

    storiesOf('Nav Item', module)
    .add('with icon', () => <StyledNavItem onClick={action('clicked')}><a><i className="icofont-ui-calendar"></i></a></StyledNavItem>);