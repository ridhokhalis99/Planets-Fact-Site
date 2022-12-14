import { useState, useRef } from "react";
import { useContentDecider } from "../contexts/contentContext";
import planets from "../tools/planets";

const Navbar = () => {
  const [indexHovered, setIndexHovered] = useState<any>(null);
  const { currentPlanet, setCurrentPlanet } = useContentDecider();
  return (
    <div id="navbar" className="grey-border-b">
      <a
        className="antonio-medium uppercase font-28"
        onClick={() => {
          setCurrentPlanet(planets[2]);
        }}
      >
        The Planets
      </a>
      <div>
        {planets.map(({ name }: { name: string }, index: number) => {
          const isPlanetActive = name === currentPlanet.name;
          const isHovered = index === indexHovered;
          const ref: any = useRef();
          const borderWidth = ref?.current?.clientWidth;
          const planetName = currentPlanet.name.toLowerCase();
          return (
            <div
              style={{
                position: "relative",
              }}
            >
              <a
                key={index}
                className={`spartan-semibold uppercase font-14 tracking-wide nav-link ${
                  (isHovered || isPlanetActive) && "nav-link-active"
                }`}
                ref={ref}
                onClick={() => {
                  setCurrentPlanet(planets[index]);
                }}
                onMouseEnter={() => setIndexHovered(index)}
                onMouseLeave={() => setIndexHovered(null)}
              >
                {name}
              </a>
              <div
                style={{
                  width: borderWidth,
                }}
                className={`nav-link-border ${
                  isPlanetActive && `nav-link-active-${planetName}`
                }`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
