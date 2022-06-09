import "./styles/App.css";
import { Route, Routes } from "react-router-dom";

// COMPONENTS //
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        add/
        <Route index element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
