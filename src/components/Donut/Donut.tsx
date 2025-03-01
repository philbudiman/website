import React, { useRef, useEffect, useCallback } from "react";

interface DonutProps {
  width?: number;
  interval?: number;
  heightOverride?: number;
}

const donutDefaults = {
  height: 35,
  width: 80,
  interval: 65,
};

const getDimensions = (donutProps: DonutProps) => {
  const width = donutProps.width || donutDefaults.width;
  return {
    width,
    height: donutProps.heightOverride || Math.floor(width / 2),
    interval: donutProps.interval || donutDefaults.interval,
  };
};

// Ported from https://www.a1k0n.net/2011/07/20/donut-math.html
// and its optimized follow-up: https://www.a1k0n.net/2021/01/13/optimizing-donut.html
const Donut: React.FC<DonutProps> = (donutProps) => {
  const { height, width, interval } = getDimensions(donutProps);
  const preTagRef = useRef<HTMLPreElement | null>(null);

  const A = useRef(1);
  const B = useRef(1);

  // Buffers for drawing
  const b = useRef(new Uint8Array((width + 1) * height).fill(32)); // Space character
  const z = useRef(new Float32Array(width * height).fill(0));

  const asciiFrame = useCallback(() => {
    const buf = b.current;
    const depth = z.current;
    buf.fill(32); // Reset text buffer
    depth.fill(0); // Reset depth buffer

    A.current += 0.07;
    B.current += 0.03;

    const cA = Math.cos(A.current), sA = Math.sin(A.current);
    const cB = Math.cos(B.current), sB = Math.sin(B.current);

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

        if (y < height && y >= 0 && x >= 0 && x < width && D > depth[o]) {
          depth[o] = D;
          buf[o + y] = ".,-~:;=!*#$@"[N > 0 ? N : 0].charCodeAt(0);
        }
      }
    }

    // Add newlines at the correct positions
    for (let row = 0; row < height; row++) {
      buf[(row + 1) * width + row] = 10; // ASCII for newline `\n`
    }

    if (preTagRef.current) {
      preTagRef.current.textContent = String.fromCharCode(...buf);
    }
  }, [height, width]);

  useEffect(() => {
    const intervalId = setInterval(asciiFrame, interval);
    return () => clearInterval(intervalId);
  }, [asciiFrame, interval]);

  return <pre ref={preTagRef}></pre>;
};

export default Donut;
