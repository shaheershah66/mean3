import { createContext, useContext, useState } from "react";

const ShopifySliderContext = createContext();

export const useShopifySlider = () => {
  return useContext(ShopifySliderContext);
};

export const ShopifySliderProvider = ({ children }) => {
  const [isOpenSlider, setIsOpenSlider] = useState({show: false, index: 0});

  return (
    <ShopifySliderContext.Provider value={{ isOpenSlider, setIsOpenSlider }}>
      {children}
    </ShopifySliderContext.Provider>
  );
};
