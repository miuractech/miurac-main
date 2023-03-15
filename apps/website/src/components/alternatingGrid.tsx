import { Grid, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react';

type Props = {
  children: JSX.Element[][];
};

export default function AlternatingGrid({ children }: Props) {
    const theme = useMantineTheme()
  const matches = useMediaQuery(`(min-width: ${theme.breakpoints.md}px)`);
  return (
    <Grid className="w-full p-0 m-0">
      {children.map((items, index) =>
        !matches ? (
          <>
            <Grid.Col xs={12} md={6} className="m-0 p-0">
              {items[matches && index % 2 === 0 ? 1 : 0]}
            </Grid.Col>
            <Grid.Col xs={12} md={6} className="m-0 p-0">
              {items[matches && index % 2 === 0 ? 0 : 1]}
            </Grid.Col>
            <Grid.Col xs={12} className="h-24" />
          </>
        ) : (
          <>
            <Grid.Col xs={12} md={6} className="m-0 p-0">
              {items[matches && index % 2 === 0 ? 0 : 1]}
            </Grid.Col>
            <Grid.Col xs={12} md={6} className="m-0 p-0">
              {items[matches && index % 2 === 0 ? 1 : 0]}
            </Grid.Col>
            <Grid.Col xs={12} className="h-24" />
          </>
        )
      )}
    </Grid>
  );
}

export const chunk = (arr: any[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
