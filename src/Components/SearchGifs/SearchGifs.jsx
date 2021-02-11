import {useState} from 'react'

function SearchGifs() {

    const [inputText, setInputText] =useState('');

    return(
        <>
        <input value={inputText} type="text" onChange={(event) => setInputText(event.target.value)}></input>
        <p>{inputText}</p>
        </>
    )
}

export default SearchGifs;