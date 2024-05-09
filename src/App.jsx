import { BrowserRouter, Routes, Route } from 'react-router-dom';
import classes from './App.module.css';
import HomePage from './pages/HomePage';
import List from './pages/List';
import MyPage from './pages/MyPage';
import NotFound from './pages/NotFound';
import Header from './components/Layout/Header';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <div className={classes.app}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route element={<Layout />}>
            <Route path="/list" element={<List />} />
            <Route path="/mypage" element={<MyPage />} />
          </Route>
          <Route
            path="/*"
            element={<NotFound errorMessage="페이지가 존재하지 않습니다." />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
