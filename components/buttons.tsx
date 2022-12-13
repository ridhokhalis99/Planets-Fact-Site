import { useContentDecider } from "../contexts/contentContext";

const Button = ({ text, index }: { text: string; index: number }) => {
  const { currentPlanet, currentContentType, setCurrentContentType } =
    useContentDecider();
  const isActive = currentContentType === text;
  const planetName = currentPlanet.name.toLowerCase();

  return (
    <div
      style={{
        display: "flex",
        padding: "18px 24px",
        cursor: "pointer",
      }}
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

const Buttons = () => {
  const buttonTexts = ["Overview", "Internal Structure", "Surface Geology"];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        marginTop: "16px",
      }}
    >
      {buttonTexts.map((text: string, index: number) => (
        <Button key={index} text={text} index={index} />
      ))}
    </div>
  );
};

export default Buttons;
