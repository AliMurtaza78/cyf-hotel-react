import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const search = searchVal => {
    console.info("TO DO!", searchVal);

    const filterBookings = bookings.filter(
      e => searchVal === e.firstName || searchVal === e.surname
    );

    setBookings(filterBookings);
  };

  useEffect(() => {
    setLoading(true);
    fetch("https://cyf-react.glitch.me/delayed")
      .then(res => {
        if (!res.ok) {
          throw new Error("Some bad thing happend");
        }
        return res.json();
      })
      .then(
        data => {
          setBookings(data);
          setLoading(false);
        },
        error => {
          setError(error.toString());
          setLoading(false);
        }
      );
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {loading ? (
          <p className="loadingImg">
            <img
              src="https://blog.teamtreehouse.com/wp-content/uploads/2015/05/InternetSlowdown_Day.gif"
              height={100}
              width="100px"
            />
          </p>
        ) : error != "" ? (
          <p>{error}</p>
        ) : (
          <SearchResults results={bookings} />
        )}
      </div>
    </div>
  );
};

export default Bookings;
