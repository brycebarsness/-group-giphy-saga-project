import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoriteGif from "./FavoriteGif";

function FavoriteView() {
  const dispatch = useDispatch();
  const FavReducer = useSelector((store) => store.setFavReducer);
  console.log("favreducer is", FavReducer);

  useEffect(() => {
    dispatch({ type: "FETCH_FAV" });
  }, []);

  return (
    <div className="gif-gallery">
      {FavReducer.map((gif) => (
        <FavoriteGif gif={gif} key={gif.id} />
      ))}
    </div>
  );
}
export default FavoriteView;
