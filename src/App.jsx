import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
const Home = lazy(() => import("./pages/Home/Home"));
const Contacts = lazy(() => import("./pages/Contacts/Contacts"));
const Projects = lazy(() => import("./pages/Projects/Projects"));

export default function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}
