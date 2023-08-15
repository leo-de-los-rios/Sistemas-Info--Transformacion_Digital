/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-sync-scripts */
import Navigation from "@/components/Navigation";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Transformación Digital",
  description: "Sistemas de Información II - Transformación Digital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/x-icon"
          href="/favicon.ico"
        />
        {/* Font Awesome icons (free version) */}
        <script
          src="https://use.fontawesome.com/releases/v6.3.0/js/all.js"
          crossOrigin="anonymous"></script>
        {/* Google fonts */}
        <link
          href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body>
        <Navigation />
        <>{children}</>
        <Footer />

        {/* Bootstrap core JS */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        {/* Core theme JS */}
        <script src="/js/scripts.js"></script>
      </body>
    </html>
  );
}
