import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API + resId);
      const json = await data.json();

      console.log(json);
      setRestaurantInfo(json.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (restaurantInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restaurantInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restaurantInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
      ?.card?.card || {};

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines}</h3>
      <h3>{costForTwoMessage}</h3>
      <ul>
        {itemCards.map(() => (
          <li>
            {item.card.info.name} -{" "}
            {item.card.info.name.price / 100 ||
              item.card.info.name.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
