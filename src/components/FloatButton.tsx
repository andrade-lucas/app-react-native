import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

export default function FloatButton(props: any) {
    return (
        <TouchableOpacity style={styles.container}>
            <Ionicons name="ios-add" size={60} color="#fff" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: 80,
        position: 'absolute',
        bottom: 0,
        marginBottom: 15,
        marginRight: 15,
        justifyContent: 'flex-end',
        borderColor: '#c5c5c5',
        borderRadius: 50
    }
});