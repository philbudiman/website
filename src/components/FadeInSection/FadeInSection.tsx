import { useEffect, useRef } from "react";

const FadeInSection: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.add("appear"); // Add 'appear' class when in view
          observer.disconnect(); // Stop observing once animated
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={`fade-in ${className || ""}`}>{children}</div>;
};

export default FadeInSection;
