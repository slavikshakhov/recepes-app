import React, { useState, useEffect } from "react";
import RecepesStyles from "./Recepes.module.css";
import Recepe from "../Recepe/Recepe";

const Recepes = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [word, setWord] = useState("pork");

  useEffect(() => {
    getData();
  }, [word]);
  const getData = async () => {
    const recs = await fetch(
      `https://api.edamam.com/search?q=${word}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`
    );
    const res = await recs.json();
    console.log(res);

    // add custom functionallity: minutes necessary to make a dish, here randomly assigned minutes
    const els = res.hits;
    for (const el of els) {
      el.recipe.minutes = 5 + Math.floor(Math.random() * 40);
    }
    setData(res.hits);
  };
  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    setWord(input);
  };
  return (
    <div className={RecepesStyles.container}>
      <div className={RecepesStyles.inputSection}>
        <form onSubmit={onFormSubmit}>
          <input
            className={RecepesStyles.input}
            onChange={onInputChange}
            value={input}
            placeholder="Enter main ingredient"
          />
          <button className={RecepesStyles.searchBtn}>Search</button>
        </form>
      </div>
      <div className={RecepesStyles.contentSection}>
        {data.map((el, i) => (
          <Recepe
            key={i}
            ingredients={el.recipe.ingredientLines}
            label={el.recipe.label}
            image={el.recipe.image}
            minutes={el.recipe.minutes}
          />
        ))}
      </div>
    </div>
  );
};

export default Recepes;
