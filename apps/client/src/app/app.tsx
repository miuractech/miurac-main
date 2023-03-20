// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';


import { Route, Routes, Link } from 'react-router-dom';
import Login from '../components/pages/login/Login';
import Navbar from '../components/layout/Navbar';
import Signup from '../components/pages/signup/Signup';

export function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
