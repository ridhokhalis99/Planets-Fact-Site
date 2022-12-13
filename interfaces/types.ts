export interface planetType {
  name: string;
  overview: sourceContentType;
  structure: sourceContentType;
  geology: sourceContentType;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: imagesType;
}

export interface sourceContentType {
  content: string;
  source: string;
}

export interface imagesType {
  planet: imageContent;
  internal: imageContent;
  geology: imageContent;
}

export interface imageContent {
  src: string;
  height: number;
  width: number;
}

export interface infoType {
  title: string;
  type: string;
}

export interface contentContextType {
  currentPlanet: planetType;
  setCurrentPlanet: Function;
  currentContentType: string;
  setCurrentContentType: Function;
  currentContent: sourceContentType;
}
