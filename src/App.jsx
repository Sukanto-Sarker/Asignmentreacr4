import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddContact from "./pages/AddContact";
import Navbar from "./components/Navbar";
import ContactProvider from "./context/ContactProvider";

function App() {
  return (
    <ContactProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddContact />} />
        </Routes>
      </BrowserRouter>
    </ContactProvider>
  );
}

export default App;
