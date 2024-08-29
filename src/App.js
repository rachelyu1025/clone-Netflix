import './App.css';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Home from './pages/Home';
import Movies from './pages/Movies/index';
import MovieDetail from './pages/MovieDetail/index';

function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path='movies'>
          <Route index element={<Movies />} />
          <Route path=':id' element={<MovieDetail />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
