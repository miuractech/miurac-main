import { Button, Center, Container, Grid } from '@mantine/core';
import React from 'react';
// import LazyImage from '../../utils/LazyImage';
import LoaderComponent from '../../utils/LoadComponent';
import LOGINIMG from '../../assets/img/auth.svg';
import GOOGLEIMG from '../../assets/img/google.svg';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, functions } from '../../config/firebaseConfig';
import { showNotification } from '@mantine/notifications';
import { IconX } from '@tabler/icons';
import { environment } from '../../environments/environment';
import { defaultErrorMessage } from '../../constants';
import { getFunctions, httpsCallable } from 'firebase/functions';

const provider = new GoogleAuthProvider();
// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

// eslint-disable-next-line no-empty-pattern
export default function Admin({ }: Props) {
  return (
    <React.Suspense fallback={<LoaderComponent fullPage={true} />}>
      <Container size={'lg'} className="mx-auto">
        {/* <button onClick={async () => {
          try {
            const addMessage = httpsCallable(functions, 'addAdmin');
            await addMessage({ email: "kirandn30@gmail.com" })
            console.log("success");
          } catch (error) {
            console.log(error);
          }
        }}>add</button> */}
        <Grid>
          <Grid.Col xs={12}>
            <Center className="flex h-full min-h-[450px] justify-center align-middle mx-10">
              <img src={LOGINIMG} className='w-[600px] block mt-24'alt="Miurac-signup" />
            </Center>
            <Button
              size="lg"
              className="bg-slate-100 hover:bg-slate-300 text-black"
              leftIcon={<img src={GOOGLEIMG} alt="google sign in" />}
              onClick={async () => {
                try {
                  await signInWithPopup(auth, provider)
                } catch (error: any) {
                  showNotification({
                    id: `reg-err-${Math.random()}`,
                    autoClose: 5000,
                    title: "Not Authorised!",
                    message: environment.production ? defaultErrorMessage : error.message,
                    color: "red",
                    icon: <IconX />,
                    loading: false,
                  });
                }
              }}
            >
              Employee Sign In
            </Button>
          </Grid.Col>
        </Grid>
      </Container>
    </React.Suspense>
  );
}
