import { useState, useRef } from "react";
import Image from "next/image";
import { useContentDecider } from "../contexts/contentContext";
import planets from "../tools/planets";
import hamburgerIcon from "../assets/icon-hamburger.svg";
import chevronIcon from "../assets/icon-chevron.svg";
import { CONTENT_TYPE } from "../tools/constants";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [planetIndexHovered, setPlanetIndexHovered] = useState<number | null>(
    null
  );
  const [contentTypeHovered, setContentTypeHovered] = useState<string | null>(
    null
  );
  const [isShowNavbarOverlay, setIsShowNavbarOverlay] =
    useState<boolean>(false);
  const {
    currentPlanet,
    setCurrentPlanet,
    currentContentType,
    setCurrentContentType,
  } = useContentDecider();
  const planetName = currentPlanet.name.toLowerCase();

  return (
    <div id="navbar">
      <div className="main-navbar grey-border-b">
        <a
          className="antonio-medium uppercase font-28"
          onClick={() => {
            setCurrentPlanet(planets[2]);
          }}
        >
          The Planets
        </a>
        <div className="nav-link-container">
          {planets.map(({ name }: { name: string }, index: number) => {
            const isPlanetActive = name === currentPlanet.name;
            const isHovered = index === planetIndexHovered;
            const ref: any = useRef();
            const borderWidth = ref?.current?.clientWidth;

            return (
              <div
                style={{
                  display: "flex",
                  position: "relative",
                }}
              >
                <a
                  key={index}
                  className={`spartan-semibold uppercase tracking-wide nav-link ${
                    (isHovered || isPlanetActive) && "nav-link-active"
                  }`}
                  ref={ref}
                  onClick={() => {
                    setCurrentPlanet(planets[index]);
                  }}
                  onMouseEnter={() => setPlanetIndexHovered(index)}
                  onMouseLeave={() => setPlanetIndexHovered(null)}
                >
                  {name}
                </a>
                <div
                  style={{
                    width: borderWidth + 20,
                  }}
                  className={`nav-link-border ${
                    isPlanetActive && `nav-link-active-${planetName}`
                  }`}
                />
              </div>
            );
          })}
        </div>
        <div
          className="hamburger-menu"
          onClick={() => setIsShowNavbarOverlay((prev) => !prev)}
        >
          <Image
            src={hamburgerIcon.src}
            alt="hamburger menu"
            width={hamburgerIcon.width}
            height={hamburgerIcon.height}
          />
        </div>
      </div>
      <div className="content-navigator grey-border-b">
        {CONTENT_TYPE.map(({ type, nav }, index) => {
          const isCurrentType = type === currentContentType;
          const isHovered = type === contentTypeHovered;
          const ref: any = useRef();
          const borderWidth = ref?.current?.clientWidth;

          return (
            <div
              style={{
                display: "flex",
                position: "relative",
              }}
            >
              <a
                key={index}
                className={`spartan-semibold font-12 uppercase tracking-wider nav-link ${
                  (isCurrentType || isHovered) && "nav-link-active"
                }`}
                onClick={() => {
                  setCurrentContentType(type);
                }}
                ref={ref}
                onMouseEnter={() => setContentTypeHovered(type)}
                onMouseLeave={() => setContentTypeHovered(null)}
              >
                {nav}
              </a>
              <div
                style={{
                  width: borderWidth + 20,
                }}
                className={`nav-link-border ${
                  isCurrentType && `nav-link-active-${planetName}`
                }`}
              />
            </div>
          );
        })}
      </div>
      <AnimatePresence>
        {isShowNavbarOverlay && (
          <motion.div
            className="navbar-overlay"
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{ height: "125%", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {planets.map(({ name }: { name: string }, index: number) => {
              const planetName = name.toLowerCase();
              return (
                <motion.div
                  key={index}
                  onClick={() => {
                    setCurrentPlanet(planets[index]);
                    setIsShowNavbarOverlay(false);
                  }}
                  className="nav-link-dropdown grey-border-b"
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "24px",
                      alignItems: "center",
                    }}
                  >
                    <div className={`circle-${planetName}`} />
                    <a className="uppercase spartan-semibold">{name}</a>
                  </div>
                  <div>
                    <Image
                      src={chevronIcon.src}
                      alt="chevron button"
                      width={chevronIcon.width}
                      height={chevronIcon.height}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
