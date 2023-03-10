import { Button, LoadingOverlay } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { IconX } from '@tabler/icons';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { httpsCallable } from 'firebase/functions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from '../component/navbar/Topbar';
import { auth, functions } from '../config/firebaseConfig';
import AdminAuth from '../MIDL/AdminAuth';
import { setUser } from '../MIDL/AdminAuth/redux-slice';
import Applicant from '../MIDL/applicants';
import ApplicantComponent from '../MIDL/applicants/applicant';
import Employee from '../MIDL/EmployeeManagement';
import Enquiry from '../MIDL/Enquiry';
import EnquiryComponent from '../MIDL/Enquiry/enquiry';
import './app.css';
import { RootState } from './store';

export function App() {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state: RootState) => state.user);
  useEffect(() => {
    const Unsubscribe = onAuthStateChanged(auth, async (cred) => {
      if (cred) {
        const idToken = await cred?.getIdTokenResult();
        console.log(idToken);
        if (!idToken?.claims['admin']) {
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
        dispatch(setUser(cred));
        // const getInitialData = async () => {
        //   const ref = collection(db, 'department');
        //   const docs = await getDocs(ref);
        //   dispatch(setdepartment(docs.docs.map((d) => d.data())));
        // };
        // getInitialData();
      } else dispatch(setUser(null));
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
        <AdminAuth />
      </div>
    );
  }
  return (
    <div>
      <NavBar>
        <Routes>
          <Route path="/" element={<Enquiry />}>
            <Route index element={<EnquiryComponent />} />
          </Route>
          <Route path="/application" element={<Applicant />}>
            <Route index element={<ApplicantComponent />} />
          </Route>
          <Route path="/employees" >
            <Route index element={<Employee />} />
          </Route>
          <Route path="/projects" >
            <Route index element={<Employee />} />
          </Route>
        </Routes>
      </NavBar>
    </div>
  );
}

export default App;
