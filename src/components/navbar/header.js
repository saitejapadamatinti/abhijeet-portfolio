import "./styles.css";
import React, { useState, useEffect, history } from "react";
import { useAnimate, stagger } from "framer-motion";
import { MenuToggle } from "./menuToggle";
import { Link } from "react-router-dom";
import useDocumentScrollThrottled from './useDocumentScrollThrottled';

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            "nav",
            { transform: "translateX(30%)" },
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

export default function Navebar() {


  const [isOpen, setIsOpen] = useState(false);


//   header aimation----------------
const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 400;

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldShowShadow(currentScrollTop > 2);

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  const shadowStyle = shouldShowShadow ? 'shadow' : '';
  const hiddenStyle = shouldHideHeader ? 'hidden' : '';
//   header aimation----------------

  const scope = useMenuAnimation(isOpen);

  const headerList = [
    {
      name: "About Me",
      path: "AboutMe",
    },
    {
      name: "Professional Experience",
      path: "ProfessionalExperience",
    },
    {
      name: "Skills",
      path: "Skills",
    },
    {
      name: "Contact Me",
      path: "ContactMe",
    },
    {
      name: "Newsletter",
      path: "Newsletter",
    },
    {
      name: "Education",
      path: "Education",
    },
    {
      name: "Certifications",
      path: "Certifications",
    },
    {
      name: "Blogs",
      path: "Blogs",
    },
  ];

  return (
    <>
     {/* <header className={`header ${shadowStyle} ${hiddenStyle}`}> */}
      <nav className={`large-header-main-div ${shadowStyle} ${hiddenStyle}`}>
        <div>
          <img alt="header-logo" src="/images/header-logo.png" />
        </div>
        <div className="large-header-main-div-items">
          {headerList.map((eachHeader) => (
            <a href={`#${eachHeader.path}`}>{eachHeader.name}</a>
          ))}
        </div>
      </nav>
      <div className="mobile-main-nav-div" ref={scope}>
        <nav className="mobile-nav-menu">
          {headerList.map((eachHeader) => (
            <a onClick={() => setIsOpen(false)} href={`#${eachHeader.path}`}>
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