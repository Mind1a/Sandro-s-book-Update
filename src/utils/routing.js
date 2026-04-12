export const SUPPORTED_ROUTE_LANGUAGES = ["ka", "en", "it"];
export const DEFAULT_ROUTE_LANGUAGE = "ka";

const ROUTE_TO_I18N_LANGUAGE = {
  ka: "ge",
  en: "en",
  it: "it",
};

const I18N_TO_ROUTE_LANGUAGE = {
  ge: "ka",
  ka: "ka",
  en: "en",
  it: "it",
};

export const normalizeRouteLanguage = (language) => {
  const normalized = (language || "").split("-")[0].toLowerCase();
  return SUPPORTED_ROUTE_LANGUAGES.includes(normalized)
    ? normalized
    : DEFAULT_ROUTE_LANGUAGE;
};

export const toI18nLanguage = (routeLanguage) => {
  return ROUTE_TO_I18N_LANGUAGE[normalizeRouteLanguage(routeLanguage)] || "ge";
};

export const toRouteLanguage = (i18nLanguage) => {
  const normalized = (i18nLanguage || "").split("-")[0].toLowerCase();
  return I18N_TO_ROUTE_LANGUAGE[normalized] || DEFAULT_ROUTE_LANGUAGE;
};

export const normalizeAnyLanguageToRoute = (language) => {
  const normalized = (language || "").split("-")[0].toLowerCase();
  if (SUPPORTED_ROUTE_LANGUAGES.includes(normalized)) {
    return normalized;
  }

  return toRouteLanguage(normalized);
};

export const stripLanguagePrefix = (pathname = "/") => {
  const parts = pathname.split("/").filter(Boolean);

  if (!parts.length) {
    return "/";
  }

  if (SUPPORTED_ROUTE_LANGUAGES.includes(parts[0])) {
    const rest = parts.slice(1);
    return rest.length ? `/${rest.join("/")}` : "/";
  }

  return pathname.startsWith("/") ? pathname : `/${pathname}`;
};

export const buildLocalizedPath = (
  pathname = "/",
  language = DEFAULT_ROUTE_LANGUAGE,
) => {
  const normalizedLanguage = normalizeAnyLanguageToRoute(language);
  const normalizedPath = stripLanguagePrefix(pathname);

  if (normalizedPath === "/") {
    return `/${normalizedLanguage}`;
  }

  return `/${normalizedLanguage}${normalizedPath}`;
};
