import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

export default function FooterItem(props: any) {
    return (
        <TouchableOpacity onPress={() => alert('You clicked on here!')} style={styles.container}>
            <Ionicons name={props.icon} size={32} color="#fff" style={styles.icon} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    icon: {
        aspectRatio: 1,
        height: 40,
        alignSelf: 'center',
    }
})