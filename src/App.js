import './App.css';
import Breeds from './components/Breeds/Breeds';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from './common/constants/routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.breeds} exact element={<Breeds />} />
          <Route path={ROUTES.home} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
