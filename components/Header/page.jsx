"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./page.scss";
import MegaMenuCard from "../MegaMenuCard/MegaMenuCard";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import SearchModel from "../Search/SearchModel";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useHandleUrlNavigation } from "@/utils/useHandleUrlNavigation";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import MegaMenuAccordion from "../MegaMenuCard/MegaMenuCardMobile";

const page = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [showMenu, setShowMenu] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [logoWidth, setLogoWidth] = useState(150);
  const [isMobile, setIsMobile] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [direction, setDirection] = useState("forward");

  const handleNavigation = useHandleUrlNavigation();
  const router = useRouter();
  const pathname = usePathname();

  const [currentMenu, setCurrentMenu] = useState(null);

  const handleBack = () => setCurrentMenu(null);

  const menuItems = [
    "Jewellery Retail",
    "Wholesale",
    "Manufacturer",
    "Apps & Ecommerce",
    // "Service and Support",
    // "Partners",
    "About Us",
  ];

  // const handleContactClick = () => {
  //     if (pathname === '/') {
  //         const contactEl = document.getElementById('contact-section');
  //         if (contactEl) {
  //             contactEl.scrollIntoView({ behavior: 'smooth' });
  //         }
  //     } else {
  //         // Navigate to homepage with hash
  //         router.push('/#contact-section');
  //     }
  // };
  const handleContactClick = () => {
    router.push("/contactus");
  };

  useEffect(() => {
    if (activeMenu) {
      const timeout = setTimeout(() => {
        setShowMenu(activeMenu);
      }, 200);
      return () => clearTimeout(timeout); // cleanup
    } else {
      setShowMenu(null);
    }
  }, [activeMenu]);

  const redirectMap = {
    // "Partners": "/partners",
    // "About Us": "/about-us",
  };

  const redirectHeader = {
    Manufacturer: "/jewellery-manufacture",
    Wholesale: "/jewellery-wholesale",
    "Jewellery Retail": "/jewellery-retail",
    "Apps & Ecommerce": "/apps-and-ecommerce",
  };

  useEffect(() => {
    const handleResize = () => {
      let width;

      if (window.innerWidth <= 1110) {
        width = 150;
      } else if (window.innerWidth >= 1600) {
        width = 180;
      } else {
        width = 160;
      }

      setLogoWidth(width);
      setIsMobile(window.innerWidth <= 1110);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="landing-header">
      <div className="header-container">
        <div className="top-links-wrapper">
          <div className="top-links-container">
            {/* <div className="top-links">
                            <Link href={'/platform'} onClick={(e) => handleNavigation(e, '/platform')} className="top-link">
                                <Image src="/resources.svg" height={16} width={16} alt='resources' />
                                Platform
                            </Link>
                            <Link href={'/blog'} onClick={(e) => handleNavigation(e, '/blog')} className="top-link">
                                <Image src="/book.svg" height={20} width={20} alt='blog' />
                                Blog
                            </Link>
                            <Link href={'/career'} onClick={(e) => handleNavigation(e, '/career')} className="top-link">
                                <Image src="/career.svg" height={22} width={22} alt='careers' />
                                Career
                            </Link>
                        </div> */}
          </div>
        </div>
        <div className="main-header">
          <div className="main-header-sub">
            <a href="/" onClick={(e) => handleNavigation(e, "/")} className="logo-container">
              <Image src="/logo.png" alt="optigo-apps" width={logoWidth} height={30} />
            </a>
            <nav className="navigation" onMouseEnter={() => setActiveMenu(activeMenu)} onMouseLeave={() => setActiveMenu(null)}>
              {/* MENU ROW */}
              <div className="menu-row">
                {menuItems.map((item, idx) => {
                  const links = {
                    Manufacturer: "/jewellery-manufacture",
                    Wholesale: "/jewellery-wholesale",
                    "Jewellery Retail": "/jewellery-retail",
                    "Apps & Ecommerce": "/apps-and-ecommerce",
                    // "Partners": "/partners",
                    "About Us": "/about-us",
                  };

                  const href = links[item] || "#";

                  return (
                    <Link
                      href={href}
                      key={idx}
                      className={`menu-item ${activeMenu === item ? "active" : ""}`}
                      onClick={(e) => {
                        handleNavigation(e, href);
                        setActiveMenu(null);
                        if (!links[item]) {
                          e.preventDefault(); // prevent click if no link
                        }
                      }}
                      onMouseEnter={() => setActiveMenu(item)}
                    >
                      {item}
                      <span className="menu-underline"></span>
                    </Link>
                  );
                })}
                <Link
                  href="/optigo-ai"
                  className={`ai-btn ${activeMenu === "Optigo AI" ? "active" : ""}`}
                  onClick={(e) => {
                    handleNavigation(e, "/optigo-ai");
                    setActiveMenu(null);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                      fill="#f9f9f9"
                      d="m9.96 9.137l.886-3.099c.332-1.16 1.976-1.16 2.308 0l.885 3.099a1.2 1.2 0 0 0 .824.824l3.099.885c1.16.332 1.16 1.976 0 2.308l-3.099.885a1.2 1.2 0 0 0-.824.824l-.885 3.099c-.332 1.16-1.976 1.16-2.308 0l-.885-3.099a1.2 1.2 0 0 0-.824-.824l-3.099-.885c-1.16-.332-1.16-1.976 0-2.308l3.099-.885a1.2 1.2 0 0 0 .824-.824m8.143 7.37c.289-.843 1.504-.844 1.792 0l.026.087l.296 1.188l1.188.297c.96.24.96 1.602 0 1.842l-1.188.297l-.296 1.188c-.24.959-1.603.959-1.843 0l-.297-1.188l-1.188-.297c-.96-.24-.96-1.603 0-1.842l1.188-.297l.297-1.188zm.896 2.29a1 1 0 0 1-.203.203a1 1 0 0 1 .203.203a1 1 0 0 1 .203-.203a1 1 0 0 1-.203-.204M4.104 2.506c.298-.871 1.585-.842 1.818.087l.296 1.188l1.188.297c.96.24.96 1.602 0 1.842l-1.188.297l-.296 1.188c-.24.959-1.603.959-1.843 0l-.297-1.188l-1.188-.297c-.96-.24-.96-1.603 0-1.842l1.188-.297l.297-1.188zM5 4.797a1 1 0 0 1-.203.202A1 1 0 0 1 5 5.203a1 1 0 0 1 .203-.204A1 1 0 0 1 5 4.796"
                    />
                  </svg>
                  Optigo AI
                </Link>
              </div>

              {/* MEGA MENU OUTSIDE LOOP */}
              {showMenu && (
                <div className="mega-menu">
                  <MegaMenuCard title={activeMenu} setActiveMenu={setActiveMenu} />
                </div>
              )}
            </nav>
          </div>
          <div className="header-actions">
            {/* <button className="search-btn" onClick={() => setShowModal(true)}>
                            <Search className="search-icon" />
                        </button> */}
            {/* <button className="globe-btn">
                            <Globe className="globe-icon" />
                        </button> */}
            <button className="contact-btn" onClick={handleContactClick}>
              Contact Us
            </button>
            <button className="demo-btn" onClick={() => setShowModal1(true)}>
              Watch Demo
            </button>
            {showModal1 && (
              <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-brightness-75 bg-gray-900/50" onClick={() => setShowModal1(false)}>
                <div className="relative py-10 px-5 bg-white rounded-2xl shadow-2xl" onClick={(e) => e.stopPropagation()}>
                  {/* Close X icon */}
                  <button onClick={() => setShowModal1(false)} className="absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-gray-800">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                      <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {/* Video */}
                  <div className="w-full">
                    <iframe width="1000" height="500" className="rounded-2xl" src="https://www.youtube.com/embed/0UAGpuOXBDA?si=7QEUDQhcPIr0dtIA" title="YouTube Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                </div>
              </div>
            )}
          </div>

          {isMobile && (
            <div className="header-menu">
              <Sheet open={drawerOpen} onOpenChange={setDrawerOpen}>
                <SheetTrigger asChild>
                  <button className="flex items-center gap-1.5 px-5 py-3 text-white rounded-xl shadow hover:scale-105 transition-all" style={{ background: "var(--primary-background)" }}>
                    <span className="text-md font-medium tracking-wide">Menu</span>
                    <Menu size={18} className="text-purple-200" />
                  </button>
                </SheetTrigger>

                <SheetContent side="right" className="w-full max-w-[300px] sm:max-w-[400px] p-2 shadow-xl">
                  <VisuallyHidden>
                    <SheetTitle>Menu</SheetTitle>
                  </VisuallyHidden>

                  <SheetClose asChild>
                    <button className="absolute right-5 top-5 text-gray-600 hover:text-gray-800 transition-colors z-20" aria-label="Close">
                      <X size={28} />
                    </button>
                  </SheetClose>

                  <div className="relative w-full h-full overflow-hidden font-[poppins]">
                    {/* MAIN MENU */}
                    <div className="absolute inset-0 z-10 transition-all duration-300">
                      <div className="px-8 py-6 border-b text-xl font-semibold">Menu</div>
                      <ul className="px-4 py-5 space-y-4">
                        {menuItems.map((item, idx) => (
                          <li
                            key={idx}
                            onClick={(e) => {
                              if (redirectMap[item] && !redirectHeader[item]) {
                                router.push(redirectMap[item]);
                                setDrawerOpen(false);
                                handleNavigation(e, redirectMap[item]);
                              } else {
                                setDirection("forward");
                                setCurrentMenu(item);
                              }
                            }}
                            className="group flex items-center justify-between px-4 py-3 rounded-lg bg-white shadow-sm hover:bg-indigo-50 cursor-pointer transition-all"
                          >
                            <span className="font-medium" style={{ color: "var(--primary-color)" }}>
                              {item}{" "}
                            </span>

                            {/* Only show arrow if it's a submenu, not a redirect link */}
                            {!redirectMap[item] && <ChevronRight size={24} color="var(--primary-color)" />}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* SUBMENU PAGE */}
                    {currentMenu && (
                      <div
                        key={currentMenu + direction}
                        className={`
                absolute inset-0 z-20 bg-white rounded-md transition-all duration-300 ease-in-out shadow-xl
                ${direction === "forward" ? "animate-in slide-in-from-right" : "animate-out slide-out-to-right"}
              `}
                      >
                        <div
                          className="px-6 py-4 border-b flex items-center gap-2"
                          onClick={() => {
                            setDirection("backward");
                            setTimeout(() => setCurrentMenu(null), 300);
                          }}
                        >
                          <button className="text-sm text-indigo-600 hover:underline flex items-center">
                            <ChevronLeft size={24} color="var(--primary-color)" />
                          </button>
                          <span className="text-lg font-semibold" style={{ color: "var(--primary-color)" }}>
                            {currentMenu}
                          </span>
                        </div>

                        <div className="px-6 py-6 text-sm text-gray-600 leading-relaxed">
                          <MegaMenuAccordion title={currentMenu} setActiveMenu={setCurrentMenu} setDrawerOpen={setDrawerOpen} />
                        </div>
                      </div>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          )}

          {showModal && <SearchModel isOpen={showModal} onClose={() => setShowModal(false)} />}
        </div>
      </div>
    </header>
  );
};

export default page;
