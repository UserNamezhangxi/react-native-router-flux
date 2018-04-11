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
    TouchableOpacity,
    Dimensions
} from 'react-native';
const {
    width,
    height
}=Dimensions.get('window');
import { Actions } from 'react-native-router-flux';

type Props = {};
export default class testpage1 extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {Actions.test2()}}>
                    <Text style={styles.welcome}>
                        点击我进入第二页
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
        fontSize: 20,
        width:width*0.8,
        textAlign: 'center',
        borderColor:'blue',
        borderRadius:6,
        color:'white',
        backgroundColor:'blue'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
