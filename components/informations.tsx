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
    <div className="grey-border info-box">
      <h3 className="spartan-semibold uppercase text-regent-grey">{title}</h3>
      <h4 className="antonio-medium uppercase">{infoData}</h4>
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
    <div id="informations">
      {informationHeaders.map((info: infoType, index: number) => (
        <InfoBox currentPlanet={currentPlanet} info={info} key={index} />
      ))}
    </div>
  );
};

export default Informations;
