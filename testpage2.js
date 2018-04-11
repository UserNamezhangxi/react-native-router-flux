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
    Dimensions
} from 'react-native';
const {
    width,
    height
}=Dimensions.get('window');
type Props = {};
export default class testpage2 extends Component<Props> {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    第二页，请点击右上角
                </Text>
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
        borderColor:'green',
        borderRadius:6,
        color:'white',
        backgroundColor:'green'
    },
});
