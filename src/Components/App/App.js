import SearchGifs from '../SearchGifs/SearchGifs'
import GifList from '../GifList/GifList'
import React from "react";
import FavoriteView from "../FavoriteView/FavoriteView";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// BrowserRouter as

function App(props) {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      marginRight:200,
    },
  }));

  const classes = useStyles();


  return (
    <Router>
      <body>
        <AppBar position='static'>
          <Toolbar className='ToolBar'>
            <MenuItem><Link to='/search'>Search</Link></MenuItem>
            <MenuItem><Link to='/favorites'>Favorites</Link></MenuItem>
            <Typography variant="h4" className={classes.title}>
              Gif Search
          </Typography>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path='/search' component={SearchGifs}></Route>
          <Route path='/searchlist' component={GifList}></Route>
          <Route path="/favorites" component={FavoriteView}></Route>
        </Switch>
      </body>
    </Router >
  );
}

export default App;
