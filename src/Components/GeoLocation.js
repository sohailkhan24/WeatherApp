import React, { useState } from "react";

const GeoLocation = () => {
  const [details, setDetails] = useState(null);

  const getUserGeolocationDetails = () => {
    fetch(
      "https://geolocation-db.com/json/ef6c41a0-9d3c-11eb-8f3b-e1f5536499e7"
    )
      .then((response) => response.json())
      .then((data) => setDetails(data));
  };

  return (
    <>
      <div className="row">
        <div className="col text-center">
          <p className="mt-3">
            <button
              className="btn btn-primary"
              onClick={getUserGeolocationDetails}
            >
              Get Today's Weather
            </button>

            <div className="row justify-content-center mt-3">
              <div className="col-lg-6 text-center text-dark">
                {details && (
                  <ul className="list-group">
                    <li className="list-group-item">
                      Location : {`${details.city}`}
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default GeoLocation;
