import { Button } from '@mantine/core';
import React, { useState } from 'react';

// eslint-disable-next-line no-empty-pattern, @typescript-eslint/ban-types
export const Filter = ({}: {}) => {
  const [open, setOpen] = useState<string[]>([]);

  return (
    <div
    >
      <Button
      size='sm'
      variant='subtle'
      >
        filter
      </Button>
    </div>
  );
};

function hasSubArray(master: any[], sub: any[]) {
  return sub.every(
    (
      (i) => (v) =>
        (i = master.indexOf(v, i) + 1)
    )(0)
  );
}
