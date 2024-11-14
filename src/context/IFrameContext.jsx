import { createContext, useContext, useState } from "react";

const IFrameContext = createContext();

export const useIFrame = () => {
  return useContext(IFrameContext);
};

export const IFrameProvider = ({ children }) => {
  const [iFrame, setIFrame] = useState("");

  return (
    <IFrameContext.Provider value={{ iFrame, setIFrame }}>
      {children}
    </IFrameContext.Provider>
  );
};
