import { SITE_BASE_URL, SITE_ICON, SITE_INDEX } from "@/config/setting";
import Image from "@/components/shared/image";

export async function generateMetadata() {
  const pageUrl = "/about";
  const pageTitle = "About Me";
  const pageDesc = "About Me Description";

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

export default function About() {
  return (
    <>
      <h1>About Page</h1>
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="max-w-lg overflow-hidden">
          <Image
            src="https://ik.imagekit.io/asdev/next/img/foto-1.jpg"
            width="600"
            height="380"
            alt="Image"
          />
        </div>
        <div className="max-w-lg overflow-hidden">
          <Image
            src="https://ik.imagekit.io/asdev/next/img/foto-2.jpg"
            width="600"
            height="380"
            alt="Image"
          />
        </div>
      </div>
    </>
  );
}
