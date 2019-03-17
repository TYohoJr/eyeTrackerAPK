import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import MyComponent from './MyComponent.js';
import MyToolbar from './Components/MyToolbar.js';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class Root extends Component {
    render() {
        return (
                <View>
                    <MyToolbar />
                    <Button title='Test'
                        onPress={() => this.props.navigation.navigate('MyComponent')}
                    />
                    {/* <MyComponent style={{ flex: 1 }} /> */}
                </View>
        );
    }
}

const AppNavigator = createStackNavigator(
    {
        Home: Root,
        MyComponent: MyComponent
    },
    {
        initialRouteName: 'Home'
    }
)

export default createAppContainer(AppNavigator);