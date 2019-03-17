import React, { Component } from 'react';
import { StyleSheet, Modal, Text, TouchableHighlight, View, Alert } from 'react-native';

export default class LogInModal extends Component {
    constructor() {
        super();
        this.state = {
            modalVisible: false
        }
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible })
    }

    render() {
        return (
            <View style={{ marginTop: 22 }}>
                <Modal
                    animationType='slide'
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed')
                    }}>
                    <View style={{ marginTop: 22 }}>
                        <View>
                            <Text>Hello World</Text>

                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
                <TouchableHighlight onPress={() => { this.setModalVisible(!this.state.modalVisible) }}>
                    <Text style={{ marginTop: 10 }}>Logged In</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#2196F3',
        height: 50,
    }
});
