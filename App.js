/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Image,
  TouchableOpacity
} from 'react-native';
import { Router, Scene,Actions } from 'react-native-router-flux';
import test1 from './testpage1'
import test2 from './testpage2'
import test3 from './testpage3'


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <Router>
            <Scene key="root">
                <Scene key="test1" component={test1} title="首页" initial={true}  />
                <Scene key="test2" component={test2} title="第二页标题"
                  renderRightButton={this._renderRightButton}
                />
                <Scene key="test3" component={test3} title="第三页标题"  />
            </Scene>
        </Router>
    );
  }

  _renderRightButton(){
    return (
        <TouchableOpacity onPress={Actions.test3}>
          <Image source={{uri:'setting'}} style={{width:20,height:20,marginRight:16}} />
        </TouchableOpacity>
    )
  }
}

