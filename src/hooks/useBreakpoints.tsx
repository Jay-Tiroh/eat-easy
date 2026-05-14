import { useEffect, useState } from "react";

type Breakpoints = {
  isSm: boolean;
  isMd: boolean;
  isLg: boolean;
  isXl: boolean;
  is2xl: boolean;
};

const queries = {
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
  "2xl": "(min-width: 1536px)",
};

export function useBreakpoints(): Breakpoints {
  const [breakpoints, setBreakpoints] = useState<Breakpoints>({
    isSm: false,
    isMd: false,
    isLg: false,
    isXl: false,
    is2xl: false,
  });

  useEffect(() => {
    const mqls = {
      sm: window.matchMedia(queries.sm),
      md: window.matchMedia(queries.md),
      lg: window.matchMedia(queries.lg),
      xl: window.matchMedia(queries.xl),
      "2xl": window.matchMedia(queries["2xl"]),
    };

    const update = () => {
      setBreakpoints({
        isSm: mqls.sm.matches,
        isMd: mqls.md.matches,
        isLg: mqls.lg.matches,
        isXl: mqls.xl.matches,
        is2xl: mqls["2xl"].matches,
      });
    };

    update();

    Object.values(mqls).forEach((mql) => {
      mql.addEventListener("change", update);
    });

    return () => {
      Object.values(mqls).forEach((mql) => {
        mql.removeEventListener("change", update);
      });
    };
  }, []);

  return breakpoints;
}
