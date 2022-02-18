import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";

export default function AutoPlay() {
  const [slides, setSlides] = useState(3);

  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== "undefined") {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 4500,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };

  const cardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const card = (num) => {
    return (
      <div key={num} id={num} className="nominee">
        <Image
          width={500}
          height={500}
          priority={true}
          alt="nominee for vgaawards"
          src={`/nominees/nominee${num}.png`}
        />
      </div>
    );
  };

  return (
    <div className="nominees container">
      <h2>Nominees</h2>
      <Slider {...settings}>{cardArray.map((num) => card(num))}</Slider>
    </div>
  );
}
