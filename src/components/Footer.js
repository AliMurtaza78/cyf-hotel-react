import React from "react";

const Footer = prop => {
  const HotelInfo = prop.hotelInfo;
  return (
    <footer>
      <ul className="list-group">
        {HotelInfo.map((info, index) => {
          return (
            <li key={index} className="list-group-item bg-secondary">
              {info}
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
