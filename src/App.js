import React, { Component } from 'react';
import { GlobalStyles } from './style.js';
import Header from './common/header/index';
import {FontGlobalStyle} from './static/iconfont/iconfont';
import store from './store/index';
import Login from './pages/login';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/home/index';
import Detail from './pages/detail/loadable';
import Write from './pages/writer/index';
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <GlobalStyles />
                <FontGlobalStyle/>

                <BrowserRouter>
                    <div>
                      <Header/>
                      <Route path='/login' exact component={Login}></Route>
                      <Route path='/' exact component={Home}></Route>
                      <Route path='/write' component={Write}/>
                      <Route path='/detail/:id' exact component={Detail}></Route>

                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
