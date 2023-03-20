import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const InfoBox = () => {
  const [hiddenClass, setHiddenClass] = useState("");

  return (
    <section
      className={`absolute bottom-1 right-1 bg-white/80 text-center text-xs md:text-base w-56 md:w-80 z-10 p-3 md:p-6 rounded-lg shadow-md ${hiddenClass}`}
    >
      <AiOutlineClose
        onClick={() => setHiddenClass("hidden")}
        className="cursor-pointer"
      />
      <div>
        <h1 className="font-bold">WaveCheck - Interactive Map</h1>
        <p>
          To use it simply click on the water areas and the maximum wave height
          for that location will be displayed.
        </p>
      </div>
    </section>
  );
};

export default InfoBox;
