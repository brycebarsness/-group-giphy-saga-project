import { useSelector } from 'react-redux'
import './GifList.css'
import { useDispatch } from 'react-redux'

function GifList() {

    const gifList = useSelector(store => store.searchedGifList)
    const dispatch = useDispatch()
       

    return (
        <>
            <div className='giflist'>
                {(gifList[0]) && <div>
                    {gifList[0].map((gif, i) =>
                        <div key={i} className="gifimage">
                            <img src={gif.images.downsized_medium.url} />
                            <button onClick={() => dispatch({type: 'ADD_FAV', payload: gif})}>Fav</button>
                        </div>
                    )}
                </div>}
            </div>
        </>
    )
}

export default GifList;