import React from "react";
import "./Places.css";
import pic1 from "../../pictures/1.jpg";
import pic2 from "../../pictures/2.jpg";
import pic3 from "../../pictures/3.jpg";
import pic4 from "../../pictures/4.jpg";
import pic5 from "../../pictures/5.jpg";
import pic6 from "../../pictures/6.jpg";
import pic7 from "../../pictures/7.jpg";
import pic8 from "../../pictures/8.jpg";

const Places = () => {
  const places = [
    { name: "Victoria Isalnd", src: pic1 },
    { name: "Lekki", src: pic2 },
    { name: "Ikeja", src: pic3 },
    { name: "Ogba", src: pic4 },
    { name: "Ikoyi", src: pic4 },
    { name: "Ajah", src: pic6 },
    { name: "Magodo", src: pic5 },
    { name: "Surulere", src: pic7 },
    { name: "Obanikoro", src: pic8 },
  ];
  return (
    <div className="places">
      {places.map((place) => {
        return (
          <div className="image-container">
            <img className="place-img" src={place.src} alt="place" />
            <p className="place-name">{place.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Places;
