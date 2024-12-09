import {
  SITE_TITLE,
  SITE_SEPARATOR,
  SITE_DESC,
  SITE_INDEX,
  SITE_BASE_URL,
  SITE_TAG,
} from "@/config/setting";

export async function generateMetadata() {
  const pageUrl = "/";

  return {
    title: {
      absolute: `${SITE_TITLE} ${SITE_SEPARATOR} ${SITE_TAG}`,
    },
    description: SITE_DESC,
    metadataBase: SITE_BASE_URL,
    alternates: {
      canonical: pageUrl,
    },
    robots: {
      index: SITE_INDEX,
      follow: SITE_INDEX,
    },
    openGraph: {
      title: SITE_TITLE,
      description: SITE_DESC,
      url: pageUrl,
      type: "website",
    },
  };
}

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
    </>
  );
}
