import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Footer() {
    return (
        <View style={styles.container}>
            <Text>This is the footer component!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});