import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.scss";
import "./globals.css";
import Script from 'next/script';
import Analytics from "@/components/Analytics.client";
import ScrollTop from "@/components/ScrollTop/ScrollTop";
import Header from '@/components/Header/page'
import Footer from '@/components/Footer/Footer'
import ShowContact from "@/components/ShowContact/ShowContact";
import LoadingProvider from "@/context/LoadingContext";
import PageLoadWatcher from "@/context/PageLoadWatcher";
import PromotionalBanner from "@/components/PromotionalBanner/PromotionalBanner";
import { Toaster } from "react-hot-toast";
import { toastConfig } from "@/toastConfig";
import { WEBSITE_URL } from "@/env";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import '@fontsource/poppins';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata = {
  title: "Optigoapps | Cloud ERP for Diamond and Jewellery",
  description:
    "Optigoapps offers Jewellery ERP & CRM solutions to help retailers, wholesalers & manufacturers streamline operations and boost efficiency.",

  metadataBase: new URL(`${WEBSITE_URL}`), // replace with your real domain

  alternates: {
    canonical: `${WEBSITE_URL}`,
  },

  // ✅ Robots meta tags
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ✅ SEO keywords
  keywords: [
    "Jewellery ERP",
    "Jewellery CRM",
    "Diamond ERP",
    "Jewellery Retail Software",
    "Jewellery Wholesaler Software",
    "Jewellery Manufacturer Software",
    "Cloud ERP for Jewellery",
    "Optigoapps ERP",
  ],

  // ✅ Publisher (organization or brand)
  publisher: "Optigoapps",

  openGraph: {
    title: "Optigoapps | Cloud ERP for Diamond and Jewellery",
    description:
      "Optigoapps offers Jewellery ERP & CRM solutions to help retailers, wholesalers & manufacturers streamline operations and boost efficiency.",
    url: `${WEBSITE_URL}`,
    siteName: "Optigoapps",
    images: [
      {
        url: `${WEBSITE_URL}/share_logo.png`,
        // url: `https://48eeee18c721.ngrok-free.app/share_logo.png`,
        width: 1200,
        height: 630,
        alt: "Optigoapps Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Optigoapps | Cloud ERP for Diamond and Jewellery",
    description:
      "Optigoapps offers Jewellery ERP & CRM solutions to help retailers, wholesalers & manufacturers streamline operations and boost efficiency.",
    images: [`${WEBSITE_URL}/share_logo.png`],
    // images: [`https://48eeee18c721.ngrok-free.app/share_logo.png`],
  },

  locale: "en_IN",
  type: "website",
};


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // customize as needed
  variable: '--font-poppins', // optional for CSS variable use
  display: 'swap',
});

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { send_page_view: false, debug_mode: false });
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <BreadcrumbSchema />
        <Toaster {...toastConfig} />
        {/* PROTOTYPE LABEL */}
        {/* <div
          style={{
            position: 'fixed',
            top: '25px',
            right: '45px',
            transform: 'translateX(50%) rotate(45deg)',
            background: 'red',
            color: 'white',
            padding: '6px 40px',
            fontWeight: 'bold',
            fontSize: '20px',
            zIndex: 10,
            whiteSpace: 'nowrap',
            boxShadow: '2px 2px 10px rgba(0,0,0,0.2)',
          }}
        >
          Prototype
        </div> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Optigoapps",
              "url": `${WEBSITE_URL}`,
              "logo": `${WEBSITE_URL}/share_logo.png`,
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 90998 87762",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://www.facebook.com/OptigoApps/", // Add your social media links
                "https://x.com/optigoapps?lang=en",
                "https://www.linkedin.com/company/orail-optigo-apps/"
              ]
            })
          }}
        />
        <LoadingProvider>
          <PageLoadWatcher />
          <div className='mainHomeSection'>
            <Header />
            <main>
              <article>
                {children}
              </article>
            </main>
            <Analytics />
            <ShowContact />
            <Footer />
          </div>
          <PromotionalBanner />
        </LoadingProvider>

        {/* SCROLL TO TOP BUTTON */}
        <ScrollTop />
      </body>
    </html>
  );
}
