import "./Signature.css";
import { useTheme } from "../Theme/useTheme";
import { useState } from "react";

const Signature = () => {
  const { darkMode } = useTheme();
  const [animationKey, setAnimationKey] = useState(0); // This will be used to reset the animation
  const [showButton, setShowButton] = useState(false); // Track if the button should be shown

  const restartAnimation = () => {
    setAnimationKey(prevKey => prevKey + 1); // Change the key to trigger reflow and restart the animation
    setShowButton(false); // Hide the button when restarting the animation
  };

  const handleAnimationEnd = () => {
    setShowButton(true); // Show the button once the animation completes
  };

  return (
    <div id="svg_window">
      <svg
        key={animationKey} // This triggers a re-render and resets the animation
        width="210mm"
        height="148mm"
        version="1.1"
        viewBox="0 0 210 148"
        xmlns="http://www.w3.org/2000/svg"
        onAnimationEnd={handleAnimationEnd} // Trigger when animation completes
      >
        <defs>
          <clipPath id="clipPath886">
            <text
              x="98.999992"
              y="172.37476"
              fill={darkMode ? "#000" : "#fff"}
              fontFamily="sans-serif"
              fontSize="210.07px"
              strokeWidth="5.2518"
              line-height="1.25"
            >
              <tspan
                x="98.999992"
                y="172.37476"
                fontFamily="Lumen"
                strokeWidth="5.2518"
              >
                phil
              </tspan>
            </text>
          </clipPath>
        </defs>
        <path
          transform="matrix(.66094 0 0 .66094 -58.554 -19.741)"
          d="m128.6 108.19v155.81l-70.082-81.649 30.619-14.629 17.01 0.68041 6.4639-2.7216 7.1443-7.8247 6.8041-17.01 6.1237-12.247 8.8454-7.8248 9.5258-4.4227 10.887 0.34021 8.165 2.0412 7.4845 6.4639 3.7423 8.5052 1.0206 10.887-2.3814 10.206-6.1237 9.1856-7.4845 4.4227-27.557-2.7216 38.103 3.0619 11.907-0.68042 9.1856-1.3608 5.1031-4.0825 6.1237-9.5258 9.1856-19.052 6.4639-19.732 6.1237-21.433 3.0618-16.67 1.701-19.052-2.0412-11.907-4.4227-7.8247-5.7835-2.0412-5.1031 3.7423-5.4433 6.8041-2.7216 10.546-0.34021 13.608 1.0206 21.773 3.0619 29.598 3.0618 47.629 9.1856-48.99 9.1856-4.0825 7.8247-1.0206 5.4433 1.701 6.8041 2.3814 3.4021 6.8041 1.3608 10.206v12.928l0.68041 11.227 5.1031 5.7835 8.5052 2.0412h8.1649l8.8454-1.3608 6.8041-2.3814 5.1031-6.8041 2.7217-5.4433 3.0619-13.268-0.68043-27.897 4.7629-17.351-8.165 1.0206 6.4639 6.8041 0.6804 50.01 3.4021 8.5052 5.4433 4.4227 7.1443 3.0618 8.8454 0.68041h9.5258l8.165-5.4433 6.1237-8.5052 10.546-28.918 6.8041-24.835 4.0825-26.876-1.3608-20.412-6.1237-12.928-6.1237-4.7629-6.1237 1.3608-6.8041 8.8454-3.4021 15.649v15.309l2.0412 19.732 3.4021 18.711 5.1031 18.031 7.1443 20.072 8.1649 9.5258 6.8041 4.7629 12.247 0.68041"
          clipPath="url(#clipPath886)"
          fill="none"
          stroke={darkMode ? "#000" : "#fff"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="8.365"
        />
      </svg>
      {showButton && (
        <button onClick={restartAnimation} className="fade-in restart-button">
          restart?
        </button>
      )}
    </div>
  );
};

export default Signature;
