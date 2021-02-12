import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import './SearchGifs.css'
import { useHistory } from 'react-router-dom';

function SearchGifs() {

    const [inputText, setInputText] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const getGif = (search) => {
        //dispatch ({type: 'SEARCH_GIFS', payload: search})
        //console.log(`incoming search is ${search}`);
        axios.get(`/api/gifs/${search}`).then(response => {
            //console.log(response);
            dispatch({ type: 'SEARCH_GIF', payload: response.data })
        })
        history.push('/searchlist');
    }

    return (
        <>
            <div className='form'>
                <input value={inputText} type="text" onChange={(event) => setInputText(event.target.value)}></input>
                <button onClick={() => getGif(inputText)}>Search</button>
            </div>
            <p>{inputText}</p>
        </>
    )
}

export default SearchGifs;