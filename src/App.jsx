import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Home } from "./views/Home";
import { Contents } from "./views/Contents";
import { Book } from "./views/Book";
import { Gallery } from "./views/Gallery";
import "./scss/global.scss";
import { Preface } from "./views/Preface/Preface";
import { MobileMainPage } from "./views/Mobile/MobileMainPage";
import { useDeviceSize } from "./context/DeviceSizeProvider";
import { Navigation } from "./components/Navigation";
import { Pdf } from "./views/Pdf";
import { About } from "./views/About";
import { useToggle } from "./hooks/useToggle";
import {
  buildLocalizedPath,
  normalizeAnyLanguageToRoute,
  normalizeRouteLanguage,
  stripLanguagePrefix,
  toI18nLanguage,
  toRouteLanguage,
} from "./utils/routing";

const pageTitles = {
  ka: {
    "/": "ქაოსიდან კოსმოსამდე",
    "/contents": "სარჩევი",
    "/about": "პროექტის შესახებ",
    "/pdf": "PDF",
    "/preface": "წინასიტყვაობა",
    "/gallery": "გალერია",
  },
  en: {
    "/": "From Chaos to Cosmos",
    "/contents": "Table of Contents",
    "/about": "About the Project",
    "/pdf": "PDF",
    "/preface": "Foreword",
    "/gallery": "Gallery",
  },
  it: {
    "/": "Dal caos al cosmo",
    "/contents": "Indice dei contenuti",
    "/about": "Informazioni sul progetto",
    "/pdf": "PDF",
    "/preface": "Introduzione",
    "/gallery": "Galleria",
  },
};

const noNavigationPaths = ["/"];

function LocalizedApp() {
  const deviceSize = useDeviceSize();
  const location = useLocation();
  const navigate = useNavigate();
  const { lang } = useParams();
  const { toggle: isMenuOpen, handleToggle, handleFalse } = useToggle();
  const { i18n } = useTranslation();

  const currentLanguage = normalizeAnyLanguageToRoute(lang || i18n.language);
  const relativePath = stripLanguagePrefix(location.pathname);

  useEffect(() => {
    if (!lang) {
      return;
    }

    const normalizedRouteLanguage = normalizeRouteLanguage(lang);
    const mappedI18nLanguage = toI18nLanguage(normalizedRouteLanguage);
    if (i18n.language !== mappedI18nLanguage) {
      i18n.changeLanguage(mappedI18nLanguage);
      localStorage.setItem("language", mappedI18nLanguage);
    }
  }, [lang, i18n]);

  useEffect(() => {
    const titles = pageTitles[currentLanguage] || pageTitles.ka;
    const pageTitle = titles[relativePath] || pageTitles.ka["/"];
    document.title = pageTitle;
  }, [relativePath, currentLanguage]);

  useEffect(() => {
    const routeLanguageFromI18n = toRouteLanguage(i18n.language);
    if (!lang || normalizeRouteLanguage(lang) !== routeLanguageFromI18n) {
      navigate(buildLocalizedPath(relativePath, routeLanguageFromI18n), {
        replace: true,
      });
    }
  }, [lang, i18n.language, relativePath, navigate]);

  return (
    <>
      {deviceSize !== "xs" && !noNavigationPaths.includes(relativePath) && (
        <Navigation
          currentLanguageCode={currentLanguage}
          isMenuOpen={isMenuOpen}
          handleFalse={handleFalse}
          handleToggle={handleToggle}
        />
      )}

      <Routes>
        <Route
          index
          element={deviceSize === "xs" ? <MobileMainPage /> : <Home />}
        />
        <Route
          path="contents"
          element={deviceSize === "xs" ? <MobileMainPage /> : <Contents />}
        />
        <Route
          path="about"
          element={deviceSize === "xs" ? <MobileMainPage /> : <About />}
        />
        <Route
          path="pdf"
          element={deviceSize === "xs" ? <MobileMainPage /> : <Pdf />}
        />
        <Route
          path="preface"
          element={deviceSize === "xs" ? <MobileMainPage /> : <Preface />}
        />
        <Route
          path="books/:book"
          element={
            deviceSize === "xs" ? (
              <MobileMainPage />
            ) : (
              <Book isMenuOpen={isMenuOpen} />
            )
          }
        />
        <Route
          path="gallery"
          element={deviceSize === "xs" ? <MobileMainPage /> : <Gallery />}
        />
        <Route path="*" element={<Navigate to="." replace />} />
      </Routes>
    </>
  );
}

export default function App() {
  const location = useLocation();
  const { i18n } = useTranslation();

  const pathWithoutLanguage = stripLanguagePrefix(location.pathname);
  const initialLanguage = normalizeAnyLanguageToRoute(
    i18n.language || localStorage.getItem("language") || "ka",
  );

  return (
    <Routes>
      <Route path="/:lang/*" element={<LocalizedApp />} />
      <Route
        path="*"
        element={
          <Navigate
            to={buildLocalizedPath(pathWithoutLanguage, initialLanguage)}
            replace
          />
        }
      />
    </Routes>
  );
}
