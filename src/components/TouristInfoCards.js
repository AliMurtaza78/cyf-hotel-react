import React from "react";

const TouristInfoCards = () => {
  return (
    <div id="all-items">
      <div className="card">
        <img
          src="https://media.timeout.com/images/105400989/1024/576/image.jpg"
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">Glasgow</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://peoplemakeglasgow.com" className="btn btn-primary">
            More Info
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://www.flytap.com/-/media/Flytap/destinations/Suggestions/Lead/10Simbolods_de_manchester1920x1036.jpg?h=1036&w=1920&la=en-US&hash=B2E7AD233A4659CCAEEE021A78B13E43FD9A28AF"
          className="card-img-top"
          alt="Manchester"
        />
        <div className="card-body">
          <h5 className="card-title">Manchester</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://visitmanchester.com" className="btn btn-primary">
            More Info
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bG9uZG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">London</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://visitlondon.com " className="btn btn-primary">
            More Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
