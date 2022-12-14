import Image from "next/image";
import Buttons from "./buttons";
import { motion } from "framer-motion";
import { currentContentDecider } from "../tools/constants";
import { useContentDecider } from "../contexts/contentContext";

const Main = () => {
  const { currentPlanet, currentContent, currentContentType } =
    useContentDecider();

  const { isInternal, isGeology } = currentContentDecider(currentContentType);
  const { images } = currentPlanet;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "4fr 3fr",
        gap: "40px",
        maxWidth: "1280px",
        width: "80%",
        margin: "120px auto 92px",
      }}
    >
      <motion.div
        key={currentPlanet.name}
        initial={{ opacity: 0, scale: 0.1, rotate: 180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1 }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
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
            style={{
              width: "40%",
              height: "40%",
              position: "absolute",
              bottom: "-30px",
            }}
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
      <div
        style={{
          height: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            overflow: "hidden",
            display: "flex",
          }}
          key={currentPlanet.name}
        >
          {currentPlanet.name.split("").map((char, index) => (
            <motion.h1
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 + index / 10 }}
              className="antonio-medium uppercase font-60 m-0"
            >
              {char}
            </motion.h1>
          ))}
        </div>
        <p
          className="m-0"
          style={{
            textAlign: "justify",
            lineHeight: "1.5rem",
            fontSize: "18px",
          }}
        >
          {currentContent.content}
        </p>
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
        <Buttons />
      </div>
    </div>
  );
};

export default Main;
