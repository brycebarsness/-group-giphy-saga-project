import { useSelector } from 'react-redux'

function GifList() {

    const gifList = useSelector(store => store.searchedGifList)

    return (
        <>
            <div>
              {(gifList[0]) && <div>{gifList[0].map((gif) => <div><img src={gif.images.downsized_medium.url} /><button>Fav</button></div>)}</div>}
            </div>
        </>
    )
}

export default GifList;