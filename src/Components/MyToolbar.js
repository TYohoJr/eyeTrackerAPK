import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, ToolbarAndroid } from 'react-native';
import { connect } from 'react-redux';

class MyToolbar extends Component {
    constructor() {
        super();
        this.onActionSelected = this.onActionSelected.bind(this);
    }

    onActionSelected(position) {
        switch (position) {
            case 0:
                alert('Logged In');
                break;
            case 1:
                alert('Logged Out');
                break;
            case 2:
                alert('Account Created');
                break;
            default:
                alert('Error: Please try again')
        }
    }

    render() {
        return (
            <ToolbarAndroid
                style={styles.toolbar}
                title='Eye Tracker'
                actions={[
                    {
                        title: 'Log In'
                    },
                    {
                        title: 'Log Out'
                    },
                    {
                        title: 'Create Account'
                    }
                ]}
                onActionSelected={this.onActionSelected} />
        )
    }
}

const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#2196F3',
        height: 50,
    }
});


export default connect((state) => (state))(MyToolbar)