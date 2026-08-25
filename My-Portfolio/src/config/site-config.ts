import { Metadata } from "next";

const TITLE = "David Goyal";
const DESCRIPTION =
  "David Goyal is a 20 year fullstack web developer and blockchain developer.";

const PREVIEW_IMAGE_URL =
  "https://res.cloudinary.com/dlu7jj0qk/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1723893090/avatar/spxjogcuzsvszrdeoexb.jpg";
const ALT_TITLE = "David Goyal";
const BASE_URL = "https://davgoyal.xyz/";

export const siteConfig: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  icons: {
    icon: "https://res.cloudinary.com/dlu7jj0qk/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1723893090/avatar/spxjogcuzsvszrdeoexb.jpg",
  },
  applicationName: "David Goyal",
  creator: "David Goyal",
  twitter: {
    creator: "@David__Goyal",
    title: TITLE,
    description: DESCRIPTION,
    card: "summary_large_image",
    images: [
      {
        url: PREVIEW_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: ALT_TITLE,
      },
    ],
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    siteName: "David Goyal",
    url: BASE_URL,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: PREVIEW_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: ALT_TITLE,
      },
    ],
  },
  category: "Portfolio",
  alternates: {
    canonical: BASE_URL,
  },
  keywords: ["David", "Goyal", "portfolio", "blockchain", "web3"],
  metadataBase: new URL(BASE_URL),
};
