import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "../data/fakeBookings.json";
import CustomerProfile from "./CustomerProfile";

const Bookings = () => {
  const [bookings, setBooking] = useState([]);
  const search = searchVal => {
    console.info("TO DO!", searchVal);

    bookings.filter(e => {
      if (searchVal === e.firstName) {
        return e.firstName;
      } else if (searchVal === e.surname) {
        return e.surname;
      } else {
        return bookings;
      }
    });
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => response.json())
      .then(data => setBooking(data));
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
        {/* <CustomerProfile /> */}
      </div>
    </div>
  );
};

export default Bookings;
