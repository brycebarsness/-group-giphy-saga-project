import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import './SearchGifs.css'
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

function SearchGifs() {

    const useStyles = makeStyles((theme) => ({
        button: {
          margin: theme.spacing(1),
        },
      }));
      
    const classes = useStyles();

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
                <TextField label='Enter Gif' value={inputText} type="text" onChange={(event) => setInputText(event.target.value)} />
                <Button variant='contained' color='primary' onClick={() => getGif(inputText)} endIcon={<SendIcon />}>Send</Button>
            </div>
            <p>{inputText}</p>
        </>
    )
}

export default SearchGifs;