import { generatePageMetadata } from "@/utils/HeadMeta";
import FaqsData from "@/public/FaqsData";
import { pages } from "@/utils/pages";
import FaqsLandingPage from "@/components/FaqsLandingPage/FaqsLandingPage";
import Script from "next/script";

const pageData = {
  ...pages["/faqs"],
  type: "faqs",
  faqs: FaqsData,
};

export const metadata = generatePageMetadata(pageData);

const Page = () => {
  const faqStructuredData =
    pageData.type === "faqs"
      ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: pageData.faqs.flatMap((category) =>
          category.items.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          }))
        ),
      }
      : null;

  return (
    <>
      {/* Render JSON-LD in <head> using next/script */}
      {faqStructuredData && (
        <Script
          id="faq-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqStructuredData, null, 2),
          }}
        />
      )}
      <FaqsLandingPage />
    </>
  );
};

export default Page;
