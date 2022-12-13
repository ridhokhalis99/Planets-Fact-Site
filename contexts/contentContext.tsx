import { useEffect, useState, createContext, useContext } from "react";
import planets from "../tools/planets";
import { currentContentDecider } from "../tools/constants";
import { contentContextType } from "../interfaces/types";

const earth = planets[2];
const defaultValue: contentContextType = {
  currentPlanet: earth,
  setCurrentPlanet: () => {},
  currentContentType: "",
  setCurrentContentType: () => {},
  currentContent: earth.overview,
};

export const ContentContext = createContext(defaultValue);

export const ContentContextProvider = ({ children }: { children: any }) => {
  const [currentPlanet, setCurrentPlanet] = useState(earth);
  const { overview, structure, geology } = currentPlanet;
  const [currentContentType, setCurrentContentType] = useState("Overview");
  const [currentContent, setCurrentContent] = useState(overview);

  const { isInternal, isGeology } = currentContentDecider(currentContentType);

  useEffect(() => {
    if (isInternal) return setCurrentContent(structure);
    if (isGeology) return setCurrentContent(geology);
    return setCurrentContent(overview);
  }, [currentContentType]);

  useEffect(() => {
    setCurrentContentType("Overview");
  }, [currentPlanet]);

  const value = {
    currentPlanet,
    setCurrentPlanet,
    currentContentType,
    setCurrentContentType,
    currentContent,
  };

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
};

export const useContentDecider = () => {
  const {
    currentPlanet,
    setCurrentPlanet,
    currentContentType,
    setCurrentContentType,
    currentContent,
  } = useContext(ContentContext);
  return {
    currentPlanet,
    setCurrentPlanet,
    currentContentType,
    setCurrentContentType,
    currentContent,
  };
};
