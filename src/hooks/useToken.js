import { useOutletContext } from "react-router-dom";

const useToken = () => {
  return useOutletContext();
};

export default useToken;
