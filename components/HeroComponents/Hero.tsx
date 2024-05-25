import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "../MagicButton";
import { TextGenerateEffect } from "../atoms/TextGenerateEffect";
import Spotlights from "./BgSpotlight";
import BgSquares from "./BgSquares";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/* Background Effects/Styles */}
      <Spotlights />
      <BgSquares />

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Majd, a full stack Developer.
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
