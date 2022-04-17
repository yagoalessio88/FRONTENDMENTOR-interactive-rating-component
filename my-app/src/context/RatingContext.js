import React, { useContext, useState } from "react";

const RatingContext = React.createContext();

export const RatingProvider = ({ children }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [puntuation, setPuntuation] = useState("none");

  return (
    <RatingContext.Provider
      value={{
        isSubmitted,
        setIsSubmitted,
        setPuntuation,
        puntuation,
      }}
    >
      {children}
    </RatingContext.Provider>
  );
};

export const useRatingContext = () => {
  return useContext(RatingContext);
};
