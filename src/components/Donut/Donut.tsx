import React, { useRef, useEffect, useState, useCallback } from 'react';

interface DonutProps {
  width?: number;
  interval?: number;
  heightOverride?: number;
}

interface DonutData {
  width: number;
  height: number;
  interval: number;
}

const donutDefaults = {
  height: 35,
  width: 80,
  interval: 65,
};

const getDimensions = (donutProps: DonutProps): DonutData => {
  const width = donutProps.width ? donutProps.width : donutDefaults.width;
  return {
    width: width,
    height: donutProps.heightOverride ? donutProps.heightOverride : width / 2,
    interval: donutProps.interval ? donutProps.interval : donutDefaults.interval,
  };
};


// Ported from https://www.a1k0n.net/2011/07/20/donut-math.html
const Donut: React.FC<DonutProps> = (donutProps: DonutProps) => {
  const { height, width, interval } = getDimensions(donutProps);

  const preTagRef = useRef<HTMLPreElement | null>(null);
  const [tmr1, setTmr1] = useState<number | undefined>(undefined);

  // Use refs to store A and B to preserve values between renders
  const A = useRef(1);
  const B = useRef(1);

  const asciiFrame = useCallback(() => {
    const b: string[] = Array(width * height).fill(" ");
    const z: number[] = Array(width * height).fill(0);

    A.current += 0.07; // Update A using .current
    B.current += 0.03; // Update B using .current

    const cA = Math.cos(A.current), sA = Math.sin(A.current),
      cB = Math.cos(B.current), sB = Math.sin(B.current);

    for (let k = width - 1; k < width * height; k += width) {
      b[k] = "\n";
    }

    for (let j = 0; j < 6.28; j += 0.07) {
      const ct = Math.cos(j), st = Math.sin(j);
      for (let i = 0; i < 6.28; i += 0.02) {
        const sp = Math.sin(i), cp = Math.cos(i);
        const h = ct + 2;
        const D = 1 / (sp * h * sA + st * cA + 5);
        const t = sp * h * cA - st * sA;
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
  }, [height, width]);

  const startAnimation = useCallback(() => {
    if (tmr1 === undefined) {
      const intervalId = setInterval(asciiFrame, interval);
      setTmr1(intervalId);
    }
  }, [tmr1, interval, asciiFrame]);

  const stopAnimation = useCallback(() => {
    if (tmr1) {
      clearInterval(tmr1);
      setTmr1(undefined);
    }
  }, [tmr1]);

  useEffect(() => {
    startAnimation();
    return stopAnimation;
  }, [interval, startAnimation, stopAnimation]);

  return (
    <div>
      <pre ref={preTagRef}></pre>
    </div>
  );
};

export default Donut;
