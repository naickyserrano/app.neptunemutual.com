import React from "react";

import { useFetchCovers } from "@/src/hooks/useFetchCovers";

const initValue = {
  loading: false,
  getInfoByKey: (_key) => ({}),
  covers: [],
};

const CoversContext = React.createContext(initValue);

export function useCovers() {
  const context = React.useContext(CoversContext);
  if (context === undefined) {
    throw new Error("useCovers must be used within a CoversProvider");
  }
  return context;
}

export const CoversProvider = ({ children }) => {
  const { data: covers, loading, getInfoByKey } = useFetchCovers();

  return (
    <CoversContext.Provider value={{ covers, getInfoByKey, loading }}>
      {children}
    </CoversContext.Provider>
  );
};
