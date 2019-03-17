import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default class MyComponent extends Component {
    constructor() {
        super();
        this.testButton = this.testButton.bind(this);
    }

    testButton() {
        alert("Test")
    }

    render() {
        return (
            <View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder='Search Places'
                        style={styles.placeInput}
                    ></TextInput>
                    <Button title="Press"
                        style={styles.placeButton}
                        onPress={this.testButton}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // paddingTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    placeInput: {
        width: '70%',
    },
    placeButton: {
        width: '30%',
    }
});
