import { BrowserRouter, Routes, Route } from "react-router-dom";
import classes from "./App.module.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div className={classes.app}>
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
