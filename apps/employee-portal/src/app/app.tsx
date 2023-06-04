// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { RootState } from './store';
import { auth, db } from '../config/firebaseConfig';
import { showNotification } from '@mantine/notifications';
import { IconX } from '@tabler/icons';
import { setUser } from '../MIDL/employeeAuth/redux-slice';
import { Button, LoadingOverlay } from '@mantine/core';
import Admin from '../MIDL/employeeAuth';
import { NavBar } from '../components/navbar/Topbar';
import { Route, Routes } from 'react-router-dom';
import Enquiry from '../MIDL/Enquiry';
import EnquiryComponent from '../MIDL/Enquiry/enquiry';
import { collection, doc, getDoc } from 'firebase/firestore';
import { addPerson } from '../components/onboarding/slice';
import OnBoardingForm, {
  PeopleType,
} from '../components/onboarding/userDetails';
import { ThreeBsEnquiryComponent } from '@miurac/threebs-enquiry';

export function App() {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state: RootState) => state.user);
  const { userDetails } = useSelector((state: RootState) => state.person);

  useEffect(() => {
    const Unsubscribe = onAuthStateChanged(auth, async (cred) => {
      if (cred) {
        const idToken = await cred?.getIdTokenResult();
        if (!idToken.claims['access']) {
          showNotification({
            id: `reg-err-${Math.random()}`,
            title: 'Not Authorised!',
            message:
              'Your request is recorded, you will be give access if eligible!',
            color: 'red',
            icon: <IconX />,
            loading: false,
          });

          await signOut(auth);
          return;
        }
        auth.currentUser?.getIdToken(true);
        const claims: { [key: string]: string } = {};
        const claimsraw = JSON.parse(idToken.claims['access']) as string[];
        for (const c of claimsraw) {
          claims[c] = c;
        }
        const getInitialData = async () => {
          const ref = doc(collection(db, 'employees'), cred.uid);
          const docs = await getDoc(ref);
          if (docs.exists()) {
            const data = docs.data() as any;
            if (data.status) dispatch(addPerson(data));
          }
        };
        await getInitialData();
        dispatch(setUser({ user: cred, claims: claims }));
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
  if (!userDetails) return <OnBoardingForm />;
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
          <Route path="/threebs">
            <Route index element={<ThreeBsEnquiryComponent db={db} />} />
          </Route>
        </Routes>
      </NavBar>
    </div>
  );
}

export default App;
