/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity, Dimensions
} from 'react-native';
const {
    width,
    height
}=Dimensions.get('window');
import { Actions } from 'react-native-router-flux';

type Props = {};
export default class testpage3 extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={Actions.pop}>     {/*注意这两种写法带来的差异*/}
                    <Text style={styles.welcome}>
                        点我返回第二页，我是第二页右上角调出我的
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{Actions.popTo('test1')}}>  {/*注意这两种写法带来的差异*/}
                    <Text style={styles.welcome}>
                        点我直接返回首页
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        marginTop:10,
        fontSize: 20,
        width:width*0.8,
        textAlign: 'center',
        borderColor:'yellow',
        borderRadius:6,
        color:'black',
        backgroundColor:'yellow'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
