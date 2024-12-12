import Footer from "@/components/footer/Footer";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Loader from "@/components/loader";
import FloatingSocials from "@/components/Floating Socials/index.";
import siteMetadata from "@/siteMetaData";

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: "Ballo Innovations",
  description: siteMetadata.description,
  keywords: [
    "Ballo Innovations",
    "Balloinnovations",
    "Ballo",
    "Marketing",
    "Graphic design",
    "Zambia",
    "Website development agency",
    "Web development",
    "Marketing Zambia",
    "Social media management",
    "Social media marketing",
    "Innovation",
    "Technology",
    "Lombe Lusale",
    "George Msapenda",
    "Media production",
    "Advertising",
    "Application Developent",
  ],

  creator: ["Lombe Lusale", "George Msapenda", "Shannon Zebron"],
  publisher: "Ballo Innovations",
  category: [
    "Marketing",
    "Advertising",
    "social media",
    "Graphic Design",
    "Website development",
    "Application Developent",
  ],
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    images: siteMetadata.socialBanner,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="no-scroll">
        <Loader />
        <Navbar />
        {children}
        <FloatingSocials />
        <Footer />
      </body>
    </html>
  );
}
