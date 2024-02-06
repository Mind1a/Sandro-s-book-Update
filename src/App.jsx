import { Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { Contents } from "./views/Contents";
import { Book } from "./views/Book";
import "./scss/global.scss";
import { Preface } from "./views/Preface/Preface";
import { MobileMainPage } from "./views/Mobile/MobileMainPage";
import { useDeviceSize } from "./context/DeviceSizeProvider";
import { Navigation } from "./components/Navigation";
import { Pdf } from "./views/Pdf";
import { About } from "./views/About";
import { useToggle } from "./hooks/useToggle";

export default function App() {
  const deviceSize = useDeviceSize();
  const { toggle: isMenuOpen, handleToggle, handleFalse } = useToggle();

  return (
    <>
      {deviceSize !== "xs" && <Navigation isMenuOpen={isMenuOpen} handleFalse={handleFalse} handleToggle={handleToggle} />}
      <Routes>
        <Route
          path="/"
          element={deviceSize === "xs" ? <MobileMainPage /> : <Home />}
        />
        <Route
          path="/contents"
          element={deviceSize === "xs" ? <MobileMainPage /> : <Contents />}
        />
        <Route
          path="/about"
          element={deviceSize === "xs" ? <MobileMainPage /> : <About />}
        />
        <Route
          path="/pdf"
          element={deviceSize === "xs" ? <MobileMainPage /> : <Pdf />}
        />
        <Route
          path="/preface"
          element={deviceSize === "xs" ? <MobileMainPage /> : <Preface />}
        />
        <Route
          path="/books/:book"
          element={deviceSize === "xs" ? <MobileMainPage /> : <Book isMenuOpen={isMenuOpen} />}
        />
      </Routes>
      {/* <Route path="*" element={<NotFound />} /> */}
    </>
  );
}
