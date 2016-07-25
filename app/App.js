/**
 * Created by xiaobing on 2016/7/21.
 */
import React, { Component } from 'react';
import {render} from 'react-dom';
import MyApp from './MyApp';
import cardsList from './service';



class App extends Component {
  render(){
    return (
        <div>
            <MyApp cards={contacts}/>
        </div>
    );
  }
}


render(<App />, document.getElementById('root'));
