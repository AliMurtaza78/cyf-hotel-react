import React from "react";

const Footer = prop => {
  const HotelInfo = prop.hotelInfo;
  return (
    <footer>
      <ul className="list-group">
        {HotelInfo.map(info => {
          return <li className="list-group-item bg-secondary">{info}</li>;
        })}
      </ul>
    </footer>
  );
};

export default Footer;
