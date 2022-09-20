import React from 'react';
import { Affix, Button, Transition } from '@mantine/core';
import { IconArrowUp } from '@tabler/icons';
import { useWindowScroll } from '@mantine/hooks';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

// eslint-disable-next-line no-empty-pattern
export default function ScrollToTop({}: Props) {
  const [scroll, scrollTo] = useWindowScroll();
  return (
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
  );
}
