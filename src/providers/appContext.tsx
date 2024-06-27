"use client";

import { createContext, PropsWithChildren, useState, Dispatch, SetStateAction, useMemo, useContext } from "react";

type AppContextType = {
  isUserSubscribed: boolean;
  setIsUserSubscribed: Dispatch<SetStateAction<boolean>>;
};

const initialAppContextState: AppContextType = {
  isUserSubscribed: false,
  setIsUserSubscribed: () => null,
};

export const AppContext = createContext<AppContextType>(initialAppContextState);

export const AppContextProvider = ({ children }: PropsWithChildren) => {
  const [isUserSubscribed, setIsUserSubscribed] = useState<boolean>(false);

  const appContextValues = useMemo(
    () => ({
      isUserSubscribed,
      setIsUserSubscribed,
    }),
    [isUserSubscribed]
  );

  return <AppContext.Provider value={appContextValues}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
