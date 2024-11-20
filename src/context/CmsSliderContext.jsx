import { createContext, useContext, useState } from "react";

const CmsSliderContext = createContext();

export const useCmsSlider = () => {
  return useContext(CmsSliderContext);
};

export const CmsSliderContextProvider = ({ children }) => {
  const [isOpenSlider, setIsOpenSlider] = useState({show: false, index: 0});

  return (
    <CmsSliderContext.Provider value={{ isOpenSlider, setIsOpenSlider }}>
      {children}
    </CmsSliderContext.Provider>
  );
};
