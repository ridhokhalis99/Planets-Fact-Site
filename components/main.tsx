import Image from "next/image";
import Buttons from "./buttons";
import { motion } from "framer-motion";
import { currentContentDecider } from "../tools";
import { useContentDecider } from "../contexts/contentContext";

const Main = () => {
  const { currentPlanet, currentContent, currentContentType } =
    useContentDecider();

  const { isInternal, isGeology } = currentContentDecider(currentContentType);
  const { images } = currentPlanet;

  return (
    <div id="main">
      <motion.div
        key={currentPlanet.name}
        initial={{ opacity: 0, scale: 0.1, rotate: 180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1 }}
        className="image-wrapper"
      >
        <Image
          src={isInternal ? images.internal.src : images.planet.src}
          fill
          alt="planet"
          style={{
            objectFit: "scale-down",
          }}
        />
        {isGeology && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="image-geology"
          >
            <Image
              src={images.geology.src}
              alt="planet"
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </motion.div>
        )}
      </motion.div>
      <div className="content-wrapper">
        <div className="text-wrapper">
          <div className="planet-name" key={currentPlanet.name}>
            {currentPlanet.name.split("").map((char, index) => (
              <motion.h1
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 + index / 10 }}
                className="antonio-medium uppercase m-0"
              >
                {char}
              </motion.h1>
            ))}
          </div>
          <p className="m-0 description">{currentContent.content}</p>
          <p className="m-0">
            Source:{" "}
            <a
              className="external-link"
              href={currentContent.source}
              target="_blank"
            >
              Wikipedia
            </a>
          </p>
        </div>
        <Buttons className="button-wrapper" />
      </div>
    </div>
  );
};

export default Main;
