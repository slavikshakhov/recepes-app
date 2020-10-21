import React from "react";
import RecepeStyles from "./Recepe.module.css";

const Recepe = ({ ingredients, label, image, minutes }) => {
  return (
    <div className={RecepeStyles.container}>
      <div className={RecepeStyles.horizontalCenter}>
        <img className={RecepeStyles.img} src={image} />
      </div>

      <div className={RecepeStyles.text}>
        <h1 className={RecepeStyles.horizontalCenter}>{label}</h1>
        <p className={RecepeStyles.time}>
          Time required:{" "}
          <span className={RecepeStyles.minutes}> {minutes} </span> minutes
        </p>
        <div className={RecepeStyles.divider}></div>
        <div className={RecepeStyles.ingredients}>
          {ingredients.map((ingredient, i) => (
            <div key={i}>
              <p>{ingredient}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recepe;
