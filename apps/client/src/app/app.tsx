import Navbar from '../components/layout/Navbar';
import { useEffect , useState } from 'react';
import { getAuth } from 'firebase/auth';
import Dashboard from '../components/pages/dashboard/dashboard';
import Initial from '../components/pages/initialPage/Initial';
import { Routes , Route } from 'react-router-dom';
import ForgotPassword from '../components/pages/forgot-password/ForgotPassword';
import PasswordChange from '../components/pages/password-page/PasswordChange';


export function App() {
  const [userDetails , setUserDetails] = useState<any | null>(null);

  const auth1 = getAuth();

  useEffect(() => {
    auth1.onAuthStateChanged(
      (user) => {
        setUserDetails(user);
      }
    );
  })


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={
          userDetails 
            ? <Dashboard />
            : <Initial />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/change-password' element={<PasswordChange />} />
      </Routes>
    </div>
  );
}

export default App;
