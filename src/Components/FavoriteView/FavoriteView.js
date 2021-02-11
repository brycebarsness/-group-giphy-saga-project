import React from "react";
import { useDispatch, useSelector } from "react-redux";

function FavoriteView() {
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();
  const FavReducer = useSelector((store) => store.setFavReducer);
  useEffect(() => {
    dispatch({ type: "FETCH_FAV" });
  }, []);

  handleChange = (event) => {
    setCategory(event.target.value);
  };

  dispatchCategory = (event, id) => {
    dispatch({
      type: "SET_CATEGORY",
      payload: [category, id],
    });
    setCategory("");
  };

  return (
    <div className="gif-gallery">
      {FavReducer.map((gif) => (
        <div className="gif-gallery" key={gif.id}>
          <img src={gif.url} alt={gif.alt_text} /> <br />
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
            Save
          </button>
          <br />
          <label>Category: {gif.name}</label>
        </div>
      ))}
    </div>
  );
}
export default FavoriteView;
