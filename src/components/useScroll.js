import { useEffect } from "react";
import { useInView } from "react-intersection-observer"; // npm install react-intersection-observer --save
import { useAnimation } from "framer-motion/dist/framer-motion";

export const useScroll = (thresh = 0.4) => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: thresh });

  useEffect(() => {
    if (view) {
      controls.start("show");
    }
  }, [controls, view]);

  return [element, controls];
};
