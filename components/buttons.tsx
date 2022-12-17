import { useContentDecider } from "../contexts/contentContext";
import { CONTENT_TYPE } from "../tools/constants";

const Button = ({ text, index }: { text: string; index: number }) => {
  const { currentPlanet, currentContentType, setCurrentContentType } =
    useContentDecider();
  const isActive = currentContentType === text;
  const planetName = currentPlanet.name.toLowerCase();

  return (
    <div
      className={`button ${isActive && `button-active-${planetName}`}`}
      onClick={() => setCurrentContentType(text)}
    >
      <p className="spartan-semibold">0{index + 1}</p>
      <p className="uppercase spartan-semibold" style={{ marginLeft: "32px" }}>
        {text}
      </p>
    </div>
  );
};

const Buttons = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      {CONTENT_TYPE.map(({ type }, index) => (
        <Button key={index} text={type} index={index} />
      ))}
    </div>
  );
};

export default Buttons;
