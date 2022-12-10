import "./App.css";
import { Route, Routes } from "react-router-dom";
import ListaComics from "./LIstComponent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ListaComics />} />
    </Routes>
  );
}

export default App;
