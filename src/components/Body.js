import RestrauntCard from "./Card";
import { useEffect, useState } from "react";
import Shimmer123 from "./Shimmer";

function filterData(searchText, allRestaurants) {
  const filterData = allRestaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase()),
  );
  console.log(filterData);
  return filterData;
}

const Body = () => {
  // useState: To create a state variable, searchText is local state variable
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING",
    );
    const data1 = await data.json();
    // console.log("render");
    // console.log(json+"hello");
    setFilteredRestaurants(
      data1?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [],
    );
    setAllRestaurants(
      data1?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [],
    );
  }
  useEffect(() => {
    getRestaurants();
  }, []);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            // filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state of restaurants list
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div>
        {filteredRestaurants.length != 0 ? (
          <h2>
            <Shimmer123 />
          </h2>
        ) : (
          <h2></h2>
        )}
      </div>
      <div className="restraut-info">
        {filteredRestaurants.length === 0 ? (
          <Shimmer123></Shimmer123>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <RestrauntCard key={restaurant?.info?.id} {...restaurant.info} />
            );
          })
        )}
      </div>
    </>
  );
};
export default Body;
