import Navbar from "../components/navbar";
import Main from "../components/main";
import Informations from "../components/informations";
import { ContentContextProvider } from "../contexts/contentContext";

export default function Home() {
  return (
    <>
      <ContentContextProvider>
        <Navbar />
        <Main />
        <Informations />
      </ContentContextProvider>
    </>
  );
}
