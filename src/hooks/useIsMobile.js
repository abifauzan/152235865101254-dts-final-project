import { useEffect, useState } from "react";
import { sizes } from "../styles/Media";

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < sizes.tab);
  const handleResize = () => {
    const currentSize = window.innerWidth < sizes.tab;
    if (currentSize !== isMobile) {
      setIsMobile(currentSize);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return isMobile;
}
