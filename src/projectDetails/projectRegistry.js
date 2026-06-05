import { lazy } from "react";
import { PROJECT_META_BY_SLUG } from "../data/projectMeta";

const PROJECT_DETAIL_COMPONENTS = {
  wargakita: lazy(() => import("./WargaKitaDetail")),
  villanakey: lazy(() => import("./VillaNaKeyDetail")),
  "kalorin-ai-testing": lazy(() => import("./KalorinAIDetail")),
  "fake-rest-api-books-testing": lazy(() => import("./FakeRestApiDetail")),
  "booking-com-automation": lazy(() => import("./BookingComDetail")),
};

export function getProjectRouteConfig(slug) {
  const metadata = PROJECT_META_BY_SLUG[slug];
  if (!metadata) return null;

  return {
    ...metadata,
    Component: PROJECT_DETAIL_COMPONENTS[slug],
  };
}


