import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';

export default function CardItemMenu(props: any) {
    return (
        <TouchableOpacity style={styles.container} onPress={() => props.onPressItem()}>
            <ImageBackground source={{ uri: props.img }} style={styles.image}>
                <Ionicons name={props.icon} color="#fff" size={50} style={styles.icon} />
            </ImageBackground>
            <View style={styles.label}>
                <Text>{props.label}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 200,
        backgroundColor: '#fff',
        margin: 7,
        borderWidth: 1,
        borderColor: '#c5c5c5',
        borderRadius: 7,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    label: {
        margin: 5,
        alignItems: 'center'
    },
    icon: {
        alignSelf: 'center'
    }
});