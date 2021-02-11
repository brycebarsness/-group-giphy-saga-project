import {useState} from 'react'
import {useDispatch} from 'react-redux'
import axios from 'axios'

function SearchGifs() {

    const [inputText, setInputText] =useState('');
    const dispatch = useDispatch();

    const getGif = (search) => {
        axios.get('/api/gifs', {search}).then(response => {
            console.log(response);
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