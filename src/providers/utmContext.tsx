"use client";

import { createContext, PropsWithChildren, useState, Dispatch, SetStateAction, useMemo, useContext } from "react";

type UtmContextType = {
  utmParams: Record<string, any>;
  setUtmParams: Dispatch<SetStateAction<Record<string, any>>>;
};

const initUtmContextState: UtmContextType = {
  utmParams: {},
  setUtmParams: () => null,
};

export const UtmContext = createContext<UtmContextType>(initUtmContextState);

export const UtmContextProvider = ({ children }: PropsWithChildren) => {
  const [utmParams, setUtmParams] = useState<Record<string, any>>({});

  const utmContextValue = useMemo(
    () => ({
      utmParams,
      setUtmParams,
    }),
    [utmParams]
  );

  return <UtmContext.Provider value={utmContextValue}>{children}</UtmContext.Provider>;
};

export const useUtmContext = () => useContext(UtmContext);
