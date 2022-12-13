import { planetType } from "../interfaces/types";
import { infoType } from "../interfaces/types";
import { useContentDecider } from "../contexts/contentContext";

const InfoBox = ({
  currentPlanet,
  info,
}: {
  currentPlanet: planetType;
  info: infoType;
}) => {
  const { title, type } = info;
  const infoData: any = currentPlanet[type as keyof planetType];
  return (
    <div
      style={{
        paddingTop: "24px",
        paddingLeft: "24px",
        paddingBottom: "32px",
      }}
      className="grey-border"
    >
      <h3 className="spartan-semibold uppercase font-14 mb-1 text-regent-grey">
        {title}
      </h3>
      <h4 className="antonio-medium uppercase font-36">{infoData}</h4>
    </div>
  );
};

const Informations = () => {
  const { currentPlanet } = useContentDecider();
  const informationHeaders = [
    { title: "Rotation Time", type: "rotation" },
    { title: "Revolution Time", type: "revolution" },
    { title: "Radius", type: "radius" },
    { title: "Average Temp.", type: "temperature" },
  ];
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "32px",
        maxWidth: "1280px",
        margin: "0px auto 56px",
      }}
    >
      {informationHeaders.map((info: infoType, index: number) => (
        <InfoBox currentPlanet={currentPlanet} info={info} key={index} />
      ))}
    </div>
  );
};

export default Informations;
