import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useSelector } from "react-redux";
import { getLoader, getAllCocktails } from "../reducers/cocktailSlice";

const CocktailList = () => {
  const loading = useSelector(getLoader);
  const cocktails = useSelector(getAllCocktails);
  // console.log(loading);
  // console.log("fetched data", cocktails);
  // console.log("length", cocktails.length);

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    );
  }
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
