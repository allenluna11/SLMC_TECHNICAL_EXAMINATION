import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Posts from './components/Posts/Posts';
import Comment from "./components/Comment/Comment";
import Todos from './components/Todos/Todos';
import Album from './components/Album/Album';
import Photos from './components/Photos/Photos';

const App = () => {

    return (
        <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/posts" component={Posts}/>
                    <Route exact path="/comment" component={Comment}/>
                    <Route exact path="/todos" component={Todos}/>
                    <Route exact path="/album" component={Album}/>
                    <Route exact path="/photo" component={Photos}/>
                </Switch>

        </BrowserRouter>
    )
}

export default App
