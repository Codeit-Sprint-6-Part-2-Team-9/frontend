import { BrowserRouter, Routes, Route } from "react-router-dom";
import classes from "./App.module.css";
import HomePage from "./pages/HomePage";
import RoundCardComponent from "./components/RoundCardComponent";

function App() {
  return (
    <BrowserRouter>
      <div className={classes.app}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route index element={<RoundCardComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
