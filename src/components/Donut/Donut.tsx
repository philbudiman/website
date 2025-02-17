import React, { useRef, useEffect, useState } from 'react';

const Donut: React.FC = () => {
  const preTagRef = useRef<HTMLPreElement | null>(null);
  const [tmr1, setTmr1] = useState<number | undefined>(undefined);

  let A = 1, B = 1;

  const asciiFrame = () => {
    const b: string[] = Array(1760).fill(" ");
    const z: number[] = Array(1760).fill(0);

    A += 0.07;
    B += 0.03;

    const cA = Math.cos(A), sA = Math.sin(A),
      cB = Math.cos(B), sB = Math.sin(B);

    for (let k = 79; k < 1760; k += 80) {
      b[k] = "\n";
    }    
    
    for (let j = 0; j < 6.28; j += 0.07) {  // theta
      const ct = Math.cos(j), st = Math.sin(j);
      for (let i = 0; i < 6.28; i += 0.02) {  // phi
        const sp = Math.sin(i), cp = Math.cos(i);
        const h = ct + 2;  // R1 + R2*cos(theta)
        const D = 1 / (sp * h * sA + st * cA + 5);  // 1/z
        const t = sp * h * cA - st * sA;  // factor for x' and y'
        const x = Math.floor(40 + 30 * D * (cp * h * cB - t * sB));
        const y = Math.floor(12 + 15 * D * (cp * h * sB + t * cB));
        const o = x + 80 * y;
        const N = Math.floor(8 * ((st * sA - sp * ct * cA) * cB - sp * ct * sA - st * cA - cp * ct * sB));

        if (y < 22 && y >= 0 && x >= 0 && x < 79 && D > z[o]) {
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
      const interval = setInterval(asciiFrame, 65);
      setTmr1(interval);
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
  });

  return (
    <div>
      <pre ref={preTagRef}></pre>
    </div>
  );
};

export default Donut;
