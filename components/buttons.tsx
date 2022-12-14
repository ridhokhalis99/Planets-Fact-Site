import { useContentDecider } from "../contexts/contentContext";

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
  const buttonTexts = ["Overview", "Internal Structure", "Surface Geology"];
  return (
    <div className={className}>
      {buttonTexts.map((text: string, index: number) => (
        <Button key={index} text={text} index={index} />
      ))}
    </div>
  );
};

export default Buttons;
