import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./routes/Route";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {ROUTES.map((item) => (
            <Route path={item.name} element={item.component} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
