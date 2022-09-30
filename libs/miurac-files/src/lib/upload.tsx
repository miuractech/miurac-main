import { FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import React, { useEffect, useRef, useState } from 'react';
import useStorage from './hooks/useStorage';
import { IconFileUpload, IconPhoto, IconUpload, IconX } from '@tabler/icons';
import { useDropzone } from 'react-dropzone';
import {
  Button,
  Group,
  Loader,
  LoadingOverlay,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { miuracFileType, stateUrl } from './miurac-files';
import { usePdf } from '@mikecousins/react-pdf';
import Preview from './preview';
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from 'firebase/firestore';
type Props = {
  // setUrl?: React.Dispatch<React.SetStateAction<stateUrl | null>>;
  app: FirebaseApp;
  getUrl: (file: miuracFileType) => unknown | void;
  updateFirestore: boolean;
  setOpen: any;
};

export default function UploadImage({
  //   setUrl,
  app,
  getUrl,
  updateFirestore,
  setOpen,
}: Props) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const user = getAuth(app).currentUser;
  const { upload, loading } = useStorage({ app, updateFirestore });
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      'application/pdf': ['.pdf'],
    },
    maxFiles: 1,
    onDrop: (file) => setSelectedFile(file[0]),
  });

  const uploadFunc = async () => {
    if (canvasRef.current) {
      const previewImageDataUrl = canvasRef.current.toDataURL();

      const previewBlob = await (await fetch(previewImageDataUrl)).blob();
      const previewFile = new File([previewBlob], 'preview.jpg', {
        type: 'image/png',
        lastModified: new Date().getTime(),
      });
      const url = (await upload({
        file: acceptedFiles[0],
        path: `uploads/${user?.uid}/file`,
        fileName: acceptedFiles[0].name,
      })) as string;
      const previewUrl = (await upload({
        file: previewFile,
        path: `uploads/${user?.uid}/preview`,
        fileName: acceptedFiles[0].name,
      })) as string;
      const db = getFirestore(app);
      const uid = getAuth(app).currentUser?.uid;
      const metaData = {
        name: acceptedFiles[0].name,
        lastModified: acceptedFiles[0].lastModified,
        size: acceptedFiles[0].size,
        type: acceptedFiles[0].type,
      };
      await addDoc(collection(db, `uploads/${uid}/files`), {
        createdAt: serverTimestamp(),
        path: `uploads/${user?.uid}/files`,
        url,
        preview: previewUrl,
        metaData,
      });
      getUrl({
        url: url,
        preview: previewUrl,
        metaData,
        createdAt: {
          nanoseconds: new Date().getTime() * 100,
          seconds: new Date().getTime(),
        },
        path: `/${`uploads/${user?.uid}/files`}/${metaData.name}`,
      });
      setOpen(false);
    }
  };
  //   useEffect(() => {
  //     if (selectedFile) updateMeta({ name: selectedFile.name, size: selectedFile.size });
  //     else updateMeta({ name: "", size: null });
  //   }, [selectedFile]);

  return (
    <div>
      <LoadingOverlay visible={loading} overlayBlur={2} />
      {selectedFile ? (
        <>
          <Preview
            path={URL.createObjectURL(selectedFile)}
            setSelectedFile={setSelectedFile}
            canvasRef={canvasRef}
          />
          <Title order={6}>{acceptedFiles[0].name}</Title>

          <Button onClick={uploadFunc}>Upload</Button>
        </>
      ) : (
        <section
          style={{
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            {...getRootProps({ className: 'dropzone' })}
            style={{ padding: '40px 30px 0px' }}
          >
            <input {...getInputProps()} />
            <div style={{ textAlign: 'center' }}>
              <IconFileUpload />
            </div>
            <Text variant="text" color={'gray'} align="center">
              click to upload or drop files to upload
            </Text>
          </div>
        </section>
      )}
    </div>
  );
}
