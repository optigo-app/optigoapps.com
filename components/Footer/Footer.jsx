"use client"

import { ArrowUp, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"
import Image from "next/image"
import "./Footer.scss"
import Link from "next/link"
import { BsTwitterX } from "react-icons/bs";
import { useHandleUrlNavigation } from "@/utils/useHandleUrlNavigation"

export default function Footer() {

  const handleNavigation = useHandleUrlNavigation();

  const socialIcons = [
    { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/optigoapps/" },
    { icon: Facebook, label: "Facebook", url: "https://www.facebook.com/OptigoApps/" },
    { icon: Linkedin, label: "LinkedIn", url: "https://in.linkedin.com/company/orail-optigo-apps" },
    { icon: Youtube, label: "YouTube", url: "https://www.youtube.com/@OptigoApps?app=desktop" },
    { icon: BsTwitterX, label: "Twitter", url: "https://x.com/optigoapps?lang=en" },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="Main-footer">
      <div className="footer-main">
        {/* Left Side - Logo, Button, Social */}
        <div className="footer-brand">
          <Image src="/logo.png" alt="logo" width={200} height={200} className="footer-logo" />
          {/* <button className="contact-button">Contact Us</button> */}
          <div className="social-icons">
            {socialIcons.map((item, index) => (
              <button key={index} className="social-icon" onClick={() => window.open(item.url, '_blank')} aria-label={item.label}>
                <item.icon size={18} />
              </button>
            ))}
          </div>
        </div>

        {/* Center Info Blocks */}
        <div className="footer-columns">
          <div>
            <h4>ABOUT ORAIL</h4>
            <p>
              “We have successfully computerized jewellery and diamond firms since 2002. The companies that
              started using our products then, are still using our products today, all these years later.”
            </p>
          </div>
          <div>
            <h4>QUICK CONTACTS</h4>
            <ul>
              <li>Sales : +91 90998 87762</li>
              <li>hello@optigoapps.com</li>
              <li>HR : +91 95102 13587</li>
              <li>job@orail.in</li>
              <li>Support : +91-261-3603500</li>
              <li>support@orail.in</li>
            </ul>
          </div>
          <div>
            <h4>JEWELRY CLOUD APPLICATION</h4>
            <ul>
              <li><Link href="/jewellery-manufacture/" onClick={(e) => handleNavigation(e, '/jewellery-manufacture/')}>Manufacturing ERP</Link></li>
              <li><Link href="/jewellery-wholesale/" onClick={(e) => handleNavigation(e, '/jewellery-wholesale/')}>Trading B2B</Link></li>
              <li><Link href="/jewellery-retail/" onClick={(e) => handleNavigation(e, '/jewellery-retail/')}>Retail B2C</Link></li>
              <li><Link href="/apps-and-ecommerce/E-commerce/real-time-connected-b2b-ecommerce/" onClick={(e) => handleNavigation(e, '/apps-and-ecommerce/E-commerce/real-time-connected-b2b-ecommerce/')}>E-commerce</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* THE ONCLICK IS USE FOR THE LOADING NAVIGATION */}

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2025 Optigo | Cloud ERP for Jewellery Industry All Rights Reserved, ORAIL SERVICES.</p>
        <div className="legal-links">
          <Link href="/about-us" onClick={(e) => handleNavigation(e, '/about-us')}>About</Link>
          <Link href="/platform" onClick={(e) => handleNavigation(e, '/platform')}>Platform</Link>
          <Link href="/blog" onClick={(e) => handleNavigation(e, '/blog')}>Blog</Link>
          <Link href="/career" onClick={(e) => handleNavigation(e, '/career')}>Career</Link>
          <Link href="/contactus" onClick={(e) => handleNavigation(e, '/contactus')}>Contact</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/faqs" onClick={(e) => handleNavigation(e, '/faqs')}>Faqs</Link>
        </div>
      </div>
      <p className="powered-by">OptigoApps powered by Orail</p>
    </footer>
  )
}