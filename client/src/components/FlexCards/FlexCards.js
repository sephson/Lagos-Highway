import React from "react";
import "./FlexCards.css";
import pic from "../../pictures/1.jpg";

const FlexCards = () => {
  const flexes = [
    {
      flexArt: pic,
      flexName: "Revolusion Bistro",
      flexLocation: "Awolowo Road",
      price: "#2000-#3000",
      reviews: "38 reviews",
      rating: "4.9/5",
    },
  ];
  return (
    <div className="flexcards">
      <section className="flex-top">
        <div class="left">
          <h2 className="popular">Popular Trends</h2>
          <p>Where people go these days</p>
        </div>
        <p className="see">see all</p>
      </section>

      <div className="flex">
        {flexes.map((flex) => {
          return (
            <div className="flex-container">
              <img className="flexart" src={flex.flexArt} alt="flex-location" />
              <section className="section">
                <h2>{flex.flexName}</h2>
                <div>{flex.rating}</div>
              </section>
              <section className="section">
                <p>{flex.flexLocation}</p>
                <p>{flex.reviews}</p>
              </section>
              <p>{flex.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FlexCards;
