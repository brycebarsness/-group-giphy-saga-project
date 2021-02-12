import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import './GifList.css'
function GifList() {

    const gifList = useSelector(store => store.searchedGifList)
    
    const dispatch = useDispatch()

    const useStyles = makeStyles((theme) => ({
        button: {
          margin: theme.spacing(1),
        },
      }));
      
    const classes = useStyles();
      

    return (
        <>
            <div className='giflist'>
                {(gifList[0]) && <div>
                    {gifList[0].map((gif, i) =>
                        <div key={i} className="gifimage">
                            <img src={gif.images.downsized_medium.url} />
                            <Button
                                onClick={() => dispatch({ type: 'ADD_FAV', payload: gif })}
                                style={{
                                    color: "white",
                                    backgroundColor:"#FF00CC",
                                }}
                                variant="contained"
                                className={classes.button}
                                endIcon={<FavoriteRoundedIcon/>}
                            >Favorite</Button>
                        </div>
                    )}
                </div>}
            </div>
        </>
    )
}

export default GifList;