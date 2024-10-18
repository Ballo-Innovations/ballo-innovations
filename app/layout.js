import Footer from "@/components/footer/Footer";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Loader from "@/components/loader";
import FloatingSocials from "@/components/Floating Socials/index.";

export const metadata = {
  title: "Ballo Innovations",
  description: `Ballo is a word derived from the business streets of Lusaka that means "a bag full of things". We are an omnichannel (digital) marketing company that obsesses on giving the very best to our clients to ensure the utmost customer satisfaction and return on investment.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="no-scroll">
        <Loader />
        {/* <Navbar /> */}
        {children}
        <FloatingSocials />
        <Footer />
      </body>
    </html>
  );
}
