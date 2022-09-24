import React, { useState } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';

import './styles.css';
import { Button } from '@mantine/core';

function Content({
  day,
  disabled,
  children,
}: {
  day: number | string;
  disabled: boolean;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="m-title"
      layoutId="m-title"
      style={{ opacity: disabled ? 0.2 : 1 }}
    >
      <Button  >{children}</Button>
    </motion.div>
  );
}

function ExpandedCard({
  children,
  onCollapse,
}: {
  children: React.ReactNode;
  onCollapse: () => void;
}) {
  return (
    <>

      <motion.div
        className="m-card m-expanded"
        layoutId="m-expandable-card"
        onClick={onCollapse}
        // initial={{ opacity: 0, width:0 }}
        // animate={{ opacity: 1, width:0 }}
        exit={{ y: '-100px' }}
      >
        test
        {children}
      </motion.div>
      {/* <motion.div
        className="m-card m-expanded m-secondary"
        onClick={onCollapse}
        transition={{ delay: 0.3 }}
        initial={{ opacity: 0, top: '6rem' }}
        animate={{ opacity: 1, top: '0rem' }}
        exit={{ opacity: 0, top: '6rem' }}
      >
        Today is clear
      </motion.div> */}
    </>
  );
}

function CompactCard({
  children,
  onExpand,
  disabled,
}: {
  children: React.ReactNode;
  onExpand: () => void;
  disabled: boolean;
}) {
  return (
    <motion.div
      className="m-card m-compact"
      layoutId="m-expandable-card"
      onClick={disabled ? undefined : onExpand}
      exit={{}}
    >
      {children}
    </motion.div>
  );
}

// eslint-disable-next-line no-empty-pattern
export function AnimatedCTAButton({ children }: { children: React.ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const collapseDate = () => {
    setIsExpanded(false);
    // onCollapse();
  };

  const expandDate = () => {
    setIsExpanded(true);
    // onExpand();
  };

  return (
    <div className="m-card-container">
      <AnimatePresence mode="wait">
        <AnimateSharedLayout key={'test'}>
          {isExpanded ? (
            <ExpandedCard onCollapse={collapseDate}>
              <Content day={'day'} disabled={false} children={children} />
            </ExpandedCard>
          ) : (
            <CompactCard onExpand={expandDate} disabled={false}>
              <Content day={'day'} disabled={false} children={children} />
            </CompactCard>
          )}
        </AnimateSharedLayout>
      </AnimatePresence>
    </div>
  );
}
