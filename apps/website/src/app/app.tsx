// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Affix, Button, Transition } from '@mantine/core';
import Topbar from '../components/topbar';
import styles from './app.module.css';
import { IconArrowUp } from '@tabler/icons';
import { useWindowScroll } from '@mantine/hooks';

export function App() {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <div>
    <Topbar >
    <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftIcon={<IconArrowUp size={16} />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </Topbar>
    </div>
  );
}

export default App;
