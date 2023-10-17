import { createContext, useState } from "react";

export const FavContext = createContext({
  ids: [],
  addFav: (id) => {},
  removeFav: (id) => {},
});

const FavContextProvider = ({ children }) => {
  const [favMealId, setFavMealIds] = useState([]);

  const addFavHandler = (id) => {
    setFavMealIds((currFavMealIds) => {
      return [...currFavMealIds, id];
    });
  };

  const removeFavHandler = (id) => {
    setFavMealIds((currFavMealIds) => {
      return currFavMealIds.filter((mealId) => mealId !== id);
    });
  };

  const value = {
    ids: favMealId,
    addFav: addFavHandler,
    removeFav: removeFavHandler,
  };

  return <FavContext.Provider value={value}>{children}</FavContext.Provider>;
};

export default FavContextProvider;
