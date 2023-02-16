import { html } from 'lit';
import '../src/jalen-card.js';

export default {
  title: 'JalenCard',
  component: 'jalen-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <jalen-card
      style="--jalen-card-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </jalen-card>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
