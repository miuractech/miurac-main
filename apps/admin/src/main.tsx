import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { AnimateSharedLayout } from 'framer-motion';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
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
        fontFamily: 'Abeezee',
        defaultRadius: 8,
        headings: {
          fontFamily: 'Abeezee',
          fontWeight: 500,
        },
        components:{
          Modal: {
            defaultProps: {
              transition:'slide-down',
              transitionDuration:600
            },
          }
        }
      }}
    > 
      <Provider store={store}>
        <NotificationsProvider>
          <AnimateSharedLayout>
            <App />
          </AnimateSharedLayout>
        </NotificationsProvider>
      </Provider>
    </MantineProvider>
  </BrowserRouter>
);  
