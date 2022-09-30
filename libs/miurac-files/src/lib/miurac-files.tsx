import styles from './miurac-files.module.css';
import { Button, Card, Grid, Modal, Tabs, Title } from '@mantine/core';
import { IconBook, IconCertificate } from '@tabler/icons';
import UploadFile from './upload';
import { FirebaseApp } from 'firebase/app';
import { useEffect, useState } from 'react';
import {
  collection,
  getDocs,
  getFirestore,
  limit,
  query,
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
export type stateUrl = { url: string; metaData: File };
export interface MiuracFilesProps {
  setUrl?: React.Dispatch<React.SetStateAction<miuracFileType | null>>;
  app: FirebaseApp;
  getUrl: (file: miuracFileType) => unknown | void;
  updateFirestore: boolean;
  buttonComponent?: React.ReactNode;
}

export function MiuracFiles({
  app,
  getUrl,
  updateFirestore,
  buttonComponent,
}: MiuracFilesProps) {
  // const db = getFirestore(app);
  // const uid = getAuth(app).currentUser?.uid;
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState<miuracFileType[]>([]);
  // useEffect(() => {
  //   const getInitialData = async () => {
  //     const q = query(collection(db, `uploads/${uid}/files`), limit(10));
  //     const docs = await getDocs(q);
  //     setFiles(docs.docs.map((d) => d.data()) as miuracFileType[]);
  //   };
  //   getInitialData();
  // }, []);

  return (
    <>
      <div onClick={() => setOpen(true)}>
      {buttonComponent ??(
        <Button >Upload PDF</Button>
      )}
      </div>
      <Modal opened={open} onClose={() => setOpen(false)} centered size={'80%'}>
        <div style={{ minHeight: 400 }}>
          <Tabs defaultValue="files" variant="outline">
            <Tabs.List>
              <Tabs.Tab value="files" icon={<IconCertificate size={14} />}>
                Your Files
              </Tabs.Tab>
              <Tabs.Tab value="upload" icon={<IconBook size={14} />}>
                Upload
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="files" pt="xs">
              <Grid>
                {files.map((file: miuracFileType) => (
                  <Grid.Col
                    xs={12}
                    md={4}
                    sm={6}
                    lg={3}
                    style={{ cursor: 'pointer' }}
                    onClick={()=>{
                      getUrl(file)
                      setOpen(false)
                    }}
                  >
                    <Card shadow={'xs'}>
                      <img
                        src={file.preview}
                        style={{
                          maxWidth: 250,
                          maxHeight: 250,
                          display: 'block',
                          margin: 'auto',
                        }}
                        alt=""
                      />
                      <Title align="center" mt={8} order={6}>
                        {file.metaData.name}
                      </Title>
                    </Card>
                  </Grid.Col>
                ))}
              </Grid>
            </Tabs.Panel>

            <Tabs.Panel value="upload" pt="xs">
              <UploadFile
                // setUrl={setUrl}
                app={app}
                getUrl={getUrl}
                updateFirestore={updateFirestore}
                setOpen={setOpen}
              />
            </Tabs.Panel>
          </Tabs>
        </div>
      </Modal>
    </>
  );
}

export default MiuracFiles;

export type miuracFileType = {
  url: string;
  preview: string;
  metaData: {
    name: string;
    size: number;
    type: string;
    lastModified: number;
  };
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
  path: string;
};
