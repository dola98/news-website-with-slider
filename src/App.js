import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./components/admin/Admin";
import MakeAdmin from "./components/admin/makeAdmin/MakeAdmin";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import NotFound from "./components/notFound/NotFound";
import ViewNews from "./components/viewNews/ViewNews";
import './App.css'

export const LanguageContext = createContext();

function App() {
  const [isEnglish, setEnglish] = useState(true);
  return (
    <LanguageContext.Provider value={[isEnglish, setEnglish]}>
     
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" caseSensitive={false} element={<Home />} />
          <Route path="/addNews" caseSensitive={false} element={<Admin />} />
          <Route path="/admin" caseSensitive={false} element={<MakeAdmin />} />
          <Route path="/view/:id" caseSensitive={false} element={<ViewNews />} />
          <Route path="*" caseSensitive={false} element={<NotFound />} />
        </Routes>
      </Router>

    </LanguageContext.Provider>
  );
}

export default App;
