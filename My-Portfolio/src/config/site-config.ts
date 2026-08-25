import { Metadata } from "next";

const TITLE = "Kanak Pherwani";
const DESCRIPTION =
  "Kanak Pherwani is a 20 year fullstack web developer and blockchain developer.";

const PREVIEW_IMAGE_URL =
  "https://res.cloudinary.com/dlu7jj0qk/image/upload/v1787682754/kanak_uz5iqo.webp";
const ALT_TITLE = "Kanak Pherwani's Portfolio";
const BASE_URL = "https://kanakpherwani.com/";

export const siteConfig: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  icons: {
    icon: "https://res.cloudinary.com/dlu7jj0qk/image/upload/v1787682754/kanak_uz5iqo.webp",
  },
  applicationName: "Kanak Pherwani",
  creator: "Kanak Pherwani",
  twitter: {
    creator: "@Kanak__Pherwani",
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
    siteName: "Kanak Pherwani",
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
  keywords: ["Kanak", "Pherwani", "portfolio", "blockchain", "web3"],
  metadataBase: new URL(BASE_URL),
};
