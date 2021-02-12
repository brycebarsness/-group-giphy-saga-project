import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './FavoriteView.css'

function FavoriteView() {
  const [category, setCategory] = useState({ category: "" });

  const dispatch = useDispatch();
  const FavReducer = useSelector((store) => store.setFavReducer);
  console.log('favreducer is', FavReducer);

  useEffect(() => {
    dispatch({ type: "FETCH_FAV" });
  }, []);

  function handleChange(event) {
    setCategory({ category: event.target.value });
  }

  function dispatchCategory(event, id) {
    dispatch({
      type: "SET_CATEGORY",
      payload: [category, id],
    });
    setCategory({ category: "" });
  }

  return (
      <div className="gif-gallery-top">
        {FavReducer.map((gif, i) => (
          <div className="gif-gallery" key={i}>
            <img src={gif.url} alt={gif.alt_text} /> <br />
            <div className="FavControls">
              <label>Assign Category:</label>
              <select
                onChange={(event) => handleChange(event)}
                id="category"
                name="category"
              >
                <option value="1">Unassigned</option>
                <option value="2">Funny</option>
                <option value="3">Cohort</option>
                <option value="4">Cartoon</option>
                <option value="5">NSFW</option>
                <option value="6">Meme</option>
              </select>
              <button onClick={(event) => dispatchCategory(event, gif.id)}>
                Save</button>
          <button onClick={() => dispatch({type:'DELETE_FAV', payload: gif.id})}>Unfavorite</button>
          <br />
          <label>Category: {gif.name}</label>
        </div>
        </div>
      ))}
    </div>
  );
}
export default FavoriteView;
