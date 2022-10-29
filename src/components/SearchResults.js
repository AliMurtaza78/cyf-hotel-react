import moment from "moment/moment";
import React from "react";

const SearchResult = prop => {
  const bookingsDetails = prop.bookingsDetail;

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">Nights Stay</th>
        </tr>
      </thead>
      {bookingsDetails.map(e => {
        let myDate = moment(e.checkOutDate).diff(e.checkInDate, "days");

        return (
          <tr>
            <th>{e.id}</th>
            <td>{e.title}</td>
            <td>{e.firstName}</td>
            <td>{e.surname}</td>
            <td>{e.email}</td>
            <td>{e.roomId}</td>
            <td>{e.checkInDate}</td>
            <td>{e.checkOutDate}</td>
            <td>{myDate}</td>
            <td />
          </tr>
        );
      })}
    </table>
  );
};

export default SearchResult;
