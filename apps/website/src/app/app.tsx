import Topbar from '../components/topbar';
import ScrollToTop from '../components/utils/ScrollToTop';
import Home from '../pages/home';

export function App() {
  return (
    <Topbar>
      <div style={{ marginTop: -60 }}>
        <Home />
        <ScrollToTop />
      </div>
    </Topbar>
  );
}

export default App;
