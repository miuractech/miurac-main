import Navbar from '../components/layout/Navbar';
import { useEffect , useState } from 'react';
import { getAuth } from 'firebase/auth';
import Dashboard from '../components/pages/dashboard/dashboard';
import Initial from '../components/pages/initialPage/Initial';


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
      {
        userDetails 
        ? <Dashboard />
        : <Initial />
      }
      
    </div>
  );
}

export default App;
