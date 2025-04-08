import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { NavbarDemo } from "@/components/Navbar";

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
  title: "Mirzapur Developer",
  favicon: "/favicon.ico",
  description: "Mirzapur Developer",
  metadataBase: new URL("https://mirzapurdeveloper.com"),
  meta: {
    viewport: "width=device-width, initial-scale=1.0",
    charset: "utf-8",
    description: "Mirzapur Developer",
    keywords: "Mirzapur Developer",
    author: "Mirzapur Developer",
    robots: "index, follow",
    googlebot: "index, follow",
    "og:title": "Mirzapur Developer",
    "og:description": "Mirzapur Developer",
    "og:url": "https://mirzapurdeveloper.com",
    "og:site_name": "Mirzapur Developer",
    "og:image":
      "https://res.cloudinary.com/dy4w8jyq1/image/upload/v1695676969/og-image_mirzapurdeveloper-com_og-image_mirzapurdeveloper-com.png",
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:type": "website",
    "twitter:card": "summary_large_image",
    "twitter:title": "Mirzapur Developer",
    "twitter:description": "Mirzapur Developer",
    "twitter:image":
      "https://res.cloudinary.com/dy4w8jyq1/image/upload/v1695676969/og-image_mirzapurdeveloper-com_og-image_mirzapurdeveloper-com.png",
    "twitter:image:alt": "Mirzapur Developer",
    "twitter:domain": "mirzapurdeveloper.com",
    "twitter:creator": "@MirzapurDeveloper",
    "twitter:site": "@MirzapurDeveloper",
    "twitter:url": "https://mirzapurdeveloper.com",
    "twitter:label1": "Written by",
    "twitter:data1": "Mirzapur Developer",
    "twitter:label2": "Time to read",
    "twitter:data2": "5 minutes",
  },
  openGraph: {
    title: "Mirzapur Developer",
    description: "Mirzapur Developer",
    url: "https://mirzapurdeveloper.com",
    siteName: "Mirzapur Developer",
    images: [
      {
        url:
          "https://res.cloudinary.com/dy4w8jyq1/image/upload/v1695676969/og-image_mirzapurdeveloper-com_og-image_mirzapurdeveloper-com.png",
        width: 1200,
        height: 630,
        alt: "Mirzapur Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification=2f2e9y4rH2vZg4dYt9tZ2vYt9tZ2vYt9tZ2vYt9t9", 
    yandex: "yandex-verification=2f2e9y4rH2vZg4dYt9tZ2vYt9tZ2vYt9tZ2vYt9t9",
    bing: "bing-site-verification=2f2e9y4rH2vZg4dYt9tZ2vYt9tZ2vYt9tZ2vYt9t9",
    baidu: "baidu-site-verification=2f2e9y4rH2vZg4dYt9tZ2vYt9tZ2vYt9tZ2vYt9t9",
    bing: "bing-site-verification=2f2e9y4rH2vZg4dYt9tZ2vYt9tZ2vYt9tZ2vYt9t9",
  },
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
        data-cjcrx="addYes"
      >
        <NavbarDemo/>
        <main>
          {children}
          </main>
        <Toaster/>
      </body>
    </html>
  );
}
