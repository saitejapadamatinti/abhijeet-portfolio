import "./styles.css";
import React, { useState, useEffect, history } from "react";
import { useAnimate, stagger } from "framer-motion";
import { MenuToggle } from "./menuToggle";
import { Link } from "react-router-dom";
import useDocumentScrollThrottled from "./useDocumentScrollThrottled";

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
        [
          "nav",
          { transform: "translateX(22%)" },
          { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
        ],
        [
          "li",
          { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
          { delay: stagger(0.05), at: "-0.1" },
        ],
      ]
      : [
        [
          "li",
          { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
          { delay: stagger(0.05, { from: "last" }), at: "<" },
        ],
        ["nav", { transform: "translateX(120vw)" }, { at: "-0.1" }],
      ];

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" },
      ],
      ...menuAnimations,
    ]);
  }, [isOpen]);

  return scope;
}

const headerList = [
  {
    name: "About Me",
    path: "#AboutMe",
    for: "radio-1",
  },
  {
    name: "Professional Experience",
    path: "#ProfessionalExperience",
    for: "radio-2",
  },
  {
    name: "Skills",
    path: "#Skills",
    for: "radio-3",
  },
  {
    name: "Contact Me",
    path: "#ContactMe",
    for: "radio-4",
  },
  {
    name: "Newsletter",
    path: "#Newsletter",
    for: "radio-5",
  },
  {
    name: "Education",
    path: "#Education",
    for: "radio-6",
  },
  {
    name: "Certifications",
    path: "#Certifications",
    for: "radio-7",
  },
  {
    name: "Blogs",
    path: "Blogs",
    for: "radio-8",
  },
];

export default function Navebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("About Me");

  const webUrl = window.origin


  //   header aimation----------------
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 400;

  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldShowShadow(currentScrollTop > 2);

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  const shadowStyle = shouldShowShadow ? "" : "";
  const hiddenStyle = shouldHideHeader ? "hidden" : "";
  //   header aimation----------------

  const scope = useMenuAnimation(isOpen);

  return (
    <>
      {/* <header className={`header ${shadowStyle} ${hiddenStyle}`}> */}
      <nav className={`large-header-main-div ${shadowStyle} ${hiddenStyle}`}>
        <div className="large-screen-header-logo">
          <a href={webUrl}>
            <img alt="header-logo" src="/images/logo/Beige Ivory Minimalist Typography Logo (6).png" />
          </a>
        </div>
        <div className="large-header-main-div-items">
          {headerList.map((eachHeader) => (
            <a
              className={activeTab === eachHeader.name && "header-active-tab"}
              onClick={() => setActiveTab(eachHeader.name)}
              href={`${webUrl}/${eachHeader.path}`}
            >
              {eachHeader.name}
            </a>
          ))}
        </div>
      </nav>
      {/* <div className="header-container">
        <div className="header-new-tabs"> */}
      {/* <input type="radio" id="radio-1" name="tabs" checked="" />
          <a href="#About">
          <label className="tab" for="radio-1">
            About Me
          </label>
          </a> */}
      {/* {headerList.map((eachHeader) => (
            <>
              <input type="radio" id={eachHeader.for} name="tabs" />
              <label className="tab" for={eachHeader.for}>
                <a href={`#${eachHeader.path}`}>{eachHeader.name}</a>
              </label>
            </>
          ))}
          <span className="glider"></span>
        </div>
      </div> */}

      <div className="mobile-main-nav-div" ref={scope}>
        <nav className="mobile-nav-menu">
          <div className="header-close-icon" onClick={() => setIsOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
              <path d="M1.17686 1.17923C0.823505 1.45414 0.625 1.82696 0.625 2.21569C0.625 2.60442 0.823505 2.97723 1.17686 3.25215L10.5069 10.5089L1.17686 17.7656C0.833519 18.042 0.643535 18.4124 0.64783 18.7967C0.652124 19.1811 0.850353 19.5488 1.19982 19.8206C1.54929 20.0924 2.02203 20.2466 2.51624 20.2499C3.01044 20.2533 3.48656 20.1055 3.84205 19.8385L14.5047 11.5453C14.8581 11.2704 15.0566 10.8976 15.0566 10.5089C15.0566 10.1201 14.8581 9.7473 14.5047 9.47239L3.84205 1.17923C3.48859 0.904392 3.00925 0.75 2.50946 0.75C2.00966 0.75 1.53032 0.904392 1.17686 1.17923Z" fill="#5C4A8B" />
            </svg>
          </div>
          <img className="nav-mobile-logo" src="/images/logo/Beige Ivory Minimalist Typography Logo (6).png" />
          <p className="header-mobile-looking-para">Looking for a marketing virtuoso?
            Connect with me, and let's create a symphony of success together 🎻🎉</p>
          <hr className="header-looking-hr-line" />
          {headerList.map((eachHeader) => (
            <a onClick={() => setIsOpen(false)} href={`${webUrl}/${eachHeader.path}`}>
              {eachHeader.name}
            </a>
          ))}
        </nav>
        <MenuToggle toggle={() => setIsOpen(!isOpen)} />
      </div>
      {/* </header> */}
    </>
  );
}
