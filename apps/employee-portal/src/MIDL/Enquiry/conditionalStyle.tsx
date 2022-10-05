import { DEFAULT_THEME } from '@mantine/core';

export const conditionalRowStyles = [
  {
    when: (row: any) => !row.finalScore,
    style: {
      backgroundColor: 'white',
      color: 'black',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
  {
    when: (row: any) => row.finalScore > 4,
    style: {
      backgroundColor: DEFAULT_THEME.colors['green'][1],
      color: 'black',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
  {
    when: (row: any) => row.finalScore < 5,
    style: {
      backgroundColor: DEFAULT_THEME.colors['red'][1],
      color: 'black',
      '&:hover': {
        cursor: 'not-allowed',
      },
    },
  },
];
