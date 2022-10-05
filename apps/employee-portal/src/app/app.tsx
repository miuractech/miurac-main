// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { RootState } from './store';
import { auth } from '../config/firebaseConfig';
import { showNotification } from '@mantine/notifications';
import { IconX } from '@tabler/icons';
import { setUser } from '../MIDL/employeeAuth/redux-slice';
import { Button, LoadingOverlay } from '@mantine/core';
import Admin from '../MIDL/employeeAuth';
import { NavBar } from '../components/navbar/Topbar';
import { Route, Routes } from 'react-router-dom';
import Enquiry from '../MIDL/Enquiry';
import EnquiryComponent from '../MIDL/Enquiry/enquiry';

export function App() {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state: RootState) => state.user);
  useEffect(() => {
    const Unsubscribe = onAuthStateChanged(auth, async (cred) => {
      if (cred) {
        const idToken = await cred?.getIdTokenResult();
        console.log(idToken.claims['access']);

        if (!idToken.claims['access']) {
          showNotification({
            id: `reg-err-${Math.random()}`,
            autoClose: 5000,
            title: 'Not Authorised!',
            message: "You're not authorized!",
            color: 'red',
            icon: <IconX />,
            loading: false,
          });

          await signOut(auth);
          return;
        }
        auth.currentUser?.getIdToken(true)
        const claims:{[key:string]:string} = {}
        const claimsraw = JSON.parse(idToken.claims['access']) as string[];
        for (const c of claimsraw){
          claims[c] = c
        }
        dispatch(setUser({ user: cred, claims: claims }));
        // const getInitialData = async () => {
        //   const ref = collection(db, 'department');
        //   const docs = await getDocs(ref);
        //   dispatch(setdepartment(docs.docs.map((d) => d.data())));
        // };
        // getInitialData();
      } else dispatch(setUser({ user: null, claims: {} }));
    });
    return () => Unsubscribe();
  }, []);
  if (loading) {
    return (
      <div className="flex w-screen h-screen justify-center align-middle">
        <LoadingOverlay visible={loading} overlayBlur={2} />
      </div>
    );
  }
  if (!user) {
    return (
      <div className="text-center">
        <Admin />
      </div>
    );
  }
  return (
    <div>
      <NavBar>
        <Routes>
          <Route
            path="/"
            element={<Button onClick={() => signOut(auth)}>LOGOUT</Button>}
          />
          <Route path="/enquiry" element={<Enquiry />}>
            <Route index element={<EnquiryComponent />} />
          </Route>
        </Routes>
      </NavBar>
    </div>
  );
}

export default App;
