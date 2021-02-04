import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import NavBar from "./Components/NavBar";
import UsersPage from './Components/UsersPage';
import Album from "./Components/Album";
import PostsPage from "./Components/PostsPage";

// @ts-ignore
import {Scrollbars} from 'rc-custom-scrollbars';

function App() {
    return (

        <BrowserRouter>
            <div className="content">
            <Scrollbars autoHide>

                    <NavBar/>
                    <Route path={'/users'}>
                        <UsersPage/>
                    </Route>
                    <Route path={'/posts'}>
                        <PostsPage/>
                    </Route>
                    <Route path={'/album'}>
                        <Album/>
                    </Route>

            </Scrollbars>
                </div>
        </BrowserRouter>
    );

}

export default App;
