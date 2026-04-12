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

const pageDescriptions = {
  ka: {
    "/": "ქაოსიდან კოსმოსამდე. სანდრო ასათიანის მოთხრობათა კრებული ტექნოლოგიებსა და თანამედროვე ადამიანის შესაძლებლობებზე.",
    "/contents": "ქაოსიდან კოსმოსამდე - სარჩევი და აუდიო თავები.",
    "/about": "ინფორმაცია ქაოსიდან კოსმოსამდე პროექტის შესახებ.",
    "/pdf": "წიგნის PDF ვერსია.",
    "/preface": "წიგნის წინასიტყვაობა.",
    "/gallery": "ილუსტრაციების გალერია.",
  },
  en: {
    "/": "From Chaos to Cosmos. A story collection by Sandro Asatiani about technology and modern human potential.",
    "/contents": "From Chaos to Cosmos table of contents and audio chapters.",
    "/about": "About the From Chaos to Cosmos project.",
    "/pdf": "Read the book as PDF.",
    "/preface": "Read the foreword.",
    "/gallery": "Illustration gallery.",
  },
  it: {
    "/": "Dal caos al cosmo. Una raccolta di racconti di Sandro Asatiani su tecnologia e potenziale umano.",
    "/contents": "Indice dei contenuti e capitoli audio di Dal caos al cosmo.",
    "/about": "Informazioni sul progetto Dal caos al cosmo.",
    "/pdf": "Leggi il libro in PDF.",
    "/preface": "Leggi l'introduzione.",
    "/gallery": "Galleria delle illustrazioni.",
  },
};

const languageSeo = {
  ka: { htmlLang: "ka", ogLocale: "ka_GE" },
  en: { htmlLang: "en", ogLocale: "en_US" },
  it: { htmlLang: "it", ogLocale: "it_IT" },
};

const setMetaContent = (selector, content) => {
  if (!content) return;
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");

    if (selector.startsWith('meta[name="')) {
      const name = selector.match(/meta\[name="([^"]+)"\]/)?.[1];
      if (name) {
        element.setAttribute("name", name);
      }
    }

    if (selector.startsWith('meta[property="')) {
      const property = selector.match(/meta\[property="([^"]+)"\]/)?.[1];
      if (property) {
        element.setAttribute("property", property);
      }
    }

    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const setCanonical = (href) => {
  if (!href) return;
  let canonical = document.head.querySelector('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", href);
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
    const descriptions =
      pageDescriptions[currentLanguage] || pageDescriptions.ka;
    const pageDescription =
      descriptions[relativePath] || pageDescriptions.ka["/"];
    const seoLanguage = languageSeo[currentLanguage] || languageSeo.ka;
    const absoluteUrl = `${window.location.origin}${location.pathname}`;

    document.title = pageTitle;
    document.documentElement.setAttribute("lang", seoLanguage.htmlLang);

    setMetaContent('meta[name="description"]', pageDescription);
    setMetaContent('meta[property="og:title"]', pageTitle);
    setMetaContent('meta[property="og:description"]', pageDescription);
    setMetaContent('meta[property="og:url"]', absoluteUrl);
    setMetaContent('meta[property="og:locale"]', seoLanguage.ogLocale);
    setMetaContent('meta[name="twitter:title"]', pageTitle);
    setMetaContent('meta[name="twitter:description"]', pageDescription);
    setCanonical(absoluteUrl);
  }, [relativePath, currentLanguage, location.pathname]);

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
