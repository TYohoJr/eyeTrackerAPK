import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';

class MyComponent extends Component {
    constructor() {
        super();
        this.testButton = this.testButton.bind(this);
        this.changeMessage = this.changeMessage.bind(this);
    }

    testButton() {
        alert(this.props.messageReducer.message)
    }

    changeMessage(e) {
        this.props.dispatch({
            type:'changeMessage',
            message: e
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder='Search Places'
                        style={styles.placeInput}
                        onChangeText={this.changeMessage}
                    ></TextInput>
                    <Button title={this.props.messageReducer.message}
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
        paddingTop: 30,
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


export default connect((state) => (state))(MyComponent)