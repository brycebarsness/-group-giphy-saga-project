import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function FavoriteGif({ gif }) {
  const [category, setCategory] = useState(gif.category_id || 0);

  const dispatch = useDispatch();

  function handleChange(event) {
    setCategory(event.target.value);
  }

  function dispatchCategory(event, id) {
    dispatch({
      type: "SET_CATEGORY",
      payload: { category: category, id: id },
    });
  }

  return (
    <div className="gif-gallery">
      <img src={gif.url} alt={gif.alt_text} /> <br />
      <label>Assign Category:</label>
      <select
        value={category}
        onChange={(event) => handleChange(event)}
        id="category"
        name="category"
      >
        <option value="0">Unassigned</option>
        <option value="1">Funny</option>
        <option value="2">Cohort</option>
        <option value="3">Cartoon</option>
        <option value="4">NSFW</option>
        <option value="5">Meme</option>
      </select>
      <button onClick={(event) => dispatchCategory(event, gif.id)}>Save</button>
      <button onClick={() => dispatch({ type: "DELETE_FAV", payload: gif.id })}>
        Unfavorite
      </button>
      <br />
      <label>Category: {category}</label>
    </div>
  );
}

export default FavoriteGif;
