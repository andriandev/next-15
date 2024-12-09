import { SITE_BASE_URL, SITE_ICON, SITE_INDEX } from "@/config/setting";
import Image from "@/components/shared/image";

export async function generateMetadata() {
  const pageUrl = "/history";
  const pageTitle = "History";
  const pageDesc = "History Description";

  return {
    title: pageTitle,
    description: pageDesc,
    metadataBase: SITE_BASE_URL,
    alternates: {
      canonical: pageUrl,
    },
    robots: {
      index: SITE_INDEX,
      follow: SITE_INDEX,
    },
    openGraph: {
      title: pageTitle,
      description: pageDesc,
      images: SITE_ICON,
      url: pageUrl,
      type: "website",
    },
  };
}

export default function History() {
  return (
    <>
      <h1>History Page</h1>
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="max-w-lg overflow-hidden">
          <Image
            src="https://ik.imagekit.io/asdev/next/img/foto-3.jpg"
            width="600"
            height="380"
            alt="Image"
          />
        </div>
        <div className="max-w-lg overflow-hidden">
          <Image
            src="https://ik.imagekit.io/asdev/next/img/foto-4.jpg"
            width="600"
            height="380"
            alt="Image"
          />
        </div>
      </div>
    </>
  );
}
