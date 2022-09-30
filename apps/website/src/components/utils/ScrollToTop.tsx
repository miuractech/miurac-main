import React from 'react';
import { ActionIcon, Affix, Button, Transition } from '@mantine/core';
import { IconArrowUp } from '@tabler/icons';
import { useWindowScroll } from '@mantine/hooks';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {
  onClick:()=>void
  visible:boolean
};

// eslint-disable-next-line no-empty-pattern
export default function ScrollToTop({onClick, visible}: Props) {
  return (
    <Affix  position={{ bottom: 40, right: 40 }} >
      <Transition transition="slide-up" duration={600} mounted={visible}>
        {(transitionStyles) => (
          <ActionIcon
            // leftIcon={<IconArrowUp size={16} />}
            style={{...transitionStyles}}
            variant="filled"
            onClick={() => onClick()}
            className="font-light"
          >
            <IconArrowUp size={16} />
          </ActionIcon>
        )}
      </Transition>
    </Affix>
  );
}
