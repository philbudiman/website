import React, { useRef, useEffect, useState } from 'react';

interface DonutProps {
  width?: number;  // Width of the donut
  interval?: number; // Interval to set animation speed
  heightOverride?: number; // Height override of the donut (if no override is provided, height is 1/2 of width)
}

interface DonutData {
  width: number;
  height: number;
  interval: number;
}

const donutDefaults = {
  height: 35,
  width: 80,
  interval: 65
}

const getDimensions = (donutProps: DonutProps): DonutData => {
  const width = donutProps.width ? donutProps.width : donutDefaults.width;
  return {
    width: width,
    height: donutProps.heightOverride ? donutProps.heightOverride : width / 2,
    interval: donutProps.interval ? donutProps.interval : donutDefaults.interval,
  };
};

const Donut: React.FC<DonutProps> = (donutProps: DonutProps) => {
  const { height, width, interval } = getDimensions(donutProps);
  
  const preTagRef = useRef<HTMLPreElement | null>(null);
  const [tmr1, setTmr1] = useState<number | undefined>(undefined);

  let A = 1, B = 1;

  const asciiFrame = () => {
    const b: string[] = Array(width * height).fill(" ");
    const z: number[] = Array(width * height).fill(0);

    A += 0.07;
    B += 0.03;

    const cA = Math.cos(A), sA = Math.sin(A),
      cB = Math.cos(B), sB = Math.sin(B);

    // Set up the newline at the end of each row
    for (let k = width - 1; k < width * height; k += width) {
      b[k] = "\n";
    }

    // Loop for generating the 3D effect
    for (let j = 0; j < 6.28; j += 0.07) {  // theta
      const ct = Math.cos(j), st = Math.sin(j);
      for (let i = 0; i < 6.28; i += 0.02) {  // phi
        const sp = Math.sin(i), cp = Math.cos(i);
        const h = ct + 2;  // R1 + R2*cos(theta)
        const D = 1 / (sp * h * sA + st * cA + 5);  // 1/z
        const t = sp * h * cA - st * sA;  // factor for x' and y'
        const x = Math.floor(width / 2 + (width / 2) * D * (cp * h * cB - t * sB));
        const y = Math.floor(height / 2 + (height / 2) * D * (cp * h * sB + t * cB));
        const o = x + width * y;
        const N = Math.floor(8 * ((st * sA - sp * ct * cA) * cB - sp * ct * sA - st * cA - cp * ct * sB));

        if (y < height && y >= 0 && x >= 0 && x < width && D > z[o]) {
          z[o] = D;
          b[o] = ".,-~:;=!*#$@"[N > 0 ? N : 0];
        }
      }
    }

    if (preTagRef.current) {
      preTagRef.current.innerHTML = b.join('');
    }
  };

  const startAnimation = () => {
    if (tmr1 === undefined) {
      const intervalId = setInterval(asciiFrame, interval);
      setTmr1(intervalId);
    }
  };

  const stopAnimation = () => {
    if (tmr1) {
      clearInterval(tmr1);
      setTmr1(undefined);
    }
  };

  useEffect(() => {
    startAnimation();
    return stopAnimation;
  }, [interval]); // Add interval as a dependency to restart the animation with a new interval if it changes.

  return (
    <div>
      <pre ref={preTagRef}></pre>
    </div>
  );
};

export default Donut;
