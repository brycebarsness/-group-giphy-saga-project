import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'

function SearchGifs() {

    const [inputText, setInputText] =useState('');
    const dispatch = useDispatch();

    const getGif = (search) => {
        console.log(`incoming search is ${search}`);
        axios.get('/api/gifs', {query: search}).then(response => {
            console.log(response);
            dispatch({type: 'SEARCH_GIF', payload: response.data})
        })
    }

    return(
        <>
        <input value={inputText} type="text" onChange={(event) => setInputText(event.target.value)}></input>
        <button onClick={() => getGif(inputText)}>Search</button>
        <p>{inputText}</p>
        </>
    )
}

export default SearchGifs;