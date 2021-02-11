import { useSelector } from 'react-redux'
import './GifList.css'

function GifList() {

    const gifList = useSelector(store => store.searchedGifList)

    return (
        <>
            <div>
                {(gifList[0]) && <div>
                    {gifList[0].map((gif, i) =>
                        <div key={i} className="gifimage">
                            <img src={gif.images.downsized_medium.url} />
                            <button>Fav</button>
                        </div>
                    )}
                </div>}
            </div>
        </>
    )
}

export default GifList;