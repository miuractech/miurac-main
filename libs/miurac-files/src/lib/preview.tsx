import { ActionIcon, Button, Loader } from '@mantine/core';
import { usePdf } from '@mikecousins/react-pdf';
import { IconChevronLeft, IconChevronRight, IconX } from '@tabler/icons';
import React, { useRef, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {
  path: string;
  setSelectedFile: any;
  canvasRef:React.MutableRefObject<HTMLCanvasElement | null>
};

// eslint-disable-next-line no-empty-pattern
export default function Preview({ path, setSelectedFile, canvasRef }: Props) {
  const [page, setPage] = useState(1);
  
  const { pdfDocument, } = usePdf({
    file: path,
    page,
    canvasRef,
  });
  if (!pdfDocument) return <Loader />;

  return (
    <div className='w-full' >
      <canvas ref={canvasRef} className='w-full' />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        select thumbnail page &ensp;
        <Button.Group>
          <Button
            variant="default"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            leftIcon={<IconChevronLeft />}
          >
            Prev
          </Button>
          <Button
            variant="default"
            rightIcon={<IconChevronRight />}
            disabled={page === pdfDocument.numPages}
            onClick={() => setPage(page + 1)}
          >
            Next
          </Button>
        </Button.Group>
        <Button
            variant="filled"
            leftIcon={<IconX />}
            onClick={() => {
                setSelectedFile(null);
            }}
            color="red"
          >
            Remove File
          </Button>
      </div>

      <br />
    </div>
  );
}
