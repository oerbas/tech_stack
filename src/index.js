import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import reducers from './reducers';

class Index extends Component {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                </View>
            </Provider>
        )
    }
}

export default Index;