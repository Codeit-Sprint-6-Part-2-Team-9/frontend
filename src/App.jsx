import { BrowserRouter, Routes, Route } from "react-router-dom";
import classes from "./App.module.css";
import HomePage from "./pages/HomePage";
import Header from "./components/Layout/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className={classes.app}>
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
