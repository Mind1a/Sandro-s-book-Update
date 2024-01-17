import { Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { Contents } from "./views/Contents";
import { Book } from "./views/Book";
import "./scss/global.scss";
import { Preface } from "./views/Preface/Preface";
import { MobileMainPage } from "./views/Mobile/MobileMainPage";
import { useDeviceSize } from "./context/DeviceSizeProvider";
import { NewNavigation } from "./components/NewNavigation";

export default function App() {
  const deviceSize = useDeviceSize();

  return (
    <div>
      {deviceSize !== "xs" && <NewNavigation />}
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
          path="/preface"
          element={deviceSize === "xs" ? <MobileMainPage /> : <Preface />}
        />
        <Route
          path="/books/:book"
          element={deviceSize === "xs" ? <MobileMainPage /> : <Book />}
        />
      </Routes>
      {/* <Route path="*" element={<NotFound />} /> */}
    </div>
  );
}
