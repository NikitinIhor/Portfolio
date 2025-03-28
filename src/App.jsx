import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import Navigation from "./components/Navigation/Navigation";

const Frontend = lazy(() => import("./pages/Frontend/Frontend"));
const Backend = lazy(() => import("./pages/Backend/Backend"));
const AllProjects = lazy(() => import("./pages/AllProjects/AllProjects"));
const Home = lazy(() => import("./pages/Home/Home"));
const Contacts = lazy(() => import("./pages/Contacts/Contacts"));
const Projects = lazy(() => import("./pages/Projects/Projects"));

export default function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />}>
            <Route path="frontend" element={<Frontend />} />
            <Route path="backend" element={<Backend />} />
            <Route path="all" element={<AllProjects />} />
          </Route>
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}
