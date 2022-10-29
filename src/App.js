import React from "react";
import Bookings from "./components/Bookings";
import Heading from "./components/Heading";
import TouristInfoCards from "./components/TouristInfoCards";
import Footer from "./components/Footer";
import SearchResult from "./components/SearchResults";
import fakeBookings from "./data/fakeBookings.json";
import "./App.css";

const hotelInfo = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />

      <SearchResult bookingsDetail={fakeBookings} />

      <Footer hotelInfo={hotelInfo} />
    </div>
  );
};

export default App;
