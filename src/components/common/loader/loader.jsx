import { PropagateLoader } from "react-spinners";
import { PreloaderWrapper } from "./loader.style";

const Loader = ({ expanded }) => {
  return (
    <PreloaderWrapper expanded={expanded}>
      <PropagateLoader size={15} color="#0156a7;" />
    </PreloaderWrapper>
  );
};

export default Loader;
