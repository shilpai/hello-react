import RestaurantCard from "./RestaurantCard";
// import restaurantList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // Local State Variable
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  // console.log("Body Rendered");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5702448&lng=73.88233509999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      console.log(json);

      setListOfRestaurant(
        // Optional Chaining
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      console.log(err);
    }
  };

  // Conditional Rendering
  // if (listOfRestaurant.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);
              // Filter the restaurant cards & update the UI
              const filteredRestaurantList = listOfRestaurant.filter((res) =>
                res.action.text.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurantList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {filteredRestaurant &&
          filteredRestaurant.map((restaurant) => (
            <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
          ))}
      </div>
    </div>
  );
};

export default Body;
