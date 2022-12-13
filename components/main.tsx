import Image from "next/image";
import Buttons from "./buttons";
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
        margin: "120-px auto 92px",
      }}
    >
      <div
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
          <div
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
          </div>
        )}
      </div>
      <div
        style={{
          height: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <h1 className="antonio-medium uppercase font-60 m-0">
          {currentPlanet.name}
        </h1>
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
