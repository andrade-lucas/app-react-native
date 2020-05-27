import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Footer from '../components/Footer';

export default class MainScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Hello, Main Screeen</Text>
                <Footer />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})