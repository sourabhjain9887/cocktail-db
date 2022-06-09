import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  addCocktails,
  loader,
  getAllCocktails,
} from "../reducers/cocktailSlice";

const SearchForm = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  // console.log(data);

  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?";
  const fetchCocktails = async () => {
    dispatch(loader(true));
    try {
      const response = await axios(`${url}s=${inputText}`);
      const { drinks } = await response.data;
      // console.log(drinks);
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        // console.log("drinks", newCocktails);
        dispatch(addCocktails(newCocktails));
      } else {
        const data = [];
        dispatch(addCocktails(data));
      }
      dispatch(loader(false));
    } catch (error) {
      console.log(error);
      dispatch(loader(false));
    }
  };

  useEffect(() => {
    fetchCocktails();
  }, [inputText]);

  const searchCocktail = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search for your favorite cocktail</label>
          <input
            autoFocus
            type="text"
            id="name"
            value={inputText}
            onChange={searchCocktail}
          ></input>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
