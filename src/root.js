import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers.js';
import MyComponent from './Component.js';
import MyToolbar from './Components/MyToolbar.js';

const store = createStore(reducer);

export default class Root extends Component {
    render() {
        return (
            <Provider store={store} style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <MyToolbar />
                    <MyComponent style={{ flex: 1 }} />
                </View>
            </Provider>
        );
    }
}
