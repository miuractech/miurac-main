import { Route, Routes } from 'react-router-dom';
import Topbar from '../components/topbar';
import ScrollToTop from '../components/utils/ScrollToTop';
import Home from '../pages/home/home';

export function App() {
  return (
    <div className="scroll">
      <Topbar />
      <Routes>
          <Route
            path={'/'}
            element={
              <div>
                <Home />
                
              </div>
            }
          ></Route>
        </Routes>
        <ScrollToTop />
    </div>
  );
}

export default App;
