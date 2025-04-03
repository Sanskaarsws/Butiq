import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export default function AnimatedText(text) {
  const textWrapperRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const textWrapper = textWrapperRef.current;
    if (textWrapper) {
      const text = textWrapper.textContent.split("");
      textWrapper.innerHTML = text
        .map((char) => `<span class='letter'>${char}</span>`)
        .join("");

      controls
        .start((i) => ({
          opacity: [0, 1],
          x: [40, 0],
          transition: {
            delay: i * 0.05,
            duration: 0.5,
            ease: "easeOut",
          },
        }))
        .then(() => {
          controls.start((i) => ({
            opacity: [1],
            x: [0, -30],
            transition: {
              delay: i * 0.05,
              duration: 0.5,
              ease: "easeIn",
            },
          }));
        });
    }
  }, [controls]);

  return (
    <div className="animateText">
      <motion.h1 className=" w-max text-[146px] sm:text-[5vw] lg:text-[5vw] leading-tight font-bold ">
        {Array.from(text.title).map((char, index) => (
          <motion.span
            key={index}
            ref={textWrapperRef}
            className="letter"
            custom={index}
            animate={controls}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}
