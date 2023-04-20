import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import LayoutPublic from "./layouts/LayoutPublic";
import Inicio from "./Pages/Inicio";
import Contacto from "./Pages/Contacto";
import Blog from "./Pages/Blog";
import NotFound from "./Pages/NotFound";
import BlogDetails from "./Pages/BlogDetails";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LayoutPublic />}>
          <Route element={<Inicio />} index></Route>
          <Route element={<Contacto />} path="/contacto"></Route>
          <Route element={<Blog />} path="/blog"></Route>
          <Route element={<BlogDetails />} path="/blog/:id"></Route>
          <Route element={<NotFound />} path="*"></Route>
        </Route>
      </Routes>
    </>
  );
};
export default App;
