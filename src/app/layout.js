import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link href="css/bootstrap.min.css" rel="stylesheet" precedence="default" />

      <link href="css/bootstrap-icons.css" rel="stylesheet" precedence="default" />

      <link href="css/templatemo-ebook-landing.css" rel="stylesheet" precedence="default" />

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}

        <Script src="js/jquery.min.js"/>
        <Script src="js/bootstrap.bundle.min.js" />
        <Script src="js/jquery.sticky.js" />
        <Script src="js/click-scroll.js" />
        <Script src="js/custom.js" />
      </body>
    </html>
  );
}
