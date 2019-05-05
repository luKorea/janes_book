import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { GlobalStyled } from './styles';
import { IconFontStyle } from './statics/iconfont/iconfont';
import store from './store';
import { BrowserRouter,Route } from 'react-router-dom';
import Home from './page/home';
import Details from './page/details/loadable';
import Login from './page/login';
import Writer from './page/writer';

import Header from './commons/Header';
class App extends Component {
  render() {
    return (
        <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <GlobalStyled />
                        <IconFontStyle />
                        {/* 头部导航 */}
                        <Header/>
                        <Route exact path='/login' component={Login}></Route>
                        <Route exact path='/writer' component={Writer}/>
                        <Route exact path='/' component={Home}></Route>
                        <Route exact path='/detail:id' component={Details}></Route>
                    </div>
                </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
