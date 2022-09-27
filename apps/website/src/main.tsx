import { MantineProvider } from '@mantine/core';
import { AnimateSharedLayout } from 'framer-motion';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <MantineProvider
      theme={{
        primaryShade: 8,
        colors: {
          miuracBlack: [
            '#C7CED7',
            '#B5B5C5',
            '#9B9BA8',
            '#808089',
            '#6B6B74',
            '#54545B',
            '#414146',
            '#313135',
            '#1E1E20',
            '#121213',
          ],
        },
        primaryColor: 'miuracBlack',
        fontFamily: 'Roie',
        defaultRadius: 8,
        headings: {
          fontFamily: 'Roie',
          fontWeight: 500,
        },
      }}
    >
      <AnimateSharedLayout>
        <App />
      </AnimateSharedLayout>
    </MantineProvider>
  </BrowserRouter>
);
